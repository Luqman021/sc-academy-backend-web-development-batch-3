import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({
        "fullName": "Luqman Hakim Mumtaz",
        "nickName": "Luqman",
    });
})

router.get('/book', (req, res) => {
    res.status(200).json({
        "daftarBukuBacaan" : {
            "statusCode": 200,
            "judulBuku": "The Lord of the Rings",
            "penulis": "J.R.R. Tolkien",
            "penerbit": "Houghton Mifflin",
            "messege": "Success"
        }
    })
})

// tugas
// buatlah sebuah operasi matematika ketika route 'operasi-matematika' di akses lakukanh operasi matematika seperti penjumlahan, pengurangan, perkalian, dan pembagian

export default router;