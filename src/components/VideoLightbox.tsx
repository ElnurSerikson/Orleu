import { useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
};

export default function VideoLightbox({ open, onClose, videoUrl, title }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  // Поддержка YouTube и обычных mp4 ссылок
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  const embedUrl = isYouTube
    ? videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')
    : videoUrl;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink-900/80 text-sand-50 transition hover:bg-ink-800"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-glow">
          {isYouTube ? (
            <iframe
              src={embedUrl}
              title={title || 'Видео'}
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={embedUrl}
              controls
              autoPlay
              className="aspect-video w-full"
            />
          )}
        </div>
        {title && (
          <div className="mt-4 text-center text-sm text-sand-100/70">{title}</div>
        )}
      </div>
    </div>
  );
}
