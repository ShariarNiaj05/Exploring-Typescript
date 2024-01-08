// enum -> store constants. Duplicate value is not allowed here
/***
 * Enum Types:
 *      Numeric
 *      String
 *      Heterogenous
 */
// Numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// String enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "read_data";
    RequestType2["saveData"] = "save_data";
    RequestType2["deleteData"] = "delete_data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// Heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "read_data";
    RequestType3["saveData"] = "save_data";
    RequestType3["deleteData"] = "delete_data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
