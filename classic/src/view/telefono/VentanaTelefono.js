Ext.define('MiAppSencha.view.telefono.VentanaTelefono', {
    extend: 'MiAppSencha.view.FormBase',


    title: 'Agregar un nuevo telefono',
    controller: 'telefono',

    scrollable: true,
    

    height: 450,


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
                width: 300

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
                    fieldLabel: 'Tipo',
                    name: 'tipo',
                    itemId: 'tipo'
                },
                {
                    fieldLabel: 'Pais',
                    name: 'pais',
                    itemId: 'pais'
                },
                {
                    
                    fieldLabel: 'Número',
                    name: 'numero',
                    itemId: 'numero',
                    xtype: 'numberfield',
                    
                    //evitar numeros negativos

                   
                    maxValue: 99999999,
                    mouseWheelEnabled: false,
                    minValue: 0,
                    
                  
                },
                {
                    xtype: 'comboempleados',
                    name: 'empleado',
                    itemId: 'empleado',
                    editable: false
                }
                
            ]
        }
    ]


});