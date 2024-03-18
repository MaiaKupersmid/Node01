import Alumno from'./models/alumno.js'; 
let alumno1 = new Alumno("EstebanDido" ,"22888444",20); 
let alumno2 = new Alumno("MatiasQueroso","28946255",51); 
let alumno3 = new Alumno();

alumno3.Username = "maiu"; 
alumno3.DNI = "48045053";
alumno3.Edad = 16;

console.clear(); 
console.log(alumno1); 
console.log(alumno2.toString()); 
console.log(alumno3);