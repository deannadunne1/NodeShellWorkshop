const pwdCmd = (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd'){
      process.stdout.write(__dirname)
  }
  else process.stdout.write('You typed: ' + cmd);

  process.stdout.write('\nprompt > ');
}


module.exports.pwdCmd = pwdCmd;
