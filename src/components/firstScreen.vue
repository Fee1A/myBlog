<template>
  <!-- <div class='firstScreen w-full h-screen relative'>
    <div style='background-image: url("/bg1.jpg")'
    class='w-full h-full bg-local opacity-50 bg-cover'
    >
    </div>
    <div class='absolute w-full h-full top-0 left-0'>
      <a
        target="_blank"
        href='https://twitter.com/Coria_tu'
        class='p-1 illustrate-font text-current absolute bottom-1 right-2 opacity-100 rounded-md hover:bg-gray-300 transition-all'>
        illustrator: Coria_tu
      </a>
    </div>
  </div> -->

  <div class='firstScreen w-full h-screen relative'
  @mouseenter="firstScreenMouseEnter"
  @mousemove="firstScreenMouseMove"
  @mouseleave="firstScreenMouseLeave">
    <!-- BG图 -->
    <section class='carousel w-auto h-full absolute left-0 top-0 whitespace-nowrap transition-all dark:bg-gray-600'>
      <div v-for='(item, i) in bgArray' :key='item.url+i'
      class='w-screen h-full relative inline-block'
      >
        <div class='w-full h-full bg-local opacity-50 bg-cover' :style='{backgroundImage:"url("+item.url+")"}'></div>
        <div class='absolute w-full h-full top-0 left-0'>
          <a
            :href="item.illuUrl"
            target='_blank'
            class='px-1 py-0 illustrate-font text-current absolute bottom-1 right-8 opacity-100 rounded-md hover:bg-gray-300 transition-all'
          >
          illustrator: {{item.illustrator}}
          </a>
        </div>
      </div>
    </section>
    <!-- 悬浮窗 -->
    <!-- <section class='infoWindow w-full h-full absolute top-0 left-0 flex justify-center items-center'>
      <div class='w-1/3 h-1/4 bg-gray-200 opacity-80'></div>
    </section> -->
    <div class='w-1/3 h-1/4 bg-gray-200 opacity-90 absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 transform3D'></div>
    <!-- 测试用Button -->
    <button
    class='absolute top-10 left-10 w-20 h-10 bg-green-300 rounded hover:bg-green-400 transition-all shadow-lg hover:cursor-pointer'
    @click='buttonClick'>
    Push Me
    </button>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'firstScreen',
  data () {
    return {
      // 首页背景图相关数据，后续应放到后端，从后端获取
      bgArray: [
        {
          url: '/bg1.jpg',
          illustrator: 'Coria_tu',
          illuUrl: 'https://twitter.com/Coria_tu'
        },
        {
          url: '/bg2.jfif',
          illustrator: 'harumankai',
          illuUrl: 'https://twitter.com/harumankai'
        },
      ]
    }
  },
  methods: {
    buttonClick () {
      let t = this
      let item = document.querySelector('.carousel')
      if (item?.classList.value.indexOf('left-vw-100') !== -1) {
        item?.classList.remove('left-vw-100')
      } else {
        item?.classList.add('left-vw-100')
      }
      // item?.classList.remove('left-0')
    },
    firstScreenMouseEnter (e: object) {
      console.log('enter')
    },
    firstScreenMouseMove (e: object) {
      // console.log(e)
      // this.$cm.throttle
    },
    firstScreenMouseLeave (e: object) {
      console.log('leave')
    }
  }
}
</script>

<style>
</style>