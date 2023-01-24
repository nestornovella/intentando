const { sendEmail, mailToClient }= require("../email/emailSend")
const { Form } = require("../../db")

function throwError(msj) {
    throw (msj)
}


module.exports = {
    getForm: async (req, res) => {
        try {
            const forms = await Form.findAll()
            res.json(forms.length ? forms : throwError("No hay mensajes"))
        } catch (error) {
            console.error(error)
            res.send([{ error }])
        }
    },

    postForm: async (req, res) => {
        const { name, email, phone, message } = req.body
        try {
            if (!name, !email, !message) { throwError("Faltan parametros!") }
            else {
                await Form.create(req.body)
                sendEmail(name, email, phone, message)
                mailToClient(name, email)
                res.send("el mensaje se ha enviado con exito!")
            }
        } catch (error) {
            console.error(error)
            res.send([{ error }])
        }
    },

    deletForm: async (req, res) => {
        const { id } = req.body
        const { clean } = req.query

        try {
            if(!clean){
                const deleted = await Form.destroy({ where: { id } })
                    !deleted ? throwError("no se encotro el mensaje") :
                    res.json(`se eliminaron ${deleted} mensajes`)

            }else{
                if (clean === "true") {
                    await Form.destroy({ truncate: true })
                    res.json("se eliminaron todos los mensajes")
                }else throwError("query incorrecto!")

            }
        } catch (error) {
            res.json([{ error }])
        }
    },

}