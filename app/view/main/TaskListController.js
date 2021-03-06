Ext.define('app.view.main.TaskListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskListController',

    createTask: function () {
        var grid = this.lookupReference('taskListGrid');
        var store = grid.getStore();
        var name = prompt('Task name:');
        var task = Ext.create('spa.model.TaskRecord');
        task.set('name', name);
        task.set('dateCreate', new Date());
        var userStore = Ext.data.StoreManager.lookup('userStore');
        var userId = userStore.getAt(0).get('id');
        task.set('userId', userId);
        store.add(task);
        grid.getView().refresh();
    },

    deleteTask: function () {
        var grid = this.lookupReference('taskListGrid');
        if (grid.getSelectionModel().hasSelection()) {
            Ext.MessageBox.confirm('Delete', 'Are you sure?', function (result) {
                if (result === 'yes') {
                    var row = grid.getSelectionModel().getSelection();
                    grid.getStore().remove(row);
                }
            });
        }
    },

    refreshTaskList: function () {
        var grid = this.lookupReference('taskListGrid');
        // var projectStore = Ext.data.StoreManager.lookup('projectStore');
        // projectStore.load();
        grid.getStore().load();
    },

clearTasks: function () {
        var grid = this.lookupReference('taskListGrid');
        var store = grid.getStore();
        store.removeAll();
    }
});