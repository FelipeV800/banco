var txt_saldo = document.getElementById("txt_saldo");
var nombreCuenta = document.getElementById("txt_nombre_cuenta");
var nombreBanco = document.getElementById("txt_nombre_destino");
var txt_1 = document.getElementById("txt_1");
var txt_2 = document.getElementById("txt_2");
var boton = document.getElementById("btn_verificar");

var bancosOK = [];
for (let e of bancosOK) {
    bancosOK.push("Bancorriente");
    bancosOK.push("Banco libre");
    bancosOK.push("Superbanco");
    bancosOK.push("Banco honesto");
    bancosOK.push("Banco de la republica");
}

boton.addEventListener("click", verificar);


var cuentaCliente = {
    nombre: "",
    verificado: false
};
var saldoCliente = 1000000;
var bancoDestino = {
    nombre: "",
    verificado: false
};
var hora;

var montoTransferencia = 1000000; /*= document.getElementById("txt_transferencia");*/
var costo;

function transferencia() {
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

function calcularCosto() {
    if (bancoDestino.nombre == cuentaCliente.nombre) {
        costo = 0;
    } else {
        costo = 100;
    }
}

function verificar() {
    cuentaCliente.nombre = nombreCuenta.value;
    bancoDestino.nombre = nombreBanco.value;
    if ((cuentaCliente.nombre != "") && (bancoDestino.nombre != "")) {
        cuentaCliente.verificado = true;
        for (let e of bancosOK) {
            if (bancoDestino == e) {
                bancoDestino.verificado = true;
            } else {
                bancoDestino.verificado = false;
            }
        }
    } else {
        alert("No puede dejar espacios en blanco");
        cuentaCliente.verificado = false;
        bancoDestino.verificado = false;
    }
    console.log(cuentaCliente)
    console.log(bancoDestino)
}