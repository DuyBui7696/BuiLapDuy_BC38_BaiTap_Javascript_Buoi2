//Bài 1
//Mô hình 3 khối
//input Ngày, tháng, năm
//giải:
/**
 * do giả sử ngày tháng năm nhập là hợp lệ:
 *
 * tìm ngày tiếp theo
 *
 * --tháng 1, 3, 5, 7, 8, 10, 12: nếu ngày mình nhập nhỏ hơn 31, thì ngày tiếp theo sẽ bằng ngày mình nhập + 1, tháng và năm không thay đổi
 * nếu ngày mình nhập bằng 31 thì ngày tiếp theo sẽ bằng 1, tháng tiếp theo bằng tháng + 1, năm không thay đổi
 * nếu ngày mình nhập bằng 31 và tháng bằng 12 thì ngày tiếp theo sẽ bằng 1, tháng tiếp theo bằng 1, năm tiếp theo bằng năm + 1
 * --tháng 4, 6, 9, 11: nếu ngày mình nhập nhỏ hơn 30, thì ngày tiếp theo sẽ bằng ngày mình nhập + 1, tháng và năm không thay đổi
 * nếu ngày mình nhập bằng 30 thì ngày tiếp theo sẽ bằng 1, tháng tiếp theo bằng tháng + 1, năm không thay đổi
 *  --tháng 2: nếu ngày mình nhập nhỏ hơn 28, thì ngày tiếp theo sẽ bằng ngày mình nhập + 1, tháng và năm không thay đổi
 * nếu ngày mình nhập bằng 28 thì ngày tiếp theo sẽ bằng 1, tháng tiếp theo bằng tháng + 1, năm không thay đổi
 *
 * tìm ngày trước đó
 *
 *  * --tháng 1 đến 12: nếu ngày mình nhập lớn hơn 1, thì ngày trước đó sẽ bằng ngày mình nhập - 1, tháng và năm không thay đổi
 * --tháng  5, 7, 8, 10, 12:nếu ngày mình nhập bằng 1 thì ngày trước đó sẽ bằng 30, tháng tiếp theo bằng tháng - 1, năm không thay đổi
 * nếu ngày mình nhập bằng 1 và tháng bằng 1 thì ngày trước đó sẽ bằng 31, tháng trước đó bằng 12, năm tiếp theo bằng năm - 1
 * --tháng 2, 4, 6, 9, 11: nếu ngày mình nhập bằng 1 thì ngày trước đó sẽ bằng 31, tháng tiếp theo bằng tháng - 1, năm không thay đổi
 *
 *  --tháng 3: nếu ngày mình nhập = 1, thì ngày trước đó sẽ bằng ngày 28, tháng và năm không thay đổi
 *
 *
 */

//output: tìm ngày, tháng, năm của ngày tiếp theo và ngày trước đó.

var dayOfFebruary = 0;
var day = 1;
var month = 3;
var year = 2000;
var nextDay = 0;
var nextMonth = 0;
var nextYear = 0;
var lastDay = 0;
var lastMonth = 0;
var lastYear = 0;

if(((year % 4) === 0) && ((year % 100) > 0) || (year % 400 === 0)){
   dayOfFebruary = 29;
}else{
    dayOfFebruary = 28;
}

if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  if (day < 31) {
    nextDay = day + 1;
    nextMonth = month;
    nextYear = year;
    console.log(
      "Ngày tiếp theo là: " + nextDay + "/" + nextMonth + "/" + nextYear
    );
  } else if (day === 31 && month < 12) {
    nextDay = 1;
    nextMonth = month + 1;
    nextYear = year;
    console.log(
      "Ngày tiếp theo là: " + nextDay + "/" + nextMonth + "/" + nextYear
    );
  } else if (day === 31 && month === 12) {
    nextDay = 1;
    nextMonth = 1;
    nextYear = year + 1;
    console.log(
      "Ngày tiếp theo là: " + nextDay + "/" + nextMonth + "/" + nextYear
    );
  }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  if (day < 30) {
    nextDay = day + 1;
    nextMonth = month;
    nextYear = year;
    console.log(
      "Ngày tiếp theo là: " + nextDay + "/" + nextMonth + "/" + nextYear
    );
  } else if (day === 30) {
    nextDay = 1;
    nextMonth = month + 1;
    nextYear = year;
    console.log(
      "Ngày tiếp theo là: " + nextDay + "/" + nextMonth + "/" + nextYear
    );
  }
} else if (month === 2) {
  if (day < dayOfFebruary) {
    nextDay = day + 1;
    nextMonth = month;
    nextYear = year;
    console.log(
      "Ngày tiếp theo là: " + nextDay + "/" + nextMonth + "/" + nextYear
    );
  } else if (day === dayOfFebruary) {
    nextDay = 1;
    nextMonth = month + 1;
    nextYear = year;
    console.log(
      "Ngày tiếp theo là: " + nextDay + "/" + nextMonth + "/" + nextYear
    );
  }
}
if (day > 1 && month <= 12) {
  lastDay = day - 1;
  lastMonth = month;
  lastYear = year;
  console.log(
    "Ngày trước đó là: " + lastDay + "/" + lastMonth + "/" + lastYear
  );
} else if (
  (
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12) &&
  day === 1
) {
  lastDay = 30;
  lastMonth = month - 1;
  lastYear = year;
  console.log(
    "Ngày trước đó là: " + lastDay + "/" + lastMonth + "/" + lastYear
  );
}else if(day === 1 && month === 1){
    lastDay = 31;
    lastMonth = 12;
    lastYear = year -1;
    console.log(
      "Ngày trước đó là: " + lastDay + "/" + lastMonth + "/" + lastYear
    ); 
}else if((
    month === 2 ||
    month === 4 ||
    month === 6 ||
    month === 9 ||
    month === 11) && day === 1){
        lastDay = 31;
        lastMonth = month - 1;
        lastYear = year;
        console.log(
          "Ngày trước đó là: " + lastDay + "/" + lastMonth + "/" + lastYear
        );   
    }else if(month === 3 && day === 1){
        lastDay = dayOfFebruary;
        lastMonth = month - 1;
        lastYear = year;
        console.log(
          "Ngày trước đó là: " + lastDay + "/" + lastMonth + "/" + lastYear
        );   
    }

    //Bài 2

    /**
     * input: nhập tháng, năm
     * giải: 
     * -năm nhuận:
     * tháng 1, 3, 5, 7, 8, 10, 12: có 31 ngày
     * tháng 4, 6, 9, 11: có 30 ngày
     * tháng 2: có 29 ngày
     * 
     * -năm không nhuận:
     * tháng 1, 3, 5, 7, 8, 10, 12: có 31 ngày
     * tháng 4, 6, 9, 11: có 30 ngày
     * tháng 2: có 28 ngày
     * 
     * output: số ngày của tháng đó
     */
var month = 2;
var february = 0;
var day = 0;
var year = 2400;

if(((year % 4) === 0) && ((year % 100) > 0) || (year % 400 === 0)){
    february = 29;
 }else{
     february = 28;
 }
 if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    day = 31;
    console.log("Tháng " + month + "/" + year + " có " + day + " ngày")
  }else if(month === 4 || month === 6 || month === 9 || month === 11){
    day = 30;
    console.log("Tháng " + month + "/" + year + " có " + day + " ngày")
  }else if(month === 2){
    day = february;
    console.log("Tháng " + month + "/" + year + " có " + day + " ngày")
  }

//Bài 3

/**
 * input: nhập số tự nhiên có 3 chữ số
 * giải: lấy từng số hàng trăm, hàng chục và hàng đơn vị và in ra cách đọc của từng trường hợp.
 * output: cách đọc 
 */

var number = 250;
var a = Math.floor(number / 100);
var b = (Math.floor(number / 10)) % 10;
var c = number % 10;

if(number >= 100 && number <= 999){
    if(a > 0 && b === 0 && c === 0){
        a = a;
       b = "";
       c = "";
    }else if(a > 0 && b > 0 && c === 0){
        a = a;
       b = b;
       c = "";  
    }

if(a === 1 ){
    a = "Một trăm ";
}else if(a === 2){
    a = "Hai trăm ";
}else if(a === 3){
    a = "Ba trăm ";
}else if(a === 4){
    a = "Bốn trăm ";
}else if(a === 5){
    a = "Năm trăm ";
}else if(a === 6){
    a = "Sáu trăm ";
}else if(a === 7){
    a = "Bảy trăm ";
}else if(a === 8){
    a = "Tám trăm ";
}else if(a === 9){
    a = "Chín trăm ";
}

if(b === 0 && c > 0 ){
    b = "Lẻ ";
}else if(b === 1){
    b = "Mười ";
}else if(b === 2){
    b = "Hai mươi ";
}
else if(b === 3){
    b = "Ba mươi ";
}else if(b === 4){
    b = "Bốn mươi ";
}else if(b === 5){
    b = "Năm mươi ";
}else if(b === 6){
    b = "Sáu mươi ";
}else if(b === 7){
    b = "Bảy mươi ";
}else if(b === 8){
    b = "Tám mươi ";
}else if(b === 9){
    b = "Chín mươi ";
}
if(c === 1){
    c = "Một";
}else if(c === 2){
    c = "Hai";
}
else if(c === 3){
    c = "Ba";
}else if(c === 4){
    c = "Bốn";
}else if(c === 5){
    c = "Năm";
}else if(c === 6){
    c = "Sáu";
}else if(c === 7){
    c = "Bảy";
}else if(c === 8){
    c = "Tám";
}else if(c === 9){
    c = "Chín";
}
}else{
    console.log("Số không hợp lệ");
}

console.log("Số " + number + " đọc là " + a + b + c);

// Bài 4

var name1 = "Duy";
var name2 = "Nhi";
var name3 = "Hung";
var a1 = 1;
var a2 = 12;
var a3 = 6;
var b1 = 12;
var b2 = 20;
var b3 = 25;
var x = 5;
var y = 5;
var c1 = Math.sqrt((x - a1)*(x - a1) + (y -b1)*(y -b1));
var c2 = Math.sqrt((x - a2)*(x - a2) + (y -b2)*(y -b2));
var c3 = Math.sqrt((x - a3)*(x - a3) + (y -b3)*(y -b3));

if(c3 > c1 && c3 > c2){
    console.log("Nhà của " + name3 + " xa trường học nhất");
}else if(c2 > c1 && c2 > c3){
    console.log("Nhà của " + name2 + " xa trường học nhất");
}else if(c1 > c2 && c1 > c3){
    console.log("Nhà của " + name1 + " xa trường học nhất");
}