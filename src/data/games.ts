export interface Game {
  id: number;
  title: string;
  genre: string;
  category: string;
  rating: number;
  reviews: number;
  downloads: number;
  size: string;
  year: number;
  description: string;
  image: string;
  tags: string[];
  isNew?: boolean;
  isTop?: boolean;
}

const IMG1 = "https://cdn.poehali.dev/projects/8368f3ca-0eb3-409c-a5d2-66d64bc1a24e/files/8abfb54f-c0ef-4c7f-b9ca-c559395d79b2.jpg";
const IMG2 = "https://cdn.poehali.dev/projects/8368f3ca-0eb3-409c-a5d2-66d64bc1a24e/files/e0cacfde-f683-49be-aa4e-48a925d2c9a7.jpg";
const IMG3 = "https://cdn.poehali.dev/projects/8368f3ca-0eb3-409c-a5d2-66d64bc1a24e/files/0003cfb3-dd3e-4be6-b57d-f70229959fd5.jpg";

export const games: Game[] = [
  // ── ACTION ──
  { id: 1, title: "GTA V", genre: "Action", category: "action", rating: 4.9, reviews: 98420, downloads: 5200000, size: "95 GB", year: 2015, description: "Легендарный открытый мир в Лос-Сантосе. Три персонажа, ограбления, онлайн и бесконечные возможности.", image: IMG1, tags: ["Открытый мир", "Криминал", "Мультиплеер"], isTop: true },
  { id: 2, title: "Red Dead Redemption 2", genre: "Action", category: "action", rating: 4.9, reviews: 87300, downloads: 3800000, size: "150 GB", year: 2019, description: "Эпическая история ковбоя на Диком Западе. Самый детализированный открытый мир в истории игр.", image: IMG2, tags: ["Открытый мир", "Запад", "Сюжет"], isTop: true },
  { id: 3, title: "Cyberpunk 2077", genre: "Action RPG", category: "action", rating: 4.7, reviews: 76500, downloads: 4100000, size: "70 GB", year: 2020, description: "Мрачный киберпанк в Night City. Импланты, хакинг, нелинейный сюжет и Киану Ривз.", image: IMG3, tags: ["Киберпанк", "Открытый мир", "RPG"], isTop: true },
  { id: 4, title: "God of War", genre: "Action", category: "action", rating: 4.9, reviews: 65200, downloads: 2900000, size: "45 GB", year: 2022, description: "Кратос и Атрей против скандинавских богов. Один из лучших экшнов всех времён.", image: IMG1, tags: ["Мифология", "Отец и сын", "Хардкор"], isTop: true },
  { id: 5, title: "The Witcher 3", genre: "Action RPG", category: "action", rating: 4.9, reviews: 112000, downloads: 6200000, size: "50 GB", year: 2015, description: "Геральт из Ривии в поисках Цири. Огромный мир, сотни квестов, незабываемые персонажи.", image: IMG2, tags: ["Фэнтези", "Открытый мир", "Ведьмак"], isTop: true },
  { id: 6, title: "Elden Ring", genre: "Action RPG", category: "action", rating: 4.8, reviews: 54300, downloads: 2600000, size: "45 GB", year: 2022, description: "Soulslike от FromSoftware и Джорджа Мартина. Огромный открытый мир, безжалостные боссы.", image: IMG3, tags: ["Soulslike", "Хардкор", "Фэнтези"], isTop: true },
  { id: 7, title: "Ghost of Tsushima", genre: "Action", category: "action", rating: 4.8, reviews: 43200, downloads: 1900000, size: "50 GB", year: 2020, description: "Самурай против монгольских захватчиков. Красивейший открытый мир феодальной Японии.", image: IMG1, tags: ["Самурай", "Япония", "Открытый мир"] },
  { id: 8, title: "Batman: Arkham Knight", genre: "Action", category: "action", rating: 4.6, reviews: 38900, downloads: 2200000, size: "45 GB", year: 2015, description: "Последняя ночь Бэтмена в Готэм-Сити. Бэтмобиль, схватки, эпичный финал серии.", image: IMG2, tags: ["Супергерой", "Готэм", "Стелс"] },
  { id: 9, title: "Sekiro: Shadows Die Twice", genre: "Action", category: "action", rating: 4.7, reviews: 29800, downloads: 1400000, size: "14 GB", year: 2019, description: "Синоби против самураев в феодальной Японии. Жёсткий, но справедливый.", image: IMG3, tags: ["Япония", "Хардкор", "Синоби"] },
  { id: 10, title: "Shadow Protocol", genre: "Action RPG", category: "action", rating: 4.8, reviews: 2341, downloads: 125000, size: "12.4 GB", year: 2024, description: "Киберпанк экшн в огромном открытом мире. Взламывай системы, побеждай врагов, раскрывай заговор корпораций.", image: IMG1, tags: ["Киберпанк", "Хакинг", "Хардкор"], isNew: true },
  { id: 11, title: "Assassin's Creed Odyssey", genre: "Action RPG", category: "action", rating: 4.5, reviews: 52100, downloads: 3100000, size: "46 GB", year: 2018, description: "Древняя Греция глазами спартанца или спартанки. Огромный мир, морские сражения, RPG-механики.", image: IMG2, tags: ["Греция", "Открытый мир", "История"] },
  { id: 12, title: "Spider-Man Remastered", genre: "Action", category: "action", rating: 4.8, reviews: 47600, downloads: 2400000, size: "75 GB", year: 2022, description: "Паучок летает по Нью-Йорку. Лучшие механики передвижения в истории игр.", image: IMG3, tags: ["Супергерой", "Нью-Йорк", "Паркур"] },
  { id: 13, title: "Dying Light 2", genre: "Action", category: "action", rating: 4.3, reviews: 31200, downloads: 1800000, size: "60 GB", year: 2022, description: "Паркур среди зомби в постапокалиптическом городе. Кооп на 4 игрока, день и ночь меняют всё.", image: IMG1, tags: ["Зомби", "Паркур", "Кооп"] },
  { id: 14, title: "Cursed Relic", genre: "Action", category: "action", rating: 4.0, reviews: 2340, downloads: 145000, size: "8.8 GB", year: 2023, description: "Hack-and-slash в мире тёмного фэнтези. Сотни врагов, эпический лут.", image: IMG2, tags: ["Hack&Slash", "Лут", "Тёмное"] },

  // ── RPG ──
  { id: 15, title: "Baldur's Gate 3", genre: "RPG", category: "rpg", rating: 4.9, reviews: 89400, downloads: 3500000, size: "150 GB", year: 2023, description: "Лучшая RPG поколения. D&D в огромном мире, 100+ часов контента, кооп на 4 игрока.", image: IMG3, tags: ["D&D", "Кооп", "Сюжет"], isTop: true, isNew: true },
  { id: 16, title: "Dark Souls 3", genre: "Action RPG", category: "rpg", rating: 4.8, reviews: 78200, downloads: 4200000, size: "15 GB", year: 2016, description: "Финальная глава культовой серии. Самые зрелищные боссы, атмосфера умирающего мира.", image: IMG1, tags: ["Soulslike", "Хардкор", "Боссы"], isTop: true },
  { id: 17, title: "Dragon's Oath", genre: "RPG", category: "rpg", rating: 4.9, reviews: 5670, downloads: 320000, size: "24.1 GB", year: 2023, description: "Эпическое фэнтезийное приключение. Приручай драконов, спасай королевства, стань легендой.", image: IMG2, tags: ["Фэнтези", "Драконы", "Сюжет"], isTop: true },
  { id: 18, title: "Divinity: Original Sin 2", genre: "RPG", category: "rpg", rating: 4.8, reviews: 61300, downloads: 2800000, size: "30 GB", year: 2017, description: "Изометрическая RPG с тактическими боями. Невероятная свобода действий и глубокий сюжет.", image: IMG3, tags: ["Тактика", "Кооп", "Магия"] },
  { id: 19, title: "Horizon Zero Dawn", genre: "Action RPG", category: "rpg", rating: 4.7, reviews: 48900, downloads: 2600000, size: "72 GB", year: 2020, description: "Охотница Элой против роботов-животных. Постапокалиптический мир, луки и технологии.", image: IMG1, tags: ["Роботы", "Охота", "Открытый мир"] },
  { id: 20, title: "Mass Effect Legendary", genre: "RPG", category: "rpg", rating: 4.8, reviews: 54700, downloads: 2300000, size: "120 GB", year: 2021, description: "Трилогия Шепарда в одном издании. Спасай галактику от Жнецов, влюбляйся в пришельцев.", image: IMG2, tags: ["Sci-Fi", "Трилогия", "Романтика"] },
  { id: 21, title: "Arcane Depths", genre: "RPG", category: "rpg", rating: 4.6, reviews: 987, downloads: 56000, size: "15.3 GB", year: 2024, description: "Мрачное фэнтезийное RPG с процедурно генерируемыми подземельями.", image: IMG3, tags: ["Roguelike", "Магия", "Тёмное"], isNew: true },
  { id: 22, title: "Pathfinder: Wrath", genre: "RPG", category: "rpg", rating: 4.5, reviews: 22400, downloads: 890000, size: "50 GB", year: 2021, description: "Глубокая cRPG по правилам Pathfinder. Тысячи часов контента, десятки классов.", image: IMG1, tags: ["cRPG", "Классы", "Фэнтези"] },
  { id: 23, title: "Monster Hunter: World", genre: "Action RPG", category: "rpg", rating: 4.7, reviews: 67800, downloads: 3400000, size: "48 GB", year: 2018, description: "Охоться на огромных монстров в живом экосистемном мире. Кооп на 4, сотни часов геймплея.", image: IMG2, tags: ["Охота", "Кооп", "Монстры"], isTop: true },

  // ── STRATEGY ──
  { id: 24, title: "Civilization VI", genre: "Стратегия", category: "strategy", rating: 4.7, reviews: 71200, downloads: 4800000, size: "17 GB", year: 2016, description: "Строй цивилизацию от каменного века до космоса. Один из лучших 4X всех времён.", image: IMG3, tags: ["4X", "История", "Дипломатия"], isTop: true },
  { id: 25, title: "Total War: Warhammer 3", genre: "Стратегия", category: "strategy", rating: 4.6, reviews: 38400, downloads: 1700000, size: "120 GB", year: 2022, description: "Эпические битвы в мире Warhammer Fantasy. Сотни юнитов, хаос-боги, демоны.", image: IMG1, tags: ["Warhammer", "Битвы", "Фэнтези"] },
  { id: 26, title: "Starcraft II", genre: "Стратегия", category: "strategy", rating: 4.7, reviews: 93100, downloads: 7200000, size: "30 GB", year: 2010, description: "Легенда киберспорта. Три расы, миллионы игроков, бесплатный мультиплеер.", image: IMG2, tags: ["Киберспорт", "RTS", "Sci-Fi"], isTop: true },
  { id: 27, title: "Void Armada", genre: "Стратегия", category: "strategy", rating: 4.6, reviews: 1890, downloads: 98000, size: "8.2 GB", year: 2024, description: "Командуй флотом в космических битвах. Захватывай системы, строй базы, уничтожай врагов.", image: IMG3, tags: ["Космос", "Флот", "PvP"], isNew: true },
  { id: 28, title: "Age of Empires IV", genre: "Стратегия", category: "strategy", rating: 4.5, reviews: 34600, downloads: 2100000, size: "50 GB", year: 2021, description: "Строй средневековые цивилизации и веди армии к победе. Восемь наций, кампании.", image: IMG1, tags: ["Средневековье", "RTS", "Армия"] },
  { id: 29, title: "Iron Conquest", genre: "Стратегия", category: "strategy", rating: 4.5, reviews: 2100, downloads: 112000, size: "7.3 GB", year: 2023, description: "Стратегия реального времени. Строй империю, веди армии, побеждай соперников.", image: IMG2, tags: ["RTS", "Армия", "Мультиплеер"], isTop: true },
  { id: 30, title: "Galaxy Forge", genre: "Стратегия", category: "strategy", rating: 4.8, reviews: 1567, downloads: 89000, size: "6.9 GB", year: 2024, description: "4X стратегия в огромной вселенной. Исследуй галактики, дипломатия, войны.", image: IMG3, tags: ["4X", "Галактика", "Дипломатия"], isNew: true, isTop: true },
  { id: 31, title: "Crusader Kings 3", genre: "Стратегия", category: "strategy", rating: 4.7, reviews: 46200, downloads: 2500000, size: "7 GB", year: 2020, description: "Управляй династией в Средневековье. Интриги, браки, войны, предательства.", image: IMG1, tags: ["Средневековье", "Династия", "Интриги"] },
  { id: 32, title: "XCOM 2", genre: "Стратегия", category: "strategy", rating: 4.6, reviews: 52300, downloads: 3200000, size: "45 GB", year: 2016, description: "Тактическая стратегия против инопланетян. Перманентная смерть бойцов, высокая сложность.", image: IMG2, tags: ["Тактика", "Пришельцы", "Перманентная смерть"] },

  // ── SHOOTER ──
  { id: 33, title: "Counter-Strike 2", genre: "Шутер", category: "shooter", rating: 4.6, reviews: 210000, downloads: 15000000, size: "32 GB", year: 2023, description: "Обновлённая классика. Бесплатно, динамика дыма, улучшенная графика, те же 5v5.", image: IMG3, tags: ["Киберспорт", "5v5", "Тактика"], isTop: true, isNew: true },
  { id: 34, title: "Valorant", genre: "Шутер", category: "shooter", rating: 4.5, reviews: 180000, downloads: 14000000, size: "22 GB", year: 2020, description: "Тактический шутер от Riot Games. Уникальные агенты со способностями, бесплатный.", image: IMG1, tags: ["Киберспорт", "Агенты", "5v5"], isTop: true },
  { id: 35, title: "Apex Legends", genre: "Шутер", category: "shooter", rating: 4.4, reviews: 156000, downloads: 13000000, size: "85 GB", year: 2019, description: "Королевская битва с легендами. Бесплатный, уникальные персонажи, пинг-система.", image: IMG2, tags: ["Battle Royale", "Легенды", "Бесплатно"], isTop: true },
  { id: 36, title: "Fortnite", genre: "Шутер", category: "shooter", rating: 4.2, reviews: 290000, downloads: 22000000, size: "90 GB", year: 2017, description: "Самая известная королевская битва. Строительство, коллаборации, постоянные обновления.", image: IMG3, tags: ["Battle Royale", "Строительство", "Бесплатно"] },
  { id: 37, title: "Call of Duty: Warzone", genre: "Шутер", category: "shooter", rating: 4.3, reviews: 167000, downloads: 11000000, size: "100 GB", year: 2020, description: "Бесплатная королевская битва от CoD. 150 игроков, Verdansk, операторы.", image: IMG1, tags: ["Battle Royale", "Военный", "Бесплатно"] },
  { id: 38, title: "Phantom Strike", genre: "Шутер", category: "shooter", rating: 4.3, reviews: 4500, downloads: 250000, size: "11.7 GB", year: 2023, description: "Тактический шутер от первого лица. Реалистичная физика, командная игра.", image: IMG2, tags: ["Тактика", "Команда", "FPS"] },
  { id: 39, title: "Battlefield 2042", genre: "Шутер", category: "shooter", rating: 4.0, reviews: 78400, downloads: 3600000, size: "100 GB", year: 2021, description: "Масштабные баталии будущего. 128 игроков, специалисты, разрушаемость.", image: IMG3, tags: ["Война", "128 игроков", "Разрушение"] },
  { id: 40, title: "Doom Eternal", genre: "Шутер", category: "shooter", rating: 4.7, reviews: 43800, downloads: 2700000, size: "50 GB", year: 2020, description: "Убийца демонов в аду и на Земле. Быстрый, брутальный, невероятный саундтрек.", image: IMG1, tags: ["Демоны", "Скоростной", "Ад"] },
  { id: 41, title: "Overwatch 2", genre: "Шутер", category: "shooter", rating: 4.1, reviews: 134000, downloads: 9800000, size: "50 GB", year: 2022, description: "Командный шутер от Blizzard. Герои со способностями, 5v5, бесплатный.", image: IMG2, tags: ["Герои", "5v5", "Бесплатно"] },
  { id: 42, title: "Zombie Breach", genre: "Шутер", category: "shooter", rating: 4.2, reviews: 3210, downloads: 180000, size: "9.6 GB", year: 2023, description: "Выживай в постапокалиптическом мире. Кооператив на 4 игрока, орды врагов.", image: IMG3, tags: ["Зомби", "Кооп", "Выживание"], isTop: true },
  { id: 43, title: "Escape from Tarkov", genre: "Шутер", category: "shooter", rating: 4.4, reviews: 56700, downloads: 2100000, size: "40 GB", year: 2017, description: "Хардкорный тактический шутер. Реализм, лут, PvPvE в постсоветском Таркове.", image: IMG1, tags: ["Хардкор", "Лут", "Реализм"] },

  // ── RACING ──
  { id: 44, title: "Forza Horizon 5", genre: "Гонки", category: "racing", rating: 4.8, reviews: 67400, downloads: 4200000, size: "110 GB", year: 2021, description: "Лучшая гоночная игра поколения. Мексика, 500+ машин, сезонная система, бесплатный онлайн.", image: IMG2, tags: ["Открытый мир", "Мексика", "Машины"], isTop: true },
  { id: 45, title: "Gran Turismo 7", genre: "Гонки", category: "racing", rating: 4.6, reviews: 43200, downloads: 2800000, size: "90 GB", year: 2022, description: "Симулятор-легенда. Реалистичная физика, лицензированные трассы, тюнинг до деталей.", image: IMG3, tags: ["Симулятор", "Реализм", "Тюнинг"] },
  { id: 46, title: "Need for Speed: Heat", genre: "Гонки", category: "racing", rating: 4.2, reviews: 38700, downloads: 2400000, size: "40 GB", year: 2019, description: "Уличные гонки в Пальм-Сити. День — легальные гонки, ночь — нелегальные.", image: IMG1, tags: ["Улицы", "Ночные гонки", "Кастомизация"] },
  { id: 47, title: "Neon Racer X", genre: "Гонки", category: "racing", rating: 4.4, reviews: 876, downloads: 67000, size: "5.8 GB", year: 2024, description: "Сверхскоростные гонки в неоновом городе будущего. 60+ трасс, кастомизация авто.", image: IMG2, tags: ["Неон", "Скорость", "Кастомизация"], isNew: true },
  { id: 48, title: "F1 2023", genre: "Гонки", category: "racing", rating: 4.5, reviews: 29300, downloads: 1600000, size: "80 GB", year: 2023, description: "Официальная игра Формулы 1. Все команды, трассы, режим карьеры болельщика.", image: IMG3, tags: ["Формула 1", "Карьера", "Симулятор"] },
  { id: 49, title: "Speed Demons", genre: "Гонки", category: "racing", rating: 4.1, reviews: 654, downloads: 38000, size: "4.5 GB", year: 2023, description: "Уличные гонки с физикой разрушений. Реальные города, ночные заезды.", image: IMG1, tags: ["Улицы", "Разрушения", "Ночь"] },
  { id: 50, title: "Rocket League", genre: "Гонки", category: "racing", rating: 4.6, reviews: 189000, downloads: 12000000, size: "20 GB", year: 2015, description: "Футбол на машинах. Простая концепция, бесконечный скилл-потолок, бесплатный.", image: IMG2, tags: ["Футбол", "Машины", "Киберспорт"], isTop: true },
  { id: 51, title: "Dirt Rally 2.0", genre: "Гонки", category: "racing", rating: 4.5, reviews: 24100, downloads: 1100000, size: "65 GB", year: 2019, description: "Самый хардкорный раллийный симулятор. Грязь, лёд, снег — ошибка стоит победы.", image: IMG3, tags: ["Ралли", "Симулятор", "Хардкор"] },

  // ── PUZZLE ──
  { id: 52, title: "Portal 2", genre: "Головоломка", category: "puzzle", rating: 4.9, reviews: 124000, downloads: 8900000, size: "8 GB", year: 2011, description: "Культовая головоломка с порталами. GLaDOS, кооп с другом, идеальный дизайн уровней.", image: IMG1, tags: ["Порталы", "Кооп", "Юмор"], isTop: true },
  { id: 53, title: "The Witness", genre: "Головоломка", category: "puzzle", rating: 4.6, reviews: 18900, downloads: 890000, size: "4 GB", year: 2016, description: "Загадочный остров, заполненный паразлями с линиями. 500+ головоломок, красота природы.", image: IMG2, tags: ["Острог", "Линии", "Медитация"] },
  { id: 54, title: "Mind Labyrinth", genre: "Головоломка", category: "puzzle", rating: 4.7, reviews: 1234, downloads: 45000, size: "2.1 GB", year: 2024, description: "Исследуй загадочные измерения разума. 200+ уровней, атмосферная музыка.", image: IMG3, tags: ["Логика", "Атмосфера", "Инди"], isNew: true },
  { id: 55, title: "Tetris Effect", genre: "Головоломка", category: "puzzle", rating: 4.8, reviews: 31200, downloads: 2100000, size: "5 GB", year: 2019, description: "Тетрис переосмыслен. Музыка и визуальные эффекты синхронизированы с геймплеем.", image: IMG1, tags: ["Музыка", "Классика", "VR"] },
  { id: 56, title: "Outer Wilds", genre: "Головоломка", category: "puzzle", rating: 4.8, reviews: 42100, downloads: 1800000, size: "6 GB", year: 2019, description: "Исследуй солнечную систему в петле времени 22 минуты. Один из самых уникальных опытов.", image: IMG2, tags: ["Исследование", "Петля времени", "Космос"] },
  { id: 57, title: "Baba Is You", genre: "Головоломка", category: "puzzle", rating: 4.7, reviews: 28600, downloads: 1400000, size: "1 GB", year: 2019, description: "Изменяй правила игры прямо в игре. Абсолютно уникальная механика головоломок.", image: IMG3, tags: ["Правила", "Инди", "Уникальный"] },
  { id: 58, title: "Return of the Obra Dinn", genre: "Головоломка", category: "puzzle", rating: 4.8, reviews: 35400, downloads: 1600000, size: "1 GB", year: 2018, description: "Детектив на призрачном корабле. Воссоздай момент смерти каждого из 60 членов экипажа.", image: IMG1, tags: ["Детектив", "Пираты", "Логика"] },

  // ── ЕЩЁ ПОПУЛЯРНЫЕ ──
  { id: 59, title: "Minecraft", genre: "Песочница", category: "puzzle", rating: 4.8, reviews: 345000, downloads: 25000000, size: "1 GB", year: 2011, description: "Строй всё что угодно в мире из кубиков. Выживание, творчество, мультиплеер — бесконечно.", image: IMG2, tags: ["Песочница", "Строительство", "Выживание"], isTop: true },
  { id: 60, title: "Among Us", genre: "Головоломка", category: "puzzle", rating: 4.2, reviews: 198000, downloads: 16000000, size: "1 GB", year: 2018, description: "Найди предателя среди экипажа. Социальная дедукция, обман, веселье с друзьями.", image: IMG3, tags: ["Социальный", "Предатель", "Бесплатно"] },
  { id: 61, title: "Terraria", genre: "Песочница", category: "puzzle", rating: 4.9, reviews: 87600, downloads: 6800000, size: "1 GB", year: 2011, description: "2D приключение с тысячами предметов. Копай, строй, сражайся — одна из лучших инди-игр.", image: IMG1, tags: ["2D", "Инди", "Выживание"] },
  { id: 62, title: "Stardew Valley", genre: "RPG", category: "rpg", rating: 4.9, reviews: 143000, downloads: 9200000, size: "1 GB", year: 2016, description: "Фермерская жизнь в уютной долине. Выращивай урожай, дружи с жителями, исследуй шахты.", image: IMG2, tags: ["Ферма", "Расслабление", "Инди"], isTop: true },
  { id: 63, title: "Hades", genre: "Action RPG", category: "action", rating: 4.9, reviews: 98700, downloads: 5600000, size: "5 GB", year: 2020, description: "Roguelike про сына Аида. Каждый забег уникален, каждая смерть двигает сюжет вперёд.", image: IMG3, tags: ["Roguelike", "Мифология", "Инди"], isTop: true, isNew: true },
  { id: 64, title: "Hollow Knight", genre: "Action", category: "action", rating: 4.9, reviews: 112000, downloads: 7300000, size: "9 GB", year: 2017, description: "Мрачный метроидвания про рыцаря-жука. Огромный подземный мир, сложные боссы, красота.", image: IMG1, tags: ["Метроидвания", "Жуки", "Инди"] },
  { id: 65, title: "Sea of Thieves", genre: "Action", category: "action", rating: 4.3, reviews: 67800, downloads: 4500000, size: "50 GB", year: 2018, description: "Пиратские приключения в открытом море. Кооп до 4 игроков, сражения кораблей, клады.", image: IMG2, tags: ["Пираты", "Кооп", "Открытый мир"] },
  { id: 66, title: "No Man's Sky", genre: "Приключение", category: "action", rating: 4.4, reviews: 89300, downloads: 3800000, size: "15 GB", year: 2016, description: "Бесконечная вселенная из 18 квинтиллионов планет. Строительство баз, кооп, постоянные обновления.", image: IMG3, tags: ["Космос", "Процедурный", "Исследование"] },
];

export const categories = [
  { id: "all", label: "Все игры", icon: "Gamepad2" },
  { id: "action", label: "Экшн", icon: "Sword" },
  { id: "rpg", label: "RPG", icon: "Shield" },
  { id: "strategy", label: "Стратегии", icon: "Map" },
  { id: "shooter", label: "Шутеры", icon: "Crosshair" },
  { id: "racing", label: "Гонки", icon: "Car" },
  { id: "puzzle", label: "Головоломки", icon: "Brain" },
];

export function formatDownloads(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return String(n);
}
