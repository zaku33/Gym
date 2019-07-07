<template>
  <div class="user">
    <h1>Edit Users</h1>
    <div class="table-wrap">
      <table class="table table-bordered">
        <tr>
          <td width="20%">Tên</td>
          <td width="10%">Ngày sinh</td>
          <td width="40%">Email</td>
          <td width="10%">Ngày vào</td>
        </tr>
        <tr>
          <td>{{ nickname }}</td>
          <td>{{ birthday }}</td>
          <td>{{ email }}</td>
          <td>{{ joinDate }}</td>
        </tr>
      </table>
    </div>
    <div class="form">
        <div>
          <input type="text" name="name" placeholder="Tên học viên" v-model="nickname" required />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" v-model="email">
        </div>
        <a>
          <button class="btn btn-success" @click="EditUser">Cập nhật</button>
        </a>
        <span>
          <button class="btn btn-danger" @click="$router.go(-1)">Quay lại</button>
        </span>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import UsersService from "@/services/user.services";
export default {
  name: "user",
  data() {
    return {
      nickname:'',
      birthday:Date,
      email:'',
      joinDate:Date
    };
  },
  mounted() {
    this.getDetailUser();
  },
  methods: {
    async getDetailUser() {
      const res = await UsersService.getDetailUser({id: this.$route.params.id});
      this.name = res.data.nickname
      this.birthday = res.data.birthday
      this.email = res.data.email
      this.joindate = res.data.joinDate
    },
    async EditUser() {
      await UsersService.updateUser({
        id: this.$route.params.id,
        nickname : this.nickname,
        email : this.email
      })
      alert('Cập nhật thành công!!')
    }
  }
}
</script>
<style scoped>
.table-wrap {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
table th,table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
.btn{
  width: 10%;
}
.form input,.form textarea {
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

