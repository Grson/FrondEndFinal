Ext.define('MiAppSencha.view.FormBase', {
    extend: 'Ext.window.Window',


    modal: true,
    draggable: false,
    resizable: false,


    height: 880,
    width: 500,

    buttonAlign: 'center',
    xtype: 'ventana',



    
    buttons: [
        {
            text: 'Enviar',
            handler: 'enviarDatos'
        }
    ],

    //funcion, invocado como respuesta a un usuario
    listeners:{
        close: 'reloadStore',

        //cargar datos al momento de moficar
        show: 'llenarDatos'
    }


});