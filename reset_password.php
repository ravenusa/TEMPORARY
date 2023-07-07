<?php
// Koneksi ke database
$host = "localhost";
$username = "id20751189_pesonalokal2023";
$database = "id20751189_pesonalokal";
$password = "Pesonalokal2023.";

$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
    die('Koneksi gagal: ' . $conn->connect_error);
}
// Fungsi untuk menghasilkan kode verifikasi
function generateVerificationCode() {
    // Implementasi penghasilan kode verifikasi yang sesuai dengan kebutuhan Anda
    // Contoh: Menghasilkan kode acak dengan panjang 6 digit
    $code = rand(100000, 999999);
    return $code;
}

// Ambil data dari form reset password
$email = $_POST['email'];

// Cek apakah email terdaftar di database
$sql = "SELECT * FROM Users WHERE email = '$email'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // Email terdaftar, generate kode verifikasi
    $verificationCode = generateVerificationCode();

    // Simpan kode verifikasi ke database
    $sql = "UPDATE Users SET verification_code = '$verificationCode' WHERE email = '$email'";
    $conn->query($sql);

    // Kirim email dengan kode verifikasi ke alamat email pengguna
    $subject = "Reset Password - Kode Verifikasi";
    $message = "Ampun Kesupen,Niki Nggeh Kode Verifikasine : . $verificationCode
    selamat menikmati web kami nggeh ";
    $headers = "From: puanmaharaniDPRRI@ghost.co.id"; // Ganti dengan alamat email Anda

   
    if (mail($email, $subject, $message, $headers)) {
        die ( 'Kode verifikasi telah dikirim ke alamat email Anda.');

    } else {
        die('Gagal mengirim kode verifikasi. Silakan coba lagi.');
        
    }
} else {
    die('Email tidak terdaftar. Silakan cek kembali.');
    
}


$conn->close();
header('Content-Type: application/json');
echo json_encode($response);
?>