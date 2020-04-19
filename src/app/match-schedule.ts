export class MatchSchedule{
    public type:string;
    public ground:string;
    public opposition:string;
    public date:Date;

    constructor(type:string, ground:string, opposition:string, date:Date){
        this.type = type;
        this.ground = ground;
        this.opposition = opposition;
        this.date = date;
    }
}
