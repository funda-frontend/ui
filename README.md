[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Funda UI component library

This project is currently a work in progress, you'll find some components but it's incomplete at the moment.

# Usage

Import in local component:

```js
// MyComponent.vue

import UiButton from '@funda/ui/src/components/ui-button.vue';
```

or

```js
// MyComponent.vue

import { UiButton } from '@funda/ui';
```

If you are using [Nuxt auto import component](https://nuxtjs.org/docs/2.x/directory-structure/components):

```js
// nuxt.config.js

export default {
  ...,
  components: true,
  buildModules: ["@funda/ui/src/nuxt.js"],
  ...
}
```

# Latest

https://funda-frontend.github.io/ui/latest/
