<template>
  <div>
    <div class="gradient1"></div>
    <div
      class="bookmark-bg2 container-fluid d-flex justify-content-center align-items-center"
    >
      <div class="container d-flex text-center flex-column p-lg-5">
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
            class="modalpic col-lg-5 col-md-12 d-flex justify-content-center align-items-center"
          >
            <img src="@/assets/pics/frame4/4.7/card 1.svg" alt="" />
          </div>
          <div class="col-lg-7 col-md-12 p-4 text-center">
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

            <div class="last">
              <p class="b4 text-start">ผลกระทบ :</p>

              <ul class="text-start">
                <li class="b5">ผู้ขายแอลกอฮอล์รายเล็กสูญเสียรายได้</li>
                <li class="b5">
                  ประชาชนที่ไม่ได้สมาทานศีลธรรมพุทธก็ต้องปฏิบัติ <br />
                  ตามกฎหมายด้วยเหตุผลที่ว่า…เพื่อศีลธรรมอันดี
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-modal>

      <b-modal id="modal-2" scrollable size="xl" hide-footer>
        <div class="row p-3">
          <div
            class="modalpic col-lg-5 col-md-12 d-flex justify-content-center align-items-start"
          >
            <img src="@/assets/pics/frame4/4.7/card 2.svg" />
          </div>
          <div class="col-lg-7 col-md-12 p-4 d-flex flex-column text-center">
            <h2 class="topicmodal mb-4">คราฟต์เบียร์ไทย ราคาไม่น่ารัก</h2>
            <p class="b5">
              รัฐบาลใช้พ.ร.บ. ภาษีสรรพสามิตเป็นเครื่องมือเพื่อให้ <br />
              ประชาชนลดการบริโภคเครื่องดื่มแอลกอฮอล์ <br />
              แต่วิธีนี้ไม่ค่อยได้ผล เพราะคนไทยมีความยืดหยุ่นต่อการบริโภคสูง
            </p>

            <p class="b4">ต้นทุนของคราฟต์เบียร์มาจากอะไร ?</p>

            <p class="b5">
              นอกจากค่าขนส่งและค่าวัตถุดิบแล้ว <br />
              ต้นทุนของคราฟต์เบียร์ยังมีของเรื่อง<span> ภาษี </span>ด้วย
            </p>
            <p class="b6 gray">
              (แต่อนุญาตให้ขายได้เฉพาะร้านปลอดอากร <br />
              ภายในอาคารท่าอากาศยานนานาชาติ)
            </p>

            <img src="@/assets/pics/frame4/4.7/print.svg" class="print" />

            <div class="last">
              <p class="b4 text-start">ผลกระทบ :</p>

              <ul class="text-start">
                <li class="b5">
                  ภาษีที่สูงทำให้ประชาชนต้องแบกรับค่าใช้จ่ายเพิ่ม <br />
                  และทำให้คราฟต์เบียร์ถูกจำกัดเป็นเครื่องดื่มของคนเฉพาะกลุ่ม
                </li>
                <li class="b5">
                  ถึงแม้รสชาติที่แปลกใหม่เป็นเอกลักษณ์ของคราฟต์เบียร์ <br />
                  แต่รสชาติที่คาดเดาไม่ได้มาพร้อมกับราคาที่สูง <br />
                  ทำให้เบียร์กระแสหลักยังครองใจคนไทย <br />
                  ดังนั้นคราฟต์เบียร์จึงแจ้งเกิดได้ยาก
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-modal>

      <b-modal id="modal-3" scrollable size="xl" hide-footer>
        <div class="row p-3">
          <div
            class="modalpic col-lg-5 col-md-12 d-flex justify-content-center align-items-start"
          >
            <img src="@/assets/pics/frame4/4.7/card 3.svg" />
          </div>
          <div class="col-lg-7 col-md-12 p-4 d-flex flex-column text-center">
            <h2 class="topicmodal mb-4">
              กฎหมายโฆษณา <br />
              ปิดโอกาสรายย่อย
            </h2>
            <p class="b5">
              มาตรา 32 ของ พ.ร.บ.ควบคุมเครื่องดื่มแอลกอฮอล์ <br />
              พ.ศ. 2551 บัญญัติว่า
            </p>

            <div class="main-topic d-flex flex-column">
              <img
                src="@/assets/pics/frame4/4.7/top.svg"
                class="luknam m-4 align-self-center"
              />
              <p class="b4">
                ห้ามมิให้ผู้ใดโฆษณาเครื่องดื่มแอลกอฮอล์ <br />
                ห้ามแสดงชื่อหรือเครื่องหมายของเครื่องดื่ม <br />
                แอลกอฮอล์ อันเป็นการอวดอ้างสรรพคุณ <br />
                หรือชักชวนใจให้ผู้อื่นดื่มโดยตรงหรือโดยอ้อม
              </p>
              <img
                src="@/assets/pics/frame4/4.7/bot.svg"
                class="luknam m-4 align-self-center"
              />
            </div>

            <p class="b5">
              ดังนั้นผู้ประกอบการ<span>ไม่สามารถโฆษณา แสดงชื่อหรือโลโก้</span
              ><br />
              หรือแม้กระทั่ง<span>พูดถึงรสชาติของเครื่องดื่มแอลกอฮอล์ได้</span
              ><br />
              เพราะอาจเข้าข่ายความผิดแต่อย่างไรก็ตามกฎหมายนี้ <br />
              ถูกบังคับใช้ในราชอาณาจักรไทยเท่านั้น
            </p>

            <img src="@/assets/pics/frame4/4.7/lisa.svg" class="lisa" />

            <div class="last">
              <p class="b4 text-start">ผลกระทบ :</p>

              <ul class="text-start">
                <li class="b5">
                  ผู้ประกอบการรายย่อยไม่สามารถสื่อสารสินค้าให้กับผู้บริโภค
                  <br />
                  ทำให้สินค้าไม่เป็นที่รู้จัก ยิ่งเป็นการกีดกันการเข้ามาแข่งขัน
                  <br />
                  ในตลาดกับแบรนด์ใหญ่
                </li>
                <li class="b5">
                  ในเมื่อผลลัพธ์ที่ได้จากการโปรโมทเหมือนกันแต่รายได้กลับ <br />
                  ไปตกอยู่ที่ธุรกิจโฆษณาของต่างประเทศ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-modal>
    </div>

    <div class="gradient2"></div>
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
.last {
  margin-left: 3rem;
}
.print {
  width: 50%;
  margin: auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.lisa {
  width: 80%;
  margin: auto;
  margin-bottom: 1.5rem;
}
.luknam {
  width: 5%;
}
.main-topic p {
  color: #de5850;
}
span {
  background: #f4cc2d;
}
.gradient2,
.gradient1 {
  width: 100vw;
  height: 30vh;
}

.gradient1 {
  background-image: linear-gradient(#e3eaf0, #62a083);
}
.gradient2 {
  background-image: linear-gradient(#62a083, #2c2828);
}

/* ipad */
@media (max-width: 821px) {
  .bookmark-bg2 {
    height: 80vh;
  }
  .cardd img {
    width: 100%;
  }
  .topictext {
    font-size: 1rem;
  }
  .highlight {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .modalpic img {
    width: 60%;
  }
  .print {
    width: 30%;
  }
}
/* mobile */
@media (max-width: 540px) {
  .bookmark-bg2 {
    height: 65vh;
  }
  .topictext {
    font-size: 0.4rem;
  }
  .last {
    margin-left: 0rem;
  }
  .main-topic p {
    font-size: 1rem;
  }
}
</style>
