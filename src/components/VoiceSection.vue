<template>
  <section class="voice-section">
    <div class="container">
      <h2 class="section-title">角色语音</h2>
      <p class="section-subtitle">Character Voice · 配音演员：静宸</p>

      <div class="voice-list">
        <div class="voice-card" v-for="(voice, index) in voices" :key="index">
          <div class="voice-header">
            <div class="voice-icon">
              <span v-if="playingIndex !== index">&#9654;</span>
              <span v-else class="playing-animation">
                <span></span><span></span><span></span>
              </span>
            </div>
            <div class="voice-info">
              <h3>{{ voice.title }}</h3>
              <button class="play-btn" @click="togglePlay(index)">
                {{ playingIndex === index ? '暂停' : '播放' }}
              </button>
            </div>
          </div>
          <p class="voice-text">{{ voice.text }}</p>
          <audio
            :ref="el => { if (el) audioRefs[index] = el }"
            :src="voice.audio"
            @ended="onEnded(index)"
          ></audio>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const voices = [
  {
    title: '初次见面',
    text: '身为天空的后裔，雅辛忒丝会与各位一同完成逐火的使命。同时，作为昏光庭院的医师风堇，我也会尽力为大家提供援助。这是我的好助手、好伙伴——天马小伊卡，想揉一揉吗？请放心大胆地来，它很喜欢~',
    audio: '/assets/Audio/风堇语音-[初次见面].wav'
  },
  {
    title: '问候',
    text: '你的小动作和微表情告诉我，你有心事！要去我的庭院坐坐吗？那里有软椅、书籍、茶点、阳光以及…会和你聊天的我~',
    audio: '/assets/Audio/风堇语音-[欢迎].wav'
  },
  {
    title: '道别',
    text: '夜晚天凉，记得补充营养，不要熬夜。睡前泡个温水澡，喝些安神的羊奶花茶，会做好梦哟~',
    audio: '/assets/Audio/风堇语音-[道别].wav'
  },
  {
    title: '关于开拓者',
    text: '听说灰宝在天外经历了好多精彩的故事，如果有机会的话，真想一起去更广阔的天外看看呀，毕竟我也是天空的子民嘛！',
    audio: '/assets/Audio/风堇语音-[关于开拓者].wav'
  }
]

const audioRefs = ref([])
const playingIndex = ref(-1)

const togglePlay = (index) => {
  if (playingIndex.value === index) {
    audioRefs.value[index].pause()
    playingIndex.value = -1
  } else {
    if (playingIndex.value !== -1 && audioRefs.value[playingIndex.value]) {
      audioRefs.value[playingIndex.value].pause()
    }
    audioRefs.value[index].play()
    playingIndex.value = index
  }
}

const onEnded = (index) => {
  if (playingIndex.value === index) {
    playingIndex.value = -1
  }
}
</script>

<style scoped>
.voice-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%);
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

.voice-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.voice-card {
  background: white;
  border-radius: 20px;
  padding: 32px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(233, 30, 99, 0.08);
}

.voice-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(233, 30, 99, 0.1);
}

.voice-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
}

.voice-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  flex-shrink: 0;
}

.playing-animation {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 20px;
}

.playing-animation span {
  width: 4px;
  background: white;
  border-radius: 2px;
  animation: sound-wave 0.8s ease-in-out infinite;
}

.playing-animation span:nth-child(1) {
  height: 10px;
  animation-delay: 0s;
}

.playing-animation span:nth-child(2) {
  height: 18px;
  animation-delay: 0.2s;
}

.playing-animation span:nth-child(3) {
  height: 14px;
  animation-delay: 0.4s;
}

@keyframes sound-wave {
  0%, 100% { transform: scaleY(0.6); }
  50% { transform: scaleY(1.2); }
}

.voice-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.voice-info h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.play-btn {
  padding: 8px 24px;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.play-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
}

.voice-text {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  padding-left: 76px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .voice-card {
    padding: 24px;
  }

  .voice-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .voice-text {
    padding-left: 0;
    margin-top: 12px;
  }
}
</style>
