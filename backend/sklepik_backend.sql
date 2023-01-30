-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20221125.2e001c186a
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 30 Sty 2023, 23:57
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `sklepik_backend`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `furnitures`
--

CREATE TABLE `furnitures` (
  `id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `specific` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `producerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `furnitures`
--

INSERT INTO `furnitures` (`id`, `type`, `specific`, `price`, `producerId`) VALUES
(8, 'szafa', 'na ubrania', 199, 1),
(10, 'szafka', 'kuchenna', 120, 1),
(11, 'biórko', 'dla graczy', 1200, 1),
(12, 'deski pod materac', 'inne', 100, 1),
(13, 'garderoba', 'przesówna', 988, 1),
(14, 'stół', 'jadalny', 1000, 1),
(15, 'stół', 'jadalnyv2', 1000, 1),
(16, 'stół', 'jadalnyvv2', 1000, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `residence` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postalCode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phoneNumber` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detailsToOrder` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dateOfOrder` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `orders`
--

INSERT INTO `orders` (`id`, `email`, `country`, `residence`, `postalCode`, `phoneNumber`, `detailsToOrder`, `dateOfOrder`, `price`) VALUES
(3, 'pp0ogwizd@wp.pl', 'Poland', 'Olszana 222', '33-300', '5002001000', NULL, '2023-01-29 16:18:24.334', 1200),
(4, 'pogwizdpiotr@wp.pl', 'Polska', 'Olszana 200', '33-300', '500121300', 'Please contact me before sent a package', '2023-01-29 16:35:03.886', 1519);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `producer`
--

CREATE TABLE `producer` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `producer`
--

INSERT INTO `producer` (`id`, `name`, `about`) VALUES
(1, 'Piotr123', 'Nowicjusz'),
(2, 'Patryk', 'Profesjonalista'),
(3, 'szymonn', 'Profesjonalista');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`) VALUES
(25, 'anaaaaavasfaf2', 'Szczepanowska', 'afafasspasafn@gw.com', '$argon2id$v=19$m=65536,t=3,p=4$7v+Hb2cHRVFn1eKqQTPFDw$/rctnkaJu6QfBxZZqMJDdUUxKZ/miXA6y0iYq8/WmIs'),
(26, 'Piotr', 'Pogwizd', 'pogwizdpiotr55@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$IdyawAygLR34fIzlkob22Q$6td9iH/lnItq81HBCfZNSecGIuj9KXdqxL2goNdMPLU'),
(27, 'Piotr', 'Pogwizd', 'piotr.ppogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$QQZcsuR7qxpdArgANigK7w$4sPv2RlFydnTXWBYR4ferm06qsf4+VeV8LYyLp9mefM'),
(28, 'Ania', 'Stec', 'astec@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$j3IcsoCvzum9OhzQW9fKnA$fupPVylrmdoE71691qeut/4korqE/rVUOzUg9Xn0hwo'),
(29, 'Piotr', 'Pogwizd', 'ppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$ozM3Ph0C2PaHTuHTEHL84A$WyTmLtduUSGnyifJdsrAqvrCRoXSZlB5eIdf8wwKrDg'),
(30, 'Piotr', 'Pogwizd', 'pppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$uLyV1XksexUBKvhGD69aqQ$znNpqJksE5uDHJGiudlX2xiV5IbXoA6VGFWXYPlgVSg'),
(31, 'Piotr', 'Pogwizd', 'ppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$5N9qvNC2yjhnb3p90seOgw$ziFbMCyWtep6lBxLrFbk7V0dtOuHkPIRqbvGrKxzm/w'),
(33, 'Piotr', 'Pogwizd', 'pppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$4CP+je2Y7h6wvgXLzgvgbQ$Uw2g5NzgYjWV0/5govKncZgX+V4fxRxwc/nGHbu0pqk'),
(34, 'Piotr', 'Pogwizd', 'ppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$554Tso/t003r0B9+cjnLPg$K9V/p/njKx9CuA8IsVfuWYV1QCA7UhrMP2lelHRuCbQ'),
(35, 'Piotr', 'Pogwizd', 'pppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$W5fKqGFlr6xtDUg8twZUGw$P1qgP72g+XK4YckSKQuW77hbePBcRCJ+w5hfXecBGkk'),
(36, 'Piotr', 'Pogwizd', 'ppppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$sw8xm0TXTSPkaQSavZnaOg$+g1ZCMzq97QZ8VZHRozlxrRMsGWb0pIaPOpDPb9FKVw'),
(37, 'Piotr', 'Pogwizd', 'pppppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$iCZkkdZ3EABFhsuNUZD8Kg$Uv0CDWgc4We1iZE8B5nvK/m8bjxDq6UTmzXlXVmPHcc'),
(38, 'Piotr', 'Pogwizd', 'ppppppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$NXr6n32hvo4yEmDohuUVJw$mJTt43StMfxUdwbUtq0S7mecXR4HwtzGyfItsSGQhlg'),
(39, 'Piotr', 'Pogwizd', 'pppppppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$0MdEPjbtoQFIEXufuijMmw$NqMLnMDF2TEUEhxbWV2aGzAL3mDBf8ias/NbDFa9280'),
(40, 'Piotr', 'Pogwizd', 'ppppppppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$XxXV+HGsKtsJbUs7M4OlYg$lRk1gK6o3l+w72DfsLj+7DIYdM7EdfM63vAEr0QYGeU'),
(41, 'Piotr', 'Pogwizd', 'pppppppppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$SwTmhwMmTvKYl4LCxDjMHA$aqAh1DFWJEof0l5wl2qAhEw16GNxvXyQlmpJXeBDmvY'),
(42, 'Piotr', 'Pogwizd', 'ppppppppppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$IJFVt3+mLG01cLeHtf+heA$aDM7HLY5Lt5k7Q7y/KVxDbSqhS+8CAni5fM50MXNgFI'),
(43, 'Piotr', 'Pogwizd', 'pppppppppppppppiotr.pogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$PUhEStbvg3MEsRUu0Lw/tQ$CGykMcRNycgRENYSvo08RI2Kj+VmLUHNWcxgZWcNf4o'),
(44, 'Piotr', 'Pogwizd', 'piotr.pogwizddd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$PJMxWjEZdY0gtRRQy6duTA$KEQL9mj7FwZGWEEBC2Phg8Ki6XYYh16TCe1PsNKNbz4'),
(45, 'Piotr', 'Pogwizd', 'piotrpogwizd@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$o2zzhnMBqsGKVYPR3qZtUg$7w72mq7t3bbO20PDofsfhTo2RlRRbXrW4JFjveRP4yE'),
(46, 'ania', 'stec', 'stec@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$EHG+5FmXf/yGEaky8FX1bw$jw755veEb3kPAp83drFjEyYEPoWdnL+mDK3KarL7LLg'),
(47, 'Piotr', 'Pogwizd', 'pogwizdpiotr@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$y1AbKH9jWspK+CIsQhf7Fg$3UABeq92Zp0M/I8UQK6bS0WkpCuGPsiCSh1OttY8khk'),
(48, 'Jarek', 'Fafara', 'jarek@wp.pl', '$argon2id$v=19$m=65536,t=3,p=4$o1p0Jvvfbb41RrUrZ4YDlw$8nXhI0zBLvnYon8goB9GvbiTT4g9p7NMdJSqb9GfofU');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `userfurniture`
--

CREATE TABLE `userfurniture` (
  `userId` int(11) NOT NULL,
  `furnituresId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `userfurniture`
--

INSERT INTO `userfurniture` (`userId`, `furnituresId`) VALUES
(27, 8),
(27, 10),
(27, 11),
(27, 13),
(27, 15),
(34, 13),
(35, 13),
(36, 13),
(38, 8),
(38, 10),
(38, 13),
(38, 14),
(38, 15),
(39, 8),
(39, 10),
(39, 11),
(40, 8),
(40, 10),
(40, 11),
(41, 8),
(41, 10),
(41, 11),
(42, 8),
(42, 10),
(42, 11),
(43, 8),
(43, 10),
(43, 11),
(44, 8),
(44, 10),
(45, 10),
(45, 11),
(45, 12),
(45, 13),
(46, 10),
(46, 13),
(46, 14),
(47, 8),
(47, 13),
(47, 15);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('89f01b3a-1208-41b9-8d2e-31af9d3147fc', 'e626854230ee3b88fc4814b6f2812fab1dac126806adbeb1616c872069011e45', '2023-01-29 16:15:15.677', '20230129161501_add_price_to_order', NULL, NULL, '2023-01-29 16:15:15.664', 1),
('9ec12f7c-eb47-4563-ad74-837ad8ce060a', 'a31810db6d1d29f906b765c1a703190fd59f8e0830e4baaf5f2de9e29297f287', '2023-01-29 16:03:18.708', '20230129160221_details_to_order_optional', NULL, NULL, '2023-01-29 16:03:18.665', 1),
('c1355f77-0e64-4d74-924e-5fde7107a424', '0845c4257500b23f7ab0bdfaf1d3655bd8497a0603587f0ff633c8816dce41c7', '2023-01-09 22:49:10.928', '20230109224129_big_update', NULL, NULL, '2023-01-09 22:49:10.810', 1),
('c20262dc-65b3-483c-8b99-9dda30e845c9', '4b59b07bdf76898bbbc2c833867de28e39c80deae96ce0e27849352f22aaf794', '2023-01-22 19:09:12.039', '20230122190752_add_user_furniture', NULL, NULL, '2023-01-22 19:09:11.901', 1),
('f71b061e-c0fb-4902-b9d1-0b3d892a9421', 'df3a4eff34169cee43b59b926f25c2f43cbcd1f5c43a348c633c660f1c0b45b5', '2023-01-29 14:01:41.262', '20230129135229_orders_model', NULL, NULL, '2023-01-29 14:01:41.229', 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `furnitures`
--
ALTER TABLE `furnitures`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Furnitures_specific_key` (`specific`),
  ADD KEY `Furnitures_producerId_fkey` (`producerId`);

--
-- Indeksy dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `producer`
--
ALTER TABLE `producer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Producer_name_key` (`name`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indeksy dla tabeli `userfurniture`
--
ALTER TABLE `userfurniture`
  ADD PRIMARY KEY (`userId`,`furnituresId`),
  ADD KEY `UserFurniture_furnituresId_fkey` (`furnituresId`);

--
-- Indeksy dla tabeli `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `furnitures`
--
ALTER TABLE `furnitures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT dla tabeli `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `producer`
--
ALTER TABLE `producer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `furnitures`
--
ALTER TABLE `furnitures`
  ADD CONSTRAINT `Furnitures_producerId_fkey` FOREIGN KEY (`producerId`) REFERENCES `producer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ograniczenia dla tabeli `userfurniture`
--
ALTER TABLE `userfurniture`
  ADD CONSTRAINT `UserFurniture_furnituresId_fkey` FOREIGN KEY (`furnituresId`) REFERENCES `furnitures` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UserFurniture_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
