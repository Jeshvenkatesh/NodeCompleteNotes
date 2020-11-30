const validator = require('validator');
const chalk = require('chalk');
const name = require('./notes');
const yargs = require('yargs');
const note = require('./notes');
// const { argv } = require('process');

// console.log(validator.isURL('jesh.venkatesh@gmail.com'));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// console.log(name);
// console.log(process.argv)
// console.log(process.argv[2]);
// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Ok I get it, adding a new note')
// }else{
//     console.log('I dont know what do you want from me');
// }

// const num1 = process.argv[2];
// const num2 = process.argv[3];

// console.log(num1 + num2);
// console.log(process.argv);

// yargs.version('1.0.0');

// console.log(yargs.argv);
// console.log(yargs.argv['title']);
// console.log(yargs.argv.title);
// console.log(yargs.argv['body']);
// console.log(yargs.argv.body);

yargs.command({
    command:'add',
    describe:'Adds a note',
    builder : {
        title : {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body : {
            describe : 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler : function(argv){
        note.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command:'read',
    describe:'read a note',
    builder : {
      title : {
        describe: 'read title',
        demandOption: true,
            type:'string'
      }
    },
    handler: function(argv){
        note.readNote(argv.title)
    }
});
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder : {
        title : {
          describe: 'remove title',
          demandOption: true,
              type:'string'
        },
        body :{
          describe : 'remove body',
              demandOption: false,
              type:'string'
        }
      },
    handler: function(argv){
           note.removeNote(argv.title);
    }
});
yargs.command({
    command:'list',
    describe:'list of notes',
    handler: function(){
       note.listNotes()
    }
});
yargs.parse()




