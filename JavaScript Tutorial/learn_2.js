const fs = require('fs');
fs.writeFileSync('hellow.txt','hello world')
console.log('Creating the new file hellow.txt and writing in it');
console.log('The file is created successfully');

// console.log('Now deleting the file hellow.txt using fs.unlink method');
// fs.unlink('hellow.txt', (edrr) => {
//     if (edrr){
//         throw edrr;
//     }
//     console.log('file is deleted sucessfully');
// });