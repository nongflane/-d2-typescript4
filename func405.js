function display(name, greeting, favorit) {
    if (greeting === void 0) { greeting = 'Hello'; }
    return greeting + ' ' + name;
}
console.log(display('Mark'));
var a = display('Jame', 'Hi');
console.log(a);
var b = display('Jeff', 'How are you', 'I love banana');
console.log(b);
