<template>
  <div>
    讲师列表
    <div v-for="(item,index) in items" :key="index">
      <a :href="'teacher/'+item.id">{{ item.name }}</a>
    </div>
  </div>
</template>
<script>
import teacherApi from '~/api/teacher'
export default {
  // 定义异步获取的数据模型
  asyncData() {
    return teacherApi.getList().then(response => {
      return {
        items: response.data.data.items
      }
    })
  },

  data() {
    return {
      test: 'test'
    }
  },

  created() {
    console.log('created')
  }
}
</script>
