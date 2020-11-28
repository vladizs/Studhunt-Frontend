<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="../assets/img/logo.svg" alt="Logo" class="header__logo">
      </router-link>
      <nav class="header__navbar">
        <router-link to="/new_post">Подать объявление</router-link>
        <router-link to="/vacancies">Вакансии</router-link>
        <router-link to="/students">Поиск студентов</router-link>
      </nav>
      <div class="header__account">
        <button class="btn btn_auth">Войти в аккаунт</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

header.header {
  height: 50px;
  width: 100%;
  background: #114864;
}

.header__logo {
  margin-left: 45px;
}

.header .container {
  display: flex;
  justify-content: space-between;
}

.header__navbar > a {
  text-decoration: none;
  color: #E1EFFF;
  font-size: 14px;
  margin-left: 111px;
}

.header__navbar {
  margin-top: 17px;
}

.header__account > button.btn_auth {
  width: 131px;
  height: 28px;
  font-size: 14px;
  margin-right: 24px;
  background: #E1EFFF;
  border: none;
  border-radius: 6px;
  color: #136995;
  margin-top: 11px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

</style>

<script>
export default {
  props: {
    accountId: {
      type: String,
      default: null,
    },
  },
};
</script>
