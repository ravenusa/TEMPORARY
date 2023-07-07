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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
   
$username = $_POST['nama'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];



 // ngeCek username wes dinggo rung
    $query = "SELECT * FROM Users WHERE username='$username'";
    $result = $conn->query($query);
   if ($result->num_rows > 0) {
          die('Username sudah digunakan!');
    } elseif (!preg_match('/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/', $username)) {
        die('Username harus mengandung huruf dan angka!'); //cek username kudu memenuhi kriteria
    }
    else {
        // Cek email wes dinggo rung 
        $query = "SELECT * FROM Users WHERE email='$email'";
        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            die('Email sudah digunakan!');
        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            die('Email tidak valid!');
        }elseif (!preg_match('/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]+$/', $password)) {
        die('Password harus mengandung satu huruf besar, huruf kecil dan angka!');
         }
         elseif (strlen($password) < 6) {
        die('Password harus memiliki panjang minimal 6 karakter!');
    }
        elseif ($password !== $confirm_password) {
            die('Konfirmasi password tidak cocok!');
        } else {
            // nambahke data ng database
            $query = "INSERT INTO Users (username, email, password) VALUES ('$username', '$email', '$password')";

            if ($conn->query($query) === TRUE) {
                die( 'Registrasi berhasil!');
            } else {
                die('Error: ' . $query . '<br>' . $conn->error);
            }
        }
    }
}



$conn->close();
?>