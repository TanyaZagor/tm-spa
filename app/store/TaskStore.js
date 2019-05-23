Ext.define('spa.store.TaskStore', {
    require: 'spa.model.TaskRecord',
    extend: 'Ext.data.Store',
    autoLoad: true,
    autoSync: true,
    pageable: true,
    pageSize: 10,
    remoteSort: true,
    pageable: true,

    alias: 'store.taskStore',

    fields: [
        'name', 'projectId', 'description', 'dateCreate', 'dateStart', 'dateFinish', 'status'
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
            read: '/api/tasks',
            create: '/api/tasks/merge',
            update: '/api/tasks/merge',
            destroy: '/api/tasks/delete'
        }
    }
});

Ext.create('spa.store.TaskStore', {
    storeId: 'taskStore'
});

