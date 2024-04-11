let listStudent:{id:number,age:number,email:string}[]=[];
class Student{
    id:number;
    age:number;
    email:string;
    constructor(id:number,age:number,email:string){
        this.id=id;
        this.age=age;
        this.email=email;
    }
    addStudent(){
        let student={
            id:this.id,
            age:this.age,
            email:this.email
        }
        listStudent.push(student)
    }
}
let student1=new Student(1,18,"abc");
let student2=new Student(2,13,"kkk");
student1.addStudent();
student2.addStudent();
listStudent.forEach(item=> console.log(item));