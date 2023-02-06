import Styles from "../styles/presentation.module.css";
import imgPortada from "../img/portada-removebg-preview.png";
import { useEffect,  useRef } from "react";
import { useLocation } from "react-router-dom";
import Typed from "typed.js";
import { visitAdd } from "../functions/apiInfo";
import queryString from "query-string"




export default function Presentation() {
    
  
    const el = useRef(null)
    const {search} = useLocation()
    const {visit} = queryString.parse(search)
    useEffect(()=>{
       visitAdd(visit)
       console.log("ejecute")
    },[visit])

    useEffect(()=>{
             new Typed(el.current, {
            strings:["Full Stack Developer",
             "soy henry</br>(6 months)👨‍🎓", 
            "More than 800 hours", 
            "tens of </br>Proyects!!",
            "Agile methodologies",
             "Uff I need a coffee!</br>☕",
             "Api's rest",
             "👨‍🎓Full Stack Developer☕"],
            startDelay:300,
            typeSpeed:30,
            backDelay:1000,
            backSpeed:10,
            smartBackspace:true,
            showCursor:true,
            loop:false
        })
    },[])
    useEffect(()=>{
        const presentation = Array.from(document.getElementsByTagName("h2")).filter(e => !e.className.includes("name"))
        console.log(presentation)
    }, [])


    const cargarImagen = (entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) { entrada.target.className = Styles.visible }
            else { entrada.target.className = Styles.derecha }
        })
    }

    
    useEffect(() => {
        const observador = new IntersectionObserver(cargarImagen, {
            rootMargin: "-30% 0px -70% 0px",
        })
        observador.observe(document.getElementById("presentation"))
      
    })
    return (
        <div id="Inicio" className={Styles.container}>
            <div className={Styles.text} id="name" >
                <h2 className={Styles.presentation}>Hi! </h2>
                <h2 className={Styles.name}>I'am Nestor Novella</h2>
                <h2 className={Styles.presentation}><span ref={el}></span></h2>
                <img width={300} src="https://pysong-dev.web.app/assets/images/others/web.gif" alt="" />
            </div>
            <div className={Styles.image}>
                <img width={500} id="presentation" className={Styles.derecha} src={imgPortada} alt="" />
            </div>
        </div>

    )
}