Ext.define('spa.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    alias: 'widget.login',
    reference: 'login',

    requires: [
        'spa.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'loginController',
    bodyPadding: 10,
    title: 'Login',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        alias: 'form',
        // url: '/login',
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Login',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            }
        ],
        buttons: [
            {
                text: 'Sign in',
                formBind: true,
                handler: 'signIn'
            }
        ]
    }
});