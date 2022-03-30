 
    var nombre = prompt("HELLO MEMBER! ¿WHAT IS YOUR NAME?");
    var edad = prompt ("HELLO MEMBER! ¿WHAT IS YOUR AGE?");

switch (nombre) {
    case "Amaury":
        document.write("> Hola Amaury!")
        break;
    case "Luis":
        document.write("> Hola Luis!");
        break;
    default:
        document.write("> Hola "+nombre);
        break;
}
if (edad >= 18) {
    document.write(" Bienvenid@ al Concierto.");
    
} else{
    document.write(" Lo siento :(, no puedes pasar,No cumples los requisitos.");
};
