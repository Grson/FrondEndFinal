Ext.define('MiAppSencha.view.ListadoBase', {
   
   
   
    extend: 'Ext.Panel',

    layout:'border',
    xtype: 'listado',
  


    constructor: function(config){
        Ext.apply(this,config);

        Ext.apply(this, {

        //Posicion de una barra para agregar
        rbar:[
                {
            //xtype: 'button',
                    text: 'Agregar ' + this.leyenda,
                    icon: 'resources/img/agregar.png',
                    handler: 'mostrarFormulario'


                }
            ],
            
        });

        
        this.callParent();
    }


});