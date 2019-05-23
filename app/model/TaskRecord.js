Ext.define('spa.model.TaskRecord', {
    extend: 'Ext.data.Model',

    idProperty: 'id',
    identifier: 'uuid',

    field: [
        {name: 'id', type: 'string'},
        {name: 'projectId', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'dateCreate', type: 'date', dateFormat: 'c'},
        {name: 'dateStart', type: 'date', dateFormat: 'c'},
        {name: 'dateFinish', type: 'data', dateFormat: 'c'},
        {name: 'status', type: 'string'}
    ]
});