Ext.define('MiAppSencha.view.empresa.VentanaEmpresa', {
    extend: 'MiAppSencha.view.FormBase',

    controller: 'empresa',

    title: 'Agregar una nueva empresa',
    scrollable: true,
   
    
    height: 440,
    



    layout:{
        type: 'vbox',
        align: 'center'
       },


    items: [
        {
            xtype: 'form',
            bodyPadding:10,
            
            defaults: {
                xtype: 'textfield',
                width: 300

            },

            //Caracteristicas del label mostrar el espacio para ingreso de datos con todo el espacio hacia la derecha
            fieldDefaults:{
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
                    fieldLabel: 'Nombre',
                    name: 'nombre'
                },
                {
                    xtype: 'datefield',
                    format: 'm/d/Y',
                    fieldLabel: 'Fecha de Inicio',
                    name: 'fechaInicio',

                    //dia maximo al dia de hoy
                    maxValue: new Date(),

                },
                {
                    xtype: 'timefield',
                    fieldLabel: 'Hora de Inicio',
                    name: 'horaInicio',

                    //incremento de intervalo de tiempo
                    increment: 20
                },
                {
                    fieldLabel: 'Direccion',
                    name: 'direccion'
                }
            ]
        }
    ],




})