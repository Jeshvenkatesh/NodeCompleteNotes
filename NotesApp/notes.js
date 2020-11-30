const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>{
          return note.title === title;
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        })
        console.log(chalk.green.inverse.bold('Note added!'))
    }else{
        console.log(chalk.red.inverse.bold('Note already present!'))
    }
    saveNotes(notes);
};
const removeNote = (title) =>{
    const allNotes = loadNotes()
    const notes = allNotes.filter((note)=>{
          return note.title !== title
    });
    if(notes.length < allNotes.length){
        fs.writeFileSync('notes.json',JSON.stringify(notes));
        console.log(chalk.green.inverse.bold('Note has been removed!'))
    }else{
        console.log(chalk.red.inverse.bold("Note is not found"))
    }
}
const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note)=>{
        console.log(chalk.inverse.yellow(note.title));
    })
}
const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(chalk.inverse(note.body))
    }else{
        console.log(chalk.inverse.red('No note found!'))
    }
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString) 
    } catch(e){
        return []
    }
}
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}
module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}