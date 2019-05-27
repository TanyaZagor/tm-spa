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

// Ext.onReady(function(){
//
//     var loginForm=Ext.create('Ext.form.Panel',{
//         title: 'Авторизация',
//         width: 300,
//         height:150,
//         bodyPadding:10,
//         layout: 'anchor',
//         defaults: {
//             anchor: '80%'
//         },
//         renderTo: Ext.getBody(),
//         items: [{
//             xtype: 'textfield',
//             fieldLabel: 'Логин',
//             name: 'username'
//         },
//             {
//                 xtype: 'textfield',
//                 name: 'pass',
//                 fieldLabel: 'Пароль',
//                 inputType: 'password'
//             }],
//         buttons: [{
//             text: 'Оправить',
//             handler: function() {
//                 loginForm.getForm().submit({
//                     url: '/auth',
//                     success: function(form, action){
//                         localStorage.setItem("UserLoggedIn", true);
//                         loginForm.getView().destroy();
//                         Ext.create({
//                             xtype: 'app-main'
//                         });
//                     },
//                     // failure: function(form, action){
//                     //     Ext.MessageBox.alert('Ошибка авторизации. ');
//                     // }
//                 });
//             }
//         }]
//     });
// });
// Ext.onReady(function(){
//     //Ext.QuickTips.init();
//
//     var loginForm = Ext.create('Ext.form.Panel',{
//         url: '/login',
//         title: 'Login',
//         renderTo: Ext.getBody(),
//         frame: true,
//         cls: 'my-form-class',
//         width: 350,
//         items: [{
//             xtype: 'textfield',
//             fieldLabel: 'Login',
//             name: 'j_username'
//         },{
//             xtype: 'textfield',
//             inputType: 'password',
//             fieldLabel: 'Password',
//             name: 'j_password'
//         }, {
//             xtype: 'checkbox',
//             fieldLabel: 'Remember Me?',
//             name: '_spring_security_remember_me',
//             checked: false
//         }],
//         buttons: [{
//             id: 'lf.btn.login',
//             text: 'Login',
//             handler: function() {
//                 fnLoginForm(loginForm);
//             }
//         },{
//             id: 'lf.btn.reset',
//             text: 'Reset',
//             handler: function() {
//                 fnResetForm(loginForm);
//             }
//         }]
//     });
//
// });
// function fnLoginForm(theForm)
// {
//     theForm.getForm().submit({
//         success: function(form, action) {
//             Ext.Msg.alert('Success', 'Login Successful!', function(btn, text) {
//                 if (btn == 'ok') {
//                     window.location = homeUrl;
//                 }
//             });
//         },
//         failure: function(form, action) {
//             Ext.Msg.alert('Warning', action.result.errorMessage);
//         }
//     });
// }
//
// function fnResetForm(theForm)
// {
//     theForm.getForm().reset();
//}