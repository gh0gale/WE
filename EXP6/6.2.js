const fs = require('fs');

// // CREATE
// fs.writeFileSync('data.txt', 'This is the initial content.');

// // READ
// const content = fs.readFileSync('data.txt', 'utf-8');
// console.log('READ:', content);

// // UPDATE (append)
// fs.appendFileSync('data.txt', '\nThis is the updated content.');

// DELETE
fs.unlinkSync('data.txt');
console.log('File deleted.');

