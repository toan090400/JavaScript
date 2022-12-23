// Tạo mảng
const arr = [
  "nguyen duc toan",
  2000,
  "nonichname",
  "gokuvl123",
  {
    id: 1,
    name: "name 1",
  },
  {
    id: 2,
    name: "name 2",
  },
  ["nonichname", "gokuvl123"],
];
// console.log(arr);

//  Làm việc với mảng

// 1.Typeof
// console.log(typeof arr);
// => object

// 2.Length
// console.log(arr.length);
// => 7

// 3.toString
// console.log(arr.toString());
// => nguyen duc toan,2000,nonichname,gokuvl123,[object Object],[object Object],nonichname,gokuvl123

// 4.Join
// console.log(arr.join());
// => nguyen duc toan,2000,nonichname,gokuvl123,[object Object],[object Object],nonichname,gokuvl123
// console.log(arr.join(" - "));
// => nguyen duc toan - 2000 - nonichname - gokuvl123 - [object Object] - [object Object] - nonichname,gokuvl123

// 5.Push
// const newArr = arr.push(
//   {
//     id: 3,
//     name: "new name",
//   },
//   1000
// );
// console.log(arr);
// => thêm dữ liệu mới vào cuối mảng

// 6.Unshift
// const newArr = arr.unshift(
//   {
//     id: 3,
//     name: "new name",
//   },
//   "newData"
// );
// console.log(arr);
// => thêm dữ liệu mới vào đầu mảng

// 7.Pop
// console.log(arr.pop());
// =>  ['nonichname', 'gokuvl123'] //xóa phần tử cuối và trả về

// 8.Shift
// console.log(arr.shift());
// =>  ['nonichname', 'gokuvl123'] //xóa phần tử đầu và trả về

// 9.Concat
// const arr1 = ["nguyen", 9, 4, 2000];
// const arr2 = ["duc", "toan"];
// console.log(arr1.concat(arr2));
// => ['nguyen', 9, 4, 2000, 'duc', 'toan'] // nối mảng lại với nhau
