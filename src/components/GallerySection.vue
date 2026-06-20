<template>
  <section class="gallery-section">
    <div class="container">
      <h2 class="section-title">角色画廊</h2>
      <p class="section-subtitle">Character Gallery</p>
      
      <div class="gallery-grid">
        <div 
          class="gallery-item" 
          v-for="(image, index) in galleryImages" 
          :key="index"
          :class="image.layoutClass"
          @click="openGallery"
        >
          <img :src="image.url" :alt="image.alt" class="gallery-img" />
          <div class="gallery-overlay">
            <p class="gallery-title">{{ image.title }}</p>
            <p class="gallery-hint">点击查看所有图片</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openGallery = () => {
  window.open('/gallery', '_blank')
}

const galleryImages = [
  {
    url: '/assets/风堇-[角色立绘].png',
    alt: '风堇官方立绘',
    title: '角色立绘',
    layoutClass: 'big-left'
  },
  {
    url: '/assets/风堇-[可爱瞬间] (1).png',
    alt: '风堇可爱瞬间',
    title: '可爱瞬间',
    layoutClass: 'portrait-1'
  },
  {
    url: '/assets/风堇-[樱花之约].png',
    alt: '风堇樱花之约',
    title: '樱花之约',
    layoutClass: 'portrait-2'
  },
  {
    url: '/assets/风堇光锥-[愿虹光永驻天空].png',
    alt: '风堇光锥',
    title: '愿虹光永驻天空',
    layoutClass: 'portrait-3'
  },
  {
    url: '/assets/风堇-[睡颜].png',
    alt: '风堇睡颜',
    title: '睡颜',
    layoutClass: 'landscape-left'
  },
  {
    url: '/assets/风堇-[温泉].png',
    alt: '风堇温泉',
    title: '温泉',
    layoutClass: 'landscape-right'
  }
]
</script>

<style scoped>
.gallery-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #fff5f8 0%, #ffffff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.section-title {
  text-align: center;
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.section-subtitle {
  text-align: center;
  font-size: 16px;
  color: #999;
  letter-spacing: 4px;
  margin-bottom: 60px;
  text-transform: uppercase;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 200px 200px 160px;
  gap: 16px;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f5f5f5;
}

.gallery-item:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 40px rgba(233, 30, 99, 0.2);
}

.big-left {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

.portrait-1 {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}

.portrait-2 {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
}

.portrait-3 {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}

.landscape-left {
  grid-column: 1 / 3;
  grid-row: 3 / 4;
}

.landscape-right {
  grid-column: 3 / 5;
  grid-row: 3 / 4;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 20px 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-title {
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
}

.gallery-hint {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  text-align: center;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 12px;
  }
  
  .big-left,
  .landscape-left,
  .landscape-right {
    grid-column: span 2;
    grid-row: auto;
  }
  
  .portrait-1,
  .portrait-2,
  .portrait-3 {
    grid-column: span 1;
    grid-row: auto;
  }
}
</style>
