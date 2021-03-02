$(document).ready(function() {	$( "#BTNPruebas" ).trigger( "click" );
	 $("#BTNPruebas").click(function(event){
	 	console.log("entrando al boton")
	   var direcc="https://tms-core-api.cloudnetlogistik.com/api/auth";
	var vardata='{  "mobility": 0,  "username": "Rafael",  "password": "123456"}'
	var dt= JSON.stringify(vardata)
	console.log(direcc)
		console.log(vardata)
			console.log(dt)
			var token =""
	$.ajax({
		data: vardata,
		url: direcc, //url de donde creara el destino
		dataType: 'json', //tipo de datos retornados
		type: 'POST',
		 async:false,  //enviar variables como POST,
		headers: {
			
			"Access-Control-Allow-Origin":"*",
			"Content-Type": "application/json"

		}
	
	}).done(function (data) {
		
		token=data.token
		console.log(token)
		$("#token").val(token)
	})
	$( "#BTNPruebas2" ).trigger( "click" );
})
		 $("#BTNPruebas2").click(function(event){
	var TKN=$("#token").val()
  var direcc="https://tms-core-api.cloudnetlogistik.com/api/solicitudes/usuarios/5f0cabff6fa7882c7addc537/misMatches?cantidad=50&saltar=0&shipperOid=5ae7024334731214082bc53a";
	var vardata='[{"action": "Date","filterSelected": true,"filterValue": {"begin": "2021-01-01","end": "2021-01-21"},"name": "Fechas"}]'
		$.ajax({
		data: vardata,
		url: direcc, //url de donde creara el destino
		dataType: 'json', //tipo de datos retornados
		type: 'POST',
		 async:false,  //enviar variables como POST,
		headers: {
			
			"Access-Control-Allow-Origin":"*",
			"x-access-token":TKN,
			"Content-Type": "application/json"

		}
	
	}).done(function (data) {	
		console.log("data")
		console.log(data)

    console.log(data.solicitudes)
      var filas = data.solicitudes.length;
  var filas2 = data.solicitudes.detalleslength;
 
        for (  i = 0 ; i < filas; i++){ 
        var filas2 = data.solicitudes[i].detalles.length; //cuenta la cantidad de registros
        
               for (  i2 = 0 ; i2 < filas2; i2++){
               	var estatus =data.solicitudes[i].detalles[i2].estatus
               	 var td=""
               	if (estatus=="Entregado"){
               		 td='<td class="tdcabeza" style="background-color:#BEECA8;" >' +data.solicitudes[i].detalles[i2].estatus+ '</td>'}
               		 	if (estatus=="No Entregado"){ td='<td class="tdcabeza"  style="background-color:#ECADA8;">' +data.solicitudes[i].detalles[i2].estatus+ '</td>'}
               	
              
               console.log(data.solicitudes[i].detalles[i2].destino.nombre)
                   var nuevafila= '<tr id="tr___'+ i +'" ><td class="tdcabeza" >' + data.solicitudes[i].detalles[i2].destino.nombre + '</td>'+td+'<td class="tdcabeza" >' +     data.solicitudes[i].fechaCarga + '</td><td class="tdcabeza" >' +     data.solicitudes[i].fechaInicioRuta + '</td><td class="tdcabeza" >' +     data.solicitudes[i].referenciaInterna + '</td><td class="tdcabeza" >' +     data.solicitudes[i].secondReference + '</td><td class="hide">'+  data.solicitudes[i].id+'</td><td class=""><button  class=" btn btn-primary"ID="btn_evicencia'+i2+'">Evidencia</button></td></tr>'
        
          $("#tabla_resultados").append(nuevafila)
               	     
                }
      }
      })
		 })})