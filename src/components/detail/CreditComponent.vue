<template>
  <div>
    <section>
      <div class="bg container-fluid d-flex justify-content-center flex-column">
        <!-- header -->
        <div class="text-center">
          <h3 class="m-5">ขอขอบคุณ</h3>
        </div>

        <!-- body -->
        <div class="row mb-5">
          <div class="col-4 text-center">
            <p class="b4">ข้อมูลจาก</p>
          </div>

          <div class="col-5">
            <ul>
              <li class="b5" v-for="(item, index) in nameweb" :key="index">
                {{ item }}
              </li>
            </ul>
            <br />
            <p class="b5">
              และคราฟต์เบียร์ 24 แบรนด์ ดังนี้<br />D'X Brewerkz, HYENA HOWL,
              โกลเด้นคอยส์ (Golden Coins), ชางวอน เอกซ์เพรส (Changwon Express),
              เชียงใหม่ (Chiang Mai Beer), แซนด์พอร์ต (Sandport), เดอะเซอร์คัส
              (The Circus), เทพพนม (Devanom), บ้านนอกเบียร์ (Bannok Beer),
              บีทบรูวิ่ง (Beat Brewing), บูทเลก บราเธอร์ (Bootleg Brothers),
              ทริปเปิล เพิร์ล (Triple Pearl), ผีบอก (Pheebok), ฟูลมูน บริวเวิร์ก
              (Full Moon Brewwork),ภูเก็ต (Phuket Beer), มหานคร (Mahanakhon),
              ยอดเบียร์ (YodBeer), ยักษา บริวเวอรี่ (YAKSA Brewery), ลูกกรุง
              บริวว์ (Look-krung Brew), ลำซิ่ง (Lamzing), สเปซคราฟต์
              (SpaceCraft), สโตน เฮด (Stone Head), เอาท์ลอว์ (Outlaw),
              แฮปปี้นิวเบียร์ (Happy New Beer)
            </p>
            <br />
            <br />
          </div>

          <div class="col-4 text-center">
            <p class="b4">หน่วยงานและองค์กร</p>
          </div>

          <div class="col-5">
            <ul>
              <li class="b5" v-for="(item, index) in companies" :key="index">
                {{ item }}
              </li>
            </ul>
            <br />
            <br />
          </div>

          <div class="col-4 text-center">
            <p class="b4">ผู้ให้สัมภาษณ์</p>
          </div>

          <div class="col-5">
            <ul>
              <li class="b5" v-for="(item, index) in interviewee" :key="index">
                {{ item }}
              </li>
            </ul>
            <br />
            <br />
          </div>

          <div class="col-4 text-center">
            <p class="b4">เพจ Facebook</p>
          </div>

          <div class="col-5">
            <ul>
              <li class="b5" v-for="(item, index) in pages" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CreditComponent",
  data() {
    return {
      nameweb: [
        "BEER MARKET IN THAILAND",
        "Jane's Beer Blog",
        "Top 10 biggest beer producing countries",
        "Types of Beer: A Guide & List to Different Styles",
        "คราฟต์เบียร์ในสังคมไทย",
        "บทความ “BEER BASIC 101 – Ale or Lager…what? …มารู้จักเบียร์กันดีกว่า ตอน: เอล กับ ลาเกอร์”",
        "บทความ “BEER BASIC 101 – The main ingredients …มารู้จักเบียร์กันดีกว่า ตอน: เบียร์ ทำจากอะไร”",
        "บทความ “Top 10 Thai Craft Beer 10 คราฟต์เบียร์ไทยที่ใครๆ ก็ไม่ควรพลาด!”",
        "บทความ “คราฟท์เบียร์สัญชาติไทย แต่ผลิตต่างแดน”",
        "บทความ “คราฟท์เบียร์ไทย’ เสียท่า ด้วยกติกาขัดขาตัวเอง”",
        "บทความ “พ.ร.บ.ห้ามโฆษณาเหล้า-เบียร์ แบรนด์เล็กตาย แบรนด์ใหญ่ไม่โต”",
        "บทความ “รวม 10 คราฟต์เบียร์ไทยที่เปิดตัวพร้อมๆ กันเดือนนี้”",
        "บทความ “ห้ามขายเหล้าวันพระใหญ่ : รัฐกับข้ออ้างบนพนักพิงของศาสนา”",
        "ร่างพระราชบัญญัติภาษีสรรพสามิต (ฉบับที่ ..) พ.ศ. …. (ร่าง พ.ร.บ.สุราก้าวหน้า)",
      ],
      companies: [
        "BLT Bangkok",
        "FLANDERS INVESTMENT & TRADE MARKET SURVEY",
        "RateBeer",
        "The Momentum",
        "มติชนออนไลน์",
        "BLT Bangkok",
        "สถาบันวิจัยเพื่อการพัฒนาประเทศไทย (ทีดีอาร์ไอ)",
      ],
      interviewee: ["กษิดิ์พัฒน์ ศุกรสุต", "จิรภาส สระโร"],
      pages: ["แดกเบียร์ให้เพลียแคม"],
    };
  },
};
</script>

<style scoped>
.bg{
  background: #F8EF8F;
}
p {
  margin-bottom: 0;
}
</style>
