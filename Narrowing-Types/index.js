function printToDos(toDos) {
    if (toDos) {
        toDos === null || toDos === void 0 ? void 0 : toDos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log('no toDos');
    }
}
var toDos = ["todo1", "todo2"];
// printToDos(toDos);
printToDos(null);
