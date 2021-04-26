<template>
  <div class='firstScreen w-full h-screen relative'>
    <div style='background-image: url("/bg.jpg")'
    class='w-full h-full bg-local opacity-50 bg-cover'
    >
    </div>
    <div class='absolute w-full h-full top-0 left-0'>
      <a
        src='https://twitter.com/Coria_tu'
        class='p-1 illustrate-font text-current absolute bottom-1 right-2 opacity-100 rounded-md hover:bg-gray-300 transition-all'>
        illustrate: Coria_tu
      </a>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'firstScreen',
  data () {
    return {}
  }
}
</script>

<style>
</style>