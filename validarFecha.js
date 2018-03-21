function Fecha(dia, mes, anio) {
	this.dia=dia;
	this.mes=mes;
	this.anio=anio;


	this.validarFecha(){
		alert(La Fecha es incorrecta);
		alert(la fecha esta correcta);
	}

	this.obtenerDia=function(){
		alert(this.dia);
	}

	this.obtenerMes=function(){
		alert(this.mes);
	}
	this.obtenerAnio=function(){
		alert(this.anio);
	}
	this.isBisiesto(){
		var bisiesto=true;
		return bisiesto;
	}
}



function operar(){
	var numA=parseInt(document.getElementById("numA").value);
	var numB=parseInt(document.getElementById("numB").value);
	var operando = document.getElementById("mySelect").value;
	}