<template>
  <div>
    <section>
      <div
        class="bookmark-bg2 container-fluid d-flex justify-content-center align-items-center"
      >
        <div class="text-center display-flex flex-column">
          <h3 class="t-black m-auto mb-1">ท่ามกลางความมืดมิด</h3>
          <h3 class="t-white m-auto mb-1">ก็ยังมีแสงแห่งความหวัง</h3>

          <div class="maintext text-center m-5">
            <h1 class="m-2">ในปี 2022</h1>
            <h1 class="m-2">คราฟต์เบียร์ไทยได้เข้าใกล้</h1>
            <h1 class="m-2">ความเปลี่ยนแปลงมากกว่าที่เคย</h1>
          </div>
          <vue-aos animation-class="slideInUp animated">
            <div class="hand m-auto">
              <img src="@/assets/pics/frame5/5/hands.svg" alt="" />
            </div>
          </vue-aos>
        </div>
      </div>

      <div
        class="bookmark-bg3 container-fluid d-flex justify-content-center align-items-center"
      >
        <div class="text-center display-flex flex-column">
          <h1 class="text-color m-auto mb-2">พ.ร.บ. สุราก้าวหน้า</h1>
          <h3 class="mb-5">หมุดหมายสำคัญของวงการคราฟต์เบียร์</h3>
          <p class="b5">คอนเซปต์ของพ.ร.บ.สุราก้าวหน้า คือ</p>

          <div class="part2 d-flex flex-column">
            <img src="@/assets/pics/frame4/4.6/top.svg" class="mb-5" />
            <h1>
              ยกเลิกกฎหมายที่เป็นอุปสรรคต่อการผลิตสุรา <br />
              หรือขัดขวางไม่ให้ประชาชนประกอบอาชีพผลิตสุราได้อย่างเสรี
            </h1>
            <img src="@/assets/pics/frame4/4.6/bot.svg" class="mt-5 mb-5" />
          </div>

          <div class="part3 text-center m-auto">
            <vue-aos animation-class="fadeInUp animated">
              <div class="bordertext">
                <p class="edit b4">
                  เน้นที่การ<span
                    >แก้ไขพระราชบัญญัติภาษีสรรพสามิต พ.ศ. 2560</span
                  ><br />
                  มาตรา 153 เพื่อเปิดให้ประชาชนสามารถผลิตสุราในครัวเรือนได้<br />
                  แต่ถ้าประชาชนต้องการผลิตเพื่อการค้าต้องยื่นขออนุญาตและ<br />
                  การออกใบอนุญาตตามขั้นตอนตามที่กำหนดในกฎกระทรวง<br />
                </p>
                <div
                  class="circle d-flex justify-content-center align-items-center b4"
                >
                  1
                </div>
              </div>
            </vue-aos>

            <vue-aos animation-class="fadeInUp animated">
              <div class="bordertext">
                <p class="edit b4">
                  ยกเลิกการกำหนดคุณสมบัติในเรื่องกำลังการผลิต <br />
                  ทั้งกำลังแรงคน และกำลังเครื่องจักร
                </p>
                <div
                  class="circle d-flex justify-content-center align-items-center b4"
                >
                  2
                </div>
              </div>
            </vue-aos>

            <vue-aos animation-class="fadeInUp animated">
              <div class="bordertext">
                <p class="edit b4">
                  ไม่กำหนดทุนจดทะเบียนขั้นต่ำในการก่อตั้งบริษัทเบียร์
                </p>
                <div
                  class="circle d-flex justify-content-center align-items-center b4"
                >
                  3
                </div>
              </div>
            </vue-aos>
          </div>
        </div>
      </div>

      <div
        class="bookmark-bg container-fluid d-flex justify-content-center align-items-center"
      ></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Act1",
};
</script>

<style scoped>
.bookmark-bg2,
.bookmark-bg3,
.bookmark-bg {
  background-color: #f8ef8f;
}
.bookmark-bg2,
.bookmark-bg {
  padding-top: 5rem;
}
.bookmark-bg3 {
  padding: 5rem;
}

.t-black {
  color: white;
  background-color: black;
  width: fit-content;
  padding: 0.5rem 1rem;
  transform: rotate(2deg);
}
.t-white {
  color: black;
  background-color: white;
  width: fit-content;
  padding: 0.5rem 1rem;
  border: 1px solid;
  transform: rotate(-2deg);
}
.maintext {
  color: #de5850;
  padding: 3rem;
}
.hand {
  width: 70%;
}

.part2 img {
  width: 3rem;
  margin: auto;
}
.part3 {
  width: 80%;
}
.bordertext {
  background-color: white;
  padding: 2rem;
  margin-bottom: 1rem;
  position: relative;
  border: 1px solid black;
}
.circle {
  position: absolute;
  border: 1px solid;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  top: 20px;
  left: 0;
  transform: translateX(-50%);
  background-color: white;
}
.text-color {
  background: #f4cc2d;
  width: fit-content;
}
span {
  background: #f8ef8f;
}
.edit{
  margin-bottom: 0;
}
</style>
