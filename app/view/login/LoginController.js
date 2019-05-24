Ext.define('spa.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginController',
    //
    // signIn: function () {
    //     localStorage.setItem("UserLoggedIn", true);
    //     this.getView().destroy();
    //     Ext.create({
    //         xtype: 'app-main'
    //     });
    // }

    signIn: function () {
        this.lookupReference('form').getForm().submit({
            url: '/login',
            method: 'POST',
            success: function () {
                localStorage.setItem("UserLoggedIn", true);
                this.getView().destroy();
                Ext.create({
                    xtype: 'app-main'
                });
            }
        });
        // localStorage.setItem("UserLoggedIn", true);
        // this.getView().destroy();
        // Ext.create({
        //     xtype: 'app-main'
        // });

    }
});