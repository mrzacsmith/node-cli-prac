# Notes

- use `chmod +x <filename>` to make executable and the includ `#!/usr/bin/env node` and run file using `./<filename>`
- best: `npm link` and `npm uninstall -g <name>`
- try emoji log

### Cool Packages

- `ora` for command line spinner
- `log-symbols` for platform wide symbols
- `conduct` creates code of conduct
- `license` create license doc

### Cool code snippets

- sleep(ish) function

```js
await new Promise((resolve) => {
  setTimeout(() => resolve(true), 2000)
})
```
