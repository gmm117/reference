//////////////// cookie ////////////////

function cookie() {
    document.cookie = "Hong's";
    document.cookie = "user_age=38";
    
    // 읽기
    console.log(document.cookie);
    
    // 변경
    document.cookie = "user_age=37";
    
    
    // 삭제
    document.cookie = "user_age=37;expires=Thu, 01 Jan 2000 00:00:01 GMT";
    
    console.log(document.cookie);
}

function localstorage() {
    // 생성
    const user = { name: "Hong's", age: 36 }  
    localStorage.setItem('user', JSON.stringify(user));

    // 읽기 (단일)
    const readUser = localStorage.getItem('user');
    if (typeof readUser === 'string') {
        console.log( JSON.parse(readUser));
    }

    // 변경
    const updatedUser = { name: "Hong's", age: 37 }  
    localStorage.setItem('user', JSON.stringify(updatedUser));

    // 삭제
    localStorage.removeItem('user');
}

function sessionstorage() {
    // 생성
    const user = { name: "Hong's", age: 36 }  
    sessionStorage.setItem('user', JSON.stringify(user));

    // 읽기 (단일)
    const readUser = sessionStorage.getItem('user');
    if (typeof readUser === 'string') {
        console.log( JSON.parse(readUser));
    }

    // 변경
    const updatedUser = { name: "Hong's", age: 37 }  
    sessionStorage.setItem('user', JSON.stringify(updatedUser));

    // 삭제
    sessionStorage.removeItem('user');
}

function indexeddb() {
    const opendb = indexedDB.open("hong_db", 1);
    opendb.onupgradeneeded = function(e) {
        console.log("running onupgradeneeded");

        const thisDB = e.target.result;
        if(!thisDB.objectStoreNames.contains("user")) {
            thisDB.createObjectStore("user");
        }

        // const transaction = thisDB.transaction(["user1"],"readwrite");
        // const store = transaction.objectStore("user1");

        // const users1 = {
        //     name: 'park'
        // }
        // const request  = store.add(users1,1);
        // request.onsuccess = function(e) {
        //     console.log(e);

        //     const data = store.get('name');
        //     console.log(data);
        // }
    }   

}

////////////////////////////////////

export default function start(): void {
    cookie();
    localstorage();
    sessionstorage();
    indexeddb();
}