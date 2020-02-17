<template>
  <div class="main-layout">
    <Navbar />
    <div class="qwe">1</div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";

export default {
  name: "main-layout",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style></style>
