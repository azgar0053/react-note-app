import React from "react";
import styles from './Header.module.css'
import NoteIcon from '@mui/icons-material/Note';


const Header=()=>{
    return(
        <header className={styles.header}>
            <h1><span><NoteIcon/></span> Note App </h1>
        </header>
    )
}

export default Header;