import expImage from "../img/mistic.png"
import Styles from "../styles/experience.module.css"
import { useEffect, useRef } from "react";
import Typed from "typed.js"
import swetMesaje from "../functions/popopsMsj";
import { ups } from "../functions/messajesValues";




export default function Experience() {



    const el = useRef(null)

    const skills = [`<span>import</span> skills <span>from</span> "./skills.js"`,
        `<span>skills</span>.map( (<span>skill</span>) => console.log(<span>skill</span>))`,
        `Mis skills... </br> ==> <span>JavaScript</span></br>==> <span>React.js</span> </br>==> <span>Node.js</span> </br>==><span> express.js </span></br>==><span> Sequelize  </span></br>==><span> postgresQl</span>  </br>==>[<span>Html, Css, less, bootstrap5, tailwind</span>]</br></br> <strong>...Siempre estoy en constante aprendizaje!! 👨‍🎓</strong>`]

    function typear(strings) {
        const typed = new Typed(el.current, {
            strings: strings.map(e => `${e}`),
            startDelay: 300,
            typeSpeed: 10,
            smartBackspace: false,
            backDelay: 500,
            backSpeed: 1,
            showCursor: true,
            loop: false
        })
        return typed
    }
    let verify = false

    const cargarImagen = (entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) { entrada.target.className = Styles.visible; !verify && typear(skills); verify = true }
            else { entrada.target.className = Styles.izquierda; }
        })
    }


    useEffect(() => {
        const observador = new IntersectionObserver(cargarImagen, {
            root: null,
            rootMargin: "0px 0px 0px 0px",
            threshold: 0.2
        })
        observador.observe(document.getElementById("experienseImg"))

    })


    return (

        <div id="Skills" className={Styles.container}>
            <div className={Styles.consolaContainer}>
                <div className={Styles.console}>
                    <div className={Styles.margen}>
                        <div>
                            <button className={Styles.terminalImg}></button>
                            <p>Simbolo del sistema</p>
                        </div>
                        <div>
                            <button onClick={() => swetMesaje(ups)}>-</button>
                            <button onClick={() => swetMesaje(ups)}>x</button>
                        </div>
                    </div>
                    <div className={Styles.blackboard}>
                        <div className={Styles.comands}>
                            <p>{`Microsoft Windows [Versión 10.0.19044.2006]
                        (c) Microsoft Corporation. Todos los derechos reservados.`}</p>
                            <p>C:\Users\impor{">"} node</p>
                            <p>Welcome to Node.js v18.12.1.Type <br />".help" for more information.{">"}</p>
                            <br />
                            <p><span ref={el}></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.imagenContainer}>
                <img id="experienseImg" className={Styles.derecha} src={expImage} alt="" />
            </div>

        </div>)
}