Ext.define('spa.view.main.TaskListView', {
    extend: 'Ext.panel.Panel',
    xtype: 'taskListView',
    controller: 'taskListController',

    requires: [
        'spa.store.TaskStore',
        'spa.store.StatusStore'
    ],

    items: [{
        xtype: 'grid',
        reference: 'taskListGrid',
        title: 'Task list',

        store: {
            type: 'taskStore'
        },

        selType: 'rowmodel',

        plugins: {
            ptype: 'rowediting',
            clicksToEdit: 2,
            pluginId: 'roweditingId'
        },

        tbar: [
            {text: 'Create task', handler: 'createTask'},
            {text: 'Delete', handler: 'deleteTask'}
        ],

        columns: [
            {
                text: 'Name',
                dataIndex: 'name',
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },
            {
                text: 'Project',
                dataIndex: 'projectId',
                flex: 1,
                renderer: function(projectId) {
                    var projectStore = Ext.data.StoreManager.lookup('projectStore');
                    var index = projectStore.find('id', projectId);
                    var project = projectStore.getAt(index);
                    if (project === null) return '';
                    return project.get('name');
                },
                editor: {
                    xtype: 'combobox',
                    store: {
                        type: 'projectStore',
                        pageSize: 50
                    },
                    displayField: 'name',
                    valueField: 'id',
                }
            },
            {
                text: 'Description',
                dataIndex: 'description',
                flex: 1,
                editor: {
                    xtype: 'textfield',
                    allowBlank: true
                }
            },
            {
                text: 'Date create',
                dataIndex: 'dateCreate',
                xtype: 'datecolumn',
                format: 'd.m.Y',
                flex: 1
            },
            {
                text: 'Date start',
                dataIndex: 'dateStart',
                xtype: 'datecolumn',
                flex: 1,
                format: 'd.m.Y',
                editor: {
                    xtype: 'datefield',
                    format: 'd.m.y'
                }
            },
            {
                text: 'Date finish',
                dataIndex: 'dateFinish',
                xtype: 'datecolumn',
                flex: 1,
                format: 'd.m.Y',
                editor: {
                    xtype: 'datefield',
                    format: 'd.m.y'
                }
            },
            {
                text: 'Status',
                dataIndex: 'status',
                flex: 1,
                editor: {
                    xtype: 'combobox',
                    queryMode: 'local',

                    valueField: 'name',
                    displayField: 'name',

                    store: 'statusStore'

                }
            }
        ],
        bbar: [{
            xtype: 'pagingtoolbar',
            bind:{
                store: 'taskStore'
            },
            displayInfo: true

        }]
    }],

    buttons: [
        { text: 'Clear', handler: 'clearTasks'},
        { text: 'Refresh', handler: 'refreshTaskList'}
    ]
});