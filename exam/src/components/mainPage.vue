<template>
  <div class="Mainpage">
    <img src="../assets/computer.png" alt />
    <div class="Mainpage-Text">
      <p>
        <b>Страница приветствия</b>
      </p>
      <br />Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Unde modi nesciunt quidem, perferendis accusamus vel facilis neque
      rerum amet quos vitae nisi distinctio ducimus consectetur culpa magnam
      animi adipisci nobis officia recusandae vero? Ipsa eligendi tempore officia
      id magni blanditiis voluptates eaque modi aut architecto. Molestias eaque obcaecati
      accusantium unde.
    </div>
  </div>
</template>

<script>
export default {
  name: "Mainpage",
  props: {}
};
</script>

<style scoped>
.Mainpage-Text {
    font-size: 1em;
}
img {
    max-width: 30vw;
    float: left;
    object-fit: contain;
}
.Mainpage {
    display: flex;
    padding-top: 30px;
}
</style>
