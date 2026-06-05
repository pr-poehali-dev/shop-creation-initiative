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

const BASE = "https://cdn.poehali.dev/projects/8368f3ca-0eb3-409c-a5d2-66d64bc1a24e/files/";

const I = {
  gta5:         BASE + "496af631-8e1d-4339-a6bb-1153d4fcc226.jpg",
  rdr2:         BASE + "b4690123-6cfd-4e79-b2cd-a04ace1cabf4.jpg",
  cyberpunk:    BASE + "1821f2ad-2e38-4ba3-8271-c9ebcb5e898f.jpg",
  godofwar:     BASE + "8999ee38-bcf8-42af-a94c-4b9412f0c749.jpg",
  witcher3:     BASE + "df4feb0d-53a5-41f3-a046-90269ef88ab4.jpg",
  eldenring:    BASE + "76cf94a9-001b-4131-a91d-09f114d62dd9.jpg",
  tsushima:     BASE + "f1de5b85-25f6-44df-bcff-ad5364d44ad6.jpg",
  batman:       BASE + "17ec6c97-d508-49a8-ac3b-a6e4da6dc16a.jpg",
  sekiro:       BASE + "536d83af-7097-4a43-87af-6a421032bbef.jpg",
  acOdyssey:    BASE + "600a16b6-4091-4331-adfc-a7dd674719a1.jpg",
  spiderman:    BASE + "99119328-524e-4a26-9684-9a53b726ff2a.jpg",
  dyinglight:   BASE + "1cd1544e-5ebe-4f01-abcf-4ea6f6f47d9f.jpg",
  bg3:          BASE + "5377c5d6-101e-4daf-af32-95381f0a064c.jpg",
  darksouls3:   BASE + "bec22a12-f11c-4b4c-a106-23df662f400f.jpg",
  divinity:     BASE + "b82adb3f-170f-44a8-ab20-7106c38005cc.jpg",
  horizon:      BASE + "3cb1f28e-6e8d-4ddf-a011-b2f4daebdcf5.jpg",
  masseffect:   BASE + "930cb5c3-ac07-4022-94fb-0eb19ddc19e9.jpg",
  mhworld:      BASE + "d2e9f0a5-469c-4c87-af4c-24783bdeab1c.jpg",
  civ6:         BASE + "97ee8f62-be7c-4f07-af0a-0e68b0bdc7ae.jpg",
  starcraft2:   BASE + "eac7bd7a-ba26-453c-8bbc-89ef4f18d3ff.jpg",
  ck3:          BASE + "8ddceff4-9581-4890-b07c-91ae39985c00.jpg",
  cs2:          BASE + "7a529b30-d5ff-4c83-aeba-075dfa9cd67c.jpg",
  valorant:     BASE + "e6db5507-15d0-49b1-b7fb-390475cb66e5.jpg",
  apex:         BASE + "6b2f9495-5f2d-4752-92b2-27b512a0b6a9.jpg",
  fortnite:     BASE + "00a50406-edf2-46f8-b2a9-a925c8b8a13a.jpg",
  warzone:      BASE + "f5bac0e1-8ae3-40c3-8a25-92569e74c37e.jpg",
  doom:         BASE + "30937f53-a69e-4436-b854-a47bd6be5bdd.jpg",
  tarkov:       BASE + "8294f5ef-302d-431a-ae78-833dc267cddd.jpg",
  forza5:       BASE + "3de0a549-9143-477c-9df1-46331455d3c7.jpg",
  nfsHeat:      BASE + "9141dcdf-592c-4670-9d2f-d1ffa5cd3ce9.jpg",
  rocketleague: BASE + "2444bd22-4a77-4ab1-9047-8e4c09bbc004.jpg",
  portal2:      BASE + "bf9a30c1-e188-4376-9cfe-37741cc38957.jpg",
  minecraft:    BASE + "8a3d3e3a-e4af-4ffc-99a3-1ec1453dc925.jpg",
  hades:        BASE + "3ad1b267-4960-4dbb-acc7-2d89c444864f.jpg",
  hollow:       BASE + "56ff6534-bdff-437b-a53e-45d1fac32d05.jpg",
  stardew:      BASE + "828f9928-628d-4552-8ef8-e3861cf7c21d.jpg",
  seaofthieves: BASE + "2fb1ccf7-955e-4ed9-bd54-562c4ac1a01b.jpg",
  nomanssky:    BASE + "b467f3f1-6c68-4f0f-815a-47543743aec3.jpg",
  terraria:     BASE + "8990a288-fc36-4e84-ad00-ac49fca82db1.jpg",
  shadow:       BASE + "8abfb54f-c0ef-4c7f-b9ca-c559395d79b2.jpg",
  voidImg:      BASE + "e0cacfde-f683-49be-aa4e-48a925d2c9a7.jpg",
  dragon:       BASE + "0003cfb3-dd3e-4be6-b57d-f70229959fd5.jpg",
};

export const games: Game[] = [
  // ── ACTION ──
  { id: 1,  title: "GTA V",                   genre: "Action",      category: "action",   rating: 4.9, reviews: 98420,  downloads: 5200000,  size: "95 GB",  year: 2015, description: "Легендарный открытый мир в Лос-Сантосе. Три персонажа, ограбления, онлайн и бесконечные возможности.",               image: I.gta5,        tags: ["Открытый мир","Криминал","Мультиплеер"],        isTop: true },
  { id: 2,  title: "Red Dead Redemption 2",   genre: "Action",      category: "action",   rating: 4.9, reviews: 87300,  downloads: 3800000,  size: "150 GB", year: 2019, description: "Эпическая история ковбоя на Диком Западе. Самый детализированный открытый мир в истории игр.",                     image: I.rdr2,        tags: ["Открытый мир","Запад","Сюжет"],                 isTop: true },
  { id: 3,  title: "Cyberpunk 2077",          genre: "Action RPG",  category: "action",   rating: 4.7, reviews: 76500,  downloads: 4100000,  size: "70 GB",  year: 2020, description: "Мрачный киберпанк в Night City. Импланты, хакинг, нелинейный сюжет и Киану Ривз.",                                  image: I.cyberpunk,   tags: ["Киберпанк","Открытый мир","RPG"],               isTop: true },
  { id: 4,  title: "God of War",              genre: "Action",      category: "action",   rating: 4.9, reviews: 65200,  downloads: 2900000,  size: "45 GB",  year: 2022, description: "Кратос и Атрей против скандинавских богов. Один из лучших экшнов всех времён.",                                      image: I.godofwar,    tags: ["Мифология","Отец и сын","Хардкор"],             isTop: true },
  { id: 5,  title: "The Witcher 3",           genre: "Action RPG",  category: "action",   rating: 4.9, reviews: 112000, downloads: 6200000,  size: "50 GB",  year: 2015, description: "Геральт из Ривии в поисках Цири. Огромный мир, сотни квестов, незабываемые персонажи.",                              image: I.witcher3,    tags: ["Фэнтези","Открытый мир","Ведьмак"],             isTop: true },
  { id: 6,  title: "Elden Ring",              genre: "Action RPG",  category: "action",   rating: 4.8, reviews: 54300,  downloads: 2600000,  size: "45 GB",  year: 2022, description: "Soulslike от FromSoftware и Джорджа Мартина. Огромный открытый мир, безжалостные боссы.",                            image: I.eldenring,   tags: ["Soulslike","Хардкор","Фэнтези"],                isTop: true },
  { id: 7,  title: "Ghost of Tsushima",       genre: "Action",      category: "action",   rating: 4.8, reviews: 43200,  downloads: 1900000,  size: "50 GB",  year: 2020, description: "Самурай против монгольских захватчиков. Красивейший открытый мир феодальной Японии.",                                image: I.tsushima,    tags: ["Самурай","Япония","Открытый мир"] },
  { id: 8,  title: "Batman: Arkham Knight",   genre: "Action",      category: "action",   rating: 4.6, reviews: 38900,  downloads: 2200000,  size: "45 GB",  year: 2015, description: "Последняя ночь Бэтмена в Готэм-Сити. Бэтмобиль, схватки, эпичный финал серии.",                                     image: I.batman,      tags: ["Супергерой","Готэм","Стелс"] },
  { id: 9,  title: "Sekiro: Shadows Die Twice", genre: "Action",    category: "action",   rating: 4.7, reviews: 29800,  downloads: 1400000,  size: "14 GB",  year: 2019, description: "Синоби против самураев в феодальной Японии. Жёсткий, но справедливый.",                                             image: I.sekiro,      tags: ["Япония","Хардкор","Синоби"] },
  { id: 10, title: "Assassin's Creed Odyssey", genre: "Action RPG", category: "action",  rating: 4.5, reviews: 52100,  downloads: 3100000,  size: "46 GB",  year: 2018, description: "Древняя Греция глазами спартанца. Огромный мир, морские сражения, RPG-механики.",                                     image: I.acOdyssey,   tags: ["Греция","Открытый мир","История"] },
  { id: 11, title: "Spider-Man Remastered",   genre: "Action",      category: "action",   rating: 4.8, reviews: 47600,  downloads: 2400000,  size: "75 GB",  year: 2022, description: "Паучок летает по Нью-Йорку. Лучшие механики передвижения в истории игр.",                                            image: I.spiderman,   tags: ["Супергерой","Нью-Йорк","Паркур"] },
  { id: 12, title: "Dying Light 2",           genre: "Action",      category: "action",   rating: 4.3, reviews: 31200,  downloads: 1800000,  size: "60 GB",  year: 2022, description: "Паркур среди зомби в постапокалиптическом городе. Кооп на 4 игрока.",                                               image: I.dyinglight,  tags: ["Зомби","Паркур","Кооп"] },
  { id: 13, title: "Hades",                   genre: "Action RPG",  category: "action",   rating: 4.9, reviews: 98700,  downloads: 5600000,  size: "5 GB",   year: 2020, description: "Roguelike про сына Аида. Каждый забег уникален, каждая смерть двигает сюжет вперёд.",                                 image: I.hades,       tags: ["Roguelike","Мифология","Инди"],                 isTop: true, isNew: true },
  { id: 14, title: "Hollow Knight",           genre: "Action",      category: "action",   rating: 4.9, reviews: 112000, downloads: 7300000,  size: "9 GB",   year: 2017, description: "Мрачная метроидвания про рыцаря-жука. Огромный подземный мир, сложные боссы.",                                       image: I.hollow,      tags: ["Метроидвания","Жуки","Инди"] },
  { id: 15, title: "Sea of Thieves",          genre: "Action",      category: "action",   rating: 4.3, reviews: 67800,  downloads: 4500000,  size: "50 GB",  year: 2018, description: "Пиратские приключения в открытом море. Кооп до 4 игроков, сражения кораблей, клады.",                                image: I.seaofthieves, tags: ["Пираты","Кооп","Открытый мир"] },
  { id: 16, title: "No Man's Sky",            genre: "Приключение", category: "action",   rating: 4.4, reviews: 89300,  downloads: 3800000,  size: "15 GB",  year: 2016, description: "Бесконечная вселенная из квинтиллионов планет. Строительство баз, кооп, постоянные обновления.",                   image: I.nomanssky,   tags: ["Космос","Процедурный","Исследование"] },
  { id: 17, title: "Shadow Protocol",         genre: "Action RPG",  category: "action",   rating: 4.8, reviews: 2341,   downloads: 125000,   size: "12.4 GB", year: 2024, description: "Киберпанк экшн в огромном открытом мире. Взламывай системы, побеждай врагов.",                                      image: I.shadow,      tags: ["Киберпанк","Хакинг","Хардкор"],                 isNew: true },
  { id: 18, title: "Cursed Relic",            genre: "Action",      category: "action",   rating: 4.0, reviews: 2340,   downloads: 145000,   size: "8.8 GB", year: 2023, description: "Hack-and-slash в мире тёмного фэнтези. Сотни врагов, эпический лут.",                                               image: I.darksouls3,  tags: ["Hack&Slash","Лут","Тёмное"] },

  // ── RPG ──
  { id: 19, title: "Baldur's Gate 3",         genre: "RPG",         category: "rpg",      rating: 4.9, reviews: 89400,  downloads: 3500000,  size: "150 GB", year: 2023, description: "Лучшая RPG поколения. D&D в огромном мире, 100+ часов контента, кооп на 4 игрока.",                                   image: I.bg3,         tags: ["D&D","Кооп","Сюжет"],                           isTop: true, isNew: true },
  { id: 20, title: "Dark Souls 3",            genre: "Action RPG",  category: "rpg",      rating: 4.8, reviews: 78200,  downloads: 4200000,  size: "15 GB",  year: 2016, description: "Финальная глава культовой серии. Самые зрелищные боссы, атмосфера умирающего мира.",                                   image: I.darksouls3,  tags: ["Soulslike","Хардкор","Боссы"],                  isTop: true },
  { id: 21, title: "Dragon's Oath",           genre: "RPG",         category: "rpg",      rating: 4.9, reviews: 5670,   downloads: 320000,   size: "24.1 GB", year: 2023, description: "Эпическое фэнтезийное приключение. Приручай драконов, спасай королевства, стань легендой.",                          image: I.dragon,      tags: ["Фэнтези","Драконы","Сюжет"],                    isTop: true },
  { id: 22, title: "Divinity: Original Sin 2", genre: "RPG",        category: "rpg",      rating: 4.8, reviews: 61300,  downloads: 2800000,  size: "30 GB",  year: 2017, description: "Изометрическая RPG с тактическими боями. Невероятная свобода действий и глубокий сюжет.",                             image: I.divinity,    tags: ["Тактика","Кооп","Магия"] },
  { id: 23, title: "Horizon Zero Dawn",       genre: "Action RPG",  category: "rpg",      rating: 4.7, reviews: 48900,  downloads: 2600000,  size: "72 GB",  year: 2020, description: "Охотница Элой против роботов-животных. Постапокалиптический мир, луки и технологии.",                                image: I.horizon,     tags: ["Роботы","Охота","Открытый мир"] },
  { id: 24, title: "Mass Effect Legendary",   genre: "RPG",         category: "rpg",      rating: 4.8, reviews: 54700,  downloads: 2300000,  size: "120 GB", year: 2021, description: "Трилогия Шепарда в одном издании. Спасай галактику от Жнецов, влюбляйся в пришельцев.",                              image: I.masseffect,  tags: ["Sci-Fi","Трилогия","Романтика"] },
  { id: 25, title: "Monster Hunter: World",   genre: "Action RPG",  category: "rpg",      rating: 4.7, reviews: 67800,  downloads: 3400000,  size: "48 GB",  year: 2018, description: "Охоться на огромных монстров в живом экосистемном мире. Кооп на 4, сотни часов геймплея.",                           image: I.mhworld,     tags: ["Охота","Кооп","Монстры"],                       isTop: true },
  { id: 26, title: "Stardew Valley",          genre: "RPG",         category: "rpg",      rating: 4.9, reviews: 143000, downloads: 9200000,  size: "1 GB",   year: 2016, description: "Фермерская жизнь в уютной долине. Выращивай урожай, дружи с жителями, исследуй шахты.",                               image: I.stardew,     tags: ["Ферма","Расслабление","Инди"],                  isTop: true },
  { id: 27, title: "Pathfinder: Wrath",       genre: "RPG",         category: "rpg",      rating: 4.5, reviews: 22400,  downloads: 890000,   size: "50 GB",  year: 2021, description: "Глубокая cRPG по правилам Pathfinder. Тысячи часов контента, десятки классов.",                                      image: I.divinity,    tags: ["cRPG","Классы","Фэнтези"] },
  { id: 28, title: "Arcane Depths",           genre: "RPG",         category: "rpg",      rating: 4.6, reviews: 987,    downloads: 56000,    size: "15.3 GB", year: 2024, description: "Мрачное фэнтезийное RPG с процедурно генерируемыми подземельями.",                                                    image: I.darksouls3,  tags: ["Roguelike","Магия","Тёмное"],                   isNew: true },

  // ── STRATEGY ──
  { id: 29, title: "Civilization VI",         genre: "Стратегия",   category: "strategy", rating: 4.7, reviews: 71200,  downloads: 4800000,  size: "17 GB",  year: 2016, description: "Строй цивилизацию от каменного века до космоса. Один из лучших 4X всех времён.",                                     image: I.civ6,        tags: ["4X","История","Дипломатия"],                    isTop: true },
  { id: 30, title: "Starcraft II",            genre: "Стратегия",   category: "strategy", rating: 4.7, reviews: 93100,  downloads: 7200000,  size: "30 GB",  year: 2010, description: "Легенда киберспорта. Три расы, миллионы игроков, бесплатный мультиплеер.",                                           image: I.starcraft2,  tags: ["Киберспорт","RTS","Sci-Fi"],                    isTop: true },
  { id: 31, title: "Crusader Kings 3",        genre: "Стратегия",   category: "strategy", rating: 4.7, reviews: 46200,  downloads: 2500000,  size: "7 GB",   year: 2020, description: "Управляй династией в Средневековье. Интриги, браки, войны, предательства.",                                         image: I.ck3,         tags: ["Средневековье","Династия","Интриги"] },
  { id: 32, title: "Total War: Warhammer 3",  genre: "Стратегия",   category: "strategy", rating: 4.6, reviews: 38400,  downloads: 1700000,  size: "120 GB", year: 2022, description: "Эпические битвы в мире Warhammer Fantasy. Сотни юнитов, хаос-боги, демоны.",                                       image: I.voidImg,     tags: ["Warhammer","Битвы","Фэнтези"] },
  { id: 33, title: "Galaxy Forge",            genre: "Стратегия",   category: "strategy", rating: 4.8, reviews: 1567,   downloads: 89000,    size: "6.9 GB", year: 2024, description: "4X стратегия в огромной вселенной. Исследуй галактики, дипломатия, войны.",                                          image: I.voidImg,     tags: ["4X","Галактика","Дипломатия"],                  isNew: true, isTop: true },
  { id: 34, title: "Iron Conquest",           genre: "Стратегия",   category: "strategy", rating: 4.5, reviews: 2100,   downloads: 112000,   size: "7.3 GB", year: 2023, description: "Стратегия реального времени. Строй империю, веди армии, побеждай соперников.",                                      image: I.starcraft2,  tags: ["RTS","Армия","Мультиплеер"],                    isTop: true },
  { id: 35, title: "XCOM 2",                  genre: "Стратегия",   category: "strategy", rating: 4.6, reviews: 52300,  downloads: 3200000,  size: "45 GB",  year: 2016, description: "Тактическая стратегия против инопланетян. Перманентная смерть бойцов, высокая сложность.",                          image: I.civ6,        tags: ["Тактика","Пришельцы","Перманентная смерть"] },
  { id: 36, title: "Age of Empires IV",       genre: "Стратегия",   category: "strategy", rating: 4.5, reviews: 34600,  downloads: 2100000,  size: "50 GB",  year: 2021, description: "Строй средневековые цивилизации и веди армии к победе. Восемь наций, кампании.",                                  image: I.ck3,         tags: ["Средневековье","RTS","Армия"] },
  { id: 37, title: "Void Armada",             genre: "Стратегия",   category: "strategy", rating: 4.6, reviews: 1890,   downloads: 98000,    size: "8.2 GB", year: 2024, description: "Командуй флотом в космических битвах. Захватывай системы, строй базы, уничтожай врагов.",                         image: I.voidImg,     tags: ["Космос","Флот","PvP"],                          isNew: true },

  // ── SHOOTER ──
  { id: 38, title: "Counter-Strike 2",        genre: "Шутер",       category: "shooter",  rating: 4.6, reviews: 210000, downloads: 15000000, size: "32 GB",  year: 2023, description: "Обновлённая классика. Бесплатно, динамика дыма, улучшенная графика, те же 5v5.",                                    image: I.cs2,         tags: ["Киберспорт","5v5","Тактика"],                   isTop: true, isNew: true },
  { id: 39, title: "Valorant",                genre: "Шутер",       category: "shooter",  rating: 4.5, reviews: 180000, downloads: 14000000, size: "22 GB",  year: 2020, description: "Тактический шутер от Riot Games. Уникальные агенты со способностями, бесплатный.",                                  image: I.valorant,    tags: ["Киберспорт","Агенты","5v5"],                    isTop: true },
  { id: 40, title: "Apex Legends",            genre: "Шутер",       category: "shooter",  rating: 4.4, reviews: 156000, downloads: 13000000, size: "85 GB",  year: 2019, description: "Королевская битва с легендами. Бесплатный, уникальные персонажи, пинг-система.",                                   image: I.apex,        tags: ["Battle Royale","Легенды","Бесплатно"],          isTop: true },
  { id: 41, title: "Fortnite",                genre: "Шутер",       category: "shooter",  rating: 4.2, reviews: 290000, downloads: 22000000, size: "90 GB",  year: 2017, description: "Самая известная королевская битва. Строительство, коллаборации, постоянные обновления.",                           image: I.fortnite,    tags: ["Battle Royale","Строительство","Бесплатно"] },
  { id: 42, title: "Call of Duty: Warzone",   genre: "Шутер",       category: "shooter",  rating: 4.3, reviews: 167000, downloads: 11000000, size: "100 GB", year: 2020, description: "Бесплатная королевская битва от CoD. 150 игроков, Verdansk, операторы.",                                          image: I.warzone,     tags: ["Battle Royale","Военный","Бесплатно"] },
  { id: 43, title: "Doom Eternal",            genre: "Шутер",       category: "shooter",  rating: 4.7, reviews: 43800,  downloads: 2700000,  size: "50 GB",  year: 2020, description: "Убийца демонов в аду и на Земле. Быстрый, брутальный, невероятный саундтрек.",                                    image: I.doom,        tags: ["Демоны","Скоростной","Ад"] },
  { id: 44, title: "Escape from Tarkov",      genre: "Шутер",       category: "shooter",  rating: 4.4, reviews: 56700,  downloads: 2100000,  size: "40 GB",  year: 2017, description: "Хардкорный тактический шутер. Реализм, лут, PvPvE в постсоветском Таркове.",                                      image: I.tarkov,      tags: ["Хардкор","Лут","Реализм"] },
  { id: 45, title: "Battlefield 2042",        genre: "Шутер",       category: "shooter",  rating: 4.0, reviews: 78400,  downloads: 3600000,  size: "100 GB", year: 2021, description: "Масштабные баталии будущего. 128 игроков, специалисты, разрушаемость.",                                          image: I.warzone,     tags: ["Война","128 игроков","Разрушение"] },
  { id: 46, title: "Overwatch 2",             genre: "Шутер",       category: "shooter",  rating: 4.1, reviews: 134000, downloads: 9800000,  size: "50 GB",  year: 2022, description: "Командный шутер от Blizzard. Герои со способностями, 5v5, бесплатный.",                                          image: I.valorant,    tags: ["Герои","5v5","Бесплатно"] },
  { id: 47, title: "Zombie Breach",           genre: "Шутер",       category: "shooter",  rating: 4.2, reviews: 3210,   downloads: 180000,   size: "9.6 GB", year: 2023, description: "Выживай в постапокалиптическом мире. Кооператив на 4 игрока, орды врагов.",                                      image: I.dyinglight,  tags: ["Зомби","Кооп","Выживание"],                    isTop: true },
  { id: 48, title: "Phantom Strike",          genre: "Шутер",       category: "shooter",  rating: 4.3, reviews: 4500,   downloads: 250000,   size: "11.7 GB", year: 2023, description: "Тактический шутер от первого лица. Реалистичная физика, командная игра.",                                      image: I.cs2,         tags: ["Тактика","Команда","FPS"] },

  // ── RACING ──
  { id: 49, title: "Forza Horizon 5",         genre: "Гонки",       category: "racing",   rating: 4.8, reviews: 67400,  downloads: 4200000,  size: "110 GB", year: 2021, description: "Лучшая гоночная игра поколения. Мексика, 500+ машин, сезонная система.",                                          image: I.forza5,      tags: ["Открытый мир","Мексика","Машины"],              isTop: true },
  { id: 50, title: "Need for Speed: Heat",    genre: "Гонки",       category: "racing",   rating: 4.2, reviews: 38700,  downloads: 2400000,  size: "40 GB",  year: 2019, description: "Уличные гонки в Пальм-Сити. День — легальные гонки, ночь — нелегальные.",                                       image: I.nfsHeat,     tags: ["Улицы","Ночные гонки","Кастомизация"] },
  { id: 51, title: "Rocket League",           genre: "Гонки",       category: "racing",   rating: 4.6, reviews: 189000, downloads: 12000000, size: "20 GB",  year: 2015, description: "Футбол на машинах. Простая концепция, бесконечный скилл-потолок, бесплатный.",                                    image: I.rocketleague, tags: ["Футбол","Машины","Киберспорт"],                isTop: true },
  { id: 52, title: "Gran Turismo 7",          genre: "Гонки",       category: "racing",   rating: 4.6, reviews: 43200,  downloads: 2800000,  size: "90 GB",  year: 2022, description: "Симулятор-легенда. Реалистичная физика, лицензированные трассы, тюнинг до деталей.",                             image: I.forza5,      tags: ["Симулятор","Реализм","Тюнинг"] },
  { id: 53, title: "F1 2023",                 genre: "Гонки",       category: "racing",   rating: 4.5, reviews: 29300,  downloads: 1600000,  size: "80 GB",  year: 2023, description: "Официальная игра Формулы 1. Все команды, трассы, режим карьеры болельщика.",                                    image: I.rocketleague, tags: ["Формула 1","Карьера","Симулятор"] },
  { id: 54, title: "Dirt Rally 2.0",          genre: "Гонки",       category: "racing",   rating: 4.5, reviews: 24100,  downloads: 1100000,  size: "65 GB",  year: 2019, description: "Самый хардкорный раллийный симулятор. Грязь, лёд, снег — ошибка стоит победы.",                                  image: I.nfsHeat,     tags: ["Ралли","Симулятор","Хардкор"] },
  { id: 55, title: "Neon Racer X",            genre: "Гонки",       category: "racing",   rating: 4.4, reviews: 876,    downloads: 67000,    size: "5.8 GB", year: 2024, description: "Сверхскоростные гонки в неоновом городе будущего. 60+ трасс, кастомизация авто.",                              image: I.nfsHeat,     tags: ["Неон","Скорость","Кастомизация"],               isNew: true },
  { id: 56, title: "Speed Demons",            genre: "Гонки",       category: "racing",   rating: 4.1, reviews: 654,    downloads: 38000,    size: "4.5 GB", year: 2023, description: "Уличные гонки с физикой разрушений. Реальные города, ночные заезды.",                                           image: I.rocketleague, tags: ["Улицы","Разрушения","Ночь"] },

  // ── PUZZLE / ПРОЧЕЕ ──
  { id: 57, title: "Portal 2",                genre: "Головоломка", category: "puzzle",   rating: 4.9, reviews: 124000, downloads: 8900000,  size: "8 GB",   year: 2011, description: "Культовая головоломка с порталами. GLaDOS, кооп с другом, идеальный дизайн уровней.",                            image: I.portal2,     tags: ["Порталы","Кооп","Юмор"],                        isTop: true },
  { id: 58, title: "Minecraft",               genre: "Песочница",   category: "puzzle",   rating: 4.8, reviews: 345000, downloads: 25000000, size: "1 GB",   year: 2011, description: "Строй всё что угодно в мире из кубиков. Выживание, творчество, мультиплеер — бесконечно.",                    image: I.minecraft,   tags: ["Песочница","Строительство","Выживание"],        isTop: true },
  { id: 59, title: "Terraria",                genre: "Песочница",   category: "puzzle",   rating: 4.9, reviews: 87600,  downloads: 6800000,  size: "1 GB",   year: 2011, description: "2D приключение с тысячами предметов. Копай, строй, сражайся — одна из лучших инди-игр.",                      image: I.terraria,    tags: ["2D","Инди","Выживание"] },
  { id: 60, title: "Among Us",                genre: "Головоломка", category: "puzzle",   rating: 4.2, reviews: 198000, downloads: 16000000, size: "1 GB",   year: 2018, description: "Найди предателя среди экипажа. Социальная дедукция, обман, веселье с друзьями.",                                 image: I.portal2,     tags: ["Социальный","Предатель","Бесплатно"] },
  { id: 61, title: "Outer Wilds",             genre: "Головоломка", category: "puzzle",   rating: 4.8, reviews: 42100,  downloads: 1800000,  size: "6 GB",   year: 2019, description: "Исследуй солнечную систему в петле времени 22 минуты. Один из самых уникальных опытов.",                      image: I.nomanssky,   tags: ["Исследование","Петля времени","Космос"] },
  { id: 62, title: "Tetris Effect",           genre: "Головоломка", category: "puzzle",   rating: 4.8, reviews: 31200,  downloads: 2100000,  size: "5 GB",   year: 2019, description: "Тетрис переосмыслен. Музыка и визуальные эффекты синхронизированы с геймплеем.",                               image: I.portal2,     tags: ["Музыка","Классика","VR"] },
  { id: 63, title: "Mind Labyrinth",          genre: "Головоломка", category: "puzzle",   rating: 4.7, reviews: 1234,   downloads: 45000,    size: "2.1 GB", year: 2024, description: "Исследуй загадочные измерения разума. 200+ уровней, атмосферная музыка.",                                      image: I.minecraft,   tags: ["Логика","Атмосфера","Инди"],                    isNew: true },
  { id: 64, title: "The Witness",             genre: "Головоломка", category: "puzzle",   rating: 4.6, reviews: 18900,  downloads: 890000,   size: "4 GB",   year: 2016, description: "Загадочный остров, заполненный головоломками с линиями. 500+ уровней, красота природы.",                      image: I.nomanssky,   tags: ["Остров","Линии","Медитация"] },
  { id: 65, title: "Baba Is You",             genre: "Головоломка", category: "puzzle",   rating: 4.7, reviews: 28600,  downloads: 1400000,  size: "1 GB",   year: 2019, description: "Изменяй правила игры прямо в игре. Абсолютно уникальная механика головоломок.",                               image: I.terraria,    tags: ["Правила","Инди","Уникальный"] },
  { id: 66, title: "Return of the Obra Dinn", genre: "Головоломка", category: "puzzle",   rating: 4.8, reviews: 35400,  downloads: 1600000,  size: "1 GB",   year: 2018, description: "Детектив на призрачном корабле. Воссоздай момент смерти каждого из 60 членов экипажа.",                       image: I.seaofthieves, tags: ["Детектив","Пираты","Логика"] },
];

export const categories = [
  { id: "all",      label: "Все игры",    icon: "Gamepad2" },
  { id: "action",   label: "Экшн",        icon: "Sword" },
  { id: "rpg",      label: "RPG",         icon: "Shield" },
  { id: "strategy", label: "Стратегии",   icon: "Map" },
  { id: "shooter",  label: "Шутеры",      icon: "Crosshair" },
  { id: "racing",   label: "Гонки",       icon: "Car" },
  { id: "puzzle",   label: "Головоломки", icon: "Brain" },
];

export function formatDownloads(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return String(n);
}
