/*  CRUD usuarios */

Ext.define('MiAppSencha.view.user.User',{
    extend: 'MiAppSencha.view.ListadoBase',

    
    xtype: 'user',
    
   leyenda: 'usuarios',
   controller: 'user',



   items: [
    {
        //caracteristicas
        region: 'center',
        layout: 'fit',
        xtype: 'grid',
        store: {type: 'user'},
        title: 'Usuarios',

        //datos de columna
        columns: [
            {text: 'Id', dataIndex: 'id', align: 'center', flex: 1},
            {text: 'Correo eléctronico', dataIndex: 'email', align: 'center', flex: 3},
            {text: 'Contraseña', dataIndex: 'password', align: 'center', flex: 2},
          
            
            //Botones de editar y eliminar
            {
                text: "Acciones",
                align: "center",
                xtype: "actioncolumn",

                items:[{

                    //Editar
                    icon: 'resources/img/modificar.png',
                    tooltip: 'Editar',
                    handler: function(grid, rowIndex){
                        this.fireEvent("editar", grid, rowIndex)
                    }

                //Espacio entre los dos botones
                },'->',
                {
                    //Eliminar
                    icon: 'resources/img/eliminar.png',
                    tooltip: 'Eliminar',
                    handler: function(grid, rowIndex){
                        this.fireEvent("eliminar", grid, rowIndex)
                    }
                }]
            }
            
        ]
        
    }

]


});