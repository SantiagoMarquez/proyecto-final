function enviarDatos() {
    let validado = true
    let formulario = documnet.forms['contactInfo']

    let nombre = formulario['nombre'].value
    let email = formulario['email'].value
    let telefono = formulario['telefono'].value
    let mensaje = formulario['mensaje'].value

    // if (nombre == '' || email == '' || telefono == '' || textArea == '') {
    //     validado = false
    //     mensaje += '- Debe completar todos los campos! < br > '
    // }

    // if (telefono.length >= 7) {
    //     validado = false
    //     mensaje += '- El numero de telefono debe tener al menos 7 dígitos! <br>'
    // }


    let datos = {
        nombre,
        email,
        telefono,
        mensaje
    }

    localStorage.setItem(datos.mensaje, JSON.stringify(datos))

    console.log(nombre)
    console.log(email)
    console.log(telefono)
    console.log(mensaje)

    return validado


}