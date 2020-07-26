$(function () {
    $("a").click(function (event) {
        // Con este if se asegura que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {
            // Previene el comportamiento de click predeterminado
            event.preventDefault();
            // Guarda el valor del hash en una variable llamada gato
            var gato = this.hash;
            // Usa el método animate para animar el scroll y hacerlo de una forma suave
            // El número opciona (800) especifica el número de milisegundos que se demorará en llegar hasta el área
            $('html, body').animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                // Agrega hash (#) a la URL cuando haya terminado de desplazarse (comportamiento de click predeterminado)
                window.location.hash = gato;
            });
        } // Fin del if
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "typef_orm_share", b = "https://embed.typeform.com/"; if (!gi.call(d, id)) { js = ce.call(d, "script"); js.id = id; js.src = b + "embed.js"; q = gt.call(d, "script")[0]; q.parentNode.insertBefore(js, q) } })()