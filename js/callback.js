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

console.log(hitung(1, 2,tambah))
console.log(hitung(1, 2,kurang))