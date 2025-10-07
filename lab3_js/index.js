function str_del () {
  // Метод getSelection() повертає об'єкт selection, що представляє діапазон
  // тексту, який був виділений користувачем, або поточну позицію курсору
  selection = window.getSelection().toString();
  //console.log(selection);
  var str = document
    .getElementById("elem")
    // Метод textContent дозволяє отримати текстовий вміст елемента
    .textContent;

  // Метод indexOf() починає пошук і повертає індекс першого
  // знайденого збігу із значенням
  var start = str.indexOf(selection);
  var end = start + selection.length;
  var result = str.slice(0, start) + str.slice(end);
  //console.log(result);
  // Заповнюємо текстовий вміст елемента
  document.getElementById("elem").textContent = result;
}