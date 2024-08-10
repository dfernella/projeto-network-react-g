import {Atom} from "@phosphor-icons/react"

import styles from "./Sidebar.module.css"
import { Avatar } from "./Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className= {styles.cover}
                src="https://plus.unsplash.com/premium_photo-1676637656198-e2bbf752103a?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        
        
        <div className={styles.profile}>
            <Avatar src="https://github.com/dfernella.png" />

            <strong> Daniel Fernella </strong>
            <span> Developer </span>

        </div>

        <footer> 
            <a href=" # ">
                <Atom size={20}/>
                Aumentar Network
            </a>
        </footer>

        </aside>

    );
}