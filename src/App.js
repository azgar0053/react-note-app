import './App.css';
import Header from './Component/Header/Header';
import CreateArea from './Component/CreateArea/CreateArea';
import Note from './Component/Note/Note';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes]= useState([])

  function addNote(newNote){
    setNotes(prevNotes=>{
      return[...prevNotes, newNote]
    })
  } 

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem, index)=>{
        return index!== id;
      })
    })
  }

useEffect(()=>{
  localStorage.setItem('notes', JSON.stringify(notes));
}, [notes])
  

  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote}/>
      <div className='notesDiv'>
        {notes.map((note, index)=>{
          return(
            <Note title={note.title} content={note.content} id={index} key={index} onDelete={deleteNote}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
