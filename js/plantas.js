// Redirigir al quiz (para tu página anterior)
const btnQuizPlantas = document.getElementById('QuizPlantas');
if (btnQuizPlantas) {
    btnQuizPlantas.addEventListener('click', function () {
        window.location.href = '../EstructuraHTML/PlantasPreguntas.html';
    });
}

// Manejar el formulario del quiz (para la página de preguntas)
const quizForm = document.querySelector('.quiz-form');
if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Respuestas correctas
        const respuestasCorrectas = {
            p1: 'b',
            p2: 'c',
            p3: 'b',
            p4: 'c',
            p5: 'c',
            p6: 'c',
            p7: 'c',
            p8: 'a',
            p9: 'c',
            p10: 'c'
        };

        let puntaje = 0;
        const totalPreguntas = 10;

        // Calcular puntaje
        for (let pregunta in respuestasCorrectas) {
            const respuestaUsuario = document.querySelector(`input[name="${pregunta}"]:checked`);
            if (respuestaUsuario && respuestaUsuario.value === respuestasCorrectas[pregunta]) {
                puntaje++;
            }
        }

        // Mostrar resultado
        mostrarResultado(puntaje, totalPreguntas);
    });
}

function mostrarResultado(puntaje, total) {
    // Eliminar resultado anterior si existe
    const resultadoAnterior = document.querySelector('.resultado');
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }

    const aprobado = puntaje >= 7;

    // Crear elemento de resultado
    const resultado = document.createElement('div');
    resultado.className = 'resultado';
    resultado.style.cssText = `
        background-color: ${aprobado ? '#A8E6CF' : '#FF6B6B'};
        padding: 20px 40px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    `;

    resultado.innerHTML = `
        <h3 style="margin: 0 0 10px 0; font-size: 32px; color: white;">
            ${aprobado ? '¡Aprobado!' : 'Desaprobado'}
        </h3>
        <p style="margin: 0; font-size: 28px; color: white; font-weight: bold;">
            ${puntaje} / ${total})
        </p>
    `;

    // Insertar el resultado al lado del título
    const quizSection = document.querySelector('.quiz-section');
    const titulo = quizSection.querySelector('h2');

    // Crear contenedor flex para título y resultado
    const contenedorTitulo = document.createElement('div');
    contenedorTitulo.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 30px;
    `;

    // Mover el título al contenedor
    titulo.parentNode.insertBefore(contenedorTitulo, titulo);
    contenedorTitulo.appendChild(titulo);
    contenedorTitulo.appendChild(resultado);

    // Hacer scroll al resultado
    resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
}