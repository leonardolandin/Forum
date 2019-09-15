vm = this;

vm.modal = function(tipo) {
    if (tipo == 'login') {
    document.getElementById('auth-login').style.display='flex'
    }
    if (tipo == 'cadastro') {
        document.getElementById('auth-login').style.display='flex'
    }
    if (tipo == 'exit') {
        document.getElementById('auth-login').style.display='none'
    }    
}