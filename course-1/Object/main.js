// Tạo Object
const ObjectUser = {
  name: "Name 1",
  age: 20,
  user: {
    username: "admin",
    email: "admin@gmail.com",
  },
};
// console.log(ObjectUser);

// ObjectUser.age = 20;
// ObjectUser.user.username = 20;
// console.log(ObjectUser);

//  Làm việc với Object

// 1.Typeof
// console.log(typeof ObjectUser);
// => object

// 2.JSON.stringify
// console.log(JSON.stringify(ObjectUser));
// => chuyển kiểu Object thành kiểu chuỗi

// 3.JSON.parse
// const newObject = JSON.stringify(ObjectUser);
// console.log(newObject);
// const chuoiObject = JSON.parse(newObject);
// console.log(chuoiObject);
// => chuyển 'Object chuỗi' thành Object
