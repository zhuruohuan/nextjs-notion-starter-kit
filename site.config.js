module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '009966ca3382444991d938e8f4c9d4dd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: "390b1c2b-e28c-4e3c-a75d-c81591f003c1",

  // basic site info (required)
  name: '数学课程',
  domain: 'https://www.notion.so/009966ca3382444991d938e8f4c9d4dd',
  author: '朱乐欢',

  // open graph metadata (optional)
  description: 'Example site description',
  socialImageTitle: 'Transitive Bullshit',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  qq: '1107250256',
  

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: "TinyDolphin-Con/tinydolphin.top",

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
