class Persona {
    constructor(nombres, apellidos, edad, estudios, exp_laboral1, exp_laboral2, exp_laboral3, cursos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.estudios = estudios;
        this.exp_laboral1 = exp_laboral1;
        this.exp_laboral2 = exp_laboral2;
        this.exp_laboral3 = exp_laboral3;
        this.cursos = cursos;
    }
}

persona1 = new Persona(" Manuel Omar", " Pavez Chavez", " 28 años", " Técnico de nivel superior en Electricidad DUOC UC (titulado)", " • Analista técnico (Ingenieria Eléctrica Azeta LTDA)", " • Analista de redes eléctricas (Engie Chile)", " • Inspector técnico de contratos (Metro de Santiago)", " 2021 • Bootcamp Desarrollo web Front-End (Awakelab)");

document.getElementById("nombres").innerHTML = persona1.nombres;
document.getElementById("apellidos").innerHTML = persona1.apellidos;
document.getElementById("edad").innerHTML = persona1.edad;
document.getElementById("estudios").innerHTML = persona1.estudios;
document.getElementById("exp_laboral1").innerHTML = persona1.exp_laboral1;
document.getElementById("exp_laboral2").innerHTML = persona1.exp_laboral2;
document.getElementById("exp_laboral3").innerHTML = persona1.exp_laboral3;
document.getElementById("cursos").innerHTML = persona1.cursos;