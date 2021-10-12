const fs = require('fs/promises')
fs.writeFile('./file.txt', Date.now().toString(), {
  encoding: 'utf-8',
  flag: 'as'
})