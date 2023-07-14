import { useEffect } from 'react'
import {
  SEO,
  Colors,
  Layout,
  REEL_FADE_DURATION,
  CursorCSS,
} from '../../config'
import kebabize from 'utils/kebabize'

const useConfig = () => {
  useEffect(() => {
    document.title = SEO.title
    document.head.innerHTML += `
        <meta charset='${SEO.meta.charset}'/>
        <meta name='description' content='${SEO.description}'/>
        <meta name='keywords' content='${SEO.meta.keywords}'/>
        <meta name='canonical' content='${SEO.canonical}'/>
        <meta name='author' content='${SEO.meta.author}'/>
        <meta name="theme-color" content="${Colors.accentColor}" />
        <meta property="og:title" content="${SEO.meta.openGraph.title}" />
        <meta property="og:url" content="${SEO.meta.openGraph.url}" />
        <meta property="og:description" content="${SEO.meta.openGraph.description}" />
        <meta property="og:image" content="${SEO.meta.openGraph.image}" />
        `

    const config = { ...Colors, ...Layout, ...CursorCSS }
    Object.keys(config).forEach((key) =>
      document.documentElement.style.setProperty(
        `--${kebabize(key)}`,
        config[key]
      )
    )
    document.documentElement.style.setProperty(
      '--reel-fade-duration',
      `${REEL_FADE_DURATION}ms`
    )
  }, [])
}

export default useConfig
