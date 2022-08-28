Ext.define('MiAppSencha.view.telefono.Telefono', {
    extend: 'MiAppSencha.view.ListadoBase',
    xtype: 'telefono',
    leyenda: 'telefono',
    controller: 'telefono',


    items: [
        {
            region: 'center',
            layout: 'fit',
            xtype: 'grid',
            store: {type: 'telefonos'},
            title: 'Telefonos',
            columns: [
                {text: 'Id', dataIndex: 'id', align: 'center'},
                {text: 'Tipo', dataIndex: 'tipo', align: 'center', flex: 2},
                {text: 'Pais', dataIndex: 'pais', align: 'center', flex: 2},
                {text: 'Número', dataIndex: 'numero', align: 'center', flex: 2},
                {text: 'Empleado', dataIndex: 'empleado', align: 'center', flex: 1},
                
            ],

            

            
            listeners:{
                itemcontextmenu: function(grid, record, item, Index, e){
                    var contextMenu = Ext.create('Ext.menu.Menu',{
                        controller: 'telefono',
                        items:
                        [
                            {
                                text: 'Editar',
                                itemId: 'editar',
                                icon: 'resources/img/modificar.png',
                                handler: function(){
                                    this.fireEvent("editar", grid, Index)
                                }
                            },
                            {
                                text: 'Eliminar',
                                itemId: 'eliminar',
                                icon: 'resources/img/eliminar.png',
                                handler: function(){
                                    this.fireEvent("eliminar", grid, Index)

                                }
                            }
                        ]
                    });

                    contextMenu.showAt(e.getXY());
                    e.stopEvent();
                }
            }
            
        }

    ]


});