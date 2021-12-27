const colors = require('colors')

module.exports = (options) => {
  const defaultOptions = {
    type: `error`,
    msg: `You forgot to define all the options!`,
  }

  const opt = { ...defaultOptions, ...options }
  const { type, msg } = opt
  if (type === `success`) console.log(`${msg}`.green)
  if (type === `error`) console.log(`${msg}`.red)
}
