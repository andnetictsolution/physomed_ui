<script setup>
import { ref } from 'vue'
import { userStore } from '../../stores/admin/user'
const userPinia = userStore()
const getUser = () => {
  userPinia.getAllUsers()
}
</script>
