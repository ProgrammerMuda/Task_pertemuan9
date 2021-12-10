const {index, store, update, destroy} = require("./fruitController.js");

const main = () => {
    console.log("Method index - Menampilkan Buah");
    index();
    console.log("\nMethod store - Menambahkan buah kiwi");
    store("Kiwi");
    console.log("\nMethod update - Update data 0 menjadi Orange");
    update(0, "Orange");
    console.log("\nMethod destroy - Menghapus data 0");
    destroy(0);
}

main();

