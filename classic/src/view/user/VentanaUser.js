Ext.define('MiAppSencha.view.user.VentanaUser', {
    extend: 'MiAppSencha.view.FormBase',


   

    title: 'Agregar un nuevo usuario',
    controller: 'user',


    height: 280,
    width: 350,

    layout:{
        type: 'vbox',
        align: 'center'
       },


    

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,

            defaults: {
                xtype: 'textfield',
                width: 250

            },
            fieldDefaults: {

                msgTarget: 'under',
                anchor: '100%',
                allowBlank: false,
            },

            items: [
                {
                    name: 'id',
                    itemId: 'id',
                    hidden: true,
                    allowBlank: true,
                },
                {
                    fieldLabel: 'Correo eléctronico',
                    name: 'email',

                     //Permitir solo correos validos
                    vtype: 'email'
                },
                {
                    fieldLabel: 'Contraseña',
                    name: 'password',
                    inputType: 'password'
                }
            ]
        }
    ]


});