const fs = require('fs')

const getFileSizeInBytes = (filePath) => {
  const stats = fs.statSync(filePath)
  const fileSizeInBytes = stats.size
  return fileSizeInBytes
}

console.log(getFileSizeInBytes(`${process.cwd()}/01/index.js`), 'bytes')
