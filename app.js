const chalk = require('chalk');
const yargs = require('yargs');
const note = require('./notes.js');

//Customizzed yargs version
yargs.version('1.1.0');

//yargs command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body ',
            demandOption : true,
            type: 'string'
        }
    },
    
    handler(argv) {
        note.addNote(argv.title, argv.body);
    }
    
});
yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    
    handler(argv) {
        note.removeNote(argv.title);
    }
    
});
yargs.command({
    command:'listNotes',
    describe:'list a  note',
    builder: {
        title: {
            describe: 'list title',
            demandOption: false,
            type: 'string'
        },
    },
    
    handler(argv) {
        note.listNotes();
    }
    
});
yargs.command({
    command:'readNotes',
    describe:'read a note',
    builder:{
        title:{
            describe: 'read note',
            demandOption: true,
            type:'string'
        },
    },
    handler(argv){
        note.readNotes(argv.title);
    }
});

yargs.parse();
