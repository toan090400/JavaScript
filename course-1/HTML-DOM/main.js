// HTML DOM
/*
Có 3 thành phần: vd: <h1 class="data_1">data 1</h1>
Element:      <h1></h1>
Attribute:    class="data_1"
Text:         data 1
*/

// Thao tác với DOM

// getElement: id
// console.log(document.getElementById("button_1"));
// console.log(document.getElementById("button_2"));
// console.log(document.getElementById("button_3"));

// querySelector: class vs id
// console.log(document.querySelector(".data_1"));
// console.log(document.querySelector(".data_2"));
// console.log(document.querySelector(".data_3"));

// console.log(document.querySelector("#button_1"));
// console.log(document.querySelector("#button_2"));
// console.log(document.querySelector("#button_3"));

// Giá trị của element
/*
  thay đổi nội dung trong thẻ
  element.innerHTML =  new html content

  thêm mới class || vd: class="data_1" => class="data_1 new"
  element.classList.add("new")

  xóa class || vd: class="data_2 remove" => class="data_2"
  element.classList.remove("remove")

  thay đổi class:
  class="data_3"
  => class="data_3 new"
  => class="data_3"
  element.classList.toggle("new")

*/

// Click

document.querySelector(".data_1").onclick = (e) => {
  const h = e.target;

  console.log(h);
};

document.querySelector("#button_1").onclick = (e) => {
  const data_1 = document.querySelector(".data_1");
  data_1.classList.add("new");
  // data_1.classList.add("new", "newvip");
};

document.querySelector("#button_2").onclick = (e) => {
  const data_2 = document.querySelector(".data_2");
  data_2.classList.remove("remove");
};

document.querySelector("#button_3").onclick = (e) => {
  const data_3 = document.querySelector(".data_3");
  data_3.classList.toggle("new");
};
