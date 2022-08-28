Ext.define('MiAppSencha.view.empleado.Empleado', {
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'empleado',
    leyenda: 'empleado',
    controller: 'empleado',


    items: [
        {
            region: 'center',
            layout: 'fit',
            xtype: 'grid',
            store: {type: 'empleados'},
            title: 'Empleados',
            columns: [
                {text: 'Id', dataIndex: 'id', align: 'center'},
                {text: 'Nombre', dataIndex: 'nombre', align: 'center', flex: 1},
                {text: 'Apellido', dataIndex: 'apellido', align: 'center', flex: 1},
                {text: 'Email', dataIndex: 'email', align: 'center', flex: 2},
                {text: 'Empresa', dataIndex: 'empresa', align: 'center', flex: 1},
                

                {
                    text: "Acciones",
                    align: "center",
                    xtype: "actioncolumn",

                    items:[{
                        icon: 'resources/img/modificar.png',
                        tooltip: 'Editar',
                        handler: function(grid, rowIndex){
                            this.fireEvent("editar", grid, rowIndex)
                        }
                    },'->',
                    {
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