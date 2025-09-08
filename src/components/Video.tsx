import { useState } from 'react'
import './Video.css'

interface VideoItem {
  id: number
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  isYouTube: boolean
}

const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [videoItems] = useState<VideoItem[]>([
    {
      id: 1,
      title: '실제 친구들과 함께 게임 플레이 영상',
      description: 'GTA5를 하면서 친구들과 재미있는 순간들을 편집하여 올렸습니다.',
      thumbnail: '',
      videoUrl: 'https://www.youtube.com/embed/JVDZhL_S63c?autoplay=1&mute=1&loop=1&playlist=JVDZhL_S63c&controls=1&showinfo=1&rel=0',
      isYouTube: true
    },
    {
      id: 2,
      title: '발로란트 매드무비 영상',
      description: '제가 게임 플레이 하는 영상을 찍어 매드무비를 제작하였습니다 (By.박준수)',
      thumbnail: '',
      videoUrl: 'https://www.youtube.com/embed/y-Y5T3CULzs?autoplay=1&mute=1&loop=1&playlist=y-Y5T3CULzs&controls=1&showinfo=1&rel=0',
      isYouTube: true
    },
    {
      id: 3,
      title: '준비중입니다.',
      description: '준비중입니다.',
      thumbnail: '',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID_3&controls=1&showinfo=1&rel=0',
      isYouTube: true
    },
    {
      id: 4,
      title: '준비중입니다.',
      description: '준비중입니다.',
      thumbnail: 'https://via.placeholder.com/400x300/f39c12/ffffff?text=YouTube+Content',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID_4&controls=1&showinfo=1&rel=0',
      isYouTube: true
    }
  ])

  const handleVideoClick = (item: VideoItem) => {
    setSelectedVideo(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <section className="video">
      <div className="video-container">
        <h2 className="video-title">
          {/* <span className="video-label">VIDEO</span> */}
          영상 작업
        </h2>
        <div className="video-grid">
          {videoItems.map((item) => (
            <div 
              key={item.id} 
              className="video-item"
              onClick={() => handleVideoClick(item)}
            >
              <div className="video-card">
                {item.isYouTube ? (
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    className="video-player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video 
                    src={item.videoUrl} 
                    poster={item.thumbnail}
                    className="video-player"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}
                <div className="video-overlay">
                  <span 
                    className="video-category"
                    onClick={(e) => e.stopPropagation()}
                  >
                    VIDEO
                  </span>
                  <h3 className="video-item-title">{item.title}</h3>
                  <p className="video-description">{item.description}</p>
                  <button 
                    className="detail-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(item);
                    }}
                  >
                    재생
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 영상 모달 */}
      {isModalOpen && selectedVideo && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedVideo.title}</h2>
              <p className="modal-description">{selectedVideo.description}</p>
            </div>

            <div className="modal-content">
              <div className="video-player-container">
                {selectedVideo.isYouTube ? (
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="modal-video-player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video 
                    src={selectedVideo.videoUrl} 
                    poster={selectedVideo.thumbnail}
                    className="modal-video-player"
                    controls
                    autoPlay
                    preload="metadata"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Video