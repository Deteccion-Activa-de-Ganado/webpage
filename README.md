# webpage
Repo with DAG website code.

## Palette configuration

The site can load a shared color palette from `palette-config.txt`.

1. Open `palette-config.txt`.
2. Set `active=` to one of the available palette names.
3. Refresh any page (`index.html`, `caracteristicas.html`, `como-funciona.html`, `dashboard.html`).

Important: if you open the HTML directly with `file://`, some browsers block reading `palette-config.txt`.
Run a local server from the project folder, for example:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

You can also create your own palette block using:

```
[palette your-name]
bg-main=#...
primary=#...
secondary=#...
brand=#...
text-primary=#...
text-muted=#...
text-subtle=#...
border-default=#...
surface=#...
cta-hover=#...
```
