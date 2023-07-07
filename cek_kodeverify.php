<?php 

// Koneksi ke database
// Koneksi ke database
$host = "localhost";
$username = "id20751189_pesonalokal2023";
$database = "id20751189_pesonalokal";
$password = "Pesonalokal2023.";

$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
    die('Koneksi gagal: ' . $conn->connect_error);
}
// Ambil data dari form ganti password
$verificationCode = $_POST['verification_code'];
$newPassword = $_POST['password'];
$confirmPassword = $_POST['confirm_password'];

// Cek apakah kode verifikasi cocok dengan yang ada di database
$sql = "SELECT * FROM Users WHERE verification_code = '$verificationCode'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // Kode verifikasi cocok, dapatkan data pengguna
    $row = $result->fetch_assoc();
    $userId = $row['id'];

    // Validasi konfirmasi password
    if ($newPassword === $confirmPassword) {
        // Validasi password sesuai kriteria
        if (preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/', $newPassword)) {
            // Update password pengguna
            $sql = "UPDATE Users SET password = '$newPassword', verification_code = NULL WHERE id = '$userId'";
            if ($conn->query($sql) === TRUE) {
                echo "Password berhasil diubah.";
            } else {
                die('Error: " . $sql . "<br>" . $conn->error');
            }
        } else {
            die('Password harus mengandung minimal satu huruf besar, satu huruf kecil, satu angka, dan memiliki panjang minimal 6 karakter.');
        }
    } else {
        die('Konfirmasi password tidak cocok. Silakan cek kembali.');
    }
} else {
    die('Kode verifikasi tidak valid. Silakan cek kembali.');
}

$conn->close();
?>