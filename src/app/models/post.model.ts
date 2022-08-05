export class Post {
    userId: number;
    id: number;
    title:string;
    body:string;

    constructor(id: number, userId:number,title: string, body: string){
        this.userId= userId;
        this.id= id;
        this.title = title;
        this.body = body;
    }
}
