Ext.define('MiAppSencha.view.telefono.TelefonoController', {
    extend: 'Ext.app.ViewController',


    alias: "controller.telefono",

    mostrarFormulario: function(){
        var window = Ext.create('MiAppSencha.view.telefono.VentanaTelefono');
        window.show();
    },


        enviarDatos: function(){
            var vista = this.getView();
            var formulario = vista.down('form');

                if(formulario.isValid()){
                    var datos = formulario.getValues();



                    if(vista.title !== "Editar telefono"){

                        Ext.Ajax.request({
                            url: Ext.manifest.url_backend + 'telefonos',
                            jsonData: Ext.util.JSON.encode(datos),
                            scope: vista,
                            success: function(response, opts) {
                                Ext.Msg.alert('Ok', 'telefono creada correctamente', function(){
                                this.close();
                                }, this)
                        },
                        failure: function(response, opts) {
                            console.log("El servidor falló en el código " + response.status );
                        }
    
                    })
                    }else{
                        //editar telefono
                        var id = vista.down("#id").value


                        Ext.Ajax.request({
                            url: Ext.manifest.url_backend + 'telefonos/' + id,

                            method: 'PUT',
                            jsonData: Ext.util.JSON.encode(datos),
                            scope: vista,
                            success: function(response, opts) {
                                Ext.Msg.alert('Ok', 'telefono editado correctamente', function(){
                                    this.close()
                                }, this)
                           
                        },
                        failure: function(response, opts) {
                            console.log("El servidor falló en el código " + response.status );
                    }
    
                })

             }
        }
    },


    llenarDatos: function(){
        var vista = this.getView()

        //se obtiene los datos
        var telefono = vista.store
        if(telefono){
            vista.setTitle("Editar telefono")
            vista.down('form').getForm().setValues(telefono)
        }
    },


    onEditar: function(grid, rowIndex){

        //index de la fila
        var telefono = grid.getStore().getAt(rowIndex).data 
        var formulario = Ext.create('MiAppSencha.view.telefono.VentanaTelefono', {
            store: telefono
        })
        formulario.show()
    },


                onEliminar: function(grid, rowIndex){

                    //Se obtiene la telefono 
                    var telefono = grid.getStore().getAt(rowIndex).data 
                    Ext.Msg.confirm('Eliminar telefono', '¿Desea eliminarlo permanenetemente?', function(respuesta){
                        if(respuesta === 'yes'){
                            Ext.Ajax.request({
                                url: Ext.manifest.url_backend + 'telefonos/'+ telefono.id,

                                success: function(response, opts){
                                var empleados = Ext.decode(response.responseText)



                                
                                    Ext.Ajax.request({
                                        url: Ext.manifest.url_backend + 'telefonos/'+ telefono.id,
                                    
                            
                                        method: 'DELETE',

                                        success: function(response, opts) {
                                        Ext.Msg.alert('Ok', 'Telefono eliminado correctamente', function(){
                                        Ext.getStore('telefonos-listado').reload();
                                        })
                                
                                    },
                                failure: function(response, opts) {
                                    console.log("El servidor falló en el código " + response.status );
                                }

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
        Ext.getStore('telefonos-listado').reload();

    },

    control: {
        '#editar':{
            editar:'onEditar',
        },
        '#eliminar':{
            eliminar: 'onEliminar'
        }
    }
    
})