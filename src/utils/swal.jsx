import Swal from "sweetalert2"

export const swal = () => {
    Swal.fire({
        title: 'Formulario enviado',
        width:"400px",
        timer:10000,
        timerProgressBar:true,
        confirmButtonText: 'Aceptar'
    })
}