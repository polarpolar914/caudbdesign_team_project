<template>
  <div class="z-0 bg-img section h-content">
    <div class="pt-16 pb-10 md:pt-24 md:pb-10 max-w-7xl mx-auto text-6xl md:text-9xl text-white text-center">
      <span class="pt-8 font-extrabold tracking-tight">데이타베이스 설계 1조</span>
    </div>

    <!-- Login Form -->
    <div class="text-center mt-10">
      <form id="loginForm">
        <input type="text" id="username" placeholder="아이디" class="text-black p-2" />
        <input type="password" id="password" placeholder="비밀번호" class="text-black p-2" />
        <button type="submit" class="bg-blue-500 text-white p-2">로그인</button>
      </form>
    </div>

    <!-- Navigation Buttons -->
    <div class="text-center mt-5">
      <button @click="goToOrder" class="bg-green-500 text-white p-2">주문하기</button>
      <button @click="checkBalance" class="bg-red-500 text-white p-2">잔고 확인</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToOrder() {
      console.log('Redirecting to order page');
      // trading.vue로 이동
      this.$router.push({ name: 'trading' }); // 또는 적절한 라우트 이름으로 변경
    },
    checkBalance() {
      console.log('Checking balance');
      // 잔고 확인 로직 추가
    }
  }
}
</script>
<style scoped>
body ,.bg-img, .section, .h-content {
  background-color: #000000; /* Black color */
  min-height: 100vh; /* 100% of the viewport height */
}
.bg-img, .section, .h-content {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000000;
}
input[type="text"], input[type="password"] {
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}
button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}
button:hover {
  opacity: 0.9;
}
</style>
