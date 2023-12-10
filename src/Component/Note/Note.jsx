import React from "react";
import styles from './Note.module.css';
import DeleteIcon from '@mui/icons-material/Delete';



const Note=(props)=>{
    function handleClick(){
        props.onDelete(props.id)
    }

    return(
        <div className={styles.noteDiv}>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <DeleteIcon fontSize="small" className={styles.deleteIcon} onClick={handleClick}/>
        </div>
    )
}

export default Note;