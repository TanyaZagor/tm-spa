Ext.define('spa.view.main.UserView', {
    extend:'Ext.form.Panel',
    xtype: 'userView',

    // requires: [
    //     'spa.store.UserStore'
    // ],
    //
    // store: {
    //     type: 'userStore'
    // },

    title: 'User info',
    items: [
        {
            xtype: 'dataview',
            store: {
                type: 'userStore'
            },
            itemTpl: '<div>Login: {login}</div>'
        }
    ]

});