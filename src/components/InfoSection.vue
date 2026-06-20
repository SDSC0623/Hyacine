<template>
  <section class="info-section">
    <div class="container">
      <h2 class="section-title">角色档案</h2>
      <p class="section-subtitle">Character Profile</p>
      
      <div class="info-grid">
        <div class="info-card" v-for="item in infoItems" :key="item.label">
          <div class="icon">{{ item.icon }}</div>
          <div class="info-content">
            <p class="label">{{ item.label }}</p>
            <p class="value">{{ item.value }}</p>
          </div>
        </div>
      </div>
      
      <div class="description-box">
        <h3>角色简介</h3>
        <p>
          风堇，又名雅辛忒丝，是翁法罗斯的黄金裔之一，天空之泰坦艾格勒的辅祭，
          神悟树庭智种学派那刻夏的讲师助理，医疗机构昏光庭院的首席护理师。
        </p>
        <p>
          作为天空之子的后裔，她与那些善于征战的先祖不同，而是更希望作为医生，看护英雄背后的平民。
          在夺回天空火种后，她牺牲自己为翁法罗斯撑起苍穹，降下虹光看护那些遭受灾难之人。
        </p>
        <p>
          天空一族曾流传预言："在彩虹桥的尽头，天空之子将缝补晨昏。"
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const infoItems = [
  { icon: '🌸', label: '中文名', value: '风堇' },
  { icon: '🌙', label: '本名', value: '雅辛忒丝' },
  { icon: '✨', label: '英文名', value: 'Hyacine' },
  { icon: '👑', label: '种族', value: '黄金裔' },
  { icon: '☀️', label: '所属', value: '天空之泰坦艾格勒辅祭' },
  { icon: '📚', label: '职务', value: '神悟树庭讲师助理' },
  { icon: '🏥', label: '身份', value: '昏光庭院首席护理师' },
  { icon: '🦄', label: '伙伴', value: '天马小伊卡' },
]
</script>

<style scoped>
.info-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #fff5f5 0%, #ffffff 100%);
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

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.info-card {
  background: white;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 4px 20px rgba(233, 30, 99, 0.08);
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(233, 30, 99, 0.1);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(233, 30, 99, 0.15);
}

.icon {
  font-size: 36px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff0f5, #fce4ec);
  border-radius: 12px;
}

.info-content {
  flex: 1;
}

.label {
  font-size: 13px;
  color: #999;
  margin-bottom: 4px;
}

.value {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.description-box {
  background: white;
  border-radius: 20px;
  padding: 48px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.description-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #e91e63, #9c27b0);
}

.description-box h3 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  padding-left: 16px;
}

.description-box h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #e91e63;
  border-radius: 50%;
}

.description-box p {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 16px;
}

.description-box p:last-child {
  margin-bottom: 0;
}

@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .description-box {
    padding: 32px 24px;
  }
}
</style>
