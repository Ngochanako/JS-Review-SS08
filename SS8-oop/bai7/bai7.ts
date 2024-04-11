class Circle{
    private bankinh:number;
    constructor(bankinh:number){
        this.bankinh=bankinh;
    }
    get bankinh1(){
        return this.bankinh;
    }
    set bankinh1(bankinh:number){
        this.bankinh=bankinh;
    }
    dientich(){
        console.log(3.14*this.bankinh*this.bankinh)
    }
    chuvi(){
        console.log(2*this.bankinh*3.14)
    }
}
let hinhtron=new Circle(5)
hinhtron.dientich();
hinhtron.chuvi();
hinhtron.bankinh1=6
hinhtron.dientich();
hinhtron.chuvi();