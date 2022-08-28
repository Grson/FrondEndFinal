Ext.define('MiAppSencha.view.usuario.Usuario',{

    extend:'Ext.window.Window',


    //Apodo usando en UsuarioController
    controller: 'usuarioctr',
    
            //Apariencia
            title: 'Login',
            


            //Comportamiento
            closable: false,
            dreggable: false,
            resizable: false,
            modal: true,



            //centrar el boton
            buttonAlign: 'center',
            height: 280,
            width: 350,
        
            layout:{
                type: 'vbox',
                align: 'center'
               },

            items:[
                {
                    //Instancia implicita
                    //tipo formulario
                    xtype: 'form',
                    bodyPadding: 10,

                    //identificar
                    reference: 'formulario',



                    
                    //hijos caracteristicas repetidas
                    defaults: {
                        xtype: 'textfield',
                        //No permitir campos vacios
                        allowBlank:false,
                        width: 250

                    },




                    //campos
                    items:[
                        {

                            fieldLabel: 'Email',
                            name: 'email',

                             //Permitir solo correos validos
                            vtype: 'email'

                        },
                        {
                            fieldLabel: 'Password',
                            name: 'password',
                            inputType: 'password'
                        }
                    ]
                }
            ],

            buttons:[
                {
                    text: 'Ingresar',

                    //icono del boton
                    iconCls: 'x-fa fa-user-tag',

                    //funcion para cerra la ventana
                    handler: 'hacerLogin'

                }
            ]

})