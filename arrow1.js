//1.Regulation function
function getResult(username, points) {
    return username + points;
}
console.log(getResult('Mark', 50));
//2.Anonymous function with arrow function
var countries = function (name, code) {
    return name + " " + code;
};
var coun = countries('Thailand', 66);
console.log(coun);
//3.
var primeir = function (team, divition) {
    return team + divition;
};
console.log(primeir('Liver pool', 1));
