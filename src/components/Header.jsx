import styles from "./Header.module.css"


import logotipo from "../image/logotipo projeto.svg";

export function Header() {
    return (
        <header className={styles.header}> 
            <img src={logotipo} alt="logotipo do projeto" /> 
        </header>
    )

};
