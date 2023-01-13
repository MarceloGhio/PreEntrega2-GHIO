// //Selección de variedad de productos
// const comprarProductos = () => {
// let producto = '';
// let precio = 0;
// let cantidad = 0;
// let totalCompra = 0;
// let continuarComprando = false;

// do {
//     producto = prompt ("¿Que figuras desea comprar?: Geralt Pop, Geralt Move, Geralt Wolf").toLowerCase();
//     cantidad = parseInt (prompt ("¿Que cantidad de artículos va a agregar a su colección?"));
//     console.log("Si su compra es mayor a $3500 el envio es gratis");

//     let cantidadValidada = validarCantidad (cantidad);

// switch (producto) {
//     case "geralt pop":
//         precio = 2500;
//         break;
//     case "geralt move":
//         precio = 2900;
//         break;
//     case "geralt wolf":
//         precio = 6300;
//         break;
//     default:
//         alert ("Alguno de los datos ingresados no es correcto");
//         precio= 0;
//         cantidad= 0;
// }

// totalCompra += precio * cantidadValidada;
// continuarComprando = confirm ("¿Desea sumar otra figura a su colección?");

// } while (continuarComprando)

// const totalConDescuento = aplicarDescuento(totalCompra);
// const totalConEnvio = calcularEnvio(totalConDescuento);

// return totalConEnvio;
// }
// //Selección de unidades a adquirir
// const validarCantidad = (cantidad) => {
//     while (Number.isNaN (cantidad) || cantidad === 0 ) {
//         if (cantidad !== 0) {
//             alert('Por favor, ingrese una cantidad. Ej: 3')
//         } else {
//             alert('Por favor, ingrese un valor distinto a cero.')
//         }
//         cantidad = parseInt(prompt ("¿Cuántos desea adquirir?"));
//         console.log("Si su compra supera los $8200 se le da un descuento de %10")
//     }

//     return cantidad;
// };
// //Aplicación de descuento si la compra supera los $8200
// const aplicarDescuento = (totalCompra) => {
// let totalConDescuento = 0 ;

// if (totalCompra >= 8200 ) {
//     totalConDescuento = totalCompra * 0.90 ;
//     return totalConDescuento;
// } else {
//     return totalCompra;
// }
// }
// //Calcular plus envio o descuento de envio si supera los $3500
// const calcularEnvio = (totalCompra) => {
// let tieneEnvioADomicilio = false;

// tieneEnvioADomicilio = confirm("¿Quiere envío a domicilio?");


// if (tieneEnvioADomicilio && totalCompra >= 3500) {
//     alert("Tiene envio gratis. El total de tu compra es $" + totalCompra);
// } else if (tieneEnvioADomicilio && totalCompra < 3500 && totalCompra !== 0) {
//     totalCompra += 1200;
//     alert("El envío cuesta $1200. El total de tu compra es $" + totalCompra);
// } else {
//     alert("El total de tu compra es $" + totalCompra);
// }

// return totalCompra;
// }


// //Financianción en cuotas
// function calcularCantidadDeCuotas() {
// let cuotas = 0;
// let tieneCuotas = false;

// tieneCuotas = confirm("¿Desea realizar el pago en cuotas?");

// if(tieneCuotas) {
//     cuotas = parseInt(prompt("¿Cuántas cuotas realizará?"));
//     if (cuotas === 0){
//         cuotas = 1;
//     }else if (Number.isNaN(cuotas)){
//         calcularCantidadDeCuotas();
//     }
// }else {
//     cuotas = 1;
// }

// return cuotas;
// };
// //Sección función intereses por cuota
// function calcularIntereses (cuotas) {
// let tasa = 17.4;
// let sinIntereses = 0;
// let tasaTotal = 0;
// let interesesTotales = 0;

// if (cuotas === 1){
//     return sinIntereses;
// }else{
//      tasaTotal = tasa + cuotas * 0.2;
//      interesesTotales = tasaTotal * cuotas;
//     return interesesTotales;
// }
// }
// //Informe detallado le plan de pago
// function calcularTotalAPagar (totalCompra, cuotas, intereses) {
//     totalCompra = (totalCompra + intereses)
// let valorCuota = totalCompra / cuotas;
//     alert ("El total es de $"+totalCompra+" en "+cuotas+" cuotas de $"+valorCuota.toFixed(2));
// console.log("Exelente elección");
// }


// const totalCompra = comprarProductos();

// const cuotas = calcularCantidadDeCuotas();

// const intereses = calcularIntereses(cuotas);

// // Calculamos el total a pagar y mostramos un mensaje al usuario.
// calcularTotalAPagar(totalCompra, cuotas, intereses);

// //Confirmación de E-Mail
// let userEmail = " " ;
// let confirmUserEmail = " " ;
// let askAgain = true ;
// do{
//     userEmail = prompt ("Ingrese su correo") ;
//     confirmUserEmail = prompt ("Confirme su correo") ;
//     if (userEmail === confirmUserEmail) {
//         alert ("El correo " + userEmail + " ha sido guardado con éxito. En breve recibirá un mail con detalles de la compra.") ;
//     console.log("Finalizaste los procedimientos de compra, que lo disfrutes!. Vuelve pronto.");
//     askAgain = false ;
//     } else { 
//         alert ("Los correos deben coincidir. Por favor, intente nuevamente.") ;
//     }
// } while (askAgain)