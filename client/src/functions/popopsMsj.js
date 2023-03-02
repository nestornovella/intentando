import Swal from "sweetalert2"



export default function swetMesaje({title, text,icon, button}) {

    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: button,
        showClass: {
            popup: 'animate__animated animate__fadeInLeft'
        },
        hideClass: {
            popup: 'animate__animated animate__bounceOutRight'
        }
    })
}
