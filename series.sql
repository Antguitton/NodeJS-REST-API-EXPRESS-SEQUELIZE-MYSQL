-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : ven. 01 juil. 2022 à 14:56
-- Version du serveur :  5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `series`
--

-- --------------------------------------------------------

--
-- Structure de la table `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `episode_number` int(11) DEFAULT NULL,
  `runtime` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `seasonId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `episodes`
--

INSERT INTO `episodes` (`id`, `name`, `episode_number`, `runtime`, `createdAt`, `updatedAt`, `seasonId`) VALUES
(1, 'episode#1', 1, 23, '2022-06-28 08:46:17', '2022-06-28 08:46:17', 1),
(2, 'episode#2', 2, 23, '2022-06-28 08:46:48', '2022-06-28 08:46:48', 1),
(3, 'episode#3', 3, 23, '2022-06-28 08:46:52', '2022-06-28 08:46:52', 1),
(4, 'episode#4', 4, 23, '2022-06-28 09:28:46', '2022-06-28 09:28:46', 1);

-- --------------------------------------------------------

--
-- Structure de la table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `genres`
--

INSERT INTO `genres` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Action', '2022-06-28 08:45:44', '2022-06-28 08:45:44');

-- --------------------------------------------------------

--
-- Structure de la table `genres_series`
--

CREATE TABLE `genres_series` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `genres_id` int(11) NOT NULL,
  `series_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `refreshTokens`
--

CREATE TABLE `refreshTokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `expiryDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `refreshTokens`
--

INSERT INTO `refreshTokens` (`id`, `token`, `expiryDate`, `createdAt`, `updatedAt`, `userId`) VALUES
(6, '7370e983-4c6f-4c0a-a415-a84ae4ee275c', '2022-06-30 14:08:59', '2022-06-30 14:06:59', '2022-06-30 14:06:59', 9),
(7, 'f23f6829-edee-4687-844d-c533dd889cc7', '2022-07-01 12:21:02', '2022-07-01 12:19:02', '2022-07-01 12:19:02', 10),
(8, '5fd25df6-3459-4d20-8f87-3108cdc46eea', '2022-07-01 12:44:05', '2022-07-01 12:42:05', '2022-07-01 12:42:05', 10),
(9, '2cfed776-dabb-436e-a745-0b3d4ca9eb70', '2022-07-01 13:05:46', '2022-07-01 13:03:46', '2022-07-01 13:03:46', 10);

-- --------------------------------------------------------

--
-- Structure de la table `seasons`
--

CREATE TABLE `seasons` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `season_number` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `seriesId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `seasons`
--

INSERT INTO `seasons` (`id`, `name`, `season_number`, `createdAt`, `updatedAt`, `seriesId`) VALUES
(1, 'First', 1, '2022-06-28 08:45:49', '2022-06-28 08:45:49', 1),
(2, 'First', 1, '2022-06-28 08:46:40', '2022-06-28 08:46:40', 1);

-- --------------------------------------------------------

--
-- Structure de la table `series`
--

CREATE TABLE `series` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `in_production` tinyint(1) DEFAULT NULL,
  `origin_country` varchar(255) DEFAULT NULL,
  `original_language` varchar(255) DEFAULT NULL,
  `overview` varchar(255) DEFAULT NULL,
  `popularity` float DEFAULT NULL,
  `poster_path` varchar(255) DEFAULT NULL,
  `production_company` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `series`
--

INSERT INTO `series` (`id`, `name`, `in_production`, `origin_country`, `original_language`, `overview`, `popularity`, `poster_path`, `production_company`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Friends', 0, 'US', 'english', 'A great serie about friendship', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 08:45:36', '2022-06-28 08:45:36'),
(2, 'Suits', 0, 'US', 'english', 'A great serie about lawyers', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:28:58', '2022-06-28 09:28:58'),
(3, 'Peaky Blinders', 0, 'US', 'english', 'A great serie about gang members', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:29:08', '2022-06-28 09:29:08'),
(4, 'Breaking bad', 0, 'US', 'english', 'A great serie about a teacher', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:29:37', '2022-06-28 09:29:37'),
(5, 'Lotr', 0, 'US', 'english', 'A great serie about a Frodo', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:29:50', '2022-06-28 09:29:50'),
(6, 'HIMYM', 0, 'US', 'english', 'A great serie about a met', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:30:07', '2022-06-28 09:30:07'),
(7, 'Matrix', 0, 'US', 'english', 'A great serie about the matrice', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:30:24', '2022-06-28 09:30:24'),
(8, 'Stalk', 0, 'US', 'english', 'A great serie about ENSI', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:31:00', '2022-06-28 09:31:00'),
(9, 'Simpsons', 0, 'US', 'english', 'A great serie about Springfield', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:31:24', '2022-06-28 09:31:24'),
(10, 'New chance', 0, 'US', 'english', 'A great serie about SCIFI', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:31:36', '2022-06-28 09:31:36'),
(11, 'Neo next', 0, 'US', 'english', 'A great serie about SCIFI', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:31:46', '2022-06-28 09:31:46'),
(12, 'Last of us', 0, 'US', 'english', 'A great serie about gaming', 8.1, 'file_path', 'OCS', 'Ended', '2022-06-28 09:32:00', '2022-06-28 09:32:00');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'guitton@gmail.com', '$2a$08$q5npzO4NluhuRBAVD8ZZ7e09vFRHUYZj0W.wVda91jJcTkFfBbPNO', '2022-06-29 08:39:12', '2022-06-29 08:39:12'),
(2, 'guitton2@gmail.com', '$2a$08$P5M8ODwybzV7bOeD8Sxf1O4yabyvjV9Dmvgvcn7KBtR71LY2R2gmS', '2022-06-29 08:51:14', '2022-06-29 08:51:14'),
(3, 'guitton3@gmail.com', '$2a$08$vzGrK/XJGwfeXqse6rLR/.Hf7AbMZF89MYxgOOpjHJKxGtAMIRRfm', '2022-06-29 09:50:09', '2022-06-29 09:50:09'),
(4, 'scaduto@gmail.com', '$2a$08$ICbOdRZayV1gDLndadiZi.zkshXG9AMqNLvmuRGTryHGU5hcmWmna', '2022-06-29 10:06:54', '2022-06-29 10:06:54'),
(5, 'scadut@gmail.com', '$2a$08$E9I/ApP0aIS8Z7066Hg4X.tutLlH6dUyFuE4zd/PE8ShZXaw3gVKO', '2022-06-30 09:56:53', '2022-06-30 09:56:53'),
(6, 'vign@gmail.com', '$2a$08$Ijl3vK/sBN0u5JTyjPuW2ukOKY2Vd8wOFaxwWVNVtlvLSrZWYt/bW', '2022-06-30 10:27:19', '2022-06-30 10:27:19'),
(7, 'vignali@gmail.com', '$2a$08$1ibY6q8rwKCrVhKGf554LOkN9M2olP4fUdbZzm4t1dTk0E8tCsi2u', '2022-06-30 10:43:51', '2022-06-30 10:43:51'),
(8, 'briere@gmail.com', '$2a$08$aHIv9Jb071zgjFq7A8dtwOFvb28A.Dn5JOulXD51c5Houplvf5QBK', '2022-06-30 12:41:45', '2022-06-30 12:41:45'),
(9, 'durey@gmail.com', '$2a$08$geHEi3URVJ1VHjEOcxMKvO.mclIk1Z4FYT7q4ruooKvHoiMOa8xTi', '2022-06-30 13:31:14', '2022-06-30 13:31:14'),
(10, 'durey2@gmail.com', '$2a$08$CCWZLJjz3QA97VrkGoKh7.qu0gwrqpEJHCLfPvRKBVpD0u5tlfI4y', '2022-07-01 12:18:46', '2022-07-01 12:18:46'),
(11, 'durey22@gmail.com', '$2a$08$Al2qpiMK3/8mtn3e4HsJ5.ivDvnY4rdEwA.2GC54RkbcU3Vei7cp2', '2022-07-01 13:16:14', '2022-07-01 13:16:14');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seasonId` (`seasonId`);

--
-- Index pour la table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `genres_series`
--
ALTER TABLE `genres_series`
  ADD PRIMARY KEY (`genres_id`,`series_id`),
  ADD KEY `series_id` (`series_id`);

--
-- Index pour la table `refreshTokens`
--
ALTER TABLE `refreshTokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `seasons`
--
ALTER TABLE `seasons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seriesId` (`seriesId`);

--
-- Index pour la table `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `refreshTokens`
--
ALTER TABLE `refreshTokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `seasons`
--
ALTER TABLE `seasons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `series`
--
ALTER TABLE `series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `episodes`
--
ALTER TABLE `episodes`
  ADD CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`seasonId`) REFERENCES `seasons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `genres_series`
--
ALTER TABLE `genres_series`
  ADD CONSTRAINT `genres_series_ibfk_1` FOREIGN KEY (`genres_id`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `genres_series_ibfk_2` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `refreshTokens`
--
ALTER TABLE `refreshTokens`
  ADD CONSTRAINT `refreshtokens_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `seasons`
--
ALTER TABLE `seasons`
  ADD CONSTRAINT `seasons_ibfk_1` FOREIGN KEY (`seriesId`) REFERENCES `series` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
