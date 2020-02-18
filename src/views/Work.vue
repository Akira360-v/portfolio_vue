<template>
  <div class="work">
    <md-card>
      <!-- swiper -->
      <swiper :options="swiperOptionW">
        <swiper-slide>
          <md-card-media class="swiper-inner">
            <!-- swiper -->
            <div class="slider__text">{{$t('workVue')}}</div>
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="https://lessons360-vue.web.app/" target="_blank">
                    <img src="@/assets/images/views/work/layout.jpg" alt="1" />
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="https://specials-tayota.web.app/adventure" target="_blank">
                    <img src="@/assets/images/views/work/sorfing.jpg" alt="2" />
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="#">
                    <img src="@/assets/images/views/work/bg0.jpg" alt="3" />
                  </a>
                </div>
              </swiper-slide>
            </swiper>
          </md-card-media>
        </swiper-slide>
        <swiper-slide>
          <md-card-media class="swiper-inner">
            <!-- swiper -->
            <div class="slider__text">{{$t('workWebpack')}}</div>
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="https://akira360-v.github.io/waxom/" target="_blank">
                    <img src="@/assets/images/views/work/waxom.jpg" alt="1" />
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="https://akira360-v.github.io/shapeup/">
                    <img src="@/assets/images/views/work/shapeup.jpg" alt="2" />
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="#">
                    <img src="@/assets/images/views/work/bg0.jpg" alt="3" />
                  </a>
                </div>
              </swiper-slide>
            </swiper>
          </md-card-media>
        </swiper-slide>
        <swiper-slide>
          <md-card-media class="swiper-inner">
            <!-- swiper -->
            <div class="slider__text">{{$t('workGulp')}}</div>
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="https://akira360-v.github.io/ielts/" target="_blank">
                    <img src="@/assets/images/views/work/ielts.jpg" alt="1" />
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="#">
                    <img src="@/assets/images/views/work/bg0.jpg" alt="2" />
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="swiper__cont">
                  <a href="#">
                    <img src="@/assets/images/views/work/bg0.jpg" alt="3" />
                  </a>
                </div>
              </swiper-slide>
            </swiper>
          </md-card-media>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Work',
  data() {
    return {
      swiperOptionW: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption: {
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 30,
          stretch: -40,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
</style>
