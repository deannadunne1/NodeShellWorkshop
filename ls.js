//`files` will be an array of filenames, like ['bash.js', 'pwd.js']
const fs = require('fs');

const ls = fs.readdir('./', 'utf8', (err, files) => {
    console.log('ls file initialized')
    if (err) {
        throw err
    } else {
        process.stdout.write(files.join('\n'))
    }
})

module.exports = ls;