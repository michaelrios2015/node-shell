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
    
    
    pwd: function() {
        //console.log("hellooooo!!" + x)   
        return __dirname;
       
    },

    // date: function() {
    //         return new Date();    
    // },

    // ls: function() {
    //     //console.log('ls')        
   
    //     var fs = require('fs');

    //     var strOne = '';

    //     //console.log(fs);

    //     //return 'hello';

    //     //so readdir does not return a string but readdirSync can arggh
    //     //definietly need to ask about this 
    //     return fs.readdirSync('.', 'utf8', function(err, files) {
    //         var strTwo = "";
    //         if (err) throw err;
    //         //console.log(files);
    //         //str = files.toString()
    //         files.forEach(function(file) {
    //            strTwo += file.toString() + "\n"; 
    //           //process.stdout.write(file.toString() + "\n");
    //           //console.log("----file----"); 
    //           //console.log(file);
    //         })
    //         console.log('----strTwo----');
    //         console.log(strTwo);
          
    //         return strTwo;
    //         //process.stdout.write("prompt > ");
    //       });
    //     //string is undefined here
    //     // console.log('----str----');
    //     // console.log(str);

    // return strOne;
    // }

    
}