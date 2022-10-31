<template>
  <div class="hover-rela">
    <p class="textall text1 b4" v-if="active == 1">
      -------------------- IPA (90)
    </p>
    <p class="textall text2 b4" v-if="active == 2">
      Pale Ale (37) --------------------
    </p>
    <p class="textall text3 b4" v-if="active == 3">
      -------------- Wheat Beer (36)
    </p>
    <p class="textall text4 b4" v-if="active == 4">
      Ale (35) -----------------------
    </p>
    <p class="textall text5 b4" v-if="active == 5">
      -------------------- Stout (21)
    </p>
    <div
      class="hand d-flex justify-content-center align-items-center"
      v-if="active == 0"
    >
      <img src="@/assets/pics/frame3/bottle/bottle1/click.png" alt="" />
      <p class="b5">วางเมาส์บนขวด<br />เพื่ออ่านรายละเอียด</p>
    </div>
    <div class="svg-part d-flex justify-content-center">
      <!-- Generator: Adobe Illustrator 26.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg
        version="1.1"
        id="beer_pic_chart"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 521 1440"
        style="enable-background: new 0 0 521 1440"
        xml:space="preserve"
      >
        <g>
          <g id="ipa" @mouseover="hovershow(1)" @mouseout="hovershow(0)">
            <image
              style="overflow: visible"
              width="188"
              height="280"
              xlink:href="data:image/png;base64,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"
              transform="matrix(1.9323 0 0 1.9323 76.3636 56.2544)"
            ></image>
          </g>
          <g id="pale_ale" @mouseover="hovershow(2)" @mouseout="hovershow(0)">
            <image
              style="overflow: visible"
              width="189"
              height="117"
              xlink:href="data:image/png;base64,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
YII="
              transform="matrix(1.9323 0 0 1.9323 75.3975 597.2988)"
            ></image>
          </g>
          <g id="wheat_beer" @mouseover="hovershow(3)" @mouseout="hovershow(0)">
            <image
              style="overflow: visible"
              width="189"
              height="113"
              xlink:href="data:image/png;base64,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
YII="
              transform="matrix(1.9323 0 0 1.9323 75.3975 823.3781)"
            ></image>
          </g>
          <g id="ale" @mouseover="hovershow(4)" @mouseout="hovershow(0)">
            <image
              style="overflow: visible"
              width="188"
              height="108"
              xlink:href="data:image/png;base64,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"
              transform="matrix(1.9323 0 0 1.9323 76.3636 1041.7283)"
            ></image>
          </g>
          <g id="stout" @mouseover="hovershow(5)" @mouseout="hovershow(0)">
            <image
              style="overflow: visible"
              width="188"
              height="68"
              xlink:href="data:image/png;base64,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
QmCC"
              transform="matrix(1.9323 0 0 1.9323 76.3636 1252.3491)"
            ></image>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottleLayer",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    hovershow(number) {
      this.active = number;
    },
  },
};
</script>

<style scoped>
#pale_ale,
#ipa,
#ale,
#wheat_beer,
#stout {
  opacity: 0.5;
  transition: 0.3s ease;
}
#pale_ale:hover,
#ipa:hover,
#ale:hover,
#wheat_beer:hover,
#stout:hover {
  opacity: 1;
}
.hover-rela {
  width: 100%;
  height: 100%;
}
.svg-part {
}
svg {
  width: 35%;
}
.hand {
  position: absolute;
  right: 10%;
  top: 50%;
}
.hand p {
  margin: 0;
}
.textall {
  position: absolute;
}
.text1,
.text3,
.text5 {
  right: 15%;
}
.text2.text4 {
  left: 15%;
}
.text1 {
  top: 25%;
}
.text2 {
  top: 47%;
}
.text3 {
  top: 60%;
}
.text4 {
  bottom: 20%;
}
.text5 {
  bottom: 12%;
}
@media (max-width: 540px) {
  .hand {
    width: 40%;
    transform: translateX(20%);
  }
  .hand img {
    width: 20%;
  }
  .hand p {
    font-size: 0.5rem;
  }
  .textall {
    font-size: 0.7rem;
  }
  .text1,
  .text3,
  .text5 {
    right: 5%;
  }
  .text2,
  .text4 {
    left: 5%;
  }
  .text1 {
    top: 30%;
  }
  .text2 {
    top: 47%;
  }
  .text3 {
    top: 57%;
  }
  .text4 {
    bottom: 25%;
  }
  .text5 {
    bottom: 18%;
  }
}
</style>
