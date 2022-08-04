export class Task {
    taskName: string;
    isCompleted: boolean;
    isEditMode:boolean;

    constructor(task: string, isCompleted: boolean, isEditMode: boolean){
        this.isCompleted=isCompleted;
        this.taskName = task;
        this.isEditMode = isEditMode

    }
}
