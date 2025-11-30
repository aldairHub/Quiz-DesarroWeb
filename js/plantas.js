const btnQuizPlantas = document.getElementById('QuizPlantas');
if (btnQuizPlantas) {
    btnQuizPlantas.addEventListener('click', function () {
        window.location.href = '../docs/PlantasPreguntas.html';
    });
}

const quizForm = document.querySelector('.quiz-form');
if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();

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

        for (let pregunta in respuestasCorrectas) {
            const respuestaUsuario = document.querySelector(`input[name="${pregunta}"]:checked`);
            if (respuestaUsuario && respuestaUsuario.value === respuestasCorrectas[pregunta]) {
                puntaje++;
            }
        }

        mostrarResultado(puntaje, totalPreguntas);
    });
}

function mostrarResultado(puntaje, total) {
    const resultadoAnterior = document.querySelector('.resultado');
    if (resultadoAnterior) {
        resultadoAnterior.remove();
    }

    const aprobado = puntaje >= 7;

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

    const quizSection = document.querySelector('.quiz-section');
    const titulo = quizSection.querySelector('h2');

    const contenedorTitulo = document.createElement('div');
    contenedorTitulo.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 30px;
    `;

    titulo.parentNode.insertBefore(contenedorTitulo, titulo);
    contenedorTitulo.appendChild(titulo);
    contenedorTitulo.appendChild(resultado);

    resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
}