// Tạo chuỗi
const fullName = "nguyen duc toan VIP PRO";

//  Làm việc với chuỗi
// 1.Typeof
// console.log(typeof fullName);
// => string

// 2.Length
// console.log(fullName.length);
// => 23

// 3.Find index
// console.log(fullName.indexOf("toan"));
// => 11

// 4.Cut string
// console.log(fullName.slice(7, 10));
// => duc
// console.log(fullName.slice(0, 7));
// => nguyen

// 5.Replace
// console.log(fullName.replace("duc", "DUC"));
// => nguyen DUC toan VIP PRO

// 6.Upper case
// console.log(fullName.toUpperCase());
// => NGUYEN DUC TOAN VIP PRO

// 7.Lower case
// console.log(fullName.toLowerCase());
// => nguyen duc toan vip pro

// 8.Trim
// const nameTest = "  nguyen duc toan   ";
// console.log(nameTest.trim());
// => nguyen duc toan // bỏ 2 đầu khoảng trắng

// 9.Split
// const user = "User datavippro123 sadvc";
// console.log(user.split(""));
// => ['U', 's', 'e', 'r', ' ', 'd', 'a', 't', 'a', 'v', 'i', 'p', 'p', 'r', 'o', '1', '2', '3', ' ', 's', 'a', 'd', 'v', 'c']
// console.log(user.split(" "));
// => ['User', 'datavippro123', 'sadvc']
// console.log(user.split(" ")[1]);
// => datavippro123

// 10.get a character by index
// console.log(fullName[16]);
// => V
