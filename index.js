const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addVariant, e, postcss }) {
  addVariant('print', ({ container, separator}) => {
    const rule = postcss.atRule({ name: 'media', params: 'print' })
    rule.append(container.nodes)
    container.append(rule)
    rule.walkRules(rule => {
      rule.selector = `.${e(`print${separator}${rule.selector.slice(1)}`)}`
    })
  })
})
