let userAge = prompt("Please enter your age:");
if (userAge < 18) {
    alert("sorry you are too young to drive this car.powering off.");
}
 else if (userAge === 18) {
    alert("congratulations on your first year of driving.enjoy the ride.");
}
else if (userAge > 18) {
    alert("powering on enjoy the ride.");
}