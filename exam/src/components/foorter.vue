<template>
  <div class="Footer">
    <div class="md-layout">
      <div class="md-layout-item">
        <ul>
          <li>
            <b>Информация об исполнителе:</b>
            <br />
            <br />
          </li>
          <li>Имя: Поцелуйко Анна Игоревна</li>
          <li>Группа: 182-361</li>
          <li>Дата: 17.06.2020</li>
        </ul>
      </div>

      <div class="md-layout-item">
        <ul>
          <li>
            <b>Ссылки на ресурсы:</b>
            <br />
            <br />
          </li>
          <li>
            <a target="_blank" href="https://vuematerial.io/components/dialog">Vuematerial</a>
          </li>
          <li>
            <a target="_blank" href="https://fcenter.ru/">Пример сайта</a>
          </li>
          <li>
            <a target="_blank" href="https://ru.vuejs.org/">vue.js</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {}
};
</script>

<style scoped>
.Footer {
  margin-top: 30px;
  padding: 30px;
  background: lightsteelblue;
}
a {
  text-decoration: none;
  color: black;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
</style>
