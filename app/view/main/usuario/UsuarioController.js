Ext.define('MiAppSencha.view.usuario.UsuarioController',{
    extend: 'Ext.app.ViewController',

    //Apodo para incluirlo en Usuario
    alias: 'controller.usuarioctr',


    hacerLogin: function () {


        var formulario = this.lookupReference('formulario');

        //recuperar datos obtenidos en  reference: 'formulario
        if(formulario.isValid()){



            //Imprimir en consola
            var datos = formulario.getValues();
            //-----------------------------------



           
           Ext.Ajax.request({

                //backend
                url: `${Ext.manifest.url_backend}usuarios?email=${datos.email}&password=${datos.password}`,
           
                //Propiedad
                scope:this,


                //url correcta
                success: function(response, opts) {

                    //Transformar json en objeto
                    var usuarioValido = Ext.decode(response.responseText);
                    console.dir(usuarioValido);

                    
                    if(usuarioValido.length > 0)
                    {
                        Ext.Msg.alert('Hola', 'Bienvenido nuevamente.' + usuarioValido[0].email, function(){
                            this.getView().close();
                        }, this);
                    }else{
                        Ext.Msg.alert('Datos incorrectos', 'Usuario o contraseña es incorrecto');
                    }

                },


                //url incorrecta
                failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
             }
          });
        }

      
    }


})