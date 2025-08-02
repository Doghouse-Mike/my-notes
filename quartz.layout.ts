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
    // Ensure all logic is contained within this function  
    if (a.isFolder && !b.isFolder) return -1  
    if (!a.isFolder && b.isFolder) return 1  
      
    if (a.isFolder && b.isFolder) {  
      return a.displayName.localeCompare(b.displayName, undefined, {  
        numeric: true,  
        sensitivity: "base",  
      })  
    }  
    
    // Access frontmatter data correctly  
    const aCreated = a.data?.frontmatter?.created  
    const bCreated = b.data?.frontmatter?.created  
      
    if (aCreated && bCreated) {  
      return new Date(bCreated).getTime() - new Date(aCreated).getTime()  
    }  
      
    if (aCreated && !bCreated) return -1  
    if (!aCreated && bCreated) return 1  
      
    return a.displayName.localeCompare(b.displayName, undefined, {  
      numeric: true,  
      sensitivity: "base",  
    })  
  },
})
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
// components shared acrpss all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Comments({
    provider: 'giscus',
    options: {
      // from data-repo
      repo: 'Doghouse-Mike/my-notes',
      // from data-repo-id
      repoId: 'R_kgDOOPVAfw',
      // from data-category
      category: 'Announcements', 
      // from data-category-id
      categoryId: 'DIC_kwDOOPVAf84CouAn',
      reactionsEnabled: true,
    }
  }),
  ],  
  footer: Component. Footer ({
  links: {
    GitHub: "https://github.com/jackyzha0/quartz",
  }
}),
]

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
