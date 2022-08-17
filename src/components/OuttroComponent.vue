<template>
  <div>
    <share-component></share-component>
    <credit-component></credit-component>
    <last-page></last-page>
  </div>
</template>

<script>
import CreditComponent from './detail/CreditComponent.vue'
import LastPage from './detail/LastPage.vue'
import ShareComponent from './interact/ShareComponent.vue'

export default {
  components: { ShareComponent, CreditComponent, LastPage },
    name: "OuttroComponent"
}
</script>

<style>

</style>