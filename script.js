//Para ver se está pronto
$(document).ready(function(){

    $("#loginAluno").submit(function(evento){
        var usuario = $('#inputUsuario').val()
        var senha = $('#inputSenha').val()
        if (usuario == "admin" && senha == 1234) {
            $('#mensagem').addClass('alert alert-success alert-dismissible fade show')
            $('#mensagem').removeClass('alert-warning')
            $('#mensagem').text('Usuário Logado!').show().fadeOut(5000);
        } else {
            $('#mensagem').addClass('alert alert-warning alert-dismissible fade show')
            $('#mensagem').removeClass('alert-success')
            $('#mensagem').text('Usuário ou Senha incorretos!').show().fadeOut(5000);
            evento.preventDefault() // Bloqueia o evento de enviar
        }
    })
})