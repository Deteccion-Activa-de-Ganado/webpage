(function () {
  function loadConfigText() {
    return fetch("palette-config.txt", { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Palette config not found");
        }
        return response.text();
      })
      .catch(function () {
        // Some browsers block fetch() from file:// pages. Try XHR as fallback.
        return new Promise(function (resolve, reject) {
          try {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "palette-config.txt", true);
            xhr.onreadystatechange = function () {
              if (xhr.readyState !== 4) {
                return;
              }
              if (xhr.status === 200 || xhr.status === 0) {
                resolve(xhr.responseText);
              } else {
                reject(new Error("XHR failed with status " + xhr.status));
              }
            };
            xhr.onerror = function () {
              reject(new Error("XHR error while loading palette config"));
            };
            xhr.send();
          } catch (err) {
            reject(err);
          }
        });
      });
  }

  function parseConfig(text) {
    var lines = text.split(/\r?\n/);
    var palettes = {};
    var active = "";
    var currentPalette = "";

    for (var i = 0; i < lines.length; i += 1) {
      var raw = lines[i].trim();

      if (!raw || raw.charAt(0) === ";") {
        continue;
      }

      if (raw.indexOf("active=") === 0) {
        active = raw.slice(7).trim();
        continue;
      }

      var section = raw.match(/^\[palette\s+([^\]]+)\]$/i);
      if (section) {
        currentPalette = section[1].trim();
        if (!palettes[currentPalette]) {
          palettes[currentPalette] = {};
        }
        continue;
      }

      var pair = raw.match(/^([a-zA-Z0-9-]+)\s*=\s*(.+)$/);
      if (pair && currentPalette) {
        palettes[currentPalette][pair[1]] = pair[2].trim();
      }
    }

    return { active: active, palettes: palettes };
  }

  function applyPalette(paletteName, palettes) {
    var palette = palettes[paletteName];
    if (!palette) {
      return;
    }

    var root = document.documentElement;
    var keys = Object.keys(palette);
    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      root.style.setProperty("--" + key, palette[key]);
    }
    root.setAttribute("data-palette", paletteName);
  }

  loadConfigText()
    .then(function (text) {
      var parsed = parseConfig(text);
      if (!parsed.active) {
        return;
      }
      applyPalette(parsed.active, parsed.palettes);
    })
    .catch(function (err) {
      // Keep the inline CSS defaults if config loading fails.
      if (window.location.protocol === "file:") {
        console.warn(
          "[DAG] No se pudo leer palette-config.txt desde file://. " +
            "Abrí la web con un servidor local (ej: python3 -m http.server).",
          err
        );
      } else {
        console.warn("[DAG] No se pudo aplicar la paleta desde palette-config.txt", err);
      }
    });
})();
