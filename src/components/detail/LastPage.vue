<template>
  <div>
    <div class="bookmark-bg container-fluid pb-4 pt-4">
      <div class="container">
        <div class="text-center pb-4">
          <img src="@/assets/pics/profile/topic.svg" alt="" class="header" />
        </div>

        <div class="frame row">
          <div class="col-lg-4 col-md-12 text-center">
            <div class="profile mb-4 d-flex justify-content-center">
              <img src="@/assets/pics/profile/soup.svg" />
              <p class="b5 position">Data Storyteller</p>
            </div>
            <div class="detail">
              <p class="b4">ธัญมน วิวัฒนภูษิต ( ซุป )</p>
              <p class="b6">
                คณะอักษรศาสตร์ <br />
                เอกเทคโนโลยีภาษาและสารสนเทศ <br />
                จุฬาลงกรณ์มหาวิทยาลัย
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 text-center">
            <div class="profile mb-4 d-flex justify-content-center">
              <img src="@/assets/pics/profile/ploy.png" />
              <p class="b5 position2">Digital Designer</p>
            </div>
            <div class="detail">
              <p class="b4">บัณฑิตา สมประเสริฐศักดิ์ ( พลอย )</p>
              <p class="b6">
                คณะศิลปกรรมศาสตร์ <br />
                ภาควิชานฤมิตศิลป์ วิชาเอกเรขศิลป์ <br />
                จุฬาลงกรณ์มหาวิทยาลัย
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 text-center">
            <div class="profile mb-4 d-flex justify-content-center">
              <img src="@/assets/pics/profile/wit.png" />
              <p class="b5 position">Web Developer</p>
            </div>
            <div class="detail">
              <p class="b4">วชิรวิทย์ ขันติพันธุกุล ( วิทย์ )</p>
              <p class="b6">
                คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี <br />
                ภาควิชาวิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย<br />
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
              </p>
            </div>
          </div>
        </div>

        <div class="text-center m-2">
          <a href="#"
            ><img
              src="@/assets/pics/profile/restart.svg"
              alt=""
              class="footer mb-2 mb-md-4"
          /></a>
          <div class="textfoot b6">BACK TO HOME</div>
          <div class="textfoot b6">กลับสู่หน้าแรก</div>
          <img src="@/assets/pics/profile/PU.svg" alt="" class="PU mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastPage",
};
</script>

<style scoped>
.bookmark-bg {
  background: #f8ef8f;
  width: 100vw;
  height: 100%;
}
.profile {
  position: relative;
}
.profile .position,
.profile .position2 {
  background: white;
  border: 1px solid black;
  padding: 0.5rem 2rem;
  position: absolute;
  bottom: 0;
}
.profile .position {
  transform: rotate(-3deg) translateY(60%);
}
.profile .position2 {
  transform: rotate(3deg) translateY(60%);
}
.profile img {
  width: 70%;
}
.header {
  width: 30%;
}
.footer {
  width: 4%;
  transition: 0.3s ease;
  cursor: pointer;
}
.footer:hover {
  transform: rotate(90deg) scale(1.1);
}
.PU {
  width: 15%;
}
.frame {
  padding-left: 3rem;
  padding-right: 3rem;
}

/* ipad air */
@media (max-width: 821px) {
  .lasttt {
    width: 100vw;
    height: 35vh;
  }
  .profile img {
    width: 50%;
  }
  .header {
    width: 50%;
    margin-bottom: 5%;
  }
  .footer {
    width: 6%;
  }
}
/* mobile */
@media (max-width: 540px) {
  .profile img {
    width: 70%;
  }
  .detail .b4 {
    font-size: 14px;
  }
  .detail .b6 {
    font-size: 12px;
  }
  .position,
  .position2 {
    font-size: 0.8rem;
  }
  .textfoot {
    font-size: 0.7rem;
  }
  .PU {
    width: 30%;
  }
}
</style>
