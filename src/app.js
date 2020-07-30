document.getElementById('form-group').addEventListener('submit', e => {
    const title = document.getElementById('docente').value;
    const materia = document.getElementById('materia').value;
    const aula = document.getElementById('aula').value;
    const hora = document.getElementById('hora').value;

    console.log(title, materia)

    e.preventDefault();
});