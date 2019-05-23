Ext.define('spa.view.main.ProjectListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.projectListController',

    createProject: function() {
        var grid = this.lookupReference('projectListGrid');
        var store = grid.getStore();
        var name = prompt('Project name:');
        var project = Ext.create('spa.model.ProjectRecord');
        project.set('name', name);
        project.set('dateCreate', new Date());
        project.set('status', 'SCHEDULED');
        store.add(project);
        grid.getView().refresh();
    },

    refreshProjectList: function () {
        var grid = this.lookupReference('projectListGrid');
        grid.getStore().reload();
    },

    clearProjects: function () {
        var grid = this.lookupReference('projectListGrid');
        var store = grid.getStore();
        store.removeAll();
    },

    deleteProject: function() {
        var grid = this.lookupReference('projectListGrid');
        if (grid.getSelectionModel().hasSelection()) {
            Ext.MessageBox.confirm('Delete', 'Are you sure?', function (result) {
                if (result === 'yes') {
                    var row = grid.getSelectionModel().getSelection();
                    grid.getStore().remove(row);
                }
            });
        }
    }
});