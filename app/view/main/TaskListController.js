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
        grid.getStore().load();
    },

    clearTasks: function () {
        var grid = this.lookupReference('taskListGrid');
        var store = grid.getStore();
        store.removeAll();
    }
});