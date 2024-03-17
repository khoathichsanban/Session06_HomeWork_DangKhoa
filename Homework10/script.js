/* Cho đoạn mã sau, tính toán giá trị của result và giá trị của biến a sau khi thực hiện chương trình và giải thích sự khác nhau giữa ++a và a++ bằng comment trong code.

let a = 6;
let result = ++a + a + a++ + ++a + a;
 */
let a = 6;
let result = ++a + a + a++ + ++a + a;
console.log(result);
console.log(a);
// Giải thích:
// ++a: 7
// ++a: Giá trị của a trước khi sử dụng là 6, sau đó tăng lên 1 (trở thành 7). Nên ++a sẽ trả về 7.
// a: 7
// a vẫn giữ nguyên giá trị 7
// a++: 7
// a++: Giá trị của a trước khi sử dụng là 7, sau đó tăng lên 1 (trở thành 8). Nên a++ sẽ trả về 7.
// ++a: 9
// +a: Giá trị của a trước khi sử dụng là 8, sau đó tăng lên 1 (trở thành 9). Nên ++a sẽ trả về 9.
// a: 9
// a: Giá trị của a hiện tại là 9.
// Vậy kết quả là:
// 7 + 7 + 7 + 9 + 9 = 39
