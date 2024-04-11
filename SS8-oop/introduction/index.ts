// các cahs tạo đối tượng
// 1.let k={}
// 2.let k=new Object()
// 3.dùng function
// 4.tạo class

/*đối tượng gồm 2 thành phần:
+ thuộc tính
+phương thức
OOP gồm 4 tính chất
1.tính đóng gói
+che giấu thông tin đối tượng giúp cho các truy cập đến đối tượng bảo mật hơn
+access modifier: phạm vi truy cập
-public
-private
-proceted liên quan đến kế thừa 
khi class con kế thừa từ class cha nên sẽ có các thuộc tính và phương thức của class cha
khi phạm vi proceted thì class con ko truy cập được thuộc tính của class cha
2.tính trừu tượng
3.tính kế thừa
4.tính đa hình


*/
class Person{
    name1:string;//mặc định phạm vi truy cập là public
    private age1:number;//phạm vi private không truy cập từ ngoài được
    firstName:string;
    lastName:string;
    private address:string;
    constructor(name:string,age:number,firstName:string,lastName:string,address:string){
        this.name1=name;
        this.age1=age;
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
    }
    //nơi khai báo những phương thức
    showInfo():void{
        console.log("xin chào",this.firstName+this.lastName)
    }
    showName():void{
        console.log(this.name1)
    }
    setAge(age:number){
        this.age1=age;
    }
    //getter
    get address1(){
        return this.address;
    }
    //setter
    set address1(address:string){
        this.address=address;
    }
}
let std1=new Person("ngoc",18,"minh","thu","ha noi");//std1 là 1 instance của class Person
std1.showInfo();
std1.name1="minh";//do phạm vi truy cập là public
std1.age1=2// lỗi do phạm vi truy cập là private
std1.setAge(10)
std1.address1="sai gon"



