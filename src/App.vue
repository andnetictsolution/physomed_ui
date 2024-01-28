<script>
import { ref } from 'vue';
import AuthLayout from './layouts/authLayout.vue'
import DefaultLayout from './layouts/defaultLayout.vue'

export default {
  components: {
    DefaultLayout,
    AuthLayout,
  },
  setup(){
    const currentLayout = ref(true)
    return{
      currentLayout
    }
  }
  
}
</script>

<template>
  <div>
    <div>
      <component :is="currentLayout ? 'AuthLayout' : 'DefaultLayout'">
      </component>
     
    </div>
  </div>
</template>

<style scoped></style>
