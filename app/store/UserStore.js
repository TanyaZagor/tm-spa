Ext.define('spa.store.UserStore', {
    extend: 'Ext.data.Store',
    require: 'spa.model.UserRecord',

    fields: [
        'login', 'firstName', 'lastName', 'email', 'role'
    ],

    proxy: {
        type: 'ajax',

        writer: {
            type: 'json',
            allowSingle: false,
            writeAllFields: true
        },

        reader: {
            type: 'json'
        },

        api: {
            read: '/api/user'
            // create: '/api/user/merge',
            // update: '/api/user/merge',
            // destroy: '/api/user/delete'
        }
    }
});