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

let fibonachi = function(num){
    let array = [...Array(num-1).keys()].map((item)=>item+1)
    console.log(array)
    // return n<=1?0:fibonachi(num);
}
// fibonachi(9)
let p = new Promise (function(resolve, reject) {
    setTimeout(() => resolve('Papa'), 1000);
});

p.finally(() => console.log('promise is settled')).then(v => console.log(`HI ${v}`)).catch(e => console.log(e));

function* test(){
    let i = 10;
    while(i){
        yield i;
        i++
    }
    return 0
}
let gen = test()
console.log(`${gen.next().value}`)
console.log(`${gen.next().value}`)
console.log(`${gen.next().value}`)