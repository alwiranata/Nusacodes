const amazingPromise =  () =>{
    return new Promise((resolve ,reject) =>{
        const waktu = 6000

        if ( waktu < 5000) {
            setTimeout(() =>{
                resolve("Promise berhasil dijalankan")
            ,1000})
        } else {
            reject("Proses data terlalu lama")
        }
    })
}

const runAsync = () =>{
    try {
        fetch('https://jsonplaceholder.typicode.com/posts/1 ')
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (error){
        console.error(error)
    }
}

runAsync()