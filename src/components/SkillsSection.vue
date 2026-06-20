<template>
  <section class="skills-section">
    <div class="container">
      <h2 class="section-title">角色能力</h2>
      <p class="section-subtitle">Character Abilities</p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.skills-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f0ff 100%);
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
  background: linear-gradient(135deg, #9c27b0, #673ab7);
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

.skills-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 80px;
}

.skill-card {
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(156, 39, 176, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(156, 39, 176, 0.1);
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(156, 39, 176, 0.15);
}

.skill-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.skill-name {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.skill-type {
  font-size: 13px;
  color: #9c27b0;
  margin-bottom: 16px;
  font-weight: 500;
}

.skill-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.skill-tag {
  padding: 4px 12px;
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  border-radius: 12px;
  font-size: 12px;
  color: #7b1fa2;
}

.eidolon-section {
  background: white;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.06);
}

.eidolon-title {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(135deg, #9c27b0, #673ab7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 40px;
}

.eidolon-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.eidolon-item {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, #faf5ff, #f3e8ff);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.eidolon-item:hover {
  background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
  transform: translateX(5px);
}

.eidolon-number {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #9c27b0, #673ab7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 16px;
  flex-shrink: 0;
}

.eidolon-content h4 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

.eidolon-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .skills-container {
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
  
  .skills-container {
    grid-template-columns: 1fr;
  }
  
  .eidolon-section {
    padding: 32px 24px;
  }
  
  .eidolon-grid {
    grid-template-columns: 1fr;
  }
}
</style>
