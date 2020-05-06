<template>
  <div id="headMenu">
    <div class="topNav">
      <div class="topNavLeft">
        <img class="logo" src="@/assets/logo.svg" />
        <p>探索</p>
        <p>题库</p>
        <p>圈子</p>
        <p>竞赛</p>
        <p>面试</p>
        <p>商店</p>
      </div>
      <div class="topNavRight">
        <img class="news" src="@/assets/new.svg" />
        <img class="user" src="@/assets/user.svg" />
      </div>
    </div>
    <!-- <div class="line"></div> -->
  </div>
</template>
<style scoped>
.topNav {
  display: flex;
  height: 50px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.topNavLeft {
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin-left: 300px;
}

.topNavLeft p {
  margin-right: 15px;
  text-align: center;
  font-size: 13px;
  line-height: 24px;
}

.topNavRight {
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin-right: 20px;
}

.logo {
  height: 100%;
  width: 44px;
}

.news {
  width: 32px;
  align-self: flex-start;
  margin-right: 20px;
}

.user {
  height: 100%;
  width: 26px;
  margin-right: 300px;
}

.topNav p {
  margin-left: 10px;
  color: #37474f;
}

.line {
  height: 1px;
  width: 100%;
  background: #e6e6e6;
}
</style>
