<template>
  <div id="Questboard">
    <div class="QuestBard-Container">
        <p>QUESTTTTTTTTTTTT</p>
        <div class="Box1">
            <p>QUESTTTTTTTTTTTT</p>
        </div>
        <div class="Box1">

        </div>
        <div class="Box1">

        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Questboard',
}
</script>

<style scoped>
.QuestBard-Container{
    display: flex;
    margin-top: 60px;
    width: 100%;
    height: 100%;
    columns: 3;
}
.Box1{
    width: 33%;
    height: 100px;
    background-color: cadetblue;
}
</style>