class Song{
    public readonly id: number;
    private name:string
    private length:number
    constructor(name:string,id:number,length:number){
        this.name=name;
        this.id=id;
        this.length=length
    }
    get name1(){
        return this.name;
    }
    get length1(){
        return this.length;
    }
    set name1(name:string){
        this.name=name
    }
    set length1(length:number){
        this.length=length
    }
}
let song=new Song("fff",5,9)
console.log(song.name1)
song.name1="êfhuf"
console.log(song.name1)