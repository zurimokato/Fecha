function Fecha(dia, mes, anio) {
	this.dia=dia;
	this.mes=mes;
	this.anio=anio;
	this.vectMes=[31,28,31,30,31,30,31,31,30,31,30,31]

	this.Fecha(){
		this.dia=01;
		this.mes=01;
		this.anio=1900;
	}
	this.validarFecha(){
		if (this.anio<1900 && this.dia<0 && this.mes <0) {
			alert(La Fecha es incorrecta);
		}else{
			for (var i = 0; i < vectMes.length; i++) {
				if(this.mes==i){
					if (this.dia==vectMes[i]) {
						alert(la fecha esta correcta);
					}else{
						alert(La Fecha es incorrecta);
					}
				}
				if(this.mes==i && i == 2){
					if (isBisiesto()) {
						if (this.mes==vectMes[i]+1) {
							alert(la fecha esta correcta);
						}else{
							alert(La Fecha es incorrecta);
						}
					}
				}
			}
			
		}

		
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
		var bisiesto=false;
		if(this.anio%100!=0 && this.anio%4==0 || this.anio%400==0){
			bisiesto=true;
		}
		return bisiesto;
	}
}



function validarFecha(){
	var dia=parseInt(document.getElementById("Dia").value);
	var mes=parseInt(document.getElementById("Mes").value);
	var anio = parseInt(document.getElementById("Anio").value);

	var fecha=new Fecha(dia,mes,anio);

	fecha.validarFecha();
}