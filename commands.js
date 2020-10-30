// // process.stdin.on('data', function (data) {
// //     var cmd = data.toString().trim(); // remove the newline
// // });  
// // Output a prompt
// process.stdout.write('prompt > ');

// module.exports = {
 
//     pwd: () => {
//         if (cmd === 'pwd'){
//         //console.log(process.env.HOMEPATH);
//         //console.log(process.cwd);
//         //console.log(__dirname);
//         cmd = __dirname;
//         } 
//     }
// }

// Output a prompt



module.exports = {
    
    
    pwd: function(arg) {
        //console.log("hellooooo!!" + x)   
        //return __dirname;
        console.log('You typed: ' +  __dirname);
        process.stdout.write('prompt > ');

    },

    date: function(arg) {
        //return new Date();
        console.log('You typed: ' +  new Date());
        process.stdout.write('prompt > ');    
    },

    ls: function(arg) {
        //console.log('ls')        
   
        var fs = require('fs');

        //so readdir does not return a string but readdirSync can arggh
        //definietly need to ask about this 
        fs.readdir('.', 'utf8', function(err, files) {
            var strTwo = "";
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
          
            process.stdout.write('prompt > '); 
          });
        //console.log('end')
        //process.stdout.write('prompt > ');
    },

    echo: function(words){

        //const arr = words.split(' ');
        //console.log("con " + words.splice(0 ,1));
        console.log('You typed: ' +  words.slice(1).join(' '));
        process.stdout.write('prompt > ');


    }
    
}