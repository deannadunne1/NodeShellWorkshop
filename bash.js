const pwdCmd = require('./pwd')
const lsCmd = require('./ls')

// Output a prompt
process.stdout.write('prompt > ');
console.log('prompt happened first if before')

process.stdin.on('data', (data) => {
    console.log('line 8 is running')
    const cmd = data.toString().trim(); //remove the newline

    if(cmd === 'pwd'){
      process.stdout.write('pwd initialized', pwdCmd)
    } else if (cmd === 'ls'){
        console.log('ls is working')
        process.stdout.write('ls initialized', lsCmd)
    }
    else {
      process.stdout.write('You typed: ' + cmd);
    }
  
    process.stdout.write('\nprompt > ');
})


