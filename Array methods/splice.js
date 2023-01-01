/* 
    array.splice(startIndex, deleteCount, [values_to_be_inserted]);

    used to insert data at specified index,
    delete items at a specified index.
*/

let languages = ["HTML", "CSS", "Erlang", "Scala", "Closjure", "Haskell","Ruby","Python"];

console.log("Initially :",languages);

// lets delete Erlang, Scala, Closjure, Haskell and insert Javascript there,
languages.splice(2,4,"Javascript");

console.log("Finally :",languages);
