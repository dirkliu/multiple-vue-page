const fs = require('fs')
const path = require('path')

let entryDirs = []
try{
  entryDirs = fs.readdirSync(path.resolve(__dirname, '../', './src'), {
    withFileTypes: true
  }).filter(item => item.isDirectory())
} catch (err) {
  throw err
}

console.log('entryDirs:', entryDirs)

// console.log('entries:', entries)
