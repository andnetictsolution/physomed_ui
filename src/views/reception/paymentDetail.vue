<script setup>
import { useRoute } from 'vue-router'
import { orderStore } from '../../stores/reception/order'
import { computed, onMounted } from 'vue'
const route = useRoute()
const id = route.params.id
const orderPinia = orderStore()
onMounted(() => {
  orderPinia.fetchSingleOrder(id)
})
const order = computed(() => {
  return orderPinia.getSingleOrder
})
const payOrder = (payment)=>{
    orderPinia.confirmPayment({payments:[payment]})
}
</script>

<template>
  <div>
    this is payment detail

    {{ order }}

    <button @click="payOrder(order.payment)" class="bg-blue-600">Pay Order</button>
  </div>
</template>
