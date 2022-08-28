/* ---------------------------------------------------------------------------------------------
                        Conexion con el backend /  Envio y obtener datos

*/


Ext.define('MiAppSencha.store.Empresas',{
    extend: 'Ext.data.Store',


    storeId: 'empresas-listado',


    alias: 'store.empresas',
    model: 'MiAppSencha.model.Empresa',

    requires: ['Ext.data.proxy.JsonP'],
    proxy: {
        //Enviar y recibir a otro servidor
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'empresas',

        //Decodificar la informacion json
        reader:{
            type: 'json'
        }
    },
    //cargar la informacion
    autoLoad:true

});