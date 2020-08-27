const extendConfig = require('@funda/tailwind-config').extendConfig

module.exports = extendConfig({
  theme: {
    extend: {
      padding: {
        33: '2rem'
      },
      height: {
        11: '2.75rem'
      }
    }
  }
})
