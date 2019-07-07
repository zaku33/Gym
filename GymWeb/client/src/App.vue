<template>
  <div id="app">
    <header class="navbar navbar-expand-sm bg-dark navbar-left">
      <router-link class="asize alert text-light" :to="{path :'/'}">Trang chủ</router-link>
      <router-link class="asize alert text-light" :to="{path :'/users'}">Học viên</router-link>
      <router-link class="asize alert text-light" :to="{path :'/news'}">Tin tức</router-link>
      <router-link class="asize alert text-light" :to="{path :'/about'}">Giới thiệu</router-link>
      <router-link class="asize alert text-light" :to="{path :'/contact'}">Liên hệ</router-link>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
          <b>Đăng nhập</b>
          <span class="caret"></span>
        </a>
        <ul id="login-dp" class="dropdown-menu dropdown-menu-right">
          <li>
            <div class="row">
              <div class="col-xl-1"></div>
              <div class="col-xl-10">
                <h3 style="text-align:center">Đăng nhập bằng</h3>
                <div class="social-buttons d-flex justify-content-center">
                  <a href="#" class="btn btn-fb">
                    <i class="fa fa-facebook"></i> Facebook
                  </a>
                  <a href="#" class="btn btn-tw">
                    <i class="fa fa-twitter"></i> Twitter
                  </a>
                </div>
                <h1 style="text-align:center">Hoặc</h1>
                <form
                  class="form"
                  role="form"
                  method="post"
                  action="login"
                  accept-charset="UTF-8"
                  id="login-nav"
                >
                  <!-- <div class="form-group">
                    <label class="sr-only">Địa chỉ Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Địa chỉ email"
                      v-bind="this_email"
                      required
                    />
                  </div>-->
                  <div class="form-group">
                    <label class="sr-only">Email hoặc Username</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email hoặc Username"
                      v-bind="this_email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label class="sr-only">Mật khẩu</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Mật khẩu"
                      v-bind="this_password||this_username"
                      required
                    />
                    <div class="help-block text-right">
                      <a href>Quên mật khẩu?</a>
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block" @click="login">Đăng nhập</button>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" /> Duy trì đăng nhập
                    </label>
                  </div>
                </form>
              </div>
              <div class="col-xl-1"></div>
              <!-- <div class="bottom text-center">
                  Ma mới ? <a href="#"><b>Nhập bọn nào</b></a>
              </div>-->
            </div>
          </li>
        </ul>
      </li>
    </header>
    <!-- Router-view is using for get all component and display all code below the code above -->
    <router-view />
  </div>
</template>
<script>
/* eslint-disable */
import login from "@/services/login.services";
export default {
  name: "App",
  data() {
    return {
      this_email: "",
      this_username:"",
      this_password: ""
    };
  },
  mounted() {
    this.login();
  },
  methods: {
    async login() {
      await login.UserLogin({
        email: this_email,
        password: this_password
      });
    }
  }
};
</script>
<style>
body {
  background-image: url("https://www.wallpaperup.com/uploads/wallpapers/2013/04/08/72497/52eaff492808bb7256a60cac9f16cf1d.jpg");
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.dropdown {
  padding-left: 60%;
}
#login-dp {
  min-width: 250px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
}
#login-dp .help-block {
  font-size: 12px;
}
#login-dp .bottom {
  background-color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid #ddd;
  clear: both;
  padding: 14px;
}
#login-dp .social-buttons {
  margin: 12px 0;
}
#login-dp .social-buttons a {
  width: 70%;
}
#login-dp .form-group {
  margin-bottom: 10px;
}
.btn-fb {
  color: #fff;
  background-color: #3b5998;
}
.btn-fb:hover {
  color: #fff;
  background-color: #496ebc;
}
.btn-tw {
  color: #fff;
  background-color: #55acee;
}
.btn-tw:hover {
  color: #fff;
  background-color: #59b5fa;
}
@media (max-width: 768px) {
  #login-dp {
    background-color: inherit;
    color: #fff;
  }
  #login-dp .bottom {
    background-color: inherit;
    border-top: 0 none;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}
.asize {
  margin-top: 1%;
}
.asize:hover {
  opacity: 0.7;
  cursor: pointer;
}
.asize:visited {
  color: inherit;
}
</style>
