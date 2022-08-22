<template>
  <div>
    <act-1></act-1>
    <share-component></share-component>
    <credit-component></credit-component>
    <last-page></last-page>
  </div>
</template>

<script>
import Act1 from './detail/Act1.vue'
import CreditComponent from './detail/CreditComponent.vue'
import LastPage from './detail/LastPage.vue'
import ShareComponent from './interact/ShareComponent.vue'

export default {
  components: { ShareComponent, CreditComponent, LastPage, Act1 },
    name: "OuttroComponent"
}
</script>

<style>

</style>