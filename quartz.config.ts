import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Max Frequency",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.maxfrequency.net",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Poppins",
        body: "Poppins",
        code: "Silkscreen",
      },
      colors: {
        lightMode: {
          light: "#e1dedf", /**page background */ /**bg1 in Obsidian CSS */
          lightgray: "#6c5cb2", /**borders */ /**ui1 */
          gray: "#889EAA", /**graph links, heavier borders */ /**ax3? */
          darkgray: "#242327", /** body text */ /**tx1 */
          dark: "#42474a", /** header text and icons */ /**tx1 */
          secondary: "#6c5cb2", /**link color, current graph node */ /**ax1 */
          tertiary: "#8177c0", /**hover states and visited graph nodes */ /**ax2 */
          /**highlight: "hsla(251,48%,51%,25%)", */ /**internal link background, highlighted text, highlighted lines of code */ /**hl1 */ /**this places a box around links, acting as a bolder callout of them */
          textHighlight: "#fff23688", /** markdown highlighted test background */
        },
        darkMode: {
          light: "#1e1e1e", /**page background */ /**bg1 in Obsidian CSS */
          lightgray: "#463a8d", /**borders */ /**ui1 */
          gray: "#38c6c0", /**graph links, heavier borders */ /**ax3? */
          darkgray: "#d2d4d4", /** body text */ /**tx1 */
          dark: "#ababab", /** header text and icons */ /**tx1 */
          secondary: "#38c6c0", /**link color, current graph node */ /**ax1 */
          tertiary: "#2a9998", /**hover states and visited graph nodes */ /**ax2 */
          /**highlight: "hsla(251,48%,51%,50%)", */ /**internal link background, highlighted text, highlighted lines of code */ /**hl1 */
          textHighlight: "#fff23688", /** markdown highlighted test background */
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
