/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('spa.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    beforeInit: function() {
        Ext.create('spa.store.ProjectStore', {
            storeId: 'projectStore',
            //autoLoad: true
        });
        Ext.create('spa.store.UserStore', {
            storeId: 'userStore'
        });

        Ext.create('spa.store.TaskStore', {
            storeId: 'taskStore'
        });
    },

    logout: function () {
        var view = this;
        Ext.Ajax.request({
            url: '/logout',

            success: function(response, opts) {
                localStorage.removeItem('UserLoggedIn');

                view.getView().destroy();

                Ext.create({
                    xtype: 'login'
                });
            }
        });

    }
});
