$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
    
    window.location.hash = hash;
    });
    }
    });
    });

    $(document).ready(function() {
        $("#enviarCorreo").click(function(event) {
            event.preventDefault();
            var comentario = $("#exampleFormControlTextarea14").val();
            if (comentario.trim() === "") {
                alert("Por favor, completa los campos de Nombre Asunto y Comentario");
        } else {
            alert("Correo enviado");
        }
    });
});
