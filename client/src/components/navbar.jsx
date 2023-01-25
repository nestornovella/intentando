import Styles from "../styles/navBar.module.css"
import logo from "../img/logo-removebg-preview.png"
import { Link } from "react-router-dom"
import cv from "../docs/NestorNovellaCv.pdf"




export default function NavBar() {

    function handleClick(e){
        const menu = e.target.parentNode.parentNode.children[1]

        !menu.className.includes("Visible")
                     ? 
        menu.className = Styles.linksContainerVisible
                     : 
        menu.className = Styles.linksContainer

        setTimeout(()=>{
            menu.className = Styles.linksContainer
        },2000)

    }

    return (
        <div className={Styles.navBar}>
            <div>
                <img width={50} src={logo} alt="" />

            </div>
            <div className={Styles.linksContainer}>
                <button> <a href="#Inicio">START</a></button>
                <button><a href="#Abaut">ABAUT</a></button>
                <button><a href="#Skills">SKILLS</a></button>
                <button><a href="#Contact">CONTACT</a></button>
            </div>
            <div className={Styles.downButton}>
                <Link to={cv} target="_blank"><button></button></Link>
            </div>
            <div >
            <button onClick={handleClick} className={Styles.menu}></button>
            </div>

        </div>
    )
}