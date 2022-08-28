/* ---------------------------------------------------------------------------------------------
                        Conexion con el backend /  Envio y obtención de datos

*/


Ext.define('MiAppSencha.store.Telefonos',{
    extend: 'Ext.data.Store',


    storeId: 'telefonos-listado',


    alias: 'store.telefonos',
   
    requires: ['Ext.data.proxy.JsonP'],


    proxy: {
        //Enviar y recibir a otro servidor
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'telefonos',

        //Decodificar la informacion json
        reader:{
            type: 'json'
        }
    },
    //cargar la informacion
    autoLoad:true

});