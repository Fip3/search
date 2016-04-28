var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        listaSeccion(xhttp);
    }
};
xhttp.open("GET", "prontus_tax_export.xml", true);
xhttp.send();

var txt0 = "<option>Sección</option>";
var txt1 = "<option>Tema</option>";
var txt2 = "<option>Subtema</option>";

function listaSeccion(xml) {
    var x, i, xmlDoc, txt0;
    xmlDoc = xml.responseXML;
    txt0 = "<option>Sección</option>";
    x = xmlDoc.getElementsByTagName('seccion');
    for (i = 0 ; i <x.length; i++) {
        cadena = x[i].children[0].innerHTML;
        txt0 += "<option value=\"" + x[i].id + "\">" + cadena + "</option>";
    }
    document.getElementById("seccion").innerHTML = txt0;
}


function listaTema(xml){
    var x, i, xmlDoc, txt1;
    var identificador = document.getElementById('seccion').value;
    xmlDoc = xml.responseXML;
    txt1 = "<option>Tema</option>";
    x = xmlDoc.getElementsByTagName('tema');
    for (i = 0 ; i <x.length; i++) {
         if (x[i].parentNode.id == identificador) {
            cadena = x[i].children[0].innerHTML;
            txt1 += "<option value=\"" + x[i].id + "\">" + cadena + "</option>";
         };    
    }
    document.getElementById("tema").innerHTML = txt1;
}

function listaSubtema(xml){
    var x, i, xmlDoc, txt2;
    var identificador = document.getElementById('tema').value;
    xmlDoc = xml.responseXML;
    txt2 = "<option>Subtema</option>";
    x = xmlDoc.getElementsByTagName('subtema');
    for (i = 0 ; i <x.length; i++) {
         if (x[i].parentNode.id == identificador) {
            cadena = x[i].children[0].innerHTML;
            txt2 += "<option value=\"" + x[i].id + "\">" + cadena + "</option>";
         };    
    }
    document.getElementById("subtema").innerHTML = txt2;
}

function limpiar(){
    document.getElementById("buscar").value="Buscar...";
    listaSeccion(xhttp);
    listaTema(xhttp);
    listaSubtema(xhttp);
    document.getElementById("resultados").src="about:blank";
    pag = 1;
    
}

var sec,tem,stma,texto,pag;

sec = "Deportes";
tem = "Rally";
stma = "Dakar";
texto = "moto";
pag = 1;


function botonBusqueda(){

    document.getElementById("resultados").src="http://www.cooperativa.cl/cgi-bin/prontus_search.cgi?search_prontus=noticias" + "&search_idx=noticias" + "&search_tmp=search.html" + "&search_form=yes" + "&search_pag=" + pag + "&search_resxpag=20" + "&search_maxpags=1000" + "&search_orden=cro" + "&search_meta1=" + "&search_meta2=" + "&search_meta3=" + "&search_seccion=" + sec + "&search_tema=" + tem + "&search_subtema=" + stma + "&search_fechaini=" + "&search_fechafin=" + "&search_texto=" + texto + "&search_modo=and" + "&search_comodines=no" + "&vista="
    document.getElementById("adelante").disabled=false;

}

function carga(){

    document.getElementById("atras").disabled=true;
    document.getElementById("adelante").disabled=true;
}

function botonAtras(){

    if (pag > 1) {
        pag--
        botonBusqueda()
    }
    if (pag == 1) {
        document.getElementById("atras").disabled=true;
    }
}

function botonAdelante(){

    pag++
    botonBusqueda()
    document.getElementById("atras").disabled=false;
}
