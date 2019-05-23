Ext.define('spa.view.main.ProjectListView', {
    extend: 'Ext.panel.Panel',
    xtype: 'projectListView',
    controller: 'projectListController',

    requires: [
        'spa.store.ProjectStore',
        'spa.store.StatusStore'
    ],

    items: [{
        xtype: 'grid',
        reference: 'projectListGrid',
        title: 'Project list',

        store: 'projectStore',

        selType: 'rowmodel',

        plugins: {
            ptype: 'rowediting',
            clicksToEdit: 2,
            plaginId: 'roweditingId'
        },
        tbar: [
            {text: 'Create project', handler: 'createProject'},
            {text: 'Delete', handler: 'deleteProject'}
        ],
        columns: [
            {
                text: 'Name',
                dataIndex: 'name',
                editor: {
                    xtype: 'textfield',
                    allowBlanck: false
                }},
            {
                text: 'Description',
                dataIndex: 'description',
                flex: 1,
                editor: {
                    xtype: 'textfield',
                    allowBlanck: true
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
                format: 'd.m.Y',
                flex: 1,
                editor: {
                    xtype:'datefield',
                    format: 'd.m.Y'
                }
            },
            {
                text: 'Date finish',
                dataIndex: 'dateFinish',
                xtype: 'datecolumn',
                format: 'd.m.Y',
                flex: 1,
                editor: {
                    xtype:'datefield',
                    format: 'd.m.Y'
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
                store: 'projectStore'
            },
            displayInfo: true,

        }]
    }],


    buttons: [
        {text: 'Clear', handler: 'clearProjects'},
        {text: 'Refresh', handler: 'refreshProjectList'}
    ]
});