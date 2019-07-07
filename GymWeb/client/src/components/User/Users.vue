<template>
  <div class="users">
    <h1>Danh sách học viên</h1>
    <div v-if="users.length>0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewUser' }" class="btn btn-success add">Thêm học viên</router-link>
        <input type="text" placeholder="Tìm tên..." v-model="searchKey" />
      </div>
      <table class="table-bordered">
        <tr>
          <td width="500px">Hình</td>
          <td width="500px">Tên</td>
          <td width="500px">Email</td>
          <td width="200px">Ngày sinh</td>
          <td width="200px">Ngày vào</td>
          <td width="200px" align="center">Thao tác</td>
        </tr>
        <tr v-for="user in filteredUser" :key="user.id">
          <td>{{ user.avatar || "None"}}</td>
          <td>{{ user.nickname || "None"}}</td>
          <td>{{ user.email || "None"}}</td>
          <td>{{ user.birthday || "None"}}</td>
          <td>{{ user.joinDate || "None"}}</td>
          <td align="center">
            <router-link
              v-bind:to="{ name: 'EditUser', params: { id: user._id } }"
              class="btn btn-success"
            >Sửa</router-link>
            <a @click.prevent="deleteUser(user._id)" class="btn btn-warning">Xóa</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      Chưa có user nào , thêm 1 user vào
      <br />
      <br />
      <span>
        <router-link v-bind:to="{ name: 'NewUser' }" class="add_User_link">Thêm User</router-link>
      </span>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import UserService from "@/services/user.services";
export default {
  name: "users",
  data() {
    return {
      searchKey: "",
      users: []
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    async getAllUser() {
      const res = await UserService.getAllUser();
      this.users = res.data.user;
    },
    async deleteUser(id) {
      if (confirm("Bạn muốn xóa học viên này không?")) {
        await UserService.deleteUser(id);
        await this.getAllUser();
      }
      this.$router.push({
        name: "Users"
      });
    }
  },
  computed: {
    filteredUser() {
      return this.users.filter(user => {
        return user.nickname.indexOf(this.searchKey) > -1;
      });
    }
  }
};
</script>
<style scoped>
.table-wrap {
  width: 100%;
  padding: 100px;
  /* margin: 10 auto; */
  align-self: auto;
  text-align: center;
}
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #0eff7296;
}
table tr:nth-child(even) {
  background: #6ffff3a1;
}
table tr:nth-child(1) {
  background: #011957b7;
  color: #fff;
}

.add_User_link {
  background: #4d7ef7;
  color: rgb(255, 0, 0);
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
