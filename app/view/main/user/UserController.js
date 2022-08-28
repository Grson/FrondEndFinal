Ext.define('MiAppSencha.view.user.UserController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',


    mostrarFormulario: function(){
        var window = Ext.create('MiAppSencha.view.user.VentanaUser');
        window.show();
    },


    enviarDatos: function(){
        var vista = this.getView();

        var formulario = vista.down('form');

        if(formulario.isValid()){
            var datos = formulario.getValues();

            if(vista.title !== "Editar usuarios"){

                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'usuarios',
                    jsonData: Ext.util.JSON.encode(datos),
                    scope: vista,
    
                    success: function(response, opts) {
                        Ext.Msg.alert('Ok', 'Usuario creado correctamente', function(){
                            this.close();
                        }, this);
                    },
                    failure: function(response, opts) {
                        console.log('El servidor falló con el codigo '+ response.status);
                    }
                })
            }else{
                var id= vista.down("#id").value


                Ext.Ajax.request({
                    url: Ext.manifest.url_backend + 'usuarios/' + id,
                    jsonData: Ext.util.JSON.encode(datos),
                    method: 'PUT',
    
                    success: function(response, opts) {
                        Ext.Msg.alert('Ok', 'Empleado editado correctamente', function(){
                            vista.close();
                        })
                    },
                    failure: function(response, opts) {
                        console.log('El servidor falló con el codigo '+ response.status);
                    }
                })
            }

        }
    },



        llenarDatos: function(){
            var vista = this.getView();
            var usuarios = vista.store
            if(usuarios){
                vista.setTitle("Editar usuarios")
                vista.down("form").getForm().setValues(usuarios)
            }

        },

        onEditar: function(grid, rowIndex){
            var usuarios = grid.getStore().getAt(rowIndex).data

            var formulario = Ext.create('MiAppSencha.view.user.VentanaUser', {
                store: usuarios
            })
            formulario.show()
        },
    

        onEliminar: function(grid, rowIndex){

            var usuarios = grid.getStore().getAt(rowIndex).data


            Ext.Msg.confirm('Elimnar usuarios', '¿Está seguro que desea eliminarlo definitivamente?', function(respuesta){
                if(respuesta==="yes"){

                    
                    Ext.Ajax.request({
                        url: Ext.manifest.url_backend + 'usuarios/'+ usuarios.id,
                
                        method: 'DELETE',

                        success: function(response, opts) {
                        Ext.Msg.alert('Ok', 'Empleado eliminado correctamente', function(){
                        Ext.getStore('user-listado').reload();
                    })

                },
                failure: function(response, opts) {
                    console.log("El servidor falló en el código " + response.status );
                }
            
            })

        }
        
    })
},



    reloadStore: function(){
        Ext.getStore('user-listado').reload();
    },
    control: {
        actioncolumn:{
            editar:'onEditar',
            eliminar: 'onEliminar'
        }
    }

});
