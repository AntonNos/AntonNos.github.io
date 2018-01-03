var name = "John";
var time = "at 8 o'clock";
var place = "at home";
var event = prompt("What do you like to do in your free time?");
while (event === "") {
    alert("field is empty");
    event = prompt("What do you like to do in your free time?", "eating");
}
console.log(name, "will be ", event, time, place);
