<template>
  <div className="formBox py-3 mx-3">
    <div className="mt-4">
      <h4 className="text-primary text-center"></h4>
      <div className="image"></div>
    </div>
    <div className="body-form">
      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
              >
                <path
                  d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"
                ></path>
              </svg>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
              >
                <path
                  d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"
                ></path>
              </svg>
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
          />
        </div>
        <router-link to="/">
          <button type="button" class="login-button">LOGIN</button>
        </router-link>
        <div className="message">
          <div>
            New user?
            <a href="#/SignUp">  Sign up </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
};
</script>
<style scoped>
.formBox {
  background-color: orange;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.body-form {
  width: 380px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 2%;
  text-align: center;
}
.login-button {
  margin-top: 5%;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  width: 65%;
  height: 50%;
}
.message {
  text-decoration: none;

  font-weight: 800;
}
</style>
