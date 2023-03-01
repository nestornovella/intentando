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
        title: 'Sent!',
        text: 'Your message has been sent. I will contact you as soon as possible!',
        icon: 'success',
        confirmButtonText: 'Great!',
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

    
    useEffect(()=>{
        const observador = new IntersectionObserver(cargarImagen,{
            root:null,
            rootMargin:"0px 0px 0px 0px",
            threshold:0.2
        })
        observador.observe(document.getElementById("contact"))
      
    })



    return (
        <div id="Contact" className={Styles.container}>
            <h1>Contact...</h1>
            <div className={Styles.contact}>
                <img id="contact" className={Styles.debajo} width={350} src={contactImg} alt="" />
                <div className={Styles.formContainer}>
                    <form>
                        <input onChange={inputsHandler} name="name" value={input.name} placeholder="Name" type="text" />
                        <br />
                        <input onChange={inputsHandler} name="email" value={input.email} placeholder="Email" type="email" />
                        <br />
                        <input onChange={inputsHandler} name="phone" value={input.phone} placeholder="Phone with area code" type="text" />
                        <br />
                        <textarea onChange={inputsHandler} name="message" value={input.message} placeholder="Message..." id="" cols="40" rows="4"></textarea>
                        <br />
                        <button onClick={sendMessage}></button>
                    </form>
                </div>
            </div>

        </div>
    )
}