Ext.define('spa.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    signIn: function () {
        localStorage.setItem("UserLoggedIn", true);
        this.getView().destroy();
        Ext.create({
            xtype: 'app-main'
        });
    }
});