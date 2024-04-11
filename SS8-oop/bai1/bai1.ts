class Vehicle{
    name:string;
    year:number;
    company:string;
    constructor(name:string,year:number,company:string){
        this.name=name;
        this.year=year;
        this.company=company;
    }
}
let vehicle1=new Vehicle("Vf5",2020,"Vin");
console.log(vehicle1);
let vehicle2=new Vehicle("Vf6",2019,"VIn");
console.log(vehicle2)