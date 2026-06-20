<template>
  <section class="story-section">
    <div class="container">
      <div class="title-wrapper">
        <a href="https://bbs.mihoyo.com/sr/wiki/content/5108/detail" target="_blank" class="section-title-link">
          <h2 class="section-title">角色故事</h2>
          <span class="link-hint">点击跳转官方Wiki</span>
          <p class="section-subtitle">Character Story</p>
        </a>
      </div>
      
      <div class="story-container">
        <div class="story-item" v-for="(story, index) in stories" :key="index">
          <div class="story-number">
            <span class="number">{{ index + 1 }}</span>
          </div>
          <div class="story-content" :class="{ 'expanded': expanded[index] }" @click="toggleStory(index)">
            <div class="story-header">
              <h3>{{ story.title }}</h3>
              <span class="expand-icon">{{ expanded[index] ? '▲' : '▼' }}</span>
            </div>
            <div class="story-text-wrapper">
              <div class="story-text">
                <p v-for="(para, pIndex) in story.paragraphs" :key="pIndex">{{ para }}</p>
              </div>
              <div class="story-shadow" v-show="!expanded[index]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref([false, false, false, false])

const toggleStory = (index) => {
  expanded.value[index] = !expanded.value[index]
}

const stories = [
  {
    title: '角色故事·其一',
    paragraphs: [
      '「可以把翅膀慢慢打开，对…就像我们上次做的那样，配合医生一起深呼吸哦！」',
      '「放松一点，没问题的…嗯，翼展变宽啦，你在很努力地吃饭，对不对？」',
      '毛茸茸的脑袋被烛光衬得暖烘烘的，女孩抱起小马，轻轻地放在体重秤上。',
      '「放心吧，很快你就能和其他翼兽长得一样又高又壮的，嗯？」',
      '戴上听诊器，女孩开始各项检查，她触碰到小马肋下新的「伤口」。',
      '「你受伤了？」',
      '她摩挲着小马的翅膀，小心翼翼地将棉花塞进松落的裂口，又取出针线。',
      '「会有一点疼，但别担心，我扎针很稳……',
      '「你又拼命训练了吗？是因为有很多人和你说，你的母亲，祖母，还有好多厉害的先辈，一个腾飞就能飞到天上，一个冲撞便能撞碎岩石？',
      '「大家期待你会成为如雷霆一样的英雄，可不管训练多久，你好像都只能让他们失望……',
      '「就好像…你和他们完全不一样……」',
      '小马一动不动，黑溜溜的眼珠看着窗外。',
      '划破天幕的雷鸣仍在远空回荡，那是天空城邦的英雄与他们的翼兽掀起的风暴。',
      '「偷偷告诉你一个秘密…我和你一样……」',
      '在那孤独昏暗的病房，养病已久的女孩抱着玩偶，拿着针线，第一百次演练父亲教习的医术——',
      '「但也许…不一样的光芒，也有它存在的意义……」'
    ]
  },
  {
    title: '角色故事·其二',
    paragraphs: [
      '同其他医者一样，女孩许下治愈所有人的愿望。',
      '她想抚慰世界倾覆下凡人的惨痛，可当黑潮将城邦吞没，瘟疫包围重伤的人群，她只能驱散疫病，而无法停止绝望的蔓延。',
      '「或许，一名好的医师，需要的远不止灵验的药草……」',
      '「乳色的窗帘要能透光，床要软硬适中，床头摆好新鲜的花束…这样在房间里也能看到和外面一样的『色彩』……」',
      '她想为末世中的人们带来希望，一缕从未来照入的光。',
      '于是伴着安神的香薰，一位弥留之际的少女在温暖舒适的房间中喃喃自语，尘封许久的记忆慢慢复苏。',
      '「爸爸送我八音盒的那天，外面也下着淅淅沥沥的小雨。我听着叮叮当当的旋律，在滴滴答答的雨声中度过了最美好的生日……',
      '「我还记得，白玫瑰开满了街道，刮风的时候，就像在下一场香气扑鼻的大雪……',
      '「还有那片天空，越来越深的蓝色中落着一点橙红…」她回忆着，「然后那些透明的泡泡环绕着我，就像……',
      '就像现在一样……」',
      '滴答，滴答——',
      '时针在回忆中走动，叙说的声音逐渐低弱。',
      '那流动不息的雨声中，只余一声满足的叹息。',
      '「嘟嘟……」小伊卡低垂着头，懊丧地趴在小马玩偶旁。',
      '「小伊卡，听到了嘛…她看到了我们创造的天空呢……」',
      '房间的天花板上，夕阳落入海中。',
      '她握着少女逐渐冰冷的手，晶莹的眼泪滑过脸庞。',
      '「以后，我们一定能把它变得更宽广，更温暖……」',
      '「嘟！」'
    ]
  },
  {
    title: '角色故事·其三',
    paragraphs: [
      '奥赫玛，英雄汇聚之地，末世最后的希望所在。',
      '「逐火之旅」，「火种」，「泰坦」…即便已熟悉那些酷烈灼热的名词，当别人称她为英雄时，她仍是挥挥手。',
      '「我只是一名医师而已。」',
      '她对每个来到庭院的人都那么说。',
      '悲伤的少女来询问那被死亡之泰坦波及的「顽疾」。',
      '「蝶宝，那才不是病呢！你还有很多事可以尝试！」',
      '她常常和少女一同观鸟观星，制作标本和奇美拉玩偶。看到少女脸上的笑容，她也会感到温暖。',
      '她知晓冷冽的织者和高傲的学者之间的不和。',
      '在那崭新的调解室，她为织者准备了最爱的燕麦粥，学者批改论文时必备的气泡山葵醋，并请来资历最老的半神——',
      '「如果他们不来，我就…派小伊卡天天在他们耳边嘟嘟嘟！」',
      '她在昏光庭院播下石榴的种子，种下一方麦草，开辟一片花海，让每一位从远方来到奥赫玛的异乡人，都能在此放下心结，畅所欲言。',
      '「希望点滴的善意，能消融族群之间长久的心病。」',
      '她总放心不下那不断磨损的半神。',
      '「小风堇…踏上逐火之旅的第一天，*我们*就已经想到这一天啦……」',
      '她们总是如此说。',
      '「即便能为你们减少一丝痛苦也好…我再去树庭的图书馆查查资料吧……」',
      '她也总是如此做。',
      '天空的后裔，悬锋的族人，奥赫玛的原贵族，哀地里亚的圣女，哀丽秘榭的战士，雅努萨波利斯的圣女…小小的庭院中，各色融汇成一道虹光。',
      '但闲暇的片刻，她也会想到旅途的尽头。',
      '「到那时候，我…还能做些什么呢？」'
    ]
  },
  {
    title: '角色故事·其四',
    paragraphs: [
      '从满溢的箱中露出的几封信件，被珍藏在诊疗记录册旁。',
      '在旅程之初，女孩微弱的光似乎旋即会被黑暗吞没，然而在启程成为明日的天空前——',
      '在她走过的地方，晴空早已不知不觉绽开了第一缕笑颜。',
      '「『光历████年，机缘月』风堇医师',
      '展信佳。虽然当年姐姐没能挺过来，但姐姐最后在庭院度过的时光…她临走前的微笑一直温暖着我的梦境。我想跟您说，今天我也正式成了一名医师，我想像您一样，去帮助那些在末世中煎熬的人们，希望在这长夜中，我也能成为一盏小小的灯……」',
      '「『光历████年，门关月』堇宝',
      '…真的很感谢你这段时间的陪伴。当我蜷缩在昏光庭院治疗室的时候，你允许我的悲伤像积雨一样堆积又蒸发，当我说自己『天气不好』时，你又完整地包容了我…或许，我也应该更勇敢一点……」',
      '「『光历████年，自由月』风堇女士',
      '小家伙们都恢复得很好，特别是那位上次吵着要喝石榴汁的奥赫玛小战士。城邦间的宿仇很难很快消除，但我现在相信，不同的色彩也能共存。」',
      '「『光历████年，长夜月』风堇助教',
      '感谢你执着的提醒，我会考虑和她缓和关系。当然，完全是看在你的面子上……」',
      '「『光历████年，哀悼月』风堇小姐',
      '不必费心为我寄来新的药剂了，我自知人性的流失已无法挽回。你也不必担心，我们与树庭的关系并非降至冰点……」',
      '「『光历████年，欢喜月』风堇女士',
      '我从来没有想过，家乡的麦种能有一天重新发芽。躺在昏光庭院的花园，又像是回到了哀丽秘榭一样。每次心情低落的时候，闻闻这里的麦香，我就又有干劲了！」',
      '「『光历████年，长昼月』小风堇',
      '人们总称赞以前包容烈阳与惊雷的天空，*我们*却觉得你比那样的天空更温柔。无论*我们*明天将去向何处，*我们*一定会永远、永远记得你！」'
    ]
  }
]
</script>

<style scoped>
.story-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #f8f0ff 0%, #fff5f8 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
}

.title-wrapper {
  text-align: center;
  margin-bottom: 60px;
}

.section-title-link {
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.section-title-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 3px;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  border-radius: 2px;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.section-title-link:hover::after {
  width: 280px;
  opacity: 1;
}

.section-title-link:hover .link-hint {
  opacity: 1;
  color: #e91e63;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 5px;
}

.link-hint {
  display: block;
  font-size: 12px;
  color: #999;
  opacity: 0;
  margin-bottom: 5px;
  transition: all 0.3s ease;
}

.section-subtitle {
  font-size: 16px;
  color: #999;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.story-container {
  position: relative;
}

.story-container::before {
  content: '';
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #e91e63, #9c27b0);
}

.story-item {
  display: flex;
  gap: 32px;
  margin-bottom: 40px;
  position: relative;
}

.story-item:last-child {
  margin-bottom: 0;
}

.story-number {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(233, 30, 99, 0.15);
  z-index: 1;
}

.number {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #e91e63, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.story-content {
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 28px 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
}

.story-content:hover {
  box-shadow: 0 8px 30px rgba(233, 30, 99, 0.1);
}

.story-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  margin-bottom: 20px;
}

.story-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.expand-icon {
  font-size: 16px;
  color: #e91e63;
  transition: transform 0.3s ease;
}

.story-text-wrapper {
  position: relative;
  max-height: 120px;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.story-content.expanded .story-text-wrapper {
  max-height: 2000px;
}

.story-text {
  padding-bottom: 40px;
}

.story-text p {
  font-size: 15px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 12px;
}

.story-text p:last-child {
  margin-bottom: 0;
}

.story-shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to bottom, transparent 0%, white 100%);
  pointer-events: none;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .story-container::before {
    left: 25px;
  }
  
  .story-item {
    gap: 20px;
  }
  
  .story-number {
    width: 50px;
    height: 50px;
  }
  
  .number {
    font-size: 20px;
  }
  
  .story-content {
    padding: 20px 24px;
  }
  
  .story-header h3 {
    font-size: 16px;
  }
  
  .story-text p {
    font-size: 14px;
  }
  
  .story-text-wrapper {
    max-height: 100px;
  }
}
</style>