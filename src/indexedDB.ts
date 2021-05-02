import * as idb from 'idb'


let openRequest: IDBOpenDBRequest;
let db: IDBDatabase;
export async function init() {
    openRequest  = await indexedDB.open("TaskDB",1)

    openRequest.onupgradeneeded = function() {
        // срабатывает, если на клиенте нет базы данных
        // ...выполнить инициализацию...
         db =  openRequest.result
        db.createObjectStore('items',{autoIncrement:true})
        db.createObjectStore('category',{autoIncrement:true})
    };
    openRequest.onsuccess =function () {

    }
    // db.createObjectStore('items',{keyPath:'id'})
    // db.createObjectStore('category',{keyPath:'id'})

}

export async function addItem(obj:object) {
    let tx= db.transaction('items',"readwrite")
    try{
        await tx.objectStore('items').add(obj)
    }
    catch (err) {
        if (err.name === 'ConstraintError') {
            alert("Такая книга уже существует");
            //await addItem();
        } else {
            throw err;
        }
    }
}
export async function getAllItems() {
    openRequest  = await indexedDB.open("TaskDB",1)
    let res
    openRequest.onsuccess =function () {
        db =  openRequest.result
        let tx = db.transaction('items');
        let bookStore = tx.objectStore('items');
        res =  bookStore.getAll()
    }


    return res
}