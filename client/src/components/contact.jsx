import Styles from "../styles/contact.module.css"
import contactImg from "../img/contact.png"
import { useEffect } from "react"
import Swal from 'sweetalert2'
import 'animate.css';
import { useState } from "react";
import { sendData } from "../functions/apiInfo";



export default function Contact() {
    
    const [input , setInput] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })

    function inputsHandler (e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })

    }

    async function sendMessage(e){
        e.preventDefault()
        sendData(input).then(response =>{
            setInput({
                name:"",
                email:"",
                phone:"",
                message:""
            })

         enviado()
        })        
            
    }


    const enviado = ()=>{Swal.fire({
        title: 'Enviado!',
        text: 'Tu Mensaje se ha enviado. Me pondre en contacto lo Antes posible!',
        icon: 'success',
        confirmButtonText: 'Genial!',
        showClass: {
            popup: 'animate__animated animate__fadeInLeft'
          },
          hideClass: {
            popup: 'animate__animated animate__bounceOutRight'
          }
      })}


    const cargarImagen = (entradas, observador)=>{
        entradas.forEach(entrada => {
            if(entrada.isIntersecting){entrada.target.className = Styles.visible}
            else{entrada.target.className = Styles.debajo; }
        })
    }

    const observador = new IntersectionObserver(cargarImagen,{
        root:null,
        rootMargin:"0px 0px 0px 0px",
        threshold:0.2
    })
    
    useEffect(()=>{
        observador.observe(document.getElementById("contact"))
      
    },[])



    return (
        <div id="Contact" className={Styles.container}>
            <h1>Contact...</h1>
            <div className={Styles.contact}>
                <img id="contact" className={Styles.debajo} width={400} src={contactImg} alt="" />
                <div className={Styles.formContainer}>
                    <form>
                        <input onChange={inputsHandler} name="name" value={input.name} placeholder="nombre" type="text" />
                        <input onChange={inputsHandler} name="email" value={input.email} placeholder="email" type="email" />
                        <input onChange={inputsHandler} name="phone" value={input.phone} placeholder="phone with area code" type="text" />
                        <br />
                        <textarea onChange={inputsHandler} name="message" value={input.message} placeholder="mensaje" id="" cols="40" rows="4"></textarea>
                        <br />
                        <button onClick={sendMessage}></button>
                    </form>
                </div>
            </div>

        </div>
    )
}