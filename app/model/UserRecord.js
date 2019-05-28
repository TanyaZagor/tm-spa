Ext.define('spa.model.UserRecord', {
    extend: 'Ext.data.Model',

    idProperty: 'id',
    identifier: 'uuid',

    field: [
        {name: 'id', type: 'string'},
        {name: 'login', type: 'string'},
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'role', type: 'string'}
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
            create: '/api/signUp',
        }
    }
});