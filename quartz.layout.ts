import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({  
  sortFn: (a, b) => {  
    // Sort order: folders first, then files by creation date  
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {  
      if (a.isFolder && b.isFolder) {  
        // Sort folders alphabetically  
        return a.displayName.localeCompare(b.displayName, undefined, {  
          numeric: true,  
          sensitivity: "base",  
        })  
      } else {  
        // Both are files - sort by creation date (newest first)  
        const aCreated = a.data?.dates?.created  
        const bCreated = b.data?.dates?.created  
          
        if (aCreated && bCreated) {  
          return bCreated.getTime() - aCreated.getTime()  
        } else if (aCreated && !bCreated) {  
          return -1 // Files with dates come first  
        } else if (!aCreated && bCreated) {  
          return 1  
        } else {  
          // Fallback to alphabetical if no dates  
          return a.displayName.localeCompare(b.displayName, undefined, {  
            numeric: true,  
            sensitivity: "base",  
          })  
        }  
      }  
    }  
  
    // Folders always come before files  
    if (!a.isFolder && b.isFolder) {  
      return 1  
    } else {  
      return -1  
    }  
  },  
})
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
