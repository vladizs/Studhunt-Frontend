<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="modal-frame">
          <div class="autorisation">
            <div class="header-reg">
              <h4 class="registration text-left">
                <a href="#">Регистрация</a>
              </h4>
              <h4 class="enter text-right"><a href="#">Войти</a></h4>
            </div>
            <div class="forms">
              <div class="name">
                <h5 class="name-title">Имя</h5>
                <input class="name-form" type="text" name="name" v-model="name"/>
              </div>
              <div class="Surname">
                <h5 class="Surname-title">Фамилия</h5>
                <input class="Surname-form" type="text" name="surname" v-model="surname"/>
              </div>
              <div class="login">
                <h5 class="login-title">Логин</h5>
                <input class="login-form" type="text" name="login" v-model="login"/>
              </div>
              <div class="email">
                <h5 class="email-title">Email</h5>
                <input class="email-form" type="email" name="email" v-model="email"/>
              </div>
              <div class="password">
                <h5 class="password-title">Пароль</h5>
                <input class="password-form" type="password" name="password" v-model="password"/>
              </div>
              <div class="password__confirm">
                <h5 class="password__confirm-title">Подтвердите пароль</h5>
                <input class="password__confirm-form" type="password" name="confirm_password"/>
              </div>
            </div>
            <div class="buttons">
              <div class="users">
                <div class="studen">
                  <input
                    class="student-radio"
                    type="radio"
                    name="choice"
                    value="student1"
                  />
                  <p class="student-p">Я студент</p>
                </div>
                <div class="client">
                  <input
                    class="client-radio"
                    type="radio"
                    name="choice"
                    value="client1"
                  />
                  <p class="client-p">Я заказчик</p>
                </div>
              </div>
              <button class="reg">Зарегистрироваться</button>
            </div>
            <img
              class="img-fluid rocket"
              src="../assets/img/OQ6UTW0 1.png"
              alt="rocket"
            />
            <img class="exit" src="../assets/img/exit.svg" alt="exit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
    background-color: #000000;
    font-family: 'Rubik', sans-serif;
    font-family: 'Roboto', sans-serif;
}
button { border: none; outline: none; }
input{border: none; outline: none;}
.modal-frame{
    font-family: 'Rubik', sans-serif;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    width: 619px;
    height: 376px;
    border-radius: 24px 24px 24px 24px;
}
.autorisation{
    width: 345px;
    height: 36px;
}
.header-reg{
    width: 345px;
    height: 36px;
    background-color: #136995;
    border-radius: 24px 0px 0px 0px;
}
.registration{
    padding-top: 6px;
}
.registration a{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-left: 80px;
    text-decoration: none;
    color: #E1EFFF;
}
.registration a:hover{
    color: #81D1FA;
}
.enter {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: -29px;
    margin-right: 78px;
    text-decoration: none;
}
.enter a{
    color: #81D1FA;
    text-decoration: none;
}
.enter a:hover{
    color: #E1EFFF;
}
.forms{
    width: 210px;
    height: 229px;
    margin-left: 68px;
    margin-top: 12px;
}
.name-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 1px;
}
.name-form{
    width: 100px;
    height: 24px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}
.Surname{
    margin-left: 109px;
    margin-top: -41px;
}
.Surname-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 1px;
}
.Surname-form{
    width: 100px;
    height: 24px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}
.login{
    margin-top: 3px;
}
.login-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 3px;
}
.login-form{
    width: 210px;
    height: 24px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}
.email{
    margin-top: 3px;
}
.email-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 3px;
}
.email-form{
    width: 210px;
    height: 24px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}
.password{
    margin-top: 3px;
}
.password-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 3px;
}
.password-form{
    width: 210px;
    height: 24px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}
.password__confirm{
    margin-top: 3px;
}
.password__confirm-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 3px;
}
.password__confirm-form{
    width: 210px;
    height: 24px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
}
.users{
    margin-left: 68px;
    margin-top: 6px;
    width: 210px;
    padding-top: 1px;
}
.student-p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    margin-left: 17px;
    margin-top: -19px;
    margin-bottom: -45px;
}
.client{
    margin-left: 102px;
    margin-top: 26px;
}
.client-p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    margin-left: 17px;
    margin-top: -19px;
}
.reg{
    width: 185px;
    height: 34px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: #FFFFFF;
    background: #136995;
    border-radius: 9px;
    margin-left: 78px;
}
.rocket{
    margin-left: 345px;
    margin-top: -356px;
    border-radius: 0px 24px 24px 0px;
}
.exit{
    margin-left: 585px;
    margin-top: -730px;
}
</style>

<script>
export default {
  data() {
    return {
      name: null,
      surname: null,
      login: null,
      email: null,
      password: null,
    };
  },
};
</script>
