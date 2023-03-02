

export default function verifyErrors (input){
    const error = {}

    if(!input.name.length){
        error.name = "el campo nombre no puede permanecer vacio!⚠️"
    }else if(input.name.length < 3){
        error.name = "el nombre debe contener al menos 3 caracteres!⚠️"
    }

    if(!input.email.length){
        error.email = "el campo email no puede permanecer vacio!⚠️"
    }else if(!/[\w*]{2,}.+\@+[\w*]{2,}.+\.+[\w*]{2,}/g.test(input.email)){
        error.email = "el modelo de email requerido es ejemplo@miproveedor.com⚠️"
    }

    if(!input.message.length){
        error.message = "el campo de mensaje no puede estar vacío!⚠️"
    }else if(!/[\w]{3,}.*/g.test(input.message)){
        error.message = "el mensaje debe contener al menos 3 caracteres!⚠️"
    }

    return error

}