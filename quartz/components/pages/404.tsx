import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>Whoops. Something broke. My bad. You can <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a> or just enjoy the quiet.</p>
      <div id="gif">
        <img src="/static/404.gif" />
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
