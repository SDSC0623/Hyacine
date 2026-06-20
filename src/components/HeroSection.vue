<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <div class="hero-text">
        <p class="subtitle">崩坏：星穹铁道</p>
        <h1 class="title">风堇</h1>
        <p class="name-en">Hyacine</p>
        <p class="tagline">「 昏光庭院的医师 · 疗愈永夜的微光 」</p>
        <p class="intro">云间城邦随岁月离析，昏光庭院再度敞开门扉，为永夜捎来微光。</p>
        <p class="intro">医师雅辛忒丝，守望「天空」火种的黄金裔。继承先祖的意志，缝补破裂的晨昏——愿虹光洒落，仇怨消融，黎明重回大地。</p>
      </div>
      <div class="hero-image">
        <img 
          src="/assets/风堇-[角色立绘].png" 
          alt="风堇角色立绘" 
          class="character-img"
        />
      </div>
    </div>
    <div class="scroll-indicator">
      <div class="arrow"></div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%);
  z-index: -1;
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(173, 216, 230, 0.5) 0%, transparent 50%);
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5% 0 10%;
  width: 100%;
  padding: 0 60px;
  z-index: 1;
  gap: 3%;
}

.hero-text {
  flex: 1;
  text-align: left;
}

.subtitle {
  font-size: 18px;
  color: #8b5a5a;
  letter-spacing: 4px;
  margin-bottom: 10px;
  font-weight: 300;
}

.title {
  font-size: 96px;
  font-weight: 700;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 5px;
  line-height: 1.1;
}

.name-en {
  font-size: 28px;
  color: #9c27b0;
  font-style: italic;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.tagline {
  font-size: 20px;
  color: #666;
  margin-bottom: 20px;
  font-weight: 300;
}

.intro {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 10px;
  font-weight: 300;
}

.tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tag {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 14px;
  color: #e91e63;
  border: 1px solid rgba(233, 30, 99, 0.3);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(233, 30, 99, 0.1);
  transform: translateY(-2px);
}

.hero-image {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.character-img {
  max-height: 90vh;
  width: auto;
  filter: drop-shadow(0 20px 40px rgba(233, 30, 99, 0.3));
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #8b5a5a;
  font-size: 14px;
  animation: bounce 2s infinite;
}

.arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid #8b5a5a;
  border-bottom: 2px solid #8b5a5a;
  transform: rotate(45deg);
  margin-top: 10px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
    padding: 40px 20px;
  }
  
  .hero-text {
    text-align: center;
  }
  
  .title {
    font-size: 64px;
  }
  
  .tags {
    justify-content: center;
  }
  
  .character-img {
    max-width: 400px;
    margin-bottom: 30px;
  }
}
</style>
