<template>
  <div class="top-container">
    <div class="name-title-container">
      <div class="name-container-round">
        <div class="name-container-round-title">{{ user }}</div>
      </div>

      <div class="title-container">
        <div class="title-container-string">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topComponent",
  props: {
    title: String,
    user: String,
  },
};
</script>

<style scoped>
.top-container {
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
}

.name-title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.name-container-round {
  background-color: #171717;
  width: 5%;
  height: 50px;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.name-container-round-title {
  text-align: center;
  font-size: 15px;
}

.title-container {
  display: flex;
  align-items: center;
  margin-left: 5%;
}

.title-container-string {
  width: auto;
  font-size: 20px;
  letter-spacing: 5px;
}
</style>
