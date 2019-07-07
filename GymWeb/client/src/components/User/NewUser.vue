<template>
  <div class="Users">
    <h1>Thêm học viên</h1>
    <form class="form">
      <div>
        <label>Tên đăng nhập:</label>
        <input type="text" name="name" v-model="this_username" />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input type="password" v-model="this_password" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" v-model="this_email" />
      </div>
      <div>
        <label>Tên hiển thị:</label>
        <input type="text" name="name" v-model="this_nickname" required />
      </div>
      <div>
        <label>Ngày sinh:</label>
        <input type="date" v-model="this_birthday" />
      </div>
      <div>
        <label>Ngày vào:</label>
        <input type="date" v-model="this_joinDate" required />
      </div>
      <div>
        <label>Số điện thoại:</label>
        <input type="text" name="name" v-model="this_phone" />
      </div>
      <div>
        <label>Địa chỉ:</label>
        <input type="text" name="name" v-model="this_address" />
      </div>
      <!-- <div>
        <label>Ảnh đại diện:</label>
        <input type="file" v-on:change="this_avatar" />
      </div> -->
      <div>
        <button class="btn btn-success" @click="addUser">Thêm</button>
        <button class="btn btn-danger" @click="$router.go(-1)">Quay lại</button>
      </div>
    </form>
  </div>
</template>
<script>
/* eslint-disable */
import UsersService from "@/services/user.services";
export default {
  name: "NewUser",
  data() {
    return {
      this_username: "",
      this_password: "",
      this_email: "",
      this_nickname: "",
      this_birthday: Date,
      this_joinDate: Date,
      this_phone: "",
      this_address: "",
      // this_avatar: ""
    };
  },
  methods: {
    async addUser() {
      if (this.this_nickname && this.this_joinDate) {
        await UsersService.addUser({
          username: this.this_username,
          password: this.this_password,
          email: this.this_email,
          nickname: this.this_nickname,
          birthday: this.this_birthday,
          joinDate: this.this_joinDate,
          phone: this.this_phone,
          address: this.this_address,
          // avatar: this.this_avatar
        });
        alert("Đã thêm " + this.this_nickname + " vào danh sách học viên!");

        //  add complete and back to users
        // this.$router.go(-1);
      } else {
        alert("Không để trống!");
      }
    }
  }
};
</script>
<style scoped>
label {
  margin: auto;
  padding-right: 10px;
  width: 10%;
  color: blue;
  text-align: right;
  font-size: 150%;
}
.btn {
  width: 10%;
}
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 3%;
}
</style>
