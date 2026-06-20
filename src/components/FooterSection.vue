<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <h3 class="footer-title">风堇</h3>
          <p class="footer-subtitle">Hyacine · 昏光庭院的医师</p>
        </div>
        <div class="footer-right">
          <p class="footer-text">
            「 愿虹光洒落，仇怨消融，黎明重回大地 」
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 风堇角色展示页 | 崩坏：星穹铁道同人作品 | 作者： <a href="https://github.com/SDSC0623" target="_blank" class="author-link">SDSC0623</a></p>
        <p class="footer-note">本页面仅为粉丝制作，角色版权归米哈游所有</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
  padding: 60px 0 30px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-left {
  text-align: left;
}

.footer-title {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #ff9a9e, #fecfef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.footer-subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 2px;
}

.footer-right {
  text-align: right;
}

.footer-text {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
}

.footer-bottom {
  text-align: center;
}

.footer-bottom p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 8px;
}

.author-link {
  color: #539FFD;
  text-decoration: none;
  transition: color 0.3s ease;
}

.author-link:hover {
  color: #ff9a9e;
}

.footer-note {
  font-size: 12px !important;
  color: rgba(255, 255, 255, 0.4) !important;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .footer-left,
  .footer-right {
    text-align: center;
  }
  
  .footer-title {
    font-size: 28px;
  }
}
</style>
