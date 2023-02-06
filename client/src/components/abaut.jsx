import Styles from "../styles/abaut.module.css"
import imgAbaut from "../img/Abaut.png"
import { useEffect, useRef } from "react"
import Typed from "typed.js"


export default function Abaut (){
    
    const el = useRef(null)

    const arr = ["I love challenges, teamwork and constant learning.",
     "In my spare time I play video games with my son, or do outdoor activities.",
      "I love the back end, although I don't dislike the front.",
       "I am a proactive and self-taught person",
       "I am constantly learning, and I love programming!💙"]
        function typear (strArr){
            const typed = new Typed(el.current, {
                strings:strArr.map(e=> `<strong>${e}</strong>`),
                startDelay:300,
                typeSpeed:20,
                smartBackspace:false,
                backDelay:1000,
                backSpeed:1,
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

    
    useEffect(()=>{
        const observador = new IntersectionObserver(cargarImagen,{
            root:null,
            rootMargin:"0px 0px 0px 0px",
            threshold:0.2
        })
        observador.observe(document.getElementById("prueba"))
      
    })
    return(
        <div id="Abaut" className={Styles.container}>
            <div>
                <img width={350}  id="prueba"  src={imgAbaut} alt="" />
            </div>
            <div className={Styles.abaut}>
                <h1 className={Styles.abaut}>About me...</h1>
                <p><span ref={el}></span></p>
            </div>
        </div>
    )
}