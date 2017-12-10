var name = "Олег";
var time = "завтра о другій годині";
var place = "в центрі міста.";
var event = prompt("Ваша улюблена справа?");
while (event === "") {
    alert("Поле пусте!");
    var event = prompt("Ваша улюблена справа?");
}
console.log(name, time, "буде", event, place);

