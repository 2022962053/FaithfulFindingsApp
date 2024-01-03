-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 05:03 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `ceramah`
--

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `Title` varchar(60) NOT NULL,
  `Date` double NOT NULL,
  `Time` double NOT NULL,
  `Place` varchar(50) NOT NULL,
  `Link` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`Title`, `Date`, `Time`, `Place`, `Link`) VALUES
('Kebaikan Sedekah', 20231202, 2100, 'Masjid Seksyen 7, Shah Alam', 'https://www.google.com/maps/dir//Masjid+Seksyen+7,+Shah+Alam.,+Jalan+Kristal+7%2F70,+Seksyen+7,+40000+Shah+Alam,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc52fe68c49249:0xb11dcf2ea781e11a?sa=X&ved=2ahUKEwjovJmKkumCAxWv3jgGHQr9AeEQ48ADegQIDxAA'),
('Kegemilangan Islam', 20231203, 2030, 'Masjid Al-Wathiqu Billah TuanKu Mizan Zainal Abidi', 'https://www.google.com/maps/dir//Masjid+Al-Wathiqu+Billah+TuanKu+Mizan+Zainal+Abidin,+40450+Shah+Alam,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc528cdb0eb23d:0x704f0def518e9e9b?sa=X&ved=2ahUKEwjjxISwkemCAxXU1zgGHQ95DwkQwwV6BAgYEAA'),
('Amalan Syiah Di Malaysia', 20231208, 2015, 'Masjid Sultan Salahuddin Abdul Aziz Shah', 'https://www.google.com/maps/dir/3.0652246,101.4925651/masjid+sultan+salahuddin+abdul+aziz+shah/@3.0727332,101.4854023,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc527ec7366823:0xd59cd5f00940bc42!2m2!1d101.5207184!2d3.0786225?entry=ttu'),
('Cara Menangani Stress', 20231218, 2045, 'Platinum Al-mawaddah Mosque', 'https://www.google.com/maps/dir/3.0652258,101.4924542/platinum+masjid+seksyen+7/@3.0737835,101.482365,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc525a0d9441e3:0x50bb426aab59806!2m2!1d101.491138!2d3.0808914?entry=ttu');

-- --------------------------------------------------------

--
-- Table structure for table `mosque`
--

CREATE TABLE `mosque` (
  `Latitude` double DEFAULT NULL,
  `Longitude` double DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Link` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mosque`
--

INSERT INTO `mosque` (`Latitude`, `Longitude`, `Name`, `Link`) VALUES
(3.0786, 101.5207, 'Masjid Sultan Salahuddin Abdul Aziz Shah', 'https://www.google.com/maps/dir/3.0652246,101.4925651/masjid+sultan+salahuddin+abdul+aziz+shah/@3.0727332,101.4854023,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc527ec7366823:0xd59cd5f00940bc42!'),
(3.0786, 101.5207, 'Masjid Sultan Salahuddin Abdul Aziz Shah', 'https://www.google.com/maps/dir/3.0652246,101.4925651/masjid+sultan+salahuddin+abdul+aziz+shah/@3.0727332,101.4854023,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31cc527ec7366823:0xd59cd5f00940bc42!'),
(3.0681, 101.5029, 'Masjid Al-Wathiqu Billah TuanKu Mizan Zainal Abidin', 'https://www.google.com/maps/dir//Masjid+Al-Wathiqu+Billah+TuanKu+Mizan+Zainal+Abidin,+40450+Shah+Alam,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc528cdb0eb23d:0x704f0def518e9e9b?sa=X&ved=2ahUKEwjj'),
(3.0681, 101.5029, 'Masjid Al-Wathiqu Billah TuanKu Mizan Zainal Abidin', 'https://www.google.com/maps/dir//Masjid+Al-Wathiqu+Billah+TuanKu+Mizan+Zainal+Abidin,+40450+Shah+Alam,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc528cdb0eb23d:0x704f0def518e9e9b?sa=X&ved=2ahUKEwjj');
COMMIT;