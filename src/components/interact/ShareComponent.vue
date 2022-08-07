<template>
  <div>
    <section>
      <div
        class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
      >
        <div class="text-center">
          <h2>รู้อย่างนี้แล้วมาร่วมกันจับตา</h2>
          <h2>พ.ร.บ. สุราก้าวหน้าไม่ให้ถูกปัดตกในวาระอื่นๆ</h2>

          <br />
          <br />

          <h2>มาร่วมกันสนับสนุนวงการคราฟต์เบียร์ไทย</h2>
          <h2>เพื่อทางเลือกในรสชาติที่มากกว่าและราคาที่จับต้องได้</h2>
          <h2>เพราะหนทางนี้อีกยาวไกล</h2>

          <br />
          <br />

          <p class="b2">แชร์ให้เพื่อนมาสำรวจ</p>
          <div class="d-flex justify-content-center">
              <img class="icon" src="@/assets/pics/facebook_icon.svg" alt="">
              <img class="icon" src="@/assets/pics/twitter_icon.svg" alt="">
              <img class="icon" src="@/assets/pics/line_icon.svg" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ShareComponent",
};
</script>

<style scoped>
.icon{
    width: 6rem;
    cursor: pointer;
}
.icon:hover{
    transform: scale(1.1);
}
</style>