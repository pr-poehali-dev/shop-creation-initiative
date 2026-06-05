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
  { id: 1, title: "Shadow Protocol", genre: "Action RPG", category: "action", rating: 4.8, reviews: 2341, downloads: 125000, size: "12.4 GB", year: 2024, description: "Киберпанк экшн в огромном открытом мире. Взламывай системы, побеждай врагов, раскрывай заговор корпораций.", image: IMG1, tags: ["Киберпанк", "Открытый мир", "Хардкор"], isNew: true, isTop: true },
  { id: 2, title: "Void Armada", genre: "Стратегия", category: "strategy", rating: 4.6, reviews: 1890, downloads: 98000, size: "8.2 GB", year: 2024, description: "Командуй флотом в космических битвах. Захватывай системы, строй базы, уничтожай врагов.", image: IMG2, tags: ["Космос", "Флот", "PvP"], isNew: true, isTop: true },
  { id: 3, title: "Dragon's Oath", genre: "RPG", category: "rpg", rating: 4.9, reviews: 5670, downloads: 320000, size: "24.1 GB", year: 2023, description: "Эпическое фэнтезийное приключение. Приручай драконов, спасай королевства, стань легендой.", image: IMG3, tags: ["Фэнтези", "Драконы", "Сюжет"], isTop: true },
  { id: 4, title: "Neon Racer X", genre: "Гонки", category: "racing", rating: 4.4, reviews: 876, downloads: 67000, size: "5.8 GB", year: 2024, description: "Сверхскоростные гонки в неоновом городе будущего. 60+ трасс, кастомизация авто.", image: IMG1, tags: ["Неон", "Скорость", "Кастомизация"], isNew: true },
  { id: 5, title: "Zombie Breach", genre: "Шутер", category: "shooter", rating: 4.2, reviews: 3210, downloads: 180000, size: "9.6 GB", year: 2023, description: "Выживай в постапокалиптическом мире. Кооператив на 4 игрока, орды врагов.", image: IMG2, tags: ["Зомби", "Кооп", "Выживание"], isTop: true },
  { id: 6, title: "Mind Labyrinth", genre: "Головоломка", category: "puzzle", rating: 4.7, reviews: 1234, downloads: 45000, size: "2.1 GB", year: 2024, description: "Исследуй загадочные измерения разума. 200+ уровней, атмосферная музыка.", image: IMG3, tags: ["Логика", "Атмосфера", "Инди"], isNew: true },
  { id: 7, title: "Iron Conquest", genre: "Стратегия", category: "strategy", rating: 4.5, reviews: 2100, downloads: 112000, size: "7.3 GB", year: 2023, description: "Стратегия реального времени. Строй империю, веди армии, побеждай соперников.", image: IMG1, tags: ["RTS", "Армия", "Мультиплеер"], isTop: true },
  { id: 8, title: "Phantom Strike", genre: "Шутер", category: "shooter", rating: 4.3, reviews: 4500, downloads: 250000, size: "11.7 GB", year: 2023, description: "Тактический шутер от первого лица. Реалистичная физика, командная игра.", image: IMG2, tags: ["Тактика", "Команда", "FPS"] },
  { id: 9, title: "Arcane Depths", genre: "RPG", category: "rpg", rating: 4.6, reviews: 987, downloads: 56000, size: "15.3 GB", year: 2024, description: "Мрачное фэнтезийное RPG с процедурно генерируемыми подземельями.", image: IMG3, tags: ["Roguelike", "Магия", "Тёмное"], isNew: true },
  { id: 10, title: "Speed Demons", genre: "Гонки", category: "racing", rating: 4.1, reviews: 654, downloads: 38000, size: "4.5 GB", year: 2023, description: "Уличные гонки с физикой разрушений. Реальные города, ночные заезды.", image: IMG1, tags: ["Улицы", "Разрушения", "Ночь"] },
  { id: 11, title: "Galaxy Forge", genre: "Стратегия", category: "strategy", rating: 4.8, reviews: 1567, downloads: 89000, size: "6.9 GB", year: 2024, description: "4X стратегия в огромной вселенной. Исследуй галактики, дипломатия, войны.", image: IMG2, tags: ["4X", "Галактика", "Дипломатия"], isNew: true, isTop: true },
  { id: 12, title: "Cursed Relic", genre: "Action", category: "action", rating: 4.0, reviews: 2340, downloads: 145000, size: "8.8 GB", year: 2023, description: "Hack-and-slash в мире тёмного фэнтези. Сотни врагов, эпический лут.", image: IMG3, tags: ["Hack&Slash", "Лут", "Тёмное"] },
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
