<template>
  <div
    class="bookmark-bg2 container-fluid d-flex justify-content-center align-items-center"
  >
    <div class="container d-flex text-center flex-column p-5">
      <h4>นอกจากนี้ยังมีปัญหาอื่นๆ</h4>
      <h4 class="pb-3">ที่ทำให้คราฟต์เบียร์ไทยย่ำอยู่กับที่</h4>
      <div class="highlight">
        <p class="b4 mb-0">สำรวจปัญหาอื่นๆ</p>
      </div>
      <p class="white b5 mt-2 mb-4">คลิกที่การ์ดเพื่ออ่าน</p>

      <div class="row">
        <div
          class="cardd d-flex justify-content-center align-items-center col-4"
        >
          <img src="@/assets/pics/frame4/4.7/card 1.svg" v-b-modal.modal-1 />
        </div>
        <div
          class="cardd d-flex justify-content-center align-items-center col-4"
        >
          <img src="@/assets/pics/frame4/4.7/card 2.svg" v-b-modal.modal-2 />
        </div>
        <div
          class="cardd d-flex justify-content-center align-items-center col-4"
        >
          <img src="@/assets/pics/frame4/4.7/card 3.svg" v-b-modal.modal-3 />
        </div>

        <p class="col-4 b4 topictext">
          ศีลธรรมพุทธกลายมาเป็น <br />
          นโยบายเรื่องเหล้าเบียร์
        </p>
        <p class="col-4 b4 topictext">คราฟต์เบียร์ไทยราคาไม่น่ารัก</p>
        <p class="col-4 b4 topictext">
          กฎหมายโฆษณา <br />
          ปิดโอกาสรายย่อย
        </p>
      </div>
    </div>

    <!-- modal -->
    <b-modal id="modal-1" size="xl" hide-footer>
      <div class="row p-3">
        <div
          class="modalpic col-5 d-flex justify-content-center align-items-center"
        >
          <img src="@/assets/pics/frame4/4.7/card 1.svg" alt="" />
        </div>
        <div class="col-7 p-4 text-center">
          <h2 class="topicmodal mb-4">
            ศีลธรรมพุทธกลายมาเป็น <br />
            นโยบายเรื่องเหล้าเบียร์
          </h2>
          <p class="b5">
            เมื่อเส้นกั้นระหว่างกฎหมายและศาสนาคลุมเครือ <br />
            การจำกัดเสรีภาพจึงมาในรูปแบบศีลธรรมทางศาสนา
          </p>

          <div class="line mb-4 mt-4 m-auto"></div>

          <p class="b4">
            นอกจากการกำหนดเวลาซื้อ-ขายแล้ว <br />
            ยังมีกฎหมายห้ามจำหน่ายเครื่องดื่ม <br />
            แอลกอฮอล์ในวันสำคัญทางศาสนา
          </p>
          <p class="b6 gray">
            (แต่อนุญาตให้ขายได้เฉพาะร้านปลอดอากร <br />
            ภายในอาคารท่าอากาศยานนานาชาติ)
          </p>

          <div class="line mb-4 mt-4 m-auto"></div>

          <p class="b4">ผลกระทบ :</p>

          <ul>
            <li class="b5">ผู้ขายแอลกอฮอล์รายเล็กสูญเสียรายได้</li>
            <li class="b5">
              ประชาชนที่ไม่ได้สมาทานศีลธรรมพุทธก็ต้องปฏิบัติ <br />
              ตามกฎหมายด้วยเหตุผลที่ว่า…เพื่อศีลธรรมอันดี
            </li>
          </ul>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-2" scrollable size="xl" hide-footer>
      <p class="my-4">Hello from modal2!</p>
    </b-modal>

    <b-modal id="modal-3" scrollable size="xl" hide-footer>
      <p class="my-4">Hello from modal3!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
};
</script>

<style scoped>
.bookmark-bg2 {
  width: 100vw;
  height: 100vh;
  background-color: #62a083;
}
h4 {
  color: white;
}
.cardd {
  background: none;
  border: none;
}
.cardd img {
  width: 80%;
  cursor: pointer;
  transition: 0.3s ease;
}
.cardd img:hover {
  transform: rotate(2deg);
}

.highlight {
  background-color: white;
  border: 1px solid black;
  width: max-content;
  padding: 0.5rem;
  margin: auto;
}
.b4 {
  color: black;
}
.white {
  color: white;
}
.gray {
  color: #949494;
}
.topictext {
  margin-top: 1rem;
  color: white;
}
.line {
  width: 40%;
  border: 1px solid black;
}
.modalpic img {
  width: 100%;
}
.topicmodal {
  color: #de5850;
}
/* modal */
</style>
