-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 12 juin 2023 à 11:19
-- Version du serveur :  8.0.30-0ubuntu0.20.04.2
-- Version de PHP : 8.0.24

-- Création de la base de données `e-commerce`
CREATE DATABASE IF NOT EXISTS `e-commerce`;
USE `e-commerce`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `e-commerce`
--

-- --------------------------------------------------------
--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL,
  `titre` varchar(255) NOT NULL,
  `prix` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `nb_stock` varchar(255) DEFAULT NULL,
  `en_rupture` tinyint(1) NOT NULL,
  `categorie_id` int NOT NULL,
  `souscategorie_id` int DEFAULT NULL,
  `click` int NOT NULL,
  `promo` tinyint(1) NOT NULL,
  `size` tinyint(1) NOT NULL,
  `poid` varchar(255) NOT NULL,
  `reduction` varchar(255) DEFAULT NULL,
  `nouveauté` tinyint(1) NOT NULL,
  `color` tinyint(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `titre`, `prix`, `image`, `description`, `nb_stock`, `en_rupture`, `categorie_id`, `souscategorie_id`, `click`, `promo`, `size`, `poid`, `reduction`, `nouveauté`, `color`) VALUES
(1, 'Costume Laine Italienne Anthracite', '489.00', '/images/articles/produit1.jpg', 'Alternative tendance au noir, le costume anthracite a un caractère bien trempé, doublé d\'une vraie élégance. Ce modèle 2 pièces 100% laine italienne haut de gamme se prête à toutes les occasions : travail ou événements. Veste avec revers à crans, 2 boutons avec boutonnière ouverte, 2 poches à rabat, 1 poche poitrine, 2 fentes dos.\r\nPantalon avec ceinture à bouton apparent, 2 poches invisibles, 1 poche ticket, 2 poches dos à rabat avec bouton, bas de pantalon 18 cm de largeur avec un ourlet simple.\r\n\r\nCostume homme 100% laine vierge\r\nTissu élaboré en Italie', '186', 0, 1, NULL, 153, 1, 1, '1.2', '10', 0, 1),
(2, 'Costume Laine Italienne Noir', '389.00', '/images/articles/produit2.jpg', 'Classique, idéal pour une tenue de travail ou des événements professionnels, notre costume pour homme noir 2 pièces est composé entièrement de laine italienne haut de gamme. En coupe droite ou cintrée, il saura vous mettre en valeur.', '197', 0, 1, NULL, 54, 1, 1, '1.00', '20', 0, 1),
(21, 'Manteau Noir', '499.00', '/images/articles/produit19.jpg', 'Notre manteau noir vous apportera une bonne dose d\'élégance. Il vous permettra de vous distinguer au travail et sera du plus bel effet par-dessus un costume. ', '200', 0, 3, 8, 26, 0, 1, '2.6', '0', 1, 1),
(4, 'Costume Laine Italienne Bleu Marine', '389.00', '/images/articles/produit3.jpg', 'Ce modèle de costume bleu marine classique se prête à toutes les occasions : travail, événements, mariage... En laine italienne haut de gamme, la justesse de sa coupe met en valeur votre silhouette avec simplicité.', '0', 1, 1, NULL, 35, 0, 1, '0.9', NULL, 0, 1),
(22, 'Manteau Camel', '499.00', '/images/articles/produit20.jpg', 'Notre manteau Camel vous apportera une bonne dose d\'élégance britannique. D\'allure vintage, il vous permettra de vous distinguer au travail et sera du plus bel effet par-dessus un costume.', '200', 0, 3, 8, 17, 0, 1, '2.6', '0', 1, 1),
(5, 'Chemise 100% coton noir', '79.99 ', '/images/articles/produit4.jpg', 'La chemise noire a ses adeptes. Elle s\'associe aussi avec un costume noir pour un total look ou avec un costume gris. En soirée elle se porte également très bien avec un jeans brut par exemple.', '183', 0, 2, NULL, 210, 0, 1, '0.2', NULL, 0, 1),
(6, 'chemise 100% coton blanche', '79.99 ', '/images/articles/produit5.jpg', 'Plus basique que la chemise blanche, on ne fait pas ! Peu importe le type de col, la coupe, vous en trouverez toujours une à votre convenance qui s\'assortira avec toutes les couleurs de votre garde-robe. On évitera cependant le look \"total blanc\" à moins d\'être une vedette en vacances sur la côte d\'azur !', '169', 0, 2, NULL, 210, 0, 1, '0.2', NULL, 0, 1),
(7, 'pantalon 100% laine Anthracite', '139.99 ', '/images/articles/produit6.jpg', 'Le pantalon de costume décliné dans des nuances de gris est un basique du dress code masculin. De l\'anthracite intemporel au gris clair chic, optez pour son élégance et sa distinction.', '200', 0, 3, 4, 74, 0, 1, '0.5', NULL, 0, NULL),
(8, 'pantalon 100% laine bleu marine', '139.99 ', '/images/articles/produit7.jpg', 'Un pantalon bleu marine est idéal lorsque l\'on souhaite alterner avec le noir durant la semaine, puis on pourra lever sa cravate et déboutonner sa chemise pour l\'afterwork', '0', 1, 3, 4, 45, 0, 1, '0.45', NULL, 0, NULL),
(9, 'Gilet Slim Fit en Laine Vierge Mélangée', '119.99 ', '/images/articles/produit8.jpg', ' Un gilet facile à assortir, signé BOSS Homme. Ce gilet Mix & Match à la coupe affûtée est confectionné dans un mélange de matières à teneur en stretch pour plus de confort. La doublure emblématique apporte la touche finale distinctive. Pour nos articles ÉCO-RESPONSABLES, nous utilisons toujours au minimum 60 % de matières premières plus durables. Ce vêtement contient au moins 60 % de laine éco-responsable et certifiée. Chez HUGO BOSS, la laine éco-responsable respecte les normes des cinq libertés fondamentales des animaux.', '176', 0, 3, 5, 5, 0, 1, '0.15', NULL, 0, NULL),
(10, 'Cravate Noire Satin 100% soie', '49.99 ', '/images/articles/produit9.jpg', 'La cravate unie est la touche finale de votre tenue formelle. Sans toutefois dériver dans l\'excentricité, elle apportera une touche fantaisiste en la choisissant dans une couleur gaie.', '162', 0, 5, 1, 129, 0, 0, '0.1', NULL, 0, NULL),
(11, 'Ceinture Noire 100% cuir Made in france', '55.00 ', '/images/articles/produit10.jpg', 'Car tout le monde a besoin d\'une ceinture, et d\'autant plus une ceinture noire, nous proposons un produit 100% cuir au design intemporel disponible dans diverses déclinaisons de cuirs.', '200', 0, 5, 3, 19, 0, 0, '0.6', NULL, 0, NULL),
(12, 'Derby Noir Carlos Santos', '359.00 ', '/images/articles/produit11.jpg', 'Pour se démarquer de la foule avec une paire de Ben, chaussures Derby, il n\'y a pas de meilleure option que cette paire de chaussures à lacets de Carlos Santos. Fabriqué en cuir de haute qualité, c\'est un modèle élégant conçu selon la méthode artisanale de confection Goodyear Welted.', '200', 0, 5, 2, 4, 0, 0, '1.5', NULL, 0, NULL),
(13, 'Veste en tweed homme', '235.00 ', '/images/articles/produit12.jpg', 'Une veste à revers standards est l\'option la plus sûre ,classique mais tout aussi élégante pour un costume sur mesure. Nos ateliers attendent avec impatience votre commande pour commencer à couper le tissu en Tweed nécessaire pour confectionner votre veste avec tous les détails que vous avez choisis : veste Simple, revers standard et 2 poches, entre autres.', '200', 0, 3, 6, 1, 0, 1, '0.7', NULL, 0, NULL),
(14, 'Veste Smoking bleue en Velours', '215.99 ', '/images/articles/produit13.jpg', 'Cette veste avec son col châle est parfait pour donner un aspect plus casual pour votre prochaine soirée ou évènement en dehors du bureau. Nos ateliers attendent avec impatience votre commande pour commencer à couper le tissu en Velours nécessaire pour confectionner votre veste avec tous les détails que vous avez choisis : veste Simple, revers round et 2 poches, entre autres.', '200', 0, 3, 6, 0, 0, 1, '0.65', NULL, 0, NULL),
(15, 'Pull Col V bleu marine', '89.00', '/images/articles/produit14.jpg', 'Un pull col V bleu marine est l\'association d\'un vêtement et d\'une couleur classiques mais indémodables du vestiaire masculin. Avec lui, pas de fashion faux pas ! Passe partout, il peut aussi bien être porté sur un jean qu\'un pantalon, au travail comme en dehors.', '200', 0, 3, 7, 0, 0, 1, '0.25', NULL, 0, 1),
(16, 'Pull Col V Noir', '89.00 ', '/images/articles/produit15.jpg', 'En laine, soie et cachemire,  notre pull col V noir vous apportera confort et élégance. Simple à porter et à associer, il vous suivra partout, tout au long de l\'année.', '200', 0, 3, 7, 1, 0, 1, '0.3', NULL, 0, 1),
(17, 'Pull Col V Gris anthracite', '89.00', '/images/articles/produit16.jpg', 'Le pull col V est un passe partout que l\'on mettra aussi bien sur une chemise que sur un t-shirt. Car le vintage est dans l\'ère du temps, nous avons utilisé des coudières pour associer nos pulls.', '200', 0, 3, 7, 1, 0, 1, '0.275', NULL, 0, 1),
(19, 'Chemise 100% coton bleue', '79.99', '/images/articles/produit17.jpg', 'Intemporelle, la chemise bleue se porte aussi bien au travail que pour vos sorties et événements familiaux. Plus formelle avec son col italien, elle sait apporter de l\'élégance à une silhouette en toute simplicité.', '194', 0, 2, NULL, 6, 0, 1, '0.2', NULL, 0, 1),
(20, 'Smoking Noir', '429.00', '/images/articles/produit18.jpg', 'La bienséance exigeant que le gentleman britannique du XIXe siècle ménage l\'odorat de ses convives, la veste de smoking est d\'abord exclusivement porté au fumoir. De nos jours le smoking est devenu un habit de cérémonies par excellence: un mariage, une soirée casino, un gala et vous pourrez le porter sans prendre le risqua d\'être trop habillé !', '200', 0, 1, NULL, 10, 0, 1, '1.1', '0', 0, 0),
(23, 'Echarpe Joe', '89.00', '/images/articles/produit21.jpg', 'L\'écharpe est devenu un accessoire de mode à part entière. Elle se porte sur les costumes, avec une veste ou sur votre manteau. Déclinée dans différentes couleurs, matières et de nombreux dessins, vous trouverez la votre sans aucun doute !', '50', 0, 5, 9, 13, 1, 0, '0.1', '10', 0, 1),
(24, 'Echarpe Jordan', '89.00', '/images/articles/produit22.jpg', 'L\'écharpe est devenu un accessoire de mode à part entière. Elle se porte sur les costumes, avec une veste ou sur votre manteau. Déclinée dans différentes couleurs, matières et de nombreux dessins, vous trouverez la votre sans aucun doute !', '0', 1, 5, 9, 12, 0, 0, '0.1', '0', 0, 1),
(25, 'Echarpe Zach', '89.00', '/images/articles/produit23.jpg', 'L\'écharpe est devenu un accessoire de mode à part entière. Elle se porte sur les costumes, avec une veste ou sur votre manteau. Déclinée dans différentes couleurs, matières et de nombreux dessins, vous trouverez la votre sans aucun doute !', '50', 0, 5, 9, 7, 0, 0, '0.1', '0', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `name`) VALUES
(1, 'Costume'),
(2, 'Chemise'),
(3, 'Vêtement'),
(5, 'Accessoire');

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `numero` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `montant` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `user_id`, `numero`, `montant`, `date`) VALUES
(9, 15, 'MIIV0UTR', '165', '2023-01-05 15:03:49'),
(41, NULL, '6IW3O35R', '167.48', '2023-01-05 15:03:49'),
(42, NULL, '4R6J669C', '85.49', '2023-01-05 15:03:49'),
(44, 15, '8DT45OCX', '86.5', '2023-01-06 11:40:37'),
(153, 15, '8C4IFSEO', '1478.04', '2023-01-12 12:06:02'),
(154, 15, '473G3OX1', '55.99', '2023-01-12 12:49:33'),
(155, 18, '6884PV15', '85.99', '2023-01-12 13:14:46'),
(156, NULL, 'AB0SK050', '446.85', '2023-01-22 16:12:01'),
(157, 15, 'SIOOVH1V', '86.49', '2023-01-22 17:06:36'),
(158, 15, '23R3W2ON', '86.49', '2023-01-22 17:08:28'),
(159, 15, 'B0PSV8TN', '86.49', '2023-01-22 17:09:57'),
(160, 15, 'U1A3292P', '86.49', '2023-01-22 17:09:59'),
(161, 15, '97LSO905', '86.49', '2023-01-22 17:10:12'),
(162, 15, '6URJ9L05', '86.49', '2023-01-22 17:11:16'),
(163, 15, '1QX7LN39', '86.49', '2023-01-22 17:11:53'),
(164, 15, 'RTLW4CA7', '86.49', '2023-01-22 17:11:55'),
(165, 15, 'ST8L2146', '86.49', '2023-01-22 17:12:45'),
(166, 15, '179Y2045', '86.49', '2023-01-22 17:13:05'),
(167, 15, '1ZJ8033R', '86.49', '2023-01-22 17:13:07'),
(168, 15, '4DTU6CFG', '86.49', '2023-01-22 17:13:13'),
(169, NULL, 'ZLT445W4', '318.95', '2023-01-22 17:45:05'),
(170, 15, '1H7O059O', '447.85', '2023-01-22 22:37:37'),
(171, 15, '6K59J4V3', '446.85', '2023-01-23 16:35:01'),
(172, NULL, '4OWL1EK7', '442.85', '2023-01-24 15:34:55'),
(173, NULL, 'HIU08MN4', '87.49', '2023-01-24 15:37:40'),
(174, NULL, '0KML8207', '82.49', '2023-01-24 15:38:38'),
(175, NULL, '6EKUC953', '86.49', '2023-01-24 15:42:31'),
(176, NULL, '8XI05Z0R', '397.94', '2023-01-24 20:18:13'),
(177, NULL, 'ZXR37VC5', '81.99', '2023-01-25 10:20:51'),
(178, 15, '9U3F71QS', '86.49', '2023-01-25 10:24:45');

-- --------------------------------------------------------

--
-- Structure de la table `commande_articles`
--

CREATE TABLE `commande_articles` (
  `id` int NOT NULL,
  `commande_id` int NOT NULL,
  `articles_id` int NOT NULL,
  `size_id` int DEFAULT NULL,
  `quantity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `commande_articles`
--

INSERT INTO `commande_articles` (`id`, `commande_id`, `articles_id`, `size_id`, `quantity`) VALUES
(32, 9, 6, 2, '1'),
(33, 9, 5, 2, '1'),
(38, 24, 5, 2, '1'),
(39, 24, 6, 2, '1'),
(60, 41, 6, 2, '1'),
(61, 41, 5, 2, '1'),
(62, 42, 6, 2, '1'),
(63, 44, 6, 2, '1'),
(156, 154, 10, 2, '1'),
(157, 155, 19, 2, '1'),
(158, 156, 1, 2, '1'),
(159, 157, 6, 2, '1'),
(160, 158, 6, 2, '1'),
(161, 159, 6, 2, '1'),
(162, 160, 6, 2, '1'),
(163, 161, 6, 2, '1'),
(164, 162, 6, 2, '1'),
(165, 163, 6, 2, '1'),
(166, 164, 6, 2, '1'),
(167, 165, 6, 2, '1'),
(168, 166, 6, 2, '1'),
(169, 167, 6, 2, '1'),
(170, 168, 6, 2, '1'),
(171, 169, 2, 2, '1'),
(172, 170, 1, 2, '1'),
(173, 171, 1, 2, '1'),
(174, 172, 1, 3, '1'),
(175, 173, 6, 2, '1'),
(176, 174, 19, 2, '1'),
(177, 175, 19, 2, '1'),
(178, 176, 6, 2, '1'),
(179, 176, 2, 2, '1'),
(180, 177, 5, 2, '1'),
(181, 178, 5, 2, '1');

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int NOT NULL,
  `article_id` int NOT NULL,
  `user_id` int NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `article_id`, `user_id`, `message`, `date`) VALUES
(1, 1, 15, 'J\'ai acheté cet ensemble pour mon mariage et je peux vous assurer qu\'il à fait sensation !', '2023-01-22 18:15:12'),
(28, 6, 15, 'super !', '2023-01-25 10:23:00');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `livraison`
--

CREATE TABLE `livraison` (
  `id` int NOT NULL,
  `methode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prix` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `livraison`
--

INSERT INTO `livraison` (`id`, `methode`, `prix`) VALUES
(1, 'Normal', '1.5'),
(2, 'Suivis', '2'),
(3, 'Recommande', '3'),
(4, 'Express', '5'),
(5, 'Relais', '1');

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE `paiement` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `carte` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `paiement`
--

INSERT INTO `paiement` (`id`, `user_id`, `carte`, `cvc`, `date`) VALUES
(10, 15, '1234123412341237', '111', '11/14'),
(14, 16, '1234567891011121', '000', '12/20');

-- --------------------------------------------------------

--
-- Structure de la table `panier`
--

CREATE TABLE `panier` (
  `id` int NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `panier`
--

INSERT INTO `panier` (`id`, `user_id`) VALUES
(13, 15),
(14, 16),
(16, 18);

-- --------------------------------------------------------

--
-- Structure de la table `panier_articles`
--

CREATE TABLE `panier_articles` (
  `panier_id` int NOT NULL,
  `articles_id` int NOT NULL,
  `id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `size_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
  `id` int NOT NULL,
  `pays` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prix` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`id`, `pays`, `prix`) VALUES
(1, 'France', '4'),
(2, 'Belgique', '4.5'),
(3, 'Royaume-Unis', '8'),
(4, 'Suisse', '6'),
(5, 'Espagne', '4.5'),
(6, 'Portugal', '5'),
(7, 'Pays-Bas', '4.5'),
(8, 'Allemagne', '5.5'),
(9, 'Italie', '4.5'),
(10, 'Autre', '10');

-- --------------------------------------------------------

--
-- Structure de la table `poid`
--

CREATE TABLE `poid` (
  `id` int NOT NULL,
  `poid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prix` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `poid`
--

INSERT INTO `poid` (`id`, `poid`, `prix`) VALUES
(1, '0', '0.5'),
(2, '1', '0.75'),
(3, '2', '1.5'),
(4, '3', '2'),
(5, '4', '2.25'),
(6, '5', '2.5'),
(7, '6', '5');

-- --------------------------------------------------------

--
-- Structure de la table `size`
--

CREATE TABLE `size` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `size`
--

INSERT INTO `size` (`id`, `name`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, 'XL');

-- --------------------------------------------------------

--
-- Structure de la table `souscategorie`
--

CREATE TABLE `souscategorie` (
  `id` int NOT NULL,
  `categorie_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `souscategorie`
--

INSERT INTO `souscategorie` (`id`, `categorie_id`, `name`) VALUES
(1, 5, 'cravate'),
(2, 5, 'Chaussures'),
(3, 5, 'Ceinture'),
(4, 3, 'Pantalon'),
(5, 3, 'Gilet'),
(6, 3, 'Veste'),
(7, 3, 'Pull'),
(8, 3, 'Manteaux'),
(9, 5, 'Echarpes');

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `id` int NOT NULL,
  `articles_id` int NOT NULL,
  `size_id` int DEFAULT NULL,
  `nbstock` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id`, `articles_id`, `size_id`, `nbstock`) VALUES
(1, 1, 1, 0),
(2, 1, 2, 37),
(3, 1, 3, 50),
(4, 1, 4, 52),
(5, 2, 1, 50),
(6, 2, 2, 47),
(7, 2, 3, 50),
(8, 2, 4, 50),
(9, 4, 1, 0),
(10, 4, 2, 0),
(11, 4, 3, 0),
(12, 4, 4, 0),
(13, 5, 1, 50),
(14, 5, 2, 33),
(15, 5, 3, 50),
(16, 5, 4, 50),
(17, 6, 1, 50),
(18, 6, 2, 19),
(19, 6, 3, 50),
(20, 6, 4, 50),
(21, 7, 1, 50),
(22, 7, 2, 50),
(23, 7, 3, 50),
(24, 7, 4, 50),
(25, 8, 1, 0),
(26, 8, 2, 0),
(27, 8, 3, 0),
(28, 8, 4, 0),
(29, 9, 1, 50),
(30, 9, 2, 26),
(31, 9, 3, 50),
(32, 9, 4, 50),
(45, 13, 1, 50),
(46, 13, 2, 50),
(47, 13, 3, 50),
(48, 13, 4, 50),
(49, 14, 1, 50),
(50, 14, 2, 50),
(51, 14, 3, 50),
(52, 14, 4, 50),
(53, 15, 1, 50),
(54, 15, 2, 50),
(55, 15, 3, 50),
(56, 15, 4, 50),
(57, 16, 1, 50),
(58, 16, 2, 50),
(59, 16, 3, 50),
(60, 16, 4, 50),
(61, 17, 1, 50),
(62, 17, 2, 50),
(63, 17, 3, 50),
(64, 17, 4, 50),
(65, 19, 1, 50),
(66, 19, 2, 44),
(67, 19, 3, 50),
(68, 19, 4, 50),
(69, 20, 1, 50),
(70, 20, 2, 50),
(71, 20, 3, 50),
(72, 20, 4, 50),
(73, 21, 1, 50),
(74, 21, 2, 50),
(75, 21, 3, 50),
(76, 21, 4, 50),
(77, 22, 1, 50),
(78, 22, 2, 50),
(79, 22, 3, 50),
(80, 22, 4, 50);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` int NOT NULL,
  `role` int NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `pays` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `is_active`, `role`, `nom`, `prenom`, `tel`, `adresse`, `pays`, `ville`, `zipcode`) VALUES
(15, 'charlelie.chandelier@hotmail.fr', 'rijogapi', 1, 1, 'chandelier', 'charlelie', '0632548598', '7 Allée Verte', 'France', 'annecy', '74001'),
(16, 'popo.com', 'popo', 1, 0, 'po', 'popol', '06', 'nik', 'France', 'necy', '45'),
(18, 'test', 'test', 1, 0, 'ih', 'ihio', 'ihi', 'oih', 'ohuo', 'ho', 'oho');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_BFDD3168BCF5E72D` (`categorie_id`),
  ADD KEY `IDX_BFDD3168A27126E0` (`souscategorie_id`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6EEAA67DA76ED395` (`user_id`);

--
-- Index pour la table `commande_articles`
--
ALTER TABLE `commande_articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_69FD29F282EA2E54` (`commande_id`),
  ADD KEY `IDX_69FD29F21EBAF6CC` (`articles_id`),
  ADD KEY `IDX_69FD29F2498DA827` (`size_id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_5F9E962A7294869C` (`article_id`),
  ADD KEY `IDX_5F9E962AA76ED395` (`user_id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_B1DC7A1EA76ED395` (`user_id`);

--
-- Index pour la table `panier`
--
ALTER TABLE `panier`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_24CC0DF2A76ED395` (`user_id`);

--
-- Index pour la table `panier_articles`
--
ALTER TABLE `panier_articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_2598381AF77D927C` (`panier_id`),
  ADD KEY `IDX_2598381A1EBAF6CC` (`articles_id`),
  ADD KEY `IDX_2598381A498DA827` (`size_id`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `poid`
--
ALTER TABLE `poid`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `souscategorie`
--
ALTER TABLE `souscategorie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6FF3A701BCF5E72D` (`categorie_id`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_4B3656601EBAF6CC` (`articles_id`),
  ADD KEY `IDX_4B365660498DA827` (`size_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT pour la table `commande_articles`
--
ALTER TABLE `commande_articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT pour la table `livraison`
--
ALTER TABLE `livraison`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `paiement`
--
ALTER TABLE `paiement`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `panier`
--
ALTER TABLE `panier`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `panier_articles`
--
ALTER TABLE `panier_articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=295;

--
-- AUTO_INCREMENT pour la table `pays`
--
ALTER TABLE `pays`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `poid`
--
ALTER TABLE `poid`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `size`
--
ALTER TABLE `size`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `souscategorie`
--
ALTER TABLE `souscategorie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `panier_articles`
--
ALTER TABLE `panier_articles`
  ADD CONSTRAINT `FK_2598381A498DA827` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`),
  ADD CONSTRAINT `FK_2598381AF77D927C` FOREIGN KEY (`panier_id`) REFERENCES `panier` (`id`);

--
-- Contraintes pour la table `souscategorie`
--
ALTER TABLE `souscategorie`
  ADD CONSTRAINT `FK_6FF3A701BCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
