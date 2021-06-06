
    const   displayValorAnterior = document.getElementById('valor-anterior');
    const   displayValorActual = document.getElementById('valor-actual');
    const   numeros            = document.querySelectorAll('.numero');
    const   operadores         = document.querySelectorAll('.operador');
    const   display = new Display(displayValorAnterior, displayValorActual);
    numeros.forEach(boton => {
        boton.addEventListener('click', () =>display.agregarNum(boton.innerHTML));
    }) 
    operadores.forEach(boton => {
        boton.addEventListener('click',()=> display.computar(boton.value));
    })
