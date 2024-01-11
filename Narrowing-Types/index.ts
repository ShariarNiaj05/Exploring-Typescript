function printToDos(toDos: string[] | null) {
  if (toDos) {
    toDos?.map((todo) => console.log(todo));
  } else {
    console.log('no toDos');
  }
}

const toDos = ["todo1", "todo2"];

// printToDos(toDos);

printToDos(null);
