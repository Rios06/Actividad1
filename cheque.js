let dias = prompt ("Ingresa los dias del viaje"); 
let gasto_hotel = prompt ("Ingrese el gasto por dia en el hotel"); 
let gasto_comida = prompt ("Ingresa cuanto es el gasto de comida por dia");
let total =  (gasto_hotel*dias) + (gasto_comida*dias) + (dias*200);

console.log("El total del dinero para comida es $" + gasto_comida*dias );
console.log("El total del dinero para el hotel es $" + gasto_hotel*dias);
console.log("El total del dinero para gastos es $" + dias*200);
console.log("El total del dinero para el viaje es $" + total);