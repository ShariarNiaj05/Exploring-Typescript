// enum -> store constants. Duplicate value is not allowed here

/***
 * Enum Types:
 *      Numeric
 *      String
 *      Heterogenous
 */

// Numeric enum

enum RequestType {
  readData,
  saveData,
  deleteData,
}

// console.log(RequestType);

// String enum
enum RequestType2 {
  readData = "read_data",
  saveData = "save_data",
  deleteData = "delete_data",
}

// console.log(RequestType2);

// Heterogenous enum
enum RequestType3 {
  readData = "read_data",
  saveData = "save_data",
  deleteData = "delete_data",
  id = 101,
}

console.log(RequestType3);