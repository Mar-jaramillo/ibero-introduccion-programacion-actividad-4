let facturacionTotal = 0;  
let litrosArticulo1 = 0;   
let facturasSuperaron600 = 0;

for (let i = 0; i < 5; i++) { 
    let codigoArticulo = prompt("Ingresa el código del artículo:"); 
    let cantidadVendida = parseFloat(prompt("Ingresa la cantidad vendida en litros:"));
    let precioPorLitro = parseFloat(prompt("Ingresa el precio por litro:"));
    
    let totalFactura = cantidadVendida * precioPorLitro;    
        facturacionTotal += totalFactura;
    
    if (codigoArticulo == 1) {
        litrosArticulo1 += cantidadVendida;
    }
    
    if (totalFactura > 600) {
        facturasSuperaron600++;
    }
}

alert("Facturación total: " + facturacionTotal);
alert("Litros vendidos del artículo 1: " + litrosArticulo1);
alert("Facturas que superaron los 600: " + facturasSuperaron600);