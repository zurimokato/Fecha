function Fecha(dia, mes, anio) {
	this.dia=dia;
	this.mes=mes;
	this.anio=anio;
	let vectMes=[31,28,31,30,31,30,31,31,30,31,30,31];


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
		let newMes=this.mes-1;
		if (this.anio<1900 || this.dia<0 || this.mes <0 || this.mes >=13) {
			alert("La Fecha es incorrecta");
		}else{
			for (let i = 1; i <= vectMes.length; i++) {
				if(newMes==i){
					if(i == 1){
						if (this.isBisiesto()==false) {
							alert("No es biesiesto y la fecha esta incorrecta");
							}else{
								if (this.mes<=vectMes[i]+1) {
									alert("Es bisiesto y la Fecha es correcta");
								}
							}
						}else{
							if (this.dia>=1 && this.dia<=vectMes[i]) {
							alert("la fecha esta correcta");
						}else{
							alert("La fecha es incorrecta");
						}
					}
				}
			}	
		}
	}

	this.isBisiesto=function(){
		let bisiesto=false;
		if(this.anio%100!=0 && this.anio%4==0 || this.anio%400==0){
			bisiesto=true;
		}else{
			bisiesto=false;
		}
		return bisiesto;
	}

	this.formatoLatino=function(){
		alert(this.dia+"/"+this.mes+"/"+this.anio);
	}

	this.formatoGringo=function(){
		alert(this.mes+"/"+this.dia+"/"+this.anio);
	}
}



function vFecha(){
	let dia=parseInt(document.getElementById("Dia").value);
	let mes=parseInt(document.getElementById("Mes").value);
	let anio = parseInt(document.getElementById("Anio").value);

	let fecha=new Fecha(dia,mes,anio);

	fecha.validarFecha();
}

function vFormatoLatino(){
	let dia=parseInt(document.getElementById("Dia").value);
	let mes=parseInt(document.getElementById("Mes").value);
	let anio = parseInt(document.getElementById("Anio").value);

	let fecha=new Fecha(dia,mes,anio);

	fecha.formatoLatino();
}

function vFormatoGringo(){
	let dia=parseInt(document.getElementById("Dia").value);
	let mes=parseInt(document.getElementById("Mes").value);
	let anio = parseInt(document.getElementById("Anio").value);

	let fecha=new Fecha(dia,mes,anio);

	fecha.formatoGringo();
}