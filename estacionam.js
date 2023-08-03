let precio = prompt ("Ingrese precio por hora");
let horas = prompt ("Ingrese las horas de estacionamiento");
let minutos = prompt ("Si deseas el estacionamiento por minutos digite los minutos")
let total = 0

if (minutos >0) {
horas = parseInt(horas) + 1
}

 total = (horas*precio);
console.log("El total a pagar por horas y minutos es $" + total);