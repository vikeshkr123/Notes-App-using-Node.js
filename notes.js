const fs = require('fs');
const chalk = require('chalk');
const getNote = ()=> {
    "vikesh kumar";
} 



const addNote =(title, body) =>{
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => note.title === title );
    const duplicateNote = notes.find((note) => note.title === title );
    debugger
    
    if(!duplicateNote) {
        notes.push({
            title:title,
            body:body
        });
    
        saveNotes(notes);
        console.log('New Node added');
    } else {

        console.log('Note Taken!');
    }

    
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};
const removeNote = (title)=>{
     const notes=loadNotes();
     const notesToKeep =notes.filter((note)=> note.title !==title)
     if(notes.length === notesToKeep.length){
         console.log(chalk.bgRed('No Note Found!'));
     }else{
       
        console.log(chalk.bgGreen('Note Removed!'));
       saveNotes(notesToKeep);
     }
};
const listNotes = ()=>{
     
    console.log(chalk.bold.bgMagenta('Your Notes!'));
    const notes = loadNotes();
    notes.forEach(function(note){
        console.log(note.title);
    })


};
const readNotes =function(title){
    const notes=loadNotes();
    const readFind =notes.find(function(note){
        return note.title === title;
    })
    if(readFind){
            console.log(chalk.bold.bgGreen(readFind.title));
            console.log(readFind.body);
    }else{
        console.log(chalk.bgRed('Error!'));
    }
};

module.exports={
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes:readNotes
};
