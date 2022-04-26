import{j as n,k as i,l as a,D as s,e as l}from"./naive-ui.26efb6a0.js";var e={};const r=n({setup(u){const t=`
# Concepts
## Features and specifications

### File-based Routing:

Routes will be auto-generated for Vue files in [ _src/pages_ ] dir with the same file structure.
Check out [_vite-plugin-pages_](https://github.com/hannoeru/vite-plugin-pages) for more details.

Additional meta and SEO information can be specified in page component file like this:

\`\`\`
    <route lang="yaml">
    meta:
      title: Orders
      description: List of orders
    </route>
\`\`\`

### Components

#### Auto-importing

Components in [ _src/components_ ] dir will be auto-registered and on-demand, powered by [_unplugin-vue-components_](https://github.com/antfu/unplugin-vue-components).
What components subfolder should be included and in what order - you can configure in plugins.Components.dirs section of \`vite.config.js\` file.

#### Component guidelines

- When possible each component should be defined in its own dedicated file (SFC)
- Single File components should be named in PascalCase
- Base components should all start with the same prefix (like \`Base\` or \`App\`)
  - You can think of base components as your app-wide reusable components like a button or a modal
  - This groups them together and declares their global, reusable nature
- Component names should always be multi-worded to not conflict with any existing or future HTML elements. Don't create a \`Table\` or a \`Button\` component.
- Single instance components should begin with the prefix \`The\`
  - For example a site header or footer
  - This groups them together and declares them as single use
- Tightly coupled child components should be prefixed with their parent component's name
  - For instance a \`TodoListItem\` in a \`TodoList\`
  - This groups them together and declares them related
- Component names should begin with the most top level (usually general) words and end with the most specific
  - Such as \`SearchWidgetInput\`, \`SearchWidgetResultsList\`, \`SearchWidget\`
  - This groups related components together in the file structure

The naming conventions always help group related components together in the file system. Because of this, better use the standard of a flat component directory.

### Layouts

Vue components in [_src/layouts_] dir are used as layouts.
By default, \`default.vue\` will be used unless an alternative is specified in the route meta.

You can specify a needed layout in page component file like this:

    <route lang="yaml">
    meta:
      layout: home
    </route>

### Localization (i18n)

Localization ability is realized using i18n and vue-i18n plugins.
This [_src/layouts_] dir is to serve your locale translation files. YAML under this folder would be loaded automatically and register with their filenames as locale code.

Check out [_vue-i18n_](https://github.com/intlify/vue-i18n-next) for more details.
Under VS Code, [_i18n Ally_](https://github.com/lokalise/i18n-ally) is recommended to make locale experience better.

## Application principles

### Dependency injection

### Storage (vuex) architecure
`;return(c,d)=>{const o=i("cp-markdown");return a(),s("div",null,[l(o,{markdown:t})])}}});typeof e=="function"&&e(r);export{r as default};
