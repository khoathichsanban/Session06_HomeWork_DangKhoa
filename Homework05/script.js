/* Viết chương trình yêu cầu nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học. Sau đó hiển thị tổng điểm và điểm trung bình 3 môn này lên màn hình console.
 */

let physics = prompt("Nhập điểm môn Vật lý");
let chemistry = prompt("Nhập điểm môn Hóa học");
let biology = prompt("Nhập điểm môn Sinh học");
let total = parseInt(physics) + parseInt(chemistry) + parseInt(biology);
let average = total / 3;
console.log("Tổng điểm 3 môn là: " + total);
console.log("Điểm trung bình 3 môn là: " + average);
