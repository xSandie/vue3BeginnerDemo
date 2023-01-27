<template>

  <div>
    <!-- 把 aria-hidden="true" 加到元素上会把该元素和它的所有子元素从无障碍树上移除。这样做可以通过隐藏下列内容来提升使用辅助技术的用户体验： -->
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive, computed} from 'vue'

const props = defineProps({
    icon:{
        type:String,
        required: true
    },
    className: {
        type: String,
        default: ''
    }
})

const iconName = computed(()=>{
    return `#icon-${props.icon}`
})
const svgClass = computed(() => {
        if (props.className) {
          return `svg-icon ${props.className}`
        }
        return 'svg-icon'
      })

</script>

<style lang="scss" scoped>
.svg-icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;/* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
    fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
    overflow: hidden;
}

</style>