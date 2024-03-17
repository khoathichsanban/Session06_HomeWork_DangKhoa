/* Viết chương trình yêu cầu nhập một giá trị là độ C (Celsius) và chuyển nó sang độ F (Fahrenheit), in kết quả ra màn hình console. [Hướng dẫn: C/5 = (F-32)/9].
 */
let celsius = prompt("Nhập độ C");
let fahrenheit = (celsius / 5) * 9 + 32;
console.log("Độ F là: " + fahrenheit);
