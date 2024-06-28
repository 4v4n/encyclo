 
import style from "./index.module.scss";
import clsx from "clsx";
const Header = () =>{
    return(
        <header className={clsx(style.encycloHeader)}>
            <h1>Encyclo</h1>
            <h3>Dive into the Creature Codex: Your one-stop guide to all things creepy, crawly, and captivating!</h3>
        </header>
    )
}

export default Header;