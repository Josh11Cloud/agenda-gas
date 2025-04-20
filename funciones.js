function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');
}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos(){
    let hoja = SpreadsheetApp.openById('1n6vcn_NK_sK2rF05NeZz1Yt9EKfDzw1uHUY_9JZ59a0').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}