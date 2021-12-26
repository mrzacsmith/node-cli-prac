# Notes

- use `chmod +x <filename>` to make executable and the includ `#!/usr/bin/emv node` and run file using `./<filename>`
- best: `npm link` and `npm uninstall -g <name>`
- try emoji log

### Cool Packages

- `npm ora` for command line spinner

### Cool code snippets

- sleep(ish) function

```js
await new Promise((resolve) => {
  setTimeout(() => resolve(true), 2000)
})
```
