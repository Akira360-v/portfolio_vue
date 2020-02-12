<template>
  <div class="main-layout">
    <div class="qwe">asd</div>
    <Navbar />
    <router-view />
    <Footer />
    <div class="qwe">asdasdas</div>
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
