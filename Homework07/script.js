/* Viết chương trình yêu cầu nhập chiều dài và chiều rộng của một hình chữ nhật. Tính toán và in chu vi, diện tích hình hình tròn đó ra màn hình console.
 */
let width = prompt("Nhập chiều rộng của hình chữ nhật");
let height = prompt("Nhập chiều cao của hình chữ nhật");
let area = width * height;
let perimeter = (width + height) * 2;
console.log("Diện tích hình chữ nhật là: " + area);
console.log("Chu vi hình chữ nhật là: " + perimeter);
