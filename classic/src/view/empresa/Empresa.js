/* ---------------------------------------------------------------------------------------------
                       Obtiene los datos en el store y lo muestra en el panel

*/




Ext.define('MiAppSencha.view.empresa.Empresa',{
    extend: 'MiAppSencha.view.ListadoBase',

    xtype: 'empresa',


    controller: 'empresa',

   leyenda: 'empresa',


    items:[
        {
            region: 'center',
            layout: 'fit',
            xtype: 'grid',
            title: 'Empresas',
            store:{type: 'empresas'},

            columns:[

                    {text: 'Id', dataIndex: 'id', align:'center', flex:1},
                    {text: 'Nombre', dataIndex: 'nombre', align:'center', flex:1},

                    {text: 'Fecha de inicio', dataIndex: 'fechaInicio', align:'center', flex:1, align:'center', xtype: "datecolumn", format: "m-d-Y"},

                    {text: 'Hora de inicio', dataIndex: 'horaInicio', align:'center', flex:1},
                    {text: 'Dirección', dataIndex: 'direccion', align:'center', flex:1},


                    

            ],

            listeners:{
                itemcontextmenu: function(grid, record, item, Index, e){
                    var contextMenu = Ext.create('Ext.menu.Menu',{
                        controller: 'empresa',
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