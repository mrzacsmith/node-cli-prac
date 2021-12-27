# Notes

- use `chmod +x <filename>` to make executable and the includ `#!/usr/bin/env node` and run file using `./<filename>`
- best: `npm link` and `npm uninstall -g <name>`
- try emoji log

### Cool Packages

- `npm i ora` for command line spinner
- `npm i log-symbols` for platform wide symbols

### Cool code snippets

- sleep(ish) function

```js
await new Promise((resolve) => {
  setTimeout(() => resolve(true), 2000)
})
```
