import Styles from "../styles/navBar.module.css"
import logo from "../img/logo-removebg-preview.png"
import { Link } from "react-router-dom"
import cv from "../docs/NestorNovellaCv.pdf"




export default function NavBar() {
    return (
        <div className={Styles.navBar}>
            <div>
                <img width={50} src={logo} alt="" />

            </div>
            <div>
                <button> <a href="#Inicio">INICIO</a></button>
                <button><a href="#Abaut">ABAUT</a></button>
                <button><a href="#Skills">SKILLS</a></button>
                <button><a href="#Contact">CONTACT</a></button>
            </div>
            <div className={Styles.downButton}>
                <Link to={cv} target="_blank"><button></button></Link>
            </div>

        </div>
    )
}