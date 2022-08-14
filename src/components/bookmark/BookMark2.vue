<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <vue-aos animation-class="zoomIn animated">
        <div class="text-center">
          <h1>มาทำความรู้จักกับ</h1>
          <h1>คราฟต์เบียร์ไทยทั้ง <span>24</span> แบรนด์กันเถอะ</h1>
        </div>
      </vue-aos>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark2",
};
</script>

<style scoped>
span {
  /* transform: rotate(20deg) !important; */
  -webkit-text-stroke: 0.1px black;
  color: white;
  font-size: 55px;
  font-weight: bold;
}
</style>
