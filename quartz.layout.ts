import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  right: [
    Component.MobileOnly(Component.Explorer()),
  ]
  afterBody: [
    Component.Backlinks(),
    Component.Graph(),
  ],
  footer: Component.Footer({
    links: {
      "🎙": "https://quartz.maxfrequency.net/tags/Podcast",
      "🎬": "https://youtube.com/maxfrequency",
      "🐕": "https://quartz.maxfrequency.net/tags/NaughtyDog",
      "🏆": "https://psnprofiles.com/mudkip143",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    /** Component.Breadcrumbs(), */
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.MobileOnly(Component.Explorer()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
