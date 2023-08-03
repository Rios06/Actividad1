let precio = prompt ("Ingrese precio del producto");
let descuento = (precio*.20);
let precio_descuento = (precio-descuento);
let iva = (precio_descuento*.15);
let precio_final = (precio_descuento+iva);
console.log ("El precio del producto es $" + precio);
console.log ("El precio con descuento es $" + precio_descuento);
console.log ("El precio final es $" + precio_final);
console.log ("El iva es $" + iva);