Ext.define('spa.view.login.SignUp', {
    extend: 'Ext.window.Window',
    xtype: 'signUp',
    alias: 'widget.signUp',

    requires: [
        'spa.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'SignIn',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',

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
            },
            {
                xtype: 'textfield',
                name: 'firstName',
                fieldLabel: 'First name',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'lastName',
                fieldLabel: 'Last name',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email',
                allowBlank: false
            },
        ],
        buttons: [
            {
                text: 'Sign up',
                formBind: false,
                handler: 'signIn'
            }
        ]

    }


});