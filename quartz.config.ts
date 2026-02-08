import { QuartzConfig } from "@quartz/config"
import * as Plugin from "@quartz/plugins"

const config: QuartzConfig = {
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate(),
      Plugin.SyntaxHighlighting(),
      Plugin.TableOfContents(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.ObsidianFlavoredMarkdown(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.ContentPage(),
      Plugin.TagPage(),
      Plugin.FolderPage(),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
