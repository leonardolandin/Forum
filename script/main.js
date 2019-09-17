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
}