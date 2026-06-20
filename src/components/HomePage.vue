<template>
  <div class="home">
    <HeroSection />
    <InfoSection />
    <StorySection />
    <VoiceSection />
    <GallerySection />
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection from './HeroSection.vue'
import InfoSection from './InfoSection.vue'
import StorySection from './StorySection.vue'
import VoiceSection from './VoiceSection.vue'
import GallerySection from './GallerySection.vue'
import FooterSection from './FooterSection.vue'
</script>

<style scoped>
.home {
  width: 100%;
}
</style>
