import expImage from "../img/mistic.png"
import Styles from "../styles/experience.module.css"
import terminalImg from "../icons/terminal.webp"; 
import { useEffect, useRef } from "react";
import Typed from "typed.js"
import Swal from 'sweetalert2'
import 'animate.css';




export default function Experience() {
    const ups = ()=>{Swal.fire({
        title: 'Ilustrativo!!',
        text: 'Estos botones son sole de caracter ilustrativo!',
        icon: 'error',
        confirmButtonText: 'Ups!',
        showClass: {
            popup: 'animate__animated animate__fadeInLeft'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutRight'
          }
      })}

    const el = useRef(null)

    const skills = [`<span>import</span> skills <span>from</span> "./skills.js"`,`<span>skills</span>.map( (<span>skill</span>) => console.log(<span>skill</span>))`, `Mis skills... </br> ==> <span>JavaScript</span></br>==> <span>React.js</span> </br>==> <span>Node.js</span> </br>==><span> express.js </span></br>==><span> Sequelize  </span></br>==><span> postgresQl</span>  </br>==>[<span>Html, Css, less, bootstrap5, tailwind</span>]</br></br> <strong>...Siempre estoy en constante aprendizaje!! 👨‍🎓</strong>`]

    function typear (strings){
        const typed = new Typed(el.current, {
            strings:strings.map(e=> `${e}`),
                startDelay:300,
                typeSpeed:40,
                smartBackspace:false,
                backDelay:1000,
                backSpeed:1,
                showCursor:true,
                loop:false
        })
        return typed
    }
    let verify = false
   
    const cargarImagen = (entradas, observador)=>{
        entradas.forEach(entrada => {
            if(entrada.isIntersecting){entrada.target.className = Styles.visible;!verify && typear(skills); verify = true }
            else{entrada.target.className = Styles.izquierda; }
        })
    }

    
    useEffect(()=>{
        const observador = new IntersectionObserver(cargarImagen,{
            root:null,
            rootMargin:"0px 0px 0px 0px",
            threshold:0.2
        })
        observador.observe(document.getElementById("experienseImg"))
      
    })


    return (

        <div id="Skills" className={Styles.container}>
            <div>

                <div className={Styles.console}>
                    <div className={Styles.margen}>
                        <div>
                            <img className={Styles.logoConsole} width={10} height={10} src={terminalImg} alt="" />
                            <p>Simbolo del sistema</p>
                        </div>
                        <div>
                            <button onClick={ups}>-</button>
                            <button onClick={ups}>x</button>
                        </div>
                    </div>
                    <div className={Styles.blackboard}>
                        <div className={Styles.comands}>
                            <p>{`Microsoft Windows [Versión 10.0.19044.2006]
                        (c) Microsoft Corporation. Todos los derechos reservados.`}</p>

                            <p>C:\Users\impor{">"} node</p>
                            <p>Welcome to Node.js v18.12.1.Type <br />".help" for more information.{">"}</p>
                            <br/>
                            <p><span ref={el}></span></p>
                        </div>
                    </div>

                </div>
            </div>
            <img  id="experienseImg"  className={Styles.derecha} width={350} src={expImage} alt="" />
            <div>
            </div>
        </div>)
}