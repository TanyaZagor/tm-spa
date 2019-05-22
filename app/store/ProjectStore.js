Ext.define('spa.store.ProjectStore', {
    require: 'spa.model.ProjectRecord',
    model: 'spa.model.ProjectRecord',
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    pageSize: 10,
    pageable: true,

    alias: 'store.projectStore',

    fields: [
        'name', 'description', 'dateStart', 'dateFinish', 'status'
    ],

    proxy: {
        type: 'ajax',

        writer: {
            type: 'json',
            allowSingle: false,
            writeAllFields: true
        },

        reader: {
            type: 'json',
            totalProperty: 'totalElements',
            rootProperty: 'content',
        },

        api: {
            read: '/api/projects',
            create: '/api/projects/merge',
            update: '/api/projects/merge',
            destroy: '/api/projects/delete'
        }
    }
});

Ext.create('spa.store.ProjectStore', {
    storeId: 'projectStore'
});
