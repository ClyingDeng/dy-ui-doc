<template>
  <div>
    <dy-container>
      <dy-header>Header</dy-header>
      <dy-main>Main</dy-main>
    </dy-container>

    <dy-container>
      <dy-header>Header</dy-header>
      <dy-main>Main</dy-main>
      <dy-footer>Footer</dy-footer>
    </dy-container>

    <dy-container>
      <dy-aside width="200px">Aside</dy-aside>
      <dy-main>Main</dy-main>
    </dy-container>

    <dy-container>
      <dy-header>Header</dy-header>
      <dy-container>
        <dy-aside width="200px">Aside</dy-aside>
        <dy-main>Main</dy-main>
      </dy-container>
    </dy-container>
    <dy-container>
      <dy-header>Header</dy-header>
      <dy-container>
        <dy-aside width="200px">Aside</dy-aside>
        <dy-container>
          <dy-main>Main</dy-main>
          <dy-footer>Footer</dy-footer>
        </dy-container>
      </dy-container>
    </dy-container>

    <dy-container>
      <dy-aside width="200px">Aside</dy-aside>
      <dy-container>
        <dy-header>Header</dy-header>
        <dy-main>Main</dy-main>
      </dy-container>
    </dy-container>

    <dy-container>
      <dy-aside width="200px">Aside</dy-aside>
      <dy-container>
        <dy-header>Header</dy-header>
        <dy-main>Main</dy-main>
        <dy-footer>Footer</dy-footer>
      </dy-container>
    </dy-container>
  </div>
</template>
<style scoped>
.dy-header,
.dy-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.dy-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.dy-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.dy-container {
  line-height: 260px;
}
</style>
