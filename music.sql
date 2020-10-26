-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 26 oct. 2020 à 01:05
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `titrepro`
--

-- --------------------------------------------------------

--
-- Structure de la table `music`
--

CREATE TABLE `music` (
  `id` int(11) NOT NULL,
  `titre` text CHARACTER SET utf8 NOT NULL,
  `artiste` text CHARACTER SET utf8 NOT NULL,
  `filepath` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `music`
--

INSERT INTO `music` (`id`, `titre`, `artiste`, `filepath`) VALUES
(1, 'Copines\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Aya Nakamura\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Aya Nakamura %2D Copines (Da Phonk %2D  Extended)%2Emp3'),
(2, 'Djadja\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Aya Nakamura\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Aya Nakamura %2D Djadja (Da Phonk %2D  Edit)%2Emp3'),
(3, 'Sucette\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Aya Nakamura feat. Niska\0\0\0\0\0\0', 'assets/mp3/Aya Nakamura feat%2E Niska %2D Sucette (Da Phonk %2D  Edit)%2Emp3'),
(4, '10k (YANISS Remix)\0\0\0\0\0\0\0\0\0\0\0\0', 'Bolemvn ft Maes\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Bolemvn ft Maes %2D 10k (YANISS Remix)%2Emp3'),
(5, 'Jour J\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Dj Kayz\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Dj Kayz %2D Jour J (DJ Sayze %2D  Edit)%2Emp3'),
(6, 'Ne Reviens Pas\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Gradur feat. Heuss L\'enfoir?\0\0', 'assets/mp3/Gradur feat%2E Heuss L%27enfoiré %2D Ne Reviens Pas (Théo %2D  Re%2DDrum Mustapha)%2Emp3'),
(7, 'Ne Reviens Pas\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Gradur feat. Heuss L\'enfoir?\0\0', 'assets/mp3/Gradur feat%2E Heuss L%27enfoiré %2D Ne Reviens Pas (Théo %2D  Re%2DDrum)%2Emp3'),
(8, 'Aristocrate\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Heuss L\'enfoir?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Heuss L%27enfoiré %2D Aristocrate (ANDROO %2D  Afro Edit)%2Emp3'),
(9, 'JCVD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Jul\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Jul %2D JCVD (Theo %2D Re%2DDrum)%2Emp3'),
(10, 'Adios \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'L\'algerino Ft. Soolking\0\0\0\0\0\0\0', 'assets/mp3/L%27algerino Ft%2E Soolking %2D Adios  (DJ Ni2Ls %2D  Club Mix)%2Emp3'),
(11, 'Woin Woin\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Larry feat. RK\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Larry feat%2E RK %2D Woin Woin (Nalex Dee %2D  Bootleg)%2Emp3'),
(12, '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/L%27artiste %2D A bon entendeur (Re%2DDrum)%2Emp3'),
(13, 'Billets verts\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Maes\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Maes %2D Billets verts (Original %2D  Original)%2Emp3'),
(14, 'Distant\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Maes ft Ninho\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Maes ft Ninho %2D Distant (DA PHONK x YANISS Remix %2D  Remix)%2Emp3'),
(15, 'A Kele Nta\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Mhd\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Mhd %2D A Kele Nta (DJ Leakz %2D  Dj Martin Intro Redrum Extended Mix)%2Emp3'),
(16, 'Allez \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Naza\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Naza %2D Allez  (DJ Sayze %2D  Edit)%2Emp3'),
(17, 'Putana\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Ninho\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Ninho %2D Putana (DJ LOW %2D  Reggaeton Edit)%2Emp3'),
(18, 'M?dicament\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Niska feat. Booba\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Niska feat%2E Booba %2D Médicament (Anilson %26 Sany San Beats %2D  Remix)%2Emp3'),
(19, 'Dis Moi Oui\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'PLK\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/PLK %2D Dis Moi Oui (Fuvi Clan %2D  Thomas Bellecombe Edit)%2Emp3'),
(20, 'Air Max\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Rim\'K feat. Ninho\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Rim%27K feat%2E Ninho %2D Air Max (DJ Ni2Ls %2D  Club Mix)%2Emp3'),
(21, 'Bep Bep\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Sadek\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Sadek %2D Bep Bep (Tony B %2D  Redrum Edit)%2Emp3'),
(22, 'Andale\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'Sadek feat. Gradur\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Sadek feat%2E Gradur %2D Andale (DJ WISINE %2D  Extended)%2Emp3'),
(23, 'RAMENEZ LA COUPE ? LA MAISON  ', 'Vegedream\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Vegedream %2D RAMENEZ LA COUPE Á LA MAISON   (FURBEY  %2D  Club REM%2521X)%2Emp3'),
(24, 'Ramenez La Coupe ? la maison\0\0', 'Vegedream\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Vegedream %2D Ramenez La Coupe à la maison (Da Phonk %2D  Club Edit)%2Emp3'),
(25, 'Wejdene - Anissa (Da Phonk Clu', '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/Wejdene %2D Anissa (Da Phonk Club Edit)%2Emp3'),
(26, 'Allez ola ol? x Alors on danse', '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0', 'assets/mp3/%2D Allez ola olé x Alors on danse x Li Tourner x Fiesta Buena x Ambiance à l%27africaine x A l%27horizontal (Theo %2D  Pre%2DMix)%2Emp3');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `music`
--
ALTER TABLE `music`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
