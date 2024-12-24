<template>
  <v-app>
    <Navbar v-if="showNavBar" />
    <v-main>
      <router-view />
    </v-main>
    <v-btn
      icon="mdi-chevron-up"
      elevation="18"
      style="
        position: fixed;
        top: 92.5vh;
        right: 16px;
        z-index: 3000;
        width: 40px;
        height: 40px;
        border-radius: 50% 50%;
        background-color: #d23f57;
        color: white;
      "
      @click="scrollToTop"
    />
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

const showNavBar = ref(false);
const route = useRoute();

const handleScroll = () => {
  if (route.path === "/") {
    showNavBar.value = window.scrollY > window.innerHeight / 2;
  } else {
    showNavBar.value = true;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      showNavBar.value = false;
    } else {
      showNavBar.value = true;
    }
  }
);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
