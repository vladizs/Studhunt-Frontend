<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="title">Создание объявления</h1>
      </div>
    </div>
    <form action="" method="">
      <div class="row">
        <div class="col-lg-8 col-12">
          <label for="title" class="form-label" required>Заголовок</label>
          <input
            name="title"
            type="text"
            class="form-control"
            id="title"
            placeholder="Кратко о вашей работе, заинтересуйте студентов"
            v-model="title"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <label for="description" class="form-label">Описание</label>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-11 col-12">
          <textarea
            name="description"
            id="description"
            rows="11"
            placeholder="Опишите суть работы в деталях"
            class="form-control"
            v-model="description"
          ></textarea>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-lg-3">
          <label for="category" class="form-label">Категория</label>
          <select name="category" class="form-select category_select" id="category">
            <option disabled hidden selected value></option>
            <option
              v-for="category in categories"
              :key="category.text"
              v-bind:value="category.value"
            >
              {{ category.text }}
            </option>
          </select>
        </div>
        <div class="col-12 col-lg-4">
          <div class="mx-0 mx-lg-5">
            <label for="work" class="form-label">Тип работы</label>
            <select name="work" class="form-select worktype_select" id="work">
              <option disabled hidden selected value></option>
              <option
                v-for="work in works"
                :key="work.text"
                v-bind:value="work.value"
              >
                {{ work.text }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-lg-3">
          <label for="region" class="form-label">Регион</label>
          <input type="text" id="region" name="region" class="form-control" v-model="region" />
        </div>
      </div>
      <div class="row mt-3">
        <label class="col-lg-2 mt-4 ml-2 col-form-label"
          >Количество человек
          <p class="text-lg-right text-lg-left">опционально</p></label
        >
        <div class="col-lg-1 mt-4">
          <input
            type="number"
            class="form-control w-100"
            id="inputPassword"
            v-model="price"
          />
        </div>
        <label for="payment" class="col-1 mr-3 mt-4">
          <div class="ml-5 my-2">Оплата</div>
        </label>
        <div class="col-3">
          <div class="input-group w-75 mt-4">
            <input
              name="payment"
              type="text"
              id="payment"
              class="form-control border-right-0"
            />
            <div class="input-group-append">
              <span class="bg-white input-group-text">₸</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="d-grid gap-2">
            <input
              type="submit"
              class="mt-4 btn btn-lead text-white"
              value="Создать объявление"
              @click="createPost"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
body {
  background-color: #e5e5e5;
}
.btn-lead {
  background-color: #114864;
}
label {
  font-size: 12px;
  text-transform: uppercase;
  color: #353c44, 100%;
  font-weight: 400;
}
* {
  font-family: "Roboto";
}
h1.title {
  font-family: 'Rubik', sans-serif;
  font-size: 36px;
  color: #0f1a27, 100%;
  margin-top: 24px;
}
.form-row {
  font-size: 12px;
  font-family: "Roboto";
}
::placeholder {
  color: #66717e;
}
p {
  color: #8994a1;
  font-style: italic;
}
textarea {
  resize: none;
}

.category_select {
  width: 230px;
  height: 38px;
}

.worktype_select {
  width: 230px;
  height: 38px;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      categories: [
        { text: 'Домашний персонал', value: 'Домашний персонал' },
        {
          text: 'Информационные технологии, интернет, телеком',
          value: 'Информационные технологии, интернет, телеком',
        },
        {
          text: 'Искусство, развлечение, масс-медиа',
          value: 'Искусство, развлечение, масс-медиа',
        },
        { text: 'Маркетинг, реклама, PR', value: 'Маркетинг, реклама, PR' },
        { text: 'Продажи', value: 'Продажи' },
        {
          text: 'Спотривные клубы, фитнес, салоны красоты',
          value: 'Спотривные клубы, фитнес, салоны красоты',
        },
        {
          text: 'Управление персоналом, тренинги',
          value: 'Управление персоналом, тренинги',
        },
      ],

      works: [
        { text: 'Полная занятость', value: 'Полная занятость' },
        { text: 'Подработка', value: 'Подработка' },
        {
          text: 'Проектная работа/разовое задание',
          value: 'Проектная работа/разовое задание',
        },
        { text: 'Стажировка', value: 'Стажировка' },
        { text: 'Волонтерство', value: 'Волонтерство' },
      ],
      title: null,
      description: null,
      region: null,
      price: 0,
    };
  },
  methods: {
    createPost() {
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('https://studhunt-api.herokuapp.com/api/job/create', {
        title: this.title,
        description: this.title,
        region: this.region,
        price: this.price,
      });
    },
  },
};
</script>
