Ext.define('MiAppSencha.store.User', {
    extend: 'Ext.data.Store',
    alias: 'store.user',
    storeId: 'user-listado',

    requires: ['Ext.data.proxy.JsonP'],

    //comunicacion con backend 
    proxy:{
        type: 'jsonp',
        url: Ext.manifest.url_backend + 'usuarios',


        reader: {
            type: 'json'
        }

    },
    autoLoad:true


});