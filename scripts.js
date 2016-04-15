var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        listaSeccion(xhttp);
    }
};
xhttp.open("GET", "prontus_tax_export.xml", true);
xhttp.send();

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