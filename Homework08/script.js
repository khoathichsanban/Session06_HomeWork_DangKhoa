/* Viết chương trình khai báo hằng số PI và yêu cầu nhập bán kính của một hình tròn, tính toán và in chu vi, diện tích hình chữ nhật đó ra màn hình console.
 */
const pi = 3.14;
let radius = prompt("Nhập bán kính của hình tròn");
let area = pi * radius * radius;
let perimeter = 2 * pi * radius;
console.log("Diện tích hình tròn là: " + area);
console.log("Chu vi hình tròn là: " + perimeter);
