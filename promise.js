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

//promise

let p =new Promise((resolve,reject) =>{
    setTimeout(() => {
        let hasil =hitng(10,5,tambah)
        resolve(hasil)
    },1000)

    reject(error)
})


p.then((value) =>{
   return value
}).then((value) =>{
   value = tambah(value , 5)
   return value
}).then((value)=>{
    value = kurang(value, 10)
    console .log(value)
})

