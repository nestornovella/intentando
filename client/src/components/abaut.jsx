import Styles from "../styles/abaut.module.css"
import imgAbaut from "../img/Abaut.png"
import { useEffect, useRef } from "react"
import Typed from "typed.js"


export default function Abaut (){
    
    const el = useRef(null)

    const arr = ["Me encantan los desafios, trabajar en equipo y estar en constante aprendizaje.", "En mi tiempo libre jugar video juegos, o realizar actividades al aire libre.", "Me gusta el backend ya que me encanta la logica.", "soy una persona proactiva y autodidacta por naturaleza apacionado por la tecnologia y el diseño web."]
        function typear (strArr){
            const typed = new Typed(el.current, {
                strings:strArr.map(e=> `<strong>${e}</strong>`),
                startDelay:300,
                typeSpeed:40,
                smartBackspace:false,
                backDelay:1000,
                backSpeed:10,
                showCursor:true,
                loop:false
                
            })
            return typed
        }
    let start = false



    const cargarImagen = (entradas, observador)=>{
        entradas.forEach(entrada => {
            if(entrada.isIntersecting){entrada.target.className = Styles.visible; start === false  && typear(arr); start = true}
            else{entrada.target.className = Styles.izquierda; }
        })
    }

    const observador = new IntersectionObserver(cargarImagen,{
        root:null,
        rootMargin:"0px 0px 0px 0px",
        threshold:0.2
    })
    
    useEffect(()=>{
        observador.observe(document.getElementById("prueba"))
      
    },[])
    return(
        <div id="Abaut" className={Styles.container}>
            <div>
                <img className={Styles.izquierda} id="prueba" width={350} src={imgAbaut} alt="" />
            </div>
            <div className={Styles.abaut}>
                <h1 className={Styles.abaut}>Abaut me...</h1>
                <p><span ref={el}></span></p>
            </div>
        </div>
    )
}