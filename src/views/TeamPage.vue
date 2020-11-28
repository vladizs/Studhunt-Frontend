<template>
  <div class="container">
    <div class="team__info">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="text-left">IITU guys</h1>
          <p class="text-left">Задание - не проблема, проблема - не дилемма!</p>
        </div>
        <div class="col-lg-4">
          <div class="btn-temp">
            <a class="button__accept" href="#">Присоединиться</a>
          </div>
        </div>
      </div>
    </div>
    <div class="tags">
      <div class="row">
        <div class="col-lg-5">
          <div class="mobile-btn-temp">
            <a href="#">Мобильные приложения</a>
          </div>
          <div class="dev-btn-temp">
            <a href="#">Разработка</a>
          </div>
          <div class="design-btn-temp">
            <a href="#">Дизайн</a>
          </div>
        </div>
      </div>
      <div class="description">
        <div class="row">
          <div class="col-lg">
            <p>
              Команда сформированная студентами МУИТ, и выбравшая очень
              локаничное имя. Наша задача удовлетворить все ваши требования, и
              оставить вам пригодный для рынка товар.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="services">
      <div class="row">
        <div class="col">
          <p>
            Наши Услуги: <br />
            - Создание Сайтов Под Ключ Любой Сложности и Объёмов. <br />
            - Разработка дизайна UI/UX, Лототипа.<br />
            - Верстка любой сложности.<br />
            - Программирование.<br />
            - Контекстная реклама и SEO продвижение.<br />
            - Мобильные приложения.
          </p>
        </div>
      </div>
    </div>
    <div class="contacts">
      <div class="row">
        <div class="col">
          <h3 class="contacts-title">Наши контакты:</h3>
          <div class="contacts-icon">
            <a href="#"><img class="VK" src="../assets/img/VK.svg" alt="Vk" /></a>
            <a href="#"
              ><img class="Youtube" src="../assets/img/Youtube Icon.svg" alt="Youtube"
            /></a>
            <a href="#"><img class="Mail" src="../assets/img/Mailru.svg" alt="mail" /></a>
            <a href="#"
              ><img class="Whatsapp" src="../assets/img/WhatsApp Icon.svg" alt="wpp"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="team-photo">
      <div class="team__photo-title">
        <h4 class="text-right">Фото команды:</h4>
      </div>
      <img src="../assets/img/pexels-fauxels-3184352 1.png" alt="team" />
    </div>
    <div class="projects">
      <img
        class="img-fluid"
        src="../assets/img/Group 43.jpg"
      />
    </div>
  </div>
</template>

<style scoped>
body{
    font-family: 'Rubik', sans-serif;
    font-family: 'Roboto', sans-serif;
}
.team__info{
    margin-top: 26px;
}
.team__info h1{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    color: #0F1A27;
}
.team__info p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #0F1A27;
}
.btn-temp{
    margin-top: 16px;
    margin-left: 243px;
    width: 255px;
    height: 48px;
    background: #114864;
    border-radius: 6px;
    padding-left: 62px;
    padding-top: 12px;
}
.btn-temp a{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #E1EFFF;
    text-decoration: none;
}
.mobile-btn-temp{
    width: 189px;
    height: 24px;
    background: #136995;
    border-radius: 12px;
}
.mobile-btn-temp a{
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    color: #E1EFFF;
    margin-left:13px;
}
.dev-btn-temp{
    margin-left: 202px;
    margin-top: -24px;
    width: 101px;
    height: 24px;
    background: #136995;
    border-radius: 12px;
}
.dev-btn-temp a{
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    color: #E1EFFF;
    margin-left:13px;
}
.design-btn-temp{
    margin-left: 315px;
    margin-top: -24px;
    width: 74px;
    height: 24px;
    background: #136995;
    border-radius: 12px;
}
.design-btn-temp a{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-decoration: none;
    color: #E1EFFF;
    margin-left:13px;
}
.description{
    margin-top: 19px;
    width: 1100px;
    height: 42px;
}
.description p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 21px;
    color: #353C44;
}
.services{
    margin-top: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #353C44;
}
.contacts-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #0F1A27;
}
.contacts-icon img{
    margin-right: 15px;
}
.team-photo{
    width: 300px;
    margin-left: 762px;
    margin-top: -232px;
}
.team__photo-title{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #0F1A27;
}
.projects{
    margin-top:36px;
    margin-bottom: 130px;
}
</style>
