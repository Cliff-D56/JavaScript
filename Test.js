class User {
    #courses =[];
    #messageHistory =[];
    constructor({name,surname,email,role}){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
    };
    addCourse(course,level){
        this.#courses.push({course,level})
    };
    removeCourse(course){
        let index = this.#courses.indexOf(course);
        this.#courses.forEach(element => {
            if(element.course == course)
                this.#courses.splice(index,1);
        });
    };
    editCourse(course,level){
        this.#courses.forEach(element => {
            if(element.course == course)
                this.level = level;
        });
    }
    get courses(){
        return this.#courses.length
    }
    get courseview(){
        return this.#courses
    }
    sendEmail(from,to,message){
        // console.log(`${from.name} sent ${to.name} a message`)
    }
    sendMessage(to,message){
        let from = this
        this.#messageHistory.push({from,to,message});
        this.sendEmail(from,to,message);
    }
    showMessagesHistory(){
        this.#messageHistory.forEach(element => {
            console.log(`-> ${element.to.email} -> ${element.from.email}: ${element.message}`)
        });
    }
}

let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

// student1.addCourse('maths', 2);
// student1.addCourse('physics', 1);
// student1.removeCourse('physics');
// teacher1.addCourse('biology', 3);
// teacher1.editCourse('biology', 4);
// console.log(`${student1.name}: ${student1.courses} courses`); // -> Rafael: 1 courses
// console.log(`${teacher1.name}: ${teacher1.courses} courses`); // -> Paula: 1 courses
// teacher1.sendMessage(student1, 'test message');
// teacher1.sendMessage(student1, 'another message');
// teacher1.showMessagesHistory();
'use strict';

let point = {
x: 100,
y: 200
}

function showPoint(msg) {
console.log(this);  // -> {x: 100, y: 200}
console.log(`${msg} [${this.x}:${this.y}]`); // -> coordinates [100:100]
}
showPoint.call(point, 'coordinates');