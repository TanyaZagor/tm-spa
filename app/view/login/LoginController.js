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
        var view = this;
        var loginForm = this.lookupReference('form').getForm();
        loginForm.submit({
            url: '/login',
            method: 'POST',
            success: function (form, action) {
                localStorage.setItem("UserLoggedIn", true);
                localStorage.setItem("User", user);
                view.getView().destroy();
                Ext.create({
                    xtype: 'app-main'
                });
            },

        });
    }
});