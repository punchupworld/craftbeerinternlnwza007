<template>
  <div class="bookmark-bg2 container-fluid">
    <div
      class="container d-flex justify-content-center text-center flex-column p-5"
    >
      <h4>นอกจากนี้ยังมีปัญหาอื่นๆ</h4>
      <h4 class="pb-3">ที่ทำให้คราฟต์เบียร์ไทยย่ำอยู่กับที่</h4>
      <div class="highlight">
        <p class="b4 mb-0">สำรวจปัญหาอื่นๆ</p>
      </div>
      <p class="b5 mt-2 mb-4">คลิกที่การ์ดเพื่ออ่าน</p>

      <div class="row">
        <div class="col-4">
          <button
            class="btn btn-primary"
            data-bs-target="#showForm"
            data-bs-toggle="modal"
          >open</button>
        </div>
        <div class="col-4">
          <div class="card"></div>
        </div>
        <div class="col-4">
          <div class="card"></div>
        </div>

        <p class="col-4">text1</p>
        <p class="col-4">text1</p>
        <p class="col-4">text1</p>
      </div>
    </div>

    <!-- modal -->
    <div class="modal" id="showForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">แบบฟอร์มลงทะเบียน</h5>
          </div>
          <div class="modal-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              sapiente, laborum ab nostrum nam doloremque recusandae fugit vitae
              totam ipsam?
            </p>
          </div>
          <div class="modal-footer">
            <button class="btn-success">บันทึกข้อมูล</button>
          </div>
        </div>
      </div>
    </div>
    
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
.card {
  height: 5rem;
  cursor: pointer;
  gap: 0.5rem;
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
.b5 {
  color: white;
}
</style>
>
