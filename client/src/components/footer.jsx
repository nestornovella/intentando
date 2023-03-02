import { useEffect } from "react"
import {Link} from "react-router-dom"
import Styles from "../styles/footer.module.css"

function Footer() {

    const cargarIconos = (entradas, observador) => {
        entradas.forEach(entrada => {
            console.log(entrada)
            if (entrada.isIntersecting) { entrada.target.className = Styles.links;}
            else { entrada.target.className = Styles.nolinks; }
        })
    }

    useEffect(() => {
        const observador = new IntersectionObserver(cargarIconos, {
            root: null,
            rootMargin: "0px 0px 0px 0px",
            threshold: 0.2
        })
        observador.observe(document.getElementById("linkedin"))
        observador.observe(document.getElementById("github"))
        
    })
    function handleRedirection (e){
        const name = e.target.name
        window.open(name === "git" ? 'https://github.com/nestornovella':'https://www.linkedin.com/in/nestor-novella-full-stack-dev/', '_blank')
    }

    return (
        <div className={Styles.container}>
            <div  className={Styles.buttonContainer}>
                <Link><button name="git" onClick={(e)=>handleRedirection(e)} id="linkedin" className={Styles.nolinks}></button></Link>
                <Link><button name="linked" onClick={(e)=>handleRedirection(e)} id="github" className={Styles.nolinks}></button></Link>
            </div>
        </div>
     );
}

export default Footer;