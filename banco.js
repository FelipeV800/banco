var txt_saldo = document.getElementById("txt_saldo");

var cuentaCliente = {
    nombre: "a",
    verificado: true    
};
var saldoCliente = 1000000;
var bancoDestino = {
    nombre: "b",
    verificado: true
};
var hora;

var montoTransferencia = 1000000; /*= document.getElementById("txt_transferencia");
var boton = document.getElementById("btn_transferir");*/
var costo;

function transferencia () {
    calcularCosto();
    if (cuentaCliente.verificado) {
        if (bancoDestino.verificado) {
            if (saldoCliente > (montoTransferencia + costo)) {
                if ((9 < hora < 12) || (15 < hora < 20)) {
                    console.log("Transaccion lograda con exito, costo de transaccion: " + costo + " total: " + (montoTransferencia + costo));
                    saldoCliente -= montoTransferencia + costo;
                } else {
                    console.log("No atendemos a esta hora");
                }
            } else {
                console.log("No tiene suficientes fondos");
            }
        } else {
            console.log("el banco de destino no esta verificado");
        }
    } else {
        console.log("No esta verificado");
    }
    txt_saldo.innerHTML = "Saldo en su cuenta: <strong>" + saldoCliente + "<strong/>";
}

function calcularCosto () {
    if (bancoDestino.nombre == cuentaCliente.nombre) {
        costo = 0;
    } else {
        costo = 100;
    }
} 