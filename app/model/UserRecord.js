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
    ]
});