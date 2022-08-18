<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <vue-aos animation-class="zoomIn animated">
        <div class="d-flex flex-column text-center">
          <h1>แล้วคราฟต์เบียร์สัญชาติไทย</h1>
          <div class="bordertext text-center m-auto">
            <h1>ไปผลิตที่ไหน</h1>
          </div>
          <div>
            <h1 class="span2 animated infinite tada">?</h1>
          </div>
        </div>
      </vue-aos>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark4",
};
</script>

<style scoped>
.bordertext {
  background: yellow;
  width: fit-content;
}
.span2 {
  /* transform: rotate(20deg) !important; */
  -webkit-text-stroke: 0.1px black;
  color: white;
  font-weight: bold;
  font-size: 5rem;
}
</style>
