// Variable

// variable tipe data string
const variableSatu = "ini isi variable";
console.log(variableSatu);

// variable tipe data integer
const variableDua = 10;
console.log(variableDua);

// variable tipe data desimal
const variableTiga = 3.14;
console.log(variableTiga);

// variable tipe data boolean
const variableEmpat = false;
console.log(variableEmpat);

// Fucntion
let data1 = true;
let data2 = false;
function coba(data1, data2) {

    // eksekusi kode disini
    if(data1 === true){
        data1 = "Berhasil login";
    }else{
        data1 = "Gagal Login";
    }

    console.log(data1);
}
coba(data1,data2)

// Perkalian
console.log(5*5);
console.log(5+5);

function perkalian(x, y) {
return x * y;
return x / y;
return x + y;
return x - y;
}