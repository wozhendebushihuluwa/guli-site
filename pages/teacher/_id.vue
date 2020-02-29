<template>
  <div>
    讲师介绍：
    {{ item.id }}<br>
    {{ item.name }}<br>
    {{ item.intro }}<br>
  </div>
</template>
<script>
import teacherApi from '~/api/teacher'
export default {
  asyncData({ params }) {
    return teacherApi.getById(params.id).then(response => {
      console.log(response.data.data.item)
      return {
        item: response.data.data.item
      }
    })
  }
}
</script>
