vm = this;

vm.modal = function(tipo) {
    if (tipo == 'login') {
        document.getElementById('auth-login').style.display='flex'
        document.getElementById('auth-login').style.background='rgba(0,0,0, 0.4)'
    }
    if (tipo == 'cadastro') {
        document.getElementById('auth-cadastro').style.display='flex'
        document.getElementById('auth-cadastro').style.background='rgba(0,0,0, 0.4)'
    }
    if (tipo == 'exit') {
        document.getElementById('auth-login').style.display='none'
        document.getElementById('auth-cadastro').style.display='none'
    }
    if (tipo == 'exit-esqueceu') {
        document.getElementById('modal-esqueceu').style.display='none'
    }
    if (tipo == 'esqueceu') {
        document.getElementById('modal-esqueceu').style.display='flex'
    } 
}

//Elementos com ações desabilitadas
vm.actionsPrevent = ["esqueceu", "exit-esqueceu"]

document.getElementById('esqueceu').addEventListener("click", function(event){
    event.preventDefault()
});
document.getElementById('exit-esqueceu').addEventListener("click", function(event){
    event.preventDefault()
});