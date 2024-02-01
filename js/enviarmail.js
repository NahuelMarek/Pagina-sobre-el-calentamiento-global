const $form = document.querySelector('.enviar_mail')
var usuario=true
var e_mail=true
var confmail=true
var telefono=true
var mensajeValidar=true
var emailValor
var confEmailValor


    function validarEnviar(){
        //valido el nombre
        if (document.formulario.nombre.value.length  == 0) {
            alert("Tiene que escribir su nombre")
            document.formulario.nombre.focus()
            usuario=false
            return 0
        }
        else if (document.formulario.email.value.length  == 0) {
            alert("Tiene que escribir su mail")
            document.formulario.email.focus()
            e_mail=false
            return 0
        }
        else if (document.formulario.confEmail.value.length  == 0) {
            alert("Tiene que confirmar su email")
            document.formulario.confEmail.focus()
            confmail=false
            return 0
        }  
        else if (document.formulario.telefono.value.length  == 0) {
            alert("Tiene que escribir su telefono")
            document.formulario.telefono.focus()
            telefono=false
            return 0
        }
        else if (document.formulario.message.value.length  == 0) {
            alert("Tiene que escribir su mensaje")
            document.formulario.message.focus()
            mensajeValidar=false
            return 0
        }
      
        else{
            emailValor= document.formulario.email.value
            confEmailValor= document.formulario.confEmail.value
            
        }
    }





 $form.addEventListener('submit', handleSubmit)
 async function handleSubmit(event) {


    validarEnviar()
    if(usuario==false){
    event.preventDefault();
    }
    else if(e_mail==false){
        event.preventDefault()
    }
    else if(confmail==false){
        event.preventDefault()
    }
    else if(mensajeValidar==false){
        event.preventDefault()
    }
    else if(telefono==false){
        event.preventDefault()
    }

    else{
    emailValor = String(emailValor);
    confEmailValor = String(confEmailValor);
    console.log(emailValor)
    console.log(confEmailValor)
    if(emailValor==confEmailValor){

        console.log("mail confirmado")
        event.preventDefault();
         const form = new FormData(this)
         const response = await fetch(this.action, {
              method: this.method,
             body: form,
              headers:{
                  'Accept': 'application/json'
              }
          })
    
          if(response.ok){
              this.reset()
             alert('Se a enviado su mensaje correctamente, nos contactaremos en breve')
          }
        }
        else{
        alert("Los mails no coinciden")
        event.preventDefault()
        }
    }
 }
