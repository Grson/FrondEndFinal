/* ---------------------------------------------------------------------------------------------
                        Validacion de condiciones, con los datos obtenidos

*/




Ext.define('MiAppSencha.model.Empresa',{
    extend: 'Ext.data.Model',


    //Campos

    fields:[
    {name: "id", type: 'int'},
    "nombre",
    {name: "fechaInicio", type: 'date', format: 'm-d-Y'},
    "horaInicio",
    "direccion"
    ]

});