import React, { useState } from "react";
import styles from './CreateArea.module.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';



const CreateArea=(props)=>{
    const tabScreen = useMediaQuery('(max-width:759px)')
    const [noteAreaFocus, setNoteAreaFocus] = useState(false)
    const [note, setNote]= useState({
        title:'',
        content:''
    })

    function handleChange(event){   
        const {name, value} = event.target;
        setNote(prevNote=>{
            return{
                ...prevNote, [name]: value
            }
        })
    }

    function submitNote(event){

        props.onAdd(note);
        setNote({
            title:'',
            content:''
        })
        event.preventDefault();
    }

    return(
        <div className={styles.createAreaMainDiv}>
            <div className={styles.createArea}>
                <input name="title" onChange={handleChange} value={note.title} placeholder='Title' className={styles.title} style={{display: noteAreaFocus?'block':'none'}}/>
                <textarea name="content" value={note.content} placeholder="Take a Note" className={styles.textArea} onChange={handleChange} onFocus={()=>setNoteAreaFocus(true)} onBlur={()=>setNoteAreaFocus(false)}/>
                <Fab size={tabScreen?"small":"medium"} aria-label="add" className={styles.addBtn} onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}

export default CreateArea;