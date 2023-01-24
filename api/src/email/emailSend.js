const { transporter } = require("./emailConfig");


function throwError(msj) {
    throw (msj)
}
module.exports = {


    sendEmail: async (name, email, phone, message) => {
        try {
            if (!email, !name, !message) { throwError("faltan datos para el envio de email") }
            await transporter.sendMail({
                from: `"Client" <${email}>`,
                to: "nestornovellafullstackdev@gmail.com",
                subject: "⚠️⚠️⚠️Urgente persona interesada!⚠️⚠️⚠️",
                html:
                    `<h1>Empresa o persona! ${name}...</h1>
                <h3>message</h3>
                <p>${message}</p>
                <p>email: ${email}</p>
                <p>phone number: ${phone}</p>`
            });

        } catch (error) {
            console.error(error)
        }
    },
    mailToClient: async(name, email)=>{
        try {
            if (!email, !name) { throwError("faltan datos para el envio de email") }
            await transporter.sendMail({
                from: `"NestorNovella-Developer" <nestornovellafullstackdev@gmail.com>`,
                to: `${email}`,
                subject: "Gracias por su Interes!",
                html:
                    `<h1>Hi!${name} nice to meet you!...</h1>
                <h3>Thank you for your interest in contacting me, you can reply to this email, or I will answer you as soon as possible!</h3>
            
                <ul>
                <li>email: nestornovellafullstackdev@gmail.com</li>
                <li>linkedin:https://www.linkedin.com/in/nestor-novella-full-stack-dev/</li>
                <li>gitHub: https://github.com/nestornovella</li>
                
                </ul>
                <p>📱: +54 011 15 2542 0570</p>
                <img  width={500} src="https://crearhogares.com/wp-content/uploads/2022/03/74623-email-successfully-sent.gif" alt="msj gif" />
                `
                
            });

        } catch (error) {
            console.error(error)
        }

    }
}