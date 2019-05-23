Ext.define('spa.model.ProjectRecord', {
    extend: 'Ext.data.Model',

    idProperty: 'id',
    identifier: 'uuid',

    field: [
        {name: 'id', type: 'string'},
        {name:'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'dateCreate', type: 'date', dateFormat: 'c'},
        {name: 'dateStart', type: 'date', dateFormat: 'c'},
        {name: 'dateFinish', type: 'date', dateFormat: 'c'},
        {name: 'status', type: 'string'}
    ]
});