
/*
Làm việc với Array

1. To string -> Chuyển dữ liệu sang kiểu string (chuỗi)
2. Join -> Biến array thành chuỗi
3. Pop -> xóa phần tử cuối mảng và trả về phần tử đó
4. Shift -> Xóa đi phần tử ở đầu mảng và trả về phần tử đã xóa
5. Push -> Thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài của mảng
6. Unshift -> Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài của mảng
7. Splicing (splice) -> Xóa, cắt, chèn phần tử mới vào mảng
8. Concat -> Nối 2 array
9. Slicing (slice) -> Cắt phần tử của mảng
*/

// let languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// let languages2 = [
//     'Dart',
//     'Java'
// ];

// console.log(languages.slice(1))

//---------------------------------------------
/*
    Array methods
        forEach() duyệt qua từng phần tử của mảng
        every() -> true/false kiểm tra tất cả các phần tử của mảng phải thỏa mãn 1 điều kiện gì đó
        some() -> true/false chỉ cần 1 phần tử trong mảng thỏa mãn điều kiện -> trả về đúng và ngừng vòng lặp
        find() tìm kiếm phần tử trong mảng -> chỉ trả về 1 phần tử tìm thấy đầu tiên trong mảng
        filter() tìm kiếm phần tử trong mảng ->  trả về tất cả phần tử tìm thấy trong mảng và đưa vào 1 mảng mới
        map()
        reduce() nhận về 1 phần tử duy nhất sau khi đã tính toán và xử lý các phần tử trong array
 */

// let courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'HTML, CSS',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'Ruby',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'PHP',
//         coin: 400
//     },
//     {
//         id: 5,
//         name: 'ReactJS',
//         coin: 500
//     },
//     {
//         id: 6,
//         name: 'Ruby',
//         coin: 10
//     }
// ];

// let listCourses = courses.filter(function (course, index) {
//     return course.name === 'Ruby'
// });
// console.log(listCourses);

// function courseHandler(course, index) {
//     // console.log(course)
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: courses
//     }

// };

// let newCourses = courses.map(courseHandler);

// console.log(newCourses);

// let totalCoin = 0;

// for (let course of courses) {
//     totalCoin += course.coin;
// }

// console.log(totalCoin);


// let totalCoin = courses.reduce(function (accumulator, currenValue) {
//     return accumulator + currenValue.coin;

// }, 0);

// console.log(totalCoin);


//---------------------------------------------

//forEach2 - xây dựng hàm hoạt động tương tự forEach

// Array.prototype.forEach2 = function (callback) {
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
//     }
// };

// let courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// courses.forEach2(function (course, index, array) {
//     console.log(course, index, array)
// });

//---------------------------------------------

// filter2 - xây dựng hàm hoạt động tương tự filter 


// Array.prototype.filter2 = function (callback) {
//     let output = [];

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             let result = callback(this[index], index, this);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }

// let courses = [
//     {
//         name: 'Javascript',
//         coin: 680
//     },
//     {
//         name: 'PHP',
//         coin: 860
//     },
//     {
//         name: 'Ruby',
//         coin: 980
//     }
// ];


// let filterCourses = courses.filter2(function (course, index, array) {

//     return course.coin > 700;
// })

// console.log(filterCourses);

//---------------------------------------------

// some2() : true/false - xây dựng hàm hoạt động tương tự some()

// Array.prototype.some2 = function (callback) {
//     let output = false

//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callback(this[index], index, this)) {
//                 output = true;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// let courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: false,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: true,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: true,
//     }
// ];

// let result = courses.some2(function (course, index) {
//     return course.isFinish;
// });

// console.log(result);

//---------------------------------------------

// every2() - xây dựng hàm hoạt động tương tự every()

// Array.prototype.every2 = function (callback) {
//     let output = true;
//     for (let index in this) {
//         if (this.hasOwnProperty(index)) {
//             let result = callback(this[index], index, this);
//             if (!result) {
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// let courses = [
//     {
//         name: 'Javascript',
//         coin: 680,
//         isFinish: false,
//     },
//     {
//         name: 'PHP',
//         coin: 860,
//         isFinish: true,
//     },
//     {
//         name: 'Ruby',
//         coin: 980,
//         isFinish: true,
//     }
// ];

// let result = courses.every2(function (course, index, array) {
//     return course.coin > 500;
// });

// console.log(result);

//---------------------------------------------
// Object 
// let emailKey = 'email';
// let myInfo = {
//     name: 'Tuan Nguyen',
//     age: 32,
//     address: 'Nam Dinh',
//     [emailKey]: 'tuannguyennd1012@gmail.com',
//     getName: function () {
//         return this.name;
//     },
//     phone: '0978348372',
//     getAge: function () {
//         return this.age;
//     }
// };



// console.log(myInfo.getAge());

//Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
// let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// let flatArray = depthArray.reduce(function (flatOuput, depthItem) {
//     return flatOuput.concat(depthItem);
// }, [])

// console.log(flatArray);





//---------------------------------------------
//Object constructor


// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }

// }

// let author = new User('Tuan', 'Nguyen', 'Avatar');
// let user = new User('Nam', 'Anh', 'Avatar');


// author.title = 'luon chia se moi thu';
// user.comment = 'bao gio ra bai hoc moi vay ad';




// console.log(author.getName());
// console.log(user.getName());


//---------------------------------------------
/*
    Object prototype - basic

    1. Prototype là gì?
    2. Sử dụng khi nào?
*/

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }

// }

// User.prototype.className = 'F8';
// User.prototype.getClassName = function () {
//     return this.className;
// }

// let user = new User('Tuan', 'Nguyen', 'Avatar 1');
// let user2 = new User('Nam', 'Anh', 'Avatar 2');

// console.log(user.className);
// console.log(user2.getClassName());


//---------------------------------------------
//Đối tượng Date

// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth() + 1; //tháng từ 0-11, thêm +1 để có giá trị của tháng hiện tại
// let day = date.getDate();



// console.log(`${day}/${month}/${year}`)


//---------------------------------------------
/*
Math object

- Math.PI
- Math.round() Làm tròn số thập phân thành số nguyên (1.1-1.4 -> 1 , 1.5-1.9 ->2)
- Math.abs() Trả về giá trị tuyệt đối, biến số âm thành số dương
- Math.ceil() Làm tròn trên số thập phân ( dù có giá trị thập phân nhỏ nhất) thành số nguyên (1.0001~ -> 2 , 1.000 -> 1)
- Math.floor() Làm tròn dưới số thập phân
- Math.random() Trả về dãy số thập phân ngẫu nhiên nhỏ hơn 1
- Math.min() Lấy số nhỏ nhất trong dãy số
- Math.max() Lấy số lớn nhất trong dãy số

*/

// let random = Math.floor(Math.random() * 100);
// // tỷ lệ random 5%
// if (random < 5) {
//     console.log('Cường hóa thành công!');
// }


//---------------------------------------------
// Cậu lệnh rẽ nhánh - If - else

// let date = 1;

// if (date === 2) {
//     console.log('Hôm nay là thứ 2');
// } else if (date === 3) {
//     console.log('Hôm nay là thứ 3');
// } else if (date === 4) {
//     console.log('Hôm nay là thứ 4');
// } else {
//     console.log('Không biết');
// }


//---------------------------------------------
// Câu lệnh rẽ nhánh - Switch Sử dụng khi biết trc giá trị
// (số case >= 3 case)

//if - else sử dụng so sánh tính đúng sai khi có các 
//toán tử < > !==

// let date = 5;

// switch (date) {
//     case 2:
//     case 3:
//     case 4:
//         console.log('Hôm nay là thứ 2, 3, 4');
//         break;
//     case 5:
//         console.log('Hôm nay là thứ 5');
//         break;
//     default:
//         console.log('Không biết');
// }

//---------------------------------------------
// Toán tử 3 ngôi - Ternary operator


// let course = {
//     name: 'Javascript',
//     coin: 250
// }

// // if (course.coin > 0) {
// //     console.log(`${course.coin} Coins`)
// // } else {
// //     console.log('Miễn phí');
// // }

// let result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';

// console.log(result);

// let a = 1;
// let b = 2;

// let c = a > 0 ? a : b;

// console.log(c);


//---------------------------------------------
/*
    Vòng lặp - Loop
1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

*/
//---------------------------------------------

// For loop

// for (let i = 1; i <= 1000; i++) {
//     console.log(i);
// }

// let myArray = [
//     'Javascript',
//     'PHP',
//     'Java',
//     'Dart'
// ];

// let arrayLength = myArray.length;

// for (let i = 0; i < arrayLength; i++) {
//     console.log(myArray[i]);
// }

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ];



// let getTotal = (orders) => {
//     let total = 0;
//     for (let i = 0; i < orders.length; i++) {
//         total += orders[i].price;
//     }
//     return total;
// }



// // Expected results:
// console.log(getTotal(orders)) // Output: 8700000


//---------------------------------------------
//For/in loop

// let languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Python',
//     'Java'
// ];

// for (key in languages) {
//     console.log(languages[key])
// }

//---------------------------------------------
//For/of loop dùng lấy ra giá trị của mảng []

// let myInfo = {
//     name: 'Tuan Nguyen',
//     age: 18
// };



// for (let value of Object.values(myInfo)) {
//     console.log(value);
// }

//---------------------------------------------
// While loop

// let myArray = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// let i = 0;

// while (i < myArray.length) {
//     console.log(myArray[i])
//     i++
// }


//---------------------------------------------
// do/while loop

// let i = 0;
// let isSuccess = false;

// do {
//     i++;

//     console.log('Nạp thẻ lần ' + i);

//     // Thành công
//     if (false) {
//         isSuccess = true;
//     }

// } while (!isSuccess && i <= 3);

//---------------------------------------------
// Break & Continue in loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);

//     if (i >= 5) {
//         break;
//     }
// }

// for (let i = 0; i < 10; i++) {

//     if (i % 2 !== 0) {
//         continue; // in ra toàn số chẵn
//     }
//     console.log(i);


// }

//---------------------------------------------
// Vòng lặp lồng nhau - Nested loop

// let myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (let i = 0; i < myArray.length; i++) {
//     for (let j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
// }

//---------------------------------------------
// Loop...

// for (let i = 100; i > 0; i -= 5) {
//     console.log(i)
// }

//---------------------------------------------
// Đệ quy
//1. Xác định điểm dừng
//2. Logic handle => Tạo ra điểm dừng

//Tính giai thừa
// (giai thừa 3) = 3 * 2 * 1 = 6
// (giai thừa 6) = 6 * 5 * 4 * 3 * 2 * 1 = 720

// function giaiThua(number) {
//     let output = 1;
//     for (let i = number; i > 0; i--) {
//         output = output * i;
//     }
//     return output;
// }

// console.log(giaiThua(6));


// function giaiThua(number) {
//     if (number > 0) {
//         return number * giaiThua(number - 1);
//     }
//     return 1;
// }

// console.log(giaiThua(6));

//---------------------------------------------
//String/Array includes()method

// let title = 'Responsive web disgin';

// console.log(title.includes('Responsive', 0));


// let courses = ['Javascript', 'PHP', 'Dart'];

// console.log(courses.includes('Javascript'));



//---------------------------------------------
//Callback

//Là hàm (function) được truyền qua đối số khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

// function myFunction(param) {
//     if (typeof param === 'function') {

//         param('Học lập trình');
//     }

// }

// function myCallback(value) {
//     console.log('Value: ', value);
// }

// myFunction(myCallback);

// Array.prototype.map2 = function (callback) {
//     let output = [], arrayLength = this.length;
//     for (let i = 0; i < arrayLength; ++i) {
//         let result = callback(this[i], i);
//         output.push(result);
//     }

//     return output;
// }

// let courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// let htmls = courses.map2(function (course) {
//     return `<h2>${course}</h2>`
// });

// console.log(htmls.join(''));

// let htmls = courses.map2(function (course) {
//     return `<h2>${course}</h2>`
// });
// console.log(htmls.join(''));


//---------------------------------------------
//HTML DOM


//Get element methods
//1. Element: ID, class, tagname, CSS selector, HTML collection
//2. Attribute
//3. Text
//  innerText: hiển thị ra những gì nhìn thấy
// textContent : hiển thị ra tất cả những text trong các thẻ style, script..

// let headingElement = document.querySelector('h1');

// headingElement.innerText = `New

// heading`;



//-----
// innerHTML, outerHTML

// let courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     let ul = document.querySelector('ul');
//     let coursesList = courses.map(function (course) {
//         return `<li>${course}</li>`
//     })
//     ul.innerHTML = coursesList.join('');
// }

// render(courses);


//---------------------------------------------
//DOM style

// let boxElement = document.querySelector('.box');

// boxElement.style.width = '100px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'red';
// cách khác
// Object.assign(boxElement.style, {
//     width: '100px',
//     height: '150px',
//     backgroundColor: 'green'
// });


//---------------------------------------------
//classList property

//add
//contains
//remove
//toggle

// let boxElement = document.querySelector('.box');

// boxElement.classList.add('red');

//---------------------------------------------
//DOM events
//1. Attribute events
//2. Assign event using the element node

// let h1Elements = document.querySelectorAll('h1');

// for (let i = 0; i < h1Elements.length; ++i) {
//     h1Elements[i].onclick = function (e) {
//         console.log(e.target);
//     }
// }

// 3. Input / select
// 4. Key up / down

// let inputElement = document.querySelector('input[type="text"]');

// inputElement.onkeyup = function (e) {
//     console.log(e.target.value);
// }

// document.onkeydown = function (e) {
//     switch (e.which) {
//         case 27:
//             console.log('EXIT');
//             break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
// }

// 5. preventDefault

// let aElements = document.links;

// for (let i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function (e) {
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }

// 6. stopPropagation

// document.querySelector('div').onclick = function () {
//     console.log('DIV')
// }

// document.querySelector('button').onclick = function (e) {
//     e.stopPropagation();
//     console.log('Click me!')
// }

// 7. DOM events / Event listener
// Xử lý nhiều việc khi 1 event xảy ra
// Lắng nghe / Hủy bỏ lắng nghe

// let btn = document.getElementById('btn');

// btn.onclick = function () {
//     console.log('Viec 1');
//     console.log('Viec 2');
//     alert('Viec 3');
// };

// setTimeout(function () {
//     btn.onclick = function () { }
// }, 3000);

// let btn = document.getElementById('btn');

// function viec1() {
//     console.log('Viec 1')
// }

// function viec2() {
//     console.log('Viec 2')
// }

// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// setTimeout(function () {
//     btn.removeEventListener('click', viec1)
// }, 3000);

//---------------------------------------------
//JSON
// 1. Là 1 định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3 . JSON: Number, String, Boolean, Null, Array, Object


//Stringify : Từ Javascript types -> JSON
// Parse : Từ JSON -> Javascript types

// let json = '["Javascript","PHP"]';
// let json = '{"name":"Tuan Nguyen","age":18}';

// let object = JSON.parse(json);

// console.log(object);

//---------------------------------------------
// Promise 
// Sync / Async

// setTimeout, setInterval, fetch, XMLHttpRequest,
// file reading, request animation frame

// Callback

// Callback hell

// setTimeout(function () {
//     console.log(1); //viec 1
//     setTimeout(function () {
//         console.log(2); //viec 2
//         setTimeout(function () {
//             console.log(3); //viec 3
//             setTimeout(function () {
//                 console.log(4); //viec 4

//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// let promise = new Promise(
//     //Executor
//     function (resolve, reject) {
//         //logic 
//         // Thành công : resolve()
//         // Thất bại : reject()
//         resolve();
//     }
// );

// promise
//     .then(function () {
//         return new Promise(function (resolve) {
//             setTimeout(resolve, 3000);
//         });
//     })

//     .then(function (data) {
//         console.log(data);
//     })

//     .catch(function (error) {
//         console.log(error);
//     })

//     .finally(function () {
//         console.log('Done');
//     })


// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function () {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function () {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(function () {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function () {
//         console.log(4);
//         return sleep(1000);
//     })


// 1. Promise.resolve
// 2. Promise.reject


// let promise = new Promise(function (resolve, reject) {
//     // resolve('Success');
//     reject('Error!');
// });

// let promise = Promise.resolve('Success');
// let promise = Promise.reject('Error');

// promise
//     .then(function (result) {
//         console.log('result: ', result);
//     })
//     .catch(function (err) {
//         console.log('result: ', err);
//     })

// 3. Promise.all

// let promise1 = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve([1]);
//     }, 2000);
// });

// let promise2 = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve([2, 3]);
//     }, 5000);
// });

// Promise.all([promise1, promise2])
//     .then(function (result) {
//         let result1 = result[0];
//         let result2 = result[1];
//         console.log(result1.concat(result2));
//     });


// let users = [
//     {
//         id: 1,
//         name: 'Kiem Dam',
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     },
//     {
//         id: 3,
//         name: 'Hung Dam'
//     }

// ];

// let comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'A chua ra video ak'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra r e oi'
//     },
//     {
//         id: 3,
//         user_id: 1,
//         content: 'vang'
//     }
// ];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 3. Từ user_id lấy ra user tương ứng

// Fake API
// 1. Array
// 2. Function, callback
// 3. Promise
// 4. DOM 

// function getComments() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(comments);
//         }, 1000);
//     });
// }

// function getUsersByIds(userIds) {
//     return new Promise(function (resolve) {
//         let result = users.filter(function (user) {
//             return userIds.includes(user.id);
//         });
//         setTimeout(function () {
//             resolve(result);
//         }, 1000);
//     }, 1000);
// }

// getComments()
//     .then(function (comments) {
//         let userIds = comments.map(function (comment) {
//             return comment.user_id;
//         });
//         return getUsersByIds([1, 2])
//             .then(function (users) {
//                 return {
//                     users: users,
//                     comments: comments,
//                 };
//             });
//     })
//     .then(function (data) {
//         let commentBlock = document.getElementById('comment-block');

//         let html = '';
//         data.comments.forEach(function (comment) {
//             let user = data.users.find(function (user) {
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });

//         commentBlock.innerHTML = html;
//     });


//---------------------------------------------
//fetch()

// let postApi = 'https://jsonplaceholder.typicode.com/posts/1/comments';

// fetch(postApi)
//     .then(function (response) {
//         return response.json();
//         //JSON.parse: JSON -> Javascript types
//     })
//     .then(function (posts) {
//         let htmls = posts.map(function (post) {
//             return `<li>
//                 <h2>${post.name}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });
//         let html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;

//     })


// let coursesApi = 'http://localhost:3000/courses';

// fetch(coursesApi)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (courses) {
//         console.log(courses)
//     })




// let courseAPI = 'http://localhost:3000/courses';

// function start() {
//     getCourses(renderCourses);
//     handleCreateForm();
// }

// start();

// //function

// function getCourses(callback) {
//     fetch(courseAPI)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(callback);
// }

// function createCourse(data, callback) {
//     let options = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(data)
//     };

//     fetch(courseAPI, options)
//         .then(function (response) {
//             response.json();
//         })
//         .then(callback);
// }

// function handleDeleteCourse(id) {
//     let options = {
//         method: 'DELETE',
//         headers: {
//             "Content-Type": "application/json",
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },

//     };

//     fetch(courseAPI + '/' + id, options)
//         .then(function (response) {
//             response.json();
//         })
//         .then(function () {
//             let courseItem = document.querySelector('.course-item' + id);
//             if (courseItem) {
//                 courseItem.remove();
//             }
//         });
// }



// function renderCourses(courses) {
//     let listCoursesBlock = document.querySelector('#list-courses');

//     let htmls = courses.map(function (course) {
//         return `
//         <li class="course-item-${course.id}">
//             <h4>${course.name}</h4>
//             <p>${course.description}</p>
//             <button onclick="handleDeleteCourse(${course.id})">Del</button>
//         </li>
//         `;
//     });
//     listCoursesBlock.innerHTML = htmls.join('');
// }

// function handleCreateForm() {
//     let createBtn = document.querySelector('#create');

//     createBtn.onclick = function () {
//         let name = document.querySelector('input[name="name"]').value;
//         let description = document.querySelector('input[name="description"]').value;

//         let formData = {
//             name: name,
//             description: description
//         };

//         createCourse(formData, function () {
//             getCourses(renderCourses);
//         });
//     }
// }