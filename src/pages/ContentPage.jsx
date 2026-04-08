import { useEffect } from 'react'

export default function ContentPage({ title, html }) {
  useEffect(() => {
    document.title = title
  }, [title])

  return <main dangerouslySetInnerHTML={{ __html: html }} />
}
