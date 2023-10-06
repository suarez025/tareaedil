import { CRUD } from "./CRUD.js";

function app() {
    let crud = new CRUD("ejemplo");
    crud.create([1, 2, 3]);
    crud.create({ message: "hola mundo" });
    crud.read(2);
    crud.update(1, "hola");
    crud.delete(1)

    let crud2 = new CRUD("ejemplo");
    console.log(crud2.readAll());
}
app();