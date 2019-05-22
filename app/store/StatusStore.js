Ext.define('spa.store.StatusStore', {
    extend: 'Ext.data.Store',
    requires: 'spa.model.Status',
    alias: 'store.statusStore',

    fields: [
        'name'
    ],

    data: [
        {name: 'DONE'},
        {name: 'IN_PROGRESS'},
        {name: 'SCHEDULED'}
    ],

    proxy: {
        type: 'memory',

        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});

Ext.create('spa.store.StatusStore', {
    storeId: 'statusStore'
});