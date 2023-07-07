<?php
session_start();

// Koneksi ke database
// Koneksi ke database
$host = "localhost";
$username = "id20751189_pesonalokal2023";
$database = "id20751189_pesonalokal";
$password = "Pesonalokal2023.";

$conn = new mysqli($host , $username, $password, $database);
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   // Ambil data dari form login
// Ambil data dari form login
$email = $_POST['email'];
$password = $_POST['password'];

// Query untuk mencari data user berdasarkan email
$query = "SELECT * FROM Users WHERE email = '$email'";
$result = mysqli_query($conn, $query);

if ($result) {
    // Cek apakah email ditemukan
    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        $storedPassword = $user['password'];

        // Verifikasi password
        if ($password === $storedPassword) {
            // Password cocok, proses login berhasil
            die("Login berhasil!");
            // Lanjutkan ke halaman lain atau lakukan tindakan yang sesuai setelah login berhasil
        } else {
            // Password tidak cocok
            die("Email atau password Anda salah!");
        }
    } else {
        // Email tidak ditemukan
        die( "Email atau password Anda salah!");
    }
} else {
    // Kesalahan dalam eksekusi query
    die ("Terjadi kesalahan dalam proses login.");
}
}
$conn->close();
?>