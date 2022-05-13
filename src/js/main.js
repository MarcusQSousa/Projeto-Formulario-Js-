let xx = document.getElementById('formulario');

function validar (xx){
    xx.preventDefault(); 

    const inptNome = document.getElementById('inputNome')
    const inptEmail = document.getElementById('inputEmail')
    const inptTelefone = document.getElementById('inputTelefone')
    const inptMensagem = document.getElementById('inputMensagem')
    
    if(inptNome.value === ""){
        inptNome.classList.remove('certo')
        inptNome.classList.add('erro')

    }else{
        inptNome.classList.remove('erro')
        inptNome.classList.add('certo')

    }
    
    if(inptEmail.value.includes("@") === false){
        inptEmail.classList.remove('certo')
        inptEmail.classList.add('erro')

    }else{
        inptEmail.classList.remove('erro')
        inptEmail.classList.add('certo')

    }

    if(inptTelefone.value === "" || inptTelefone.value.length < 11){
        inptTelefone.classList.remove('certo')
        inptTelefone.classList.add('erro')

    }else{
        inptTelefone.classList.remove('erro')
        inptTelefone.classList.add('certo')

    }

    if(inptMensagem.value === ""){
        inptMensagem.classList.remove('certo')
        inptMensagem.classList.add('erro')

    }else{
        inptMensagem.classList.remove('erro')
        inptMensagem.classList.add('certo')

    }



}



xx.addEventListener('submit', validar );