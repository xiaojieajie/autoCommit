const fs = require('fs/promises')
console.log(fs)
fs.writeFile('./file.txt', Date.now().toString(), {
  encoding: 'utf-8',
  flag: 'as'
})