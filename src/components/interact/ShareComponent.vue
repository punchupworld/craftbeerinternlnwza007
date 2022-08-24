<template>
  <div>
    <div class="bgimage">
      <img src="@/assets/pics/frame5/5.3/bg.svg" alt="" />
      <div
        class="text text-center d-flex justify-content-center align-items-center"
      >
        <div class="content">
          <div class="topic1 d-flex justify-content-center mt-4">
            <img src="@/assets/pics/frame5/5.3/eyes2.svg" />
            <h3 class="m-2 mb-0 mt-0">รู้อย่างนี้แล้วมาร่วมกันจับตา</h3>
            <img src="@/assets/pics/frame5/5.3/eyes1.svg" />
          </div>
          <h3>พ.ร.บ. สุราก้าวหน้าไม่ให้ถูกปัดตกในวาระอื่นๆ</h3>

          <div class="topic2 d-flex flex-column p-5">
            <h2>มาร่วมกันสนับสนุนวงการคราฟต์เบียร์ไทย</h2>
            <h2>เพื่อทางเลือกในรสชาติที่มากกว่า</h2>
            <h2>และราคาที่จับต้องได้</h2>
          </div>

          <div class="topic3 pb-1 d-flex flex-column">
            <h3>"เพราะหนทางนี้อีกยาวไกล"</h3>
            <p class="b4 mt-5">แชร์ให้เพื่อนมาสำรวจ</p>
          </div>

          <div class="d-flex justify-content-center">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://punchupworld.github.io/craftbeerinternlnwza007/" target="_blank"><img class="icon" src="@/assets/pics/facebook_icon.svg" alt="" /></a>
            <a href="https://twitter.com/intent/tweet?url=https://punchupworld.github.io/craftbeerinternlnwza007/" target="_blank"><img class="icon" src="@/assets/pics/twitter_icon.svg" alt="" /></a>
            <img class="icon" src="@/assets/pics/line_icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareComponent",
};
</script>

<style scoped>
.bgimage {
  position: relative;
}
.topic1 img {
  width: 3rem;
}
.topic2 h2 {
  background-color: #f4cc2d;
  width: fit-content;
  margin: auto;
  margin-top: 1rem;
}
.topic3 h3{
  color: #DE5850;
}
.text {
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  position: absolute;
}

.icon {
  width: 6rem;
  cursor: pointer;
}
.icon:hover {
  transform: scale(1.1);
}
.text {
  position: absolute;
}
.b4 {
  border: 1px solid black;
  padding: 0.5rem;
  width: fit-content;
  margin: auto;
}
</style>
