<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="../assets/img/logo.svg" alt="Logo" class="header__logo">
      </router-link>
      <nav class="header__navbar">
        <router-link to="/newpost">Подать объявление</router-link>
        <router-link to="/vacancies">Вакансии</router-link>
        <router-link to="/students">Поиск студентов</router-link>
      </nav>
      <div class="header__account">
        <button class="btn_auth" v-on:click="openModal">Войти в аккаунт</button>
      </div>
    </div>
    <modal name="auth" width="650px" height="380px"><modal-auth /></modal>
  </header>
</template>

<style lang="scss" scoped>

.vm--modal {
  background: none!important;
  box-shadow: none!important;
}

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

<style>
.vm--modal {
  background: none !important;
  box-shadow: none !important;
}
</style>

<script>
import ModalAuth from './ModalAuth.vue';

export default {
  props: {
    accountId: {
      type: String,
      default: null,
    },
  },
  methods: {
    openModal() {
      this.$modal.show('auth');
    },
  },
  components: {
    ModalAuth,
  },
};
</script>
