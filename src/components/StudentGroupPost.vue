<template>
  <div class="student_post">
    <div class="student_post__group">
      <i class="student-group"></i>
      <span class="group_label">Группа студентов</span>
      <span class="group_members">{{ member_count }}</span>
    </div>
    <div class="student_post__title">{{ title }}</div>
    <div class="student_post__education">{{ education }}</div>
    <div class="student_post__description">{{ description }}</div>
    <div class="student_post__data">
      <div class="data__date">{{ date }}</div>
      <div class="data__region">{{ region }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.student_post {
  padding: 12px 24px;
  width: 705px;
  box-shadow: .3px .3px 1px 1px rgba(0, 0, 0, .25);
  border-radius: 12px;
  box-sizing: border-box;
  margin-top: 24px;
}

.student_post__group {
  display: flex;
}

i.student-group {
  display: block;
  width: 20px;
  height: 20px;
  background-image: url('../assets/icons/group.svg');
}

.student_post__group {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #136995;
}

span.group_label {
  margin-left: 6px;
  margin-top: 4px;

  &::after {
    content: '●';
    margin: 0 3px;
    font-weight: 400;
  }

}

span.group_members {
  margin-top: 4px;
}

.student_post__title {
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  margin-top: 3px;
}

.student_post__education {
  color: #66717E;
  margin-top: 3px;
}

.student_post__description {
  color: #353C44;
  margin-top: 6px;
}

.student_post__data {
  color: #66717E;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}

</style>

<script>
export default {
  name: 'StudentPost',
  props: {
    member_count: {
      type: String,
      default: '2 человека',
    },
    title: {
      type: String,
      default: null,
    },
    education: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    region: {
      type: String,
      default: null,
    },
  },
};
</script>
