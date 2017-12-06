var name = prompt("Введіть ваше ім'я");
while (name === "") {
    alert("Ви не ввели ім'я");
    var name = prompt("Введіть ваше ім'я");
}
var time = prompt("О котрій годині Ви будете вільні?");
while (time === "") {
    alert("Ви не ввели годину");
    var time = prompt("О котрій годині Ви будете вільні?");
}
var place = "вдома";
var event = prompt("Чим Ви любите займатися у вільний час?");
while (event === "") {
    alert("Ви не ввели чим ви любите займатися");
    var event = prompt("Чим Ви любите займатися у вільний час?");
}
console.log(name, "сьогодні о", time, "годині буде", event, place);
