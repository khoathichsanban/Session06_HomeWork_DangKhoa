/* Chạy chương trình sau, kiểm tra kết quả trong màn hình console và giải thích bằng comment trong code:
let a = 5;
let b= “5”;
console.log(a==b);  console.log(a===b);
console.log(a!=b);  console.log(a!==b);
 */
let a = 5;
let b = "5";
console.log(a == b); // true
console.log(a === b); // false
console.log(a != b); // false
console.log(a !== b); // true
// Giải thích:
// a == b: true vì giá trị của a và b giống nhau
// a === b: false vì a và b khác nhau về kiểu dữ liệu
// a != b: false vì giá trị của a và b giống nhau
// a !== b: true vì a và b khác nhau về kiểu dữ liệu
// Vậy kết quả là:
// true
// false
// false
// true
