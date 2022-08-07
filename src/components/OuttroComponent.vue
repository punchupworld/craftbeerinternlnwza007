<template>
  <div>
    <share-component></share-component>
    <credit-component></credit-component>
  </div>
</template>

<script>
import CreditComponent from './detail/CreditComponent.vue'
import ShareComponent from './interact/ShareComponent.vue'
export default {
  components: { ShareComponent, CreditComponent },
    name: "OuttroComponent"
}
</script>

<style>

</style>