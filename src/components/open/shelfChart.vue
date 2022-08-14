<template>
  <div>
      <div class="bookmark-bg">
          <div class="row">
              <div class="col-7 chart">
                  <img src="@/assets/pics/shelfchart/2.1/shelf1.svg" alt="">
              </div>

              <div class="col-5 data">
                  
              </div>
          </div>
      </div>

      <div class="bookmark-bg">
          <div class="row">
              <div class="col-7 chart">
                  <img src="@/assets/pics/shelfchart/2.2/shelf2.svg" alt="">
              </div>

              <div class="col-5 data">
                  
              </div>
          </div>
      </div>

      <div class="bookmark-bg">
          <div class="row">
              <div class="col-7 chart">
                  <img src="@/assets/pics/shelfchart/2.3/shelf3.svg" alt="">
              </div>

              <div class="col-5 data">
                  
              </div>
          </div>
      </div>


  </div>
</template>

<script>
export default {
    name: "shelfChart",
    data(){
        return{

        }
    },
}
</script>

<style scoped>
.bookmark-bg{
    background-color: #E3EAF0;
    overflow: hidden;
}
.chart{
    object-fit: cover;
    width: 150%;
}
</style>
