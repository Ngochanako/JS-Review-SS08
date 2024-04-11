class Department{
    public readonly id: number;
    private name:string;
    private employee:string[];
    constructor(id:number,name:string,employee:string[]){
        this.name=name;
        this.id=id;
        this.employee=employee;
    }
    decribe(){
        console.log(this.id)
        console.log(this.name)
    }
}
let department=new Department(12,"ffr",["a","b"])
department.decribe();