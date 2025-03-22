//callback
const tambah  = (param1 , param2) =>{
    return param1 + param2
}

const kurang = (param1 , param2) =>{
    return param1 - param2
}


const hitung = (param1 , param2 , aksi) => {
    let hasil = 0
    hasil = aksi(param1, param2)
    return hasil
}

console.log("satu")
//asyncs
setTimeout(function(){
    console.log("dua")
},1000)
console.log("tiga")