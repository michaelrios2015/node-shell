//this was the first console.log statement to test
//console.log(Object.keys(process));


  //does it mattter where this goes??
  //i guess not it's a global varible here so that's fine 
  //so this gets the code from commands.JS and puts it into a variable 



// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline


  //so as soon as this is pulled it seems to run 
  var commands = require('./commands');
  //console.dir(commands);

  //this was in the hint but very confused by it 
  //var userCommand = 'pwd';

  // commands[userCommand]();
  //commands[userCommand](cmd);
  cmd = cmd.split(' ');  
    console.log(cmd[0]);
  if (commands[cmd[0]] != undefined){
    
    cmd = commands[cmd[0]](cmd);
    } else {


    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    }
});


//var commands = require('./commands');
//console.dir(commands);
//var userCommand = 'pwd';
//commands[userCommand]();