<template>
  <div class="gallery-page">
    <div class="header">
      <button class="back-btn" @click="goBack">
        <span class="back-icon">←</span> 返回
      </button>
      <h1>角色画廊</h1>
      <p class="subtitle">Character Gallery</p>
    </div>
    
    <div class="gallery-container">
      <div class="gallery-grid">
        <div 
          class="gallery-item" 
          v-for="(image, index) in imageData" 
          :key="index"
          @click="openLightbox(index)"
        >
          <img :src="image.url" :alt="image.title" />
          <div class="gallery-overlay">
            <p class="overlay-title">{{ image.title }}</p>
            <p class="overlay-hint">点击查看大图</p>
          </div>
        </div>
      </div>
    </div>

    <div class="empty-state" v-if="imageData.length === 0">
      <p>暂无图片</p>
    </div>

    <div class="lightbox" v-if="lightboxOpen" @click.self="closeLightbox">
      <button class="lightbox-close" @click="closeLightbox">×</button>
      <button class="lightbox-prev" @click="prevImage">‹</button>
      <img :src="imageData[currentIndex].url" class="lightbox-img" />
      <button class="lightbox-next" @click="nextImage">›</button>
      <div class="lightbox-bottom">
        <div class="lightbox-counter">{{ currentIndex + 1 }} / {{ imageData.length }}</div>
        <button class="lightbox-download" @click="downloadImage">下载图片</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.opener) {
    window.close()
  } else {
    router.push('/')
  }
}

// 从文件名解析标题：匹配方括号内的内容
const extractTitle = (path) => {
  const filename = path.split('/').pop()
  const match = filename.match(/\[(.+?)\]/)
  return match ? match[1] : filename.replace(/\.(png|jpg|jpeg|gif|svg|webp)$/i, '')
}

const imageData = computed(() => {
  const images = []
  const modules = import.meta.glob('../assets/Images/*.{png,jpg,jpeg,gif,svg,webp}', { eager: true })
  for (const path in modules) {
    images.push({
      url: modules[path].default,
      title: extractTitle(path)
    })
  }
  return images
})

const lightboxOpen = ref(false)
const currentIndex = ref(0)

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + imageData.value.length) % imageData.value.length
}

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % imageData.value.length
}

const downloadImage = () => {
  const image = imageData.value[currentIndex.value]
  const link = document.createElement('a')
  link.href = image.url
  link.download = image.title + '.png'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped>
.gallery-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff5f8 0%, #ffffff 100%);
  padding-bottom: 60px;
}

.header {
  text-align: center;
  padding: 60px 20px 40px;
  position: relative;
}

.back-btn {
  position: absolute;
  left: 30px;
  top: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: white;
  border: 1px solid #e91e63;
  border-radius: 25px;
  color: #e91e63;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #e91e63;
  color: white;
}

.back-icon {
  font-size: 18px;
}

.header h1 {
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  color: #999;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.gallery-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;
  background: #f5f5f5;
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(233, 30, 99, 0.2);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-title {
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.overlay-hint {
  position: absolute;
  bottom: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.empty-state {
  text-align: center;
  padding: 100px 20px;
  color: #999;
}

.empty-state p {
  font-size: 18px;
  margin-bottom: 10px;
}

.hint {
  font-size: 14px !important;
  color: #bbb;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.lightbox-img {
  max-width: 90%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.lightbox-close:hover {
  transform: scale(1.2);
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 60px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 20px;
  transition: opacity 0.3s ease;
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  opacity: 0.7;
}

.lightbox-bottom {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
}

.lightbox-counter {
  color: white;
  font-size: 16px;
  letter-spacing: 2px;
}

.lightbox-download {
  padding: 8px 20px;
  background: rgba(233, 30, 99, 0.8);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.lightbox-download:hover {
  background: #e91e63;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 32px;
  }
  
  .back-btn {
    position: static;
    margin-bottom: 20px;
  }
  
  .gallery-container {
    padding: 0 20px;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .lightbox-prev,
  .lightbox-next {
    font-size: 40px;
    padding: 10px;
  }
}
</style>
