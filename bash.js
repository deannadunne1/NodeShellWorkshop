// Output a prompt
process.stdout.write('prompt > ');

const pwdCmd = require('./pwd')
process.stdin.on('data', pwdCmd.pwdCmd)
