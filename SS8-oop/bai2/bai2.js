var listStuden = [];
var Student = /** @class */ (function () {
    function Student(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    Student.prototype.addStudent = function () {
        var student = {
            id: this.id,
            age: this.age,
            email: this.email
        };
        listStudent.push(student);
    };
    return Student;
}());
var student1 = new Student(1, 18, "abc");
var student2 = new Student(2, 13, "kkk");
student1.addStudent();
student2.addStudent();
console.log(listStudent);
listStudent.forEach(function (item) { return console.log(item); });
