// 1. Let, const
// Var / Let, const : Scope(phạm vi truy cập), Hosting (đưa biến lên đầu) Var đc hỗ trợ, Let, const ko đc hỗ trợ
// Const / Var, Let : Assignment . const ko thể gán lại biến lần thứ 2

// Code block: if else, loop, {}, ....

// Code thuần: Var
// Thư viện Babel : Const, Let
// - khi định nghĩa biến k gán lại biến đó : Const
// - khi gán lại giá trị cho biến : Let

// if (true) {
//     var course = 'Javascript basic';
// }

// console.log(course);

//----------------------------------------------------------------
// 2. Template literals

// const courseName = 'Javascript';
// const courseName2 = 'PHP';
// // const description = 'Course name: ' + courseName;
// const description = `Course name: ${courseName} ${courseName2}`;
// console.log(description);

//----------------------------------------------------------------
// 3. Multi-line string 

// const lines = 'Line 1\n'
//     + 'Line 2\n'
//     + 'Line 3\n'
//     + 'Line 4\n'
//     + 'Line 5\n'
// console.log(lines);

// const lines = `Line 1
// Line 2
// Line 3
// `;
// console.log(lines);

//----------------------------------------------------------------
// 4. Arrow function 

// Decoration function
// function logger(log) {
//     console.log(log);
// }

// Function expressions
// const logger = function (log) {
//     console.log(log);
// };

// logger('Hello World!'); 


// Arrow function
// const logger = (log) => {
//     console.log(log);
// };

// logger('Hello World!'); 

// const sum = (a, b) => {
//     return a + b;
// };

// console.log(sum(2, 2));

// const sum = (a, b) => a + b;

// console.log(sum(2, 2)); 

//----------------------------------------------------------------
// 5. Classes

// function Course(name, price) {
//     this.name = name;
//     this.price = price;
//     this.getName = function () {
//         return this.name;
//     }
// }

// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     getName() {
//         return this.name;
//     }
//     getPrice() {
//         return this.price;
//     }

//     run() {
//         const isSuccess = false;

//         if (isSuccess) {
//             console.log('Success!');
//         } else {
//             console.log('Failed!');
//         }
//     }
// }

// const phpCourse = new Course('PHP', 1000);
// const jsCourse = new Course('Javascript', 2000);

// console.log(phpCourse);
// console.log(jsCourse);

//----------------------------------------------------------------
// 6. Default parameters valures

// function logger(log) {
//     if (typeof log === 'undefined') {
//         log = 'Gia tri mac dinh!'
//     }
//     console.log(log);
// }

// function logger(log = 'Gia tri mac dinh!') {
//     console.log(log);
// }

// logger(1); 

// function logger(log, type = 'log') {

//     console[type](log);
// }

// logger('Message...');


//----------------------------------------------------------------
// 7. Enhanced object literals
// - Định nghĩa key: value cho object
// - Định nghĩa method cho object
// - Định nghĩa key cho object dưới dạng biến

// let name = 'JavaScript';
// let price = 1000;

// let course = {
//     name: name,
//     price: price,
//     getName: function () {
//         return name;
//     }
// };

// console.log(course);

// let name = 'JavaScript';
// let price = 1000;

// let course = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// };

// console.log(course.getName());

// let fieldName = 'name';
// let fieldPrice = 'price';

// const course = {
//     [fieldName]: 'JavaScript',
//     [fieldPrice]: 1000,
// };

// console.log(course);    

//----------------------------------------------------------------
// 8. Destructuring

// let array = ['JavaScript', 'HTML', 'CSS'];

// // let a = array[0];
// // let b = array[1];
// // let c = array[2];

// let [a, b, c] = array;

// console.log(a, b, c);


//----------------------------------------------------------------  
// 9. Rest parameters

// let array = ['JavaScript', 'HTML', 'CSS'];

// // let a = array[0];
// // let b = array[1];
// // let c = array[2];

// let [a, b, ...rest] = array;


// console.log(a);
// console.log(rest);

// let course = {
//     name: 'Javascript',
//     price: 1000,
//     image: 'image-address',
//     // description: 'description value',
//     children: {
//         name: 'ReactJS'
//     }
// };

// let { name: parentName, description = 'default description', children: { name } } = course;

// console.log(parentName);
// console.log(name);
// console.log(description);


// function logger(...params) {
//     console.log(params);
// }

// console.log(logger(1, 2, 3, 4, 5));

// function logger([a, b, ...rest]) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// logger([1, 2, 3, 4, 5]);

//----------------------------------------------------------------  
// 10. Spread

// let array1 = ['JavaScript', 'HTML', 'CSS'];

// let array2 = ['ReactJS', 'VueJS', 'ReactNative'];

// let array3 = [...array2, ...array1];

// console.log(array3);

// let object1 = {
//     name: 'JavaScript'
// };

// let object2 = {
//     price: 1000
// };

// let object3 = {
//     ...object1,
//     ...object2
// };

// console.log(object3);

// let array = ['JavaScript', 'HTML', 'CSS'];

// function logger(...rest) {
//     for (var i = 0; i < rest.length; i++)
//         console.log(rest[i]);
// }

// logger(...array);


//----------------------------------------------------------------  
// 11. Tagged template literals
// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//         [first])
//         .join('');

// }

// let brand = 'F8';
// let course = 'Javascript';

// const html = highlight`Học lập trình ${course} tại ${brand} !`;
// console.log(html);

//----------------------------------------------------------------  
// 12. Modules: Imports / Exports

// import logger from './logger.js';
// import * as constants from './constants.js';

// console.log(constants);
// // logger('Hello World!', TYPE_WARN); 


//----------------------------------------------------------------  
// 13. Optional chaining (?.)

const obj = {
    name: 'Alice',
    // cat: {
    //     name: 'Kitty',
    //     cat2: {
    //         name: 'Luna',
    //         cat3: {
    //             name: 'Lily'
    //         }
    //     }
    // }
}

if (
    // obj.cat &&
    // obj.cat.cat2 &&
    // obj.cat.cat2.cat3
    obj?.cat?.cat2?.cat3
) {
    console.log(obj.cat.cat2.cat3.name);
}
