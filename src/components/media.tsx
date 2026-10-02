'use client'

import { Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { isPlaceholder, t, type CertificateItem, type Language, type VideoItem } from '@/src/data/profile'

export function VideoPlayer({ item, language }: { item: VideoItem; language: Language }) {
  const [missing, setMissing] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const label = t(item.title, language)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (videoRef.current?.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) setMissing(true)
    }, 1400)
    return () => window.clearTimeout(timer)
  }, [])
  const missingLabel = language === 'ar' ? 'تُضاف الوسائط لاحقًا' : 'Media to be added'
  if (missing || item.available === false) return <div className="media-placeholder" role="img" aria-label={`${label}: ${missingLabel}`}><span className="media-number">{item.tag}</span><span className="play-mark"><Play size={17} fill="currentColor" /></span><span className="media-note">{missingLabel}</span></div>

  return <div className="video-frame" ref={(element) => { if (element) element.dataset.videoId = item.id }}>
    <video ref={videoRef} className="video-element" controls preload="metadata" poster={item.poster} aria-label={label} onError={() => setMissing(true)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
      <source src={item.src} type="video/mp4" />
    </video>
    {!playing && <button type="button" className="video-play" aria-label={language === 'ar' ? 'تشغيل الفيديو' : 'Play video'} onClick={() => { if (videoRef.current) void videoRef.current.play() }}><Play size={18} fill="currentColor" /></button>}
  </div>
}

export function GalleryImage({ src, alt, label, available = true, onError }: { src: string; alt: string; label: string; available?: boolean; onError?: () => void }) {
  const [missing, setMissing] = useState(false)
  if (missing || !available) return <div className="gallery-placeholder" role="img" aria-label={alt}><span>{label}</span></div>
  return <img src={src} alt={alt} onError={(event) => { event.currentTarget.style.display = 'none'; setMissing(true); onError?.() }} />
}

export function CertificateCard({ item, language, onOpen }: { item: CertificateItem; language: Language; onOpen: (src: string, alt: string) => void }) {
  const [missing, setMissing] = useState(false)
  const title = t(item.title, language)
  const label = language === 'ar' ? 'فتح الشهادة' : 'Open certificate'
  return <button type="button" className="certificate-card" onClick={() => !missing && onOpen(item.image, title)} aria-label={`${label}: ${title}`}>
    <div className="certificate-image">{missing ? <div className="gallery-placeholder" role="img" aria-label={title}><span>{language === 'ar' ? 'تُضاف الشهادة لاحقًا' : 'Certificate to be added'}</span></div> : <img src={item.image} alt={title} onError={(event) => { event.currentTarget.style.display = 'none'; setMissing(true) }} />}</div>
    <strong>{title}</strong>{item.institution && <small>{t(item.institution, language)}</small>}{item.year && <small>{item.year}</small>}
  </button>
}
