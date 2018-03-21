function Fecha(dia, mes, anio) {
	this.dia=dia;
	this.mes=mes;
	this.anio=anio;
	var vectMes=[31,28,31,30,31,30,31,31,30,31,30,31];


	this.obtenerDia=function(){
		alert(this.dia);
	}

	this.obtenerMes=function(){
		alert(this.mes);
	}
	this.obtenerAnio=function(){
		alert(this.anio);
	}

	this.Fecha=function(){
		this.dia=01;
		this.mes=01;
		this.anio=1900;
	}
	this.validarFecha=function(){
		if (this.anio<1900 && this.dia<0 && this.mes <0) {
			alert("La Fecha es incorrecta");
		}else{
			for (var i = 0; i < vectMes.length; i++) {
				if(this.mes==i){
				if (this.dia<=vectMes[i]) {
						alert("la fecha esta correcta");
					}else{
						alert("La Fecha es incorrecta");
					}
				}	
				if(this.mes==i && i == 2){
					if (this.isBisiesto()==true) {
						if (this.mes<=vectMes[i]+1) {
							alert("Es biesiesto y la fecha esta correcta");
						}else{
							alert("Es bisiesto y la Fecha es incorrecta");
						}
					}
				}
			}	
		}
	}

	this.isBisiesto=function(){
		var bisiesto=false;
		if(this.anio%100!=0 && this.anio%4==0 || this.anio%400==0){
			bisiesto=true;
		}else{
			bisiesto=false;
		}
		return bisiesto;
	}
}



function vFecha(){
	var dia=parseInt(document.getElementById("Dia").value);
	var mes=parseInt(document.getElementById("Mes").value);
	var anio = parseInt(document.getElementById("Anio").value);

	var fecha=new Fecha(dia,mes,anio);

	fecha.validarFecha();
}