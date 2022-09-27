<template>
  <div>
    <div
      class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="text text-center">
        <h3>จะดีกว่าไหม...</h3>
        <div class="highlight d-flex flex-column">
          <h1>ถ้าเราสามารถผลิตคราฟต์เบียร์ได้เอง</h1>
        </div>
        <div class="icon">
          <img src="@/assets/pics/frame4/4.8/emoji.svg" alt="">
        </div>
        <h3 class="umm">นอกจากจะได้ราคาคราฟต์เบียร์ที่ถูกลงแล้ว</h3>
        <h3 class="umm">เม็ดเงินยังกระจายไปถึง SME ที่เกี่ยวข้องกับคราฟต์เบียร์</h3>
        <h3 class="umm">
          ตลอดจนถึงเกษตรกรอีกทั้งยังสร้างงาน สร้างรายได้ให้กับอาชีพที่เกี่ยวข้อง
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookMark8",
};
</script>

<style scoped>
.bookmark-bg {
  background-image: url("~@/assets/pics/frame4/4.8/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.bookmark-bg2 .text-center h2 {
  color: #ffffff;
}
.text h3{
  color: white;
}
.highlight{
  width: fit-content;
  background-color: #f4cc2d;
  margin: auto;
}
.icon img{
  width: 5rem;
  margin: 4rem;
}

@media (max-width: 821px){
  .bookmark-bg{
    background: #2C2828;
    height: 80vh;
  }
  .umm{
    font-size: 1.2rem;
  }
}
@media (max-width: 540px) {
  .text h3{
    font-size: 1.2rem;
  }
  .highlight h1{
    font-size: 1.4rem;
  }
  .umm{
    font-size: .7rem !important;
  }
}
</style>
