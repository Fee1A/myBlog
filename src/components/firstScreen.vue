<template>
  <div class='firstScreen w-full h-screen relative'>
    <div style='background-image: url("/bg.jpg")'
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
  }
}
</script>

<style>
</style>