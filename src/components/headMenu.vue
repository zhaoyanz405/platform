<template>
  <div id="headMenu">
    <div class="topNav">
      <div class="topNavLeft">
        <img class="logo" src="@/assets/logo.svg" />
      </div>
      <div class="topNavRight">
        <avatar></avatar>
      </div>
    </div>
    <!-- <div class="line"></div> -->
  </div>
</template>
<script>
import avatar from '@/components/avatar'
export default {
  components: {
    avatar
  }
}
</script>
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
