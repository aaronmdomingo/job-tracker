-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 21, 2019 at 02:06 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job-tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `job_id` mediumint(9) NOT NULL,
  `date` datetime NOT NULL,
  `message` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `job_id`, `date`, `message`) VALUES
(7, 1, '2019-11-11 00:00:00', 'Just applied, waiting for response'),
(8, 2, '2019-11-11 00:00:00', 'Just applied, waiting for response'),
(9, 5, '2019-11-06 00:00:00', 'got email saying processing application'),
(10, 6, '2019-11-01 00:00:00', 'Got email saying theyll be moving forward with other candidates');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `user_name` varchar(12) NOT NULL,
  `company` varchar(20) NOT NULL,
  `status` varchar(30) NOT NULL,
  `comments` varchar(100) NOT NULL,
  `date` datetime NOT NULL,
  `position` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `user_name`, `company`, `status`, `comments`, `date`, `position`) VALUES
(1, 'guest', 'Apple', 'Applied / In Progress', 'Just applied, waiting for response', '2019-11-11 00:00:00', 'Web Developer'),
(2, 'guest', 'Facebook', 'Applied / In Progress', 'got email saying processing application', '2019-11-06 00:00:00', 'Front End Developer'),
(5, 'guest', 'Microsoft', 'Denied', 'Got email saying theyll be moving forward with other candidates', '2019-11-01 00:00:00', 'Full-Stack Developer'),
(6, 'guest', 'AirBnB', 'Interview', 'Have an interview set up Monday, November 18', '2019-11-08 00:00:00', 'Jr. Engineer');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `user_name` varchar(12) NOT NULL,
  `password` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_name`, `password`) VALUES
(1, 'Guest', ''),
(2, 'AyyAyyRonn', '$2y$10$OT1nI.czLMW/NAsTsj7dOO8ftu5RBTCRp4ZvoV3Q7kO.n/xaaHj7a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
