var StatusENUMS = {
    DELETED:'DELETED',
    ACTIVE: 'ACTIVE',
    COMPLETE:'COMPLETE'

}

var todos = {
    1: {title:"learn Javascript",status:StatusENUMS.ACTIVE},
    2: {title: 'git tutorial',status:StatusENUMS.ACTIVE},
    3:{title:'Interactive GIT',status:StatusENUMS.ACTIVE},
    }
var next_todo_id = 4;

module.exports = {
    StatusENUM:StatusENUMS,
    todos : todos,
    next_todo_id : next_todo_id
};
