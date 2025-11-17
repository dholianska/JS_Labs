
var a = "background-color: #00ffff; color: #ff00ff;";
a += "font-size: 24pt; font-family: 'Times New Roman'";

var naim = 'Мережа магазинів "ВСЕ ДЛЯ БУДИНКУ"';

var da = new Date();

var d = da.getDate() + "." + (da.getMonth() + 1) + "." + da.getFullYear();

document.write(
  '<P align = center style = "' + a + '">' +
  naim +
  '</P> <P> Сьогодні ' + d + '</P>'
);