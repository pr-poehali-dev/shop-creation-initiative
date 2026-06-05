import Icon from '@/components/ui/icon';
import { Game, formatDownloads } from '@/data/games';

interface GameCardProps {
  game: Game;
  onRate: (gameId: number, rating: number) => void;
  userRating?: number;
}

function StarRating({ rating, gameId, onRate, userRating }: { rating: number; gameId: number; onRate: (id: number, r: number) => void; userRating?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          onClick={() => onRate(gameId, star)}
          className={`text-sm transition-transform hover:scale-125 ${star <= (userRating ?? Math.round(rating)) ? 'star-filled' : 'star-empty'}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function GameCard({ game, onRate, userRating }: GameCardProps) {
  return (
    <div className="neon-card rounded-lg overflow-hidden relative corner-tl corner-br group">
      <div className="relative overflow-hidden" style={{ height: 160 }}>
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute top-2 left-2 flex gap-1">
          {game.isNew && (
            <span className="hex-tag text-[10px]">NEW</span>
          )}
          {game.isTop && (
            <span style={{ background: 'var(--neon-yellow)', color: '#000' }} className="hex-tag text-[10px]">TOP</span>
          )}
        </div>
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5 text-xs text-muted-foreground font-display">
          {game.size}
        </div>
        <div className="absolute bottom-2 left-2 text-xs text-muted-foreground font-display tracking-wider uppercase">
          {game.genre}
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-display font-bold text-base text-white tracking-wide mb-1 group-hover:text-neon-cyan transition-colors line-clamp-1">
          {game.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2 leading-relaxed">
          {game.description}
        </p>

        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={game.rating} gameId={game.id} onRate={onRate} userRating={userRating} />
          <span className="text-xs font-display font-bold text-neon-yellow">{game.rating}</span>
          <span className="text-xs text-muted-foreground">({game.reviews.toLocaleString()})</span>
        </div>

        <div className="flex gap-1 flex-wrap mb-3">
          {game.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded border border-border text-muted-foreground font-display tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Icon name="Download" size={12} />
            <span className="font-display">{formatDownloads(game.downloads)}</span>
          </div>
          <button className="dl-btn px-4 py-1.5 text-xs cursor-pointer">
            Скачать
          </button>
        </div>
      </div>
    </div>
  );
}
