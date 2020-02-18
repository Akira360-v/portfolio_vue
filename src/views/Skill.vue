<template>
  <div class="skill">
    <div class="container">
      <div class="skill__cont">
        <!-- html -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillHtml') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
        <!-- css -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillCss') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
        <!-- JQuery -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillJQuery') + ' ' + percentJQuery + '%' }}
          </div>
          <div class="loading-bar">
            <div
              class="percentage"
              :style="{ width: percentageJQuery + '%' }"
            ></div>
          </div>
        </div>
        <!-- Gulp -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillGulp') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
        <!-- Sass -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillSass') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
        <!-- Wordpress -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillWordpress') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
        <!-- Php -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillPhp') + ' ' + percentPhp + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentPhp + '%' }"></div>
          </div>
        </div>
        <!-- BEM -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillBEM') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
        <!-- Git  -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillGit') + ' ' + percentGit + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentGit + '%' }"></div>
          </div>
        </div>
        <!-- Pug -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillPug') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
        <!-- Slim -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillSlim') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
        <!-- Vue -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillVue') + ' ' + percentVue + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentVue + '%' }"></div>
          </div>
        </div>
        <!-- Vue -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillRudy') + ' ' + percentRudy + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentRudy + '%' }"></div>
          </div>
        </div>
        <!-- Es6 js -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillEs6') + ' ' + percentEs6 + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentEs6 + '%' }"></div>
          </div>
        </div>
        <!-- PerfectPixel -->
        <div class="skill__bar">
          <div class="loading__text">
            {{ $t('skillPerfectPixel') + ' ' + percentFull + '%' }}
          </div>
          <div class="loading-bar">
            <div class="percentage" :style="{ width: percentFull + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data: () => {
    return {
      percentFull: 100,
      percentageJQuery: 90,
      percentagePhp: 60,
      percentageGit: 80,
      percentageVue: 70,
      percentageRudy: 30,
      percentageEs6: 40
    }
  },
  computed: {
    percentFull() {
      return this.percentFull.toFixed()
    },
    percentJQuery() {
      return this.percentageJQuery.toFixed()
    },
    percentPhp() {
      return this.percentagePhp.toFixed()
    },
    percentGit() {
      return this.percentageGit.toFixed()
    },
    percentVue() {
      return this.percentageVue.toFixed()
    },
    percentRudy() {
      return this.percentageRudy.toFixed()
    },
    percentEs6() {
      return this.percentageEs6.toFixed()
    }
  }
}
</script>

<style>
/* .loading-bar {
  position: relative;
  width: 400px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid red;
  box-shadow: inset 0 1px 2px rgb(223, 14, 160);
}
.percentage {
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  display: block;
  height: 100%;
  border-radius: 15px;
  background-color: rgb(18, 238, 220);
  background-size: 30px 30px;
  background-image: linear-gradient(
    135deg,
    rgb(255, 0, 0) 35%,
    transparent 55%,
    transparent 10%,
    rgb(255, 0, 0) 50%
  );
  animation: animate-stripes 3s linear infinite;
}
@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}
.skill__cont {
  display: flex;
  flex-wrap: wrap;
} */
</style>
