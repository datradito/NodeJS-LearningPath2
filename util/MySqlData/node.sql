-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2022 at 03:17 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node-complete`
--

-- --------------------------------------------------------

--
-- Table structure for table `gatos`
--

CREATE TABLE `gatos` (
  `id` int(10) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `edad` int(5) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `precio` double UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gatos`
--

INSERT INTO `gatos` (`id`, `nombre`, `edad`, `descripcion`, `imagen`, `precio`) VALUES
(1, 'Blanquita', 5, 'Muy tranquila', 'https://th.bing.com/th/id/R.0d3e1cdbbe417c4f80ee1ef082730872?rik=VwDxoPXyCFFZ8A&pid=ImgRaw&r=0', 5000),
(2, 'kika', 12, 'hembra, vacunada, desparasitada, muy curiosa, un poco grande, en adopcion responsable, mejor casa que departamento.', 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/la-fragmentacion-del-habitat-es-la-principal-amenaza-del-jaguar/5705408-3-esl-MX/La-fragmentacion-del-habitat-es-la-principal-amenaza-del-jaguar.jpg', 1000),
(3, 'mamerto', 6, 'cachorro en adopcion responsable, hacemos seguimiento de adaptacion, vacunas y castracion.', 'https://img.freepik.com/foto-gratis/cachorro-leon-acostado-mirando-camara-aislada-blanco_191971-16506.jpg?w=2000', 2000),
(4, 'Mika', 12, 'gatito europeo muy lindo.', 'https://th.bing.com/th/id/OIP.O-gdS_CJt5lYRUx8WeeAWgHaE8?pid=ImgDet&rs=1', 1500),
(5, 'Oro', 15, 'gatito europeo muy lindo.', 'https://th.bing.com/th/id/R.969d9565731edf9f8cd58179ee460955?rik=%2fRd%2fkGwkjw4jhg&riu=http%3a%2f%2fwww.recreoviral.com%2fwp-content%2fuploads%2f2015%2f11%2f17.7.jpg&ehk=PHTG%2bPOtclCGu%2bWw6tmN5Ch%2b9HdGgvzwNmhEr%2b%2fA%2fEI%3d&risl=&pid=ImgRaw&r=0', 1500);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gatos`
--
ALTER TABLE `gatos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gatos`
--
ALTER TABLE `gatos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
