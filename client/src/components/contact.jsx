import Styles from "../styles/contact.module.css"
import contactImg from "../img/contact.png"
import { useEffect } from "react"
import 'animate.css';
import { useState } from "react";
import { sendData } from "../functions/apiInfo";
import verifyErrors from "../functions/validations";
import swetMesaje from "../functions/popopsMsj";
import { notSend, sended } from "../functions/messajesValues";



export default function Contact() {
    
    const [input , setInput] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    })

    const [errors, setErrors] = useState({error:"block"})

    function inputsHandler (e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setErrors(verifyErrors({
            ...input,
            [e.target.name]:e.target.value
        }))
  
    }

    async function sendMessage(e){
        e.preventDefault()
        Object.keys(errors).length && setErrors({sendError:"you need to coplete the inputs first!⚠️"})
        if(!Object.keys(errors).length){
            sendData(input).then(response =>{
                setInput({
                    name:"",
                    email:"",
                    phone:"",
                    message:""
                })
                swetMesaje(sended)
                setErrors({error:"block"})

            })        
        }else{swetMesaje(notSend)}
            
    }

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
    },[])

    return (
        <div id="Contact" className={Styles.container}>
            <h1>Contact...</h1>
            <div className={Styles.contact}>
                <img id="contact" className={Styles.debajo} width={350} src={contactImg} alt="" />
                <div className={Styles.formContainer}>
                    <form>
                        <input onChange={inputsHandler} name="name" value={input.name} placeholder="Name" type="text" />
                        {  errors.name && <br />&&<p className={Styles.errorText}>{errors.name}</p>}
                        <br />
                        <input onChange={inputsHandler} name="email" value={input.email} placeholder="Email" type="email" />
                        {  errors.email && <br />&&<p className={Styles.errorText}>{errors.email}</p>}
                        <br />
                        <input onChange={inputsHandler} name="phone" value={input.phone} placeholder="Phone with area code" type="text" />
                        <br />
                        <textarea onChange={inputsHandler} name="message" value={input.message} placeholder="Message..." id="" cols="40" rows="4"></textarea>
                        {  errors.message && <br />&&<p className={Styles.errorText}>{errors.message}</p>}
                        <br />
                        <button onClick={sendMessage}></button>
                        {  Object.keys(errors).length ? <br />&&<p className={Styles.errorText}>{errors.sendError}</p>: ""}
                    </form>
                </div>
            </div>

        </div>
    )
}