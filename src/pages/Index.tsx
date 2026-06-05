import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import GameCard from '@/components/GameCard';
import { games, categories } from '@/data/games';

type Section = 'home' | 'catalog' | 'categories' | 'top' | 'new' | 'about' | 'contacts';

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [userRatings, setUserRatings] = useState<Record<number, number>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRate = (gameId: number, rating: number) => {
    setUserRatings(prev => ({ ...prev, [gameId]: rating }));
  };

  const filteredGames = useMemo(() => {
    let list = games;
    if (activeSection === 'top') list = games.filter(g => g.isTop);
    if (activeSection === 'new') list = games.filter(g => g.isNew);
    if (activeSection === 'categories' || activeSection === 'catalog') {
      if (activeCategory !== 'all') list = games.filter(g => g.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(g =>
        g.title.toLowerCase().includes(q) ||
        g.genre.toLowerCase().includes(q) ||
        g.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeSection, activeCategory, searchQuery]);

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: 'home', label: 'Главная', icon: 'House' },
    { id: 'catalog', label: 'Каталог', icon: 'Grid3x3' },
    { id: 'categories', label: 'Категории', icon: 'LayoutGrid' },
    { id: 'top', label: 'Топ игры', icon: 'Trophy' },
    { id: 'new', label: 'Новинки', icon: 'Sparkles' },
    { id: 'about', label: 'О портале', icon: 'Info' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const topList = [...games].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="scanlines min-h-screen grid-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => setActiveSection('home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 flex items-center justify-center rounded border border-neon-cyan relative">
              <span className="text-neon-cyan font-display font-black text-lg">G</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-neon-cyan rounded-full animate-pulse-neon" />
            </div>
            <span className="font-display font-black text-xl tracking-widest text-white group-hover:neon-text transition-all">
              GAME<span className="text-neon-cyan">ZONE</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-display font-medium tracking-wide transition-all ${
                  activeSection === item.id
                    ? 'text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon name={item.icon} size={14} />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 border border-border rounded px-3 py-1.5 bg-card w-48 focus-within:border-neon-cyan/50 transition-colors">
            <Icon name="Search" size={14} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm outline-none w-full font-body placeholder:text-muted-foreground text-foreground"
            />
          </div>

          {/* Mobile menu toggle */}
          <button className="lg:hidden text-muted-foreground hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card px-4 py-3 flex flex-wrap gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-display font-medium tracking-wide transition-all ${
                  activeSection === item.id
                    ? 'text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/30'
                    : 'text-muted-foreground border border-border hover:text-white'
                }`}
              >
                <Icon name={item.icon} size={12} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* ===== HOME ===== */}
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            {/* Hero */}
            <div className="relative rounded-xl overflow-hidden mb-12" style={{ minHeight: 420 }}>
              <img src={games[2].image} alt="hero" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="relative z-10 p-10 flex flex-col justify-center" style={{ minHeight: 420 }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="hex-tag">Игра дня</span>
                  <span className="text-xs text-muted-foreground font-display">★★★★★ 4.9</span>
                </div>
                <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-4 max-w-lg">
                  {games[2].title}
                </h1>
                <p className="text-muted-foreground max-w-md mb-6 text-sm leading-relaxed">
                  {games[2].description}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <button className="dl-btn px-6 py-2.5 text-sm cursor-pointer">
                    Скачать бесплатно
                  </button>
                  <button
                    onClick={() => setActiveSection('catalog')}
                    className="px-6 py-2.5 text-sm border border-border rounded text-muted-foreground hover:border-neon-cyan/40 hover:text-white transition-all font-display tracking-wide"
                  >
                    Весь каталог
                  </button>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-30 hidden md:block">
                <div className="border border-neon-cyan/40 rounded w-32 h-32 flex items-center justify-center">
                  <div className="border border-neon-cyan/30 rounded w-20 h-20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-neon-cyan/50 rounded-full animate-pulse-neon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Игр в каталоге', value: '1,200+', icon: 'Gamepad2' },
                { label: 'Скачиваний', value: '4.2M+', icon: 'Download' },
                { label: 'Пользователей', value: '890K', icon: 'Users' },
                { label: 'Новинок в месяц', value: '40+', icon: 'Sparkles' },
              ].map(stat => (
                <div key={stat.label} className="neon-card rounded-lg p-4 text-center">
                  <Icon name={stat.icon} size={20} className="text-neon-cyan mx-auto mb-2" />
                  <div className="font-display font-black text-2xl text-white mb-0.5">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Top games preview */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-black text-2xl text-white tracking-wide flex items-center gap-2">
                  <span className="text-neon-yellow">⚡</span> Топ игры
                </h2>
                <button onClick={() => setActiveSection('top')} className="text-xs text-neon-cyan hover:underline font-display tracking-wide">
                  Смотреть все →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {games.filter(g => g.isTop).slice(0, 3).map(game => (
                  <GameCard key={game.id} game={game} onRate={handleRate} userRating={userRatings[game.id]} />
                ))}
              </div>
            </div>

            {/* New games preview */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display font-black text-2xl text-white tracking-wide flex items-center gap-2">
                  <span className="text-neon-cyan">✦</span> Новинки
                </h2>
                <button onClick={() => setActiveSection('new')} className="text-xs text-neon-cyan hover:underline font-display tracking-wide">
                  Смотреть все →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {games.filter(g => g.isNew).slice(0, 4).map(game => (
                  <GameCard key={game.id} game={game} onRate={handleRate} userRating={userRatings[game.id]} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== CATALOG & CATEGORIES ===== */}
        {(activeSection === 'catalog' || activeSection === 'categories') && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="font-display font-black text-3xl text-white tracking-wide">
                {activeSection === 'catalog' ? 'Каталог игр' : 'Категории'}
              </h1>
              <span className="text-muted-foreground text-sm font-display">/ {filteredGames.length} игр</span>
            </div>

            {/* Search mobile */}
            <div className="md:hidden flex items-center gap-2 border border-border rounded px-3 py-2 bg-card mb-4 focus-within:border-neon-cyan/50 transition-colors">
              <Icon name="Search" size={14} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск игр..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm outline-none w-full font-body placeholder:text-muted-foreground text-foreground"
              />
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-display font-semibold tracking-wide transition-all ${
                    activeCategory === cat.id
                      ? 'bg-neon-cyan text-background'
                      : 'border border-border text-muted-foreground hover:border-neon-cyan/40 hover:text-white'
                  }`}
                >
                  <Icon name={cat.icon} size={13} />
                  {cat.label}
                </button>
              ))}
            </div>

            {filteredGames.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Icon name="SearchX" size={48} className="mx-auto mb-3 opacity-30" />
                <p className="font-display text-lg">Ничего не найдено</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGames.map(game => (
                  <GameCard key={game.id} game={game} onRate={handleRate} userRating={userRatings[game.id]} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===== TOP ===== */}
        {activeSection === 'top' && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="font-display font-black text-3xl text-white tracking-wide flex items-center gap-2">
                <Icon name="Trophy" size={28} className="text-neon-yellow" />
                Топ игры
              </h1>
            </div>

            {/* Leaderboard */}
            <div className="mb-8">
              {topList.map((game, i) => (
                <div key={game.id} className="neon-card rounded-lg p-4 mb-3 flex items-center gap-4 group">
                  <div className={`font-display font-black text-3xl w-10 text-center flex-shrink-0 ${
                    i === 0 ? 'text-neon-yellow' : i === 1 ? 'text-gray-300' : i === 2 ? 'text-amber-600' : 'text-muted-foreground'
                  }`}>
                    {i + 1}
                  </div>
                  <img src={game.image} alt={game.title} className="w-14 h-14 rounded object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-bold text-white group-hover:text-neon-cyan transition-colors">{game.title}</div>
                    <div className="text-xs text-muted-foreground">{game.genre}</div>
                  </div>
                  <div className="text-right hidden sm:block flex-shrink-0">
                    <div className="font-display font-bold text-neon-yellow text-lg">★ {game.rating}</div>
                    <div className="text-xs text-muted-foreground">{game.reviews.toLocaleString()} отзывов</div>
                  </div>
                  <button className="dl-btn px-4 py-1.5 text-xs flex-shrink-0 cursor-pointer">
                    Скачать
                  </button>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGames.map(game => (
                <GameCard key={game.id} game={game} onRate={handleRate} userRating={userRatings[game.id]} />
              ))}
            </div>
          </div>
        )}

        {/* ===== NEW ===== */}
        {activeSection === 'new' && (
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="font-display font-black text-3xl text-white tracking-wide flex items-center gap-2">
                <Icon name="Sparkles" size={28} className="text-neon-cyan" />
                Новинки
              </h1>
              <span className="text-muted-foreground text-sm font-display">/ 2024</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGames.map(game => (
                <GameCard key={game.id} game={game} onRate={handleRate} userRating={userRatings[game.id]} />
              ))}
            </div>
          </div>
        )}

        {/* ===== ABOUT ===== */}
        {activeSection === 'about' && (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <h1 className="font-display font-black text-4xl text-white tracking-wide mb-2">О портале</h1>
            <div className="h-0.5 w-16 mb-8" style={{ background: 'var(--neon-cyan)' }} />
            <div className="space-y-6">
              {[
                { title: 'Что такое GameZone?', text: 'GameZone — бесплатный игровой портал с огромным каталогом игр. Мы собираем лучшие бесплатные игры для PC, Mac и Android в одном месте.' },
                { title: 'Рейтинговая система', text: 'Каждый посетитель может оценить игру от 1 до 5 звёзд. Итоговый рейтинг формируется на основе оценок реальных пользователей — без накрутки и манипуляций.' },
                { title: 'Безопасность', text: 'Все игры проходят проверку перед публикацией. Мы гарантируем отсутствие вирусов и вредоносного ПО в файлах на нашем портале.' },
                { title: 'Обновления', text: 'Каталог пополняется еженедельно. Новинки появляются в разделе «Новинки», а популярные игры — в «Топ играх».' },
              ].map(item => (
                <div key={item.title} className="neon-card rounded-lg p-5 relative corner-tl corner-br">
                  <h3 className="font-display font-bold text-lg text-neon-cyan mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== CONTACTS ===== */}
        {activeSection === 'contacts' && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <h1 className="font-display font-black text-4xl text-white tracking-wide mb-2">Контакты</h1>
            <div className="h-0.5 w-16 mb-8" style={{ background: 'var(--neon-cyan)' }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: 'Mail', label: 'Email', value: 'support@gamezone.ru' },
                { icon: 'MessageCircle', label: 'Telegram', value: '@gamezone_ru' },
                { icon: 'Clock', label: 'Поддержка', value: 'Пн–Пт, 10:00–20:00' },
                { icon: 'Globe', label: 'Сайт', value: 'gamezone.ru' },
              ].map(item => (
                <div key={item.label} className="neon-card rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded border border-neon-cyan/30 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={18} className="text-neon-cyan" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-display">{item.label}</div>
                    <div className="text-sm text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="neon-card rounded-lg p-6 relative corner-tl corner-br">
              <h3 className="font-display font-bold text-lg text-white mb-4">Написать нам</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm outline-none focus:border-neon-cyan/50 transition-colors placeholder:text-muted-foreground text-foreground font-body"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm outline-none focus:border-neon-cyan/50 transition-colors placeholder:text-muted-foreground text-foreground font-body"
                />
                <textarea
                  placeholder="Сообщение..."
                  rows={4}
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm outline-none focus:border-neon-cyan/50 transition-colors placeholder:text-muted-foreground text-foreground font-body resize-none"
                />
                <button className="dl-btn px-6 py-2.5 text-sm w-full cursor-pointer">
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-black text-lg tracking-widest text-white">
            GAME<span className="text-neon-cyan">ZONE</span>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="text-xs text-muted-foreground hover:text-neon-cyan transition-colors font-display tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="text-xs text-muted-foreground font-display">© 2024 GameZone. Все игры бесплатны.</div>
        </div>
      </footer>
    </div>
  );
}