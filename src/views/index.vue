<template>
  
</template>

<script lang='ts'>
import { defineComponent, PropType, readonly } from 'vue'

// 接口
interface Book {
  // 存在属性
  title: string
  author: string
  // 可选属性
  year?: number
  // 只读属性
  readonly sex: string
  // 字符串索引签名
  [propName: string]: any
  // 数字索引签名 -- 只读形式
  readonly [index: number]: any
  // 函数的调用签名
  (source: string, substring: string): boolean
}

// 泛型接口
interface itf2 {
  // 使用时可以自动推断类型所以无需传入
  <T>(arg: T): T;
}

// 泛型接口2
interface itf3<G> {
  // 因为泛型定义在接口上，所以在使用时需要显式传入才行
  (arg: G): G
}

// 泛型约束
interface itf4 {
  length: number
}

export default defineComponent({
  name: 'index',
  props: {},
  data () {
    return {
      count: 0,
      book: {} as Book
    }
  },
  methods: {
    test (x: number, y: number): number {
      return x + y
    },
    test2 (x: number, y: number): boolean {
      // 完整函数类型
      let t0: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y
      }
      // 省略形式
      // 赋值语句的另一边可以自行推导 + 返回类型可以自行推导
      let t1: (x: number, y: number) => number = function (x, y) {
        return x + y
      }

      // 类型变量(泛型)
      function t2<T>(arg: T): T {
        return arg
      }
      // 使用泛型1--传入类型参数
      let t2a: itf3<string> = t2
      // 使用泛型2--自动推断类型
      let t2b: itf2 = t2

      // 泛型变量
      //  将泛型变量T当做类型的一部分使用
      function t3<T = string>(arg: Array<T>):Array<T> {
        console.log(arg.length)
        return arg
      }

      // 泛型约束的使用
      function t4<T extends itf4>(arg: T): T {
        console.log(arg.length)
        return arg
      }

      // test
      interface name {
        A: number
        B: number
        C: number
        D?: number
        [p: string]: number | undefined
      }
      function test (p: name) {
        console.log(p.A)
      }

      let data:name = {A: 1, B: 2, C: 3, D: 4, G: 5}
      let data1: itf2 = function (arg) {return arg }
      test(data)


      return true
    }
  },
  mounted () {}
})
</script>

<style>

</style>