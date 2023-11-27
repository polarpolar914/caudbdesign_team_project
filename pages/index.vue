<template>
  <div class="z-0 bg-img section h-content">
    <div class="pt-16 pb-10 md:pt-24 md:pb-10 max-w-7xl mx-auto text-6xl md:text-9xl text-white text-center">
      <span class="pt-8 font-extrabold tracking-tight">데이타베이스 설계 1조</span>
    </div>

    <!-- 로그인 오류 메시지 -->
    <div v-if="loginError" class="text-center text-red-500 mt-5">
      <p>아이디 또는 비밀번호를 확인해주세요.</p>
    </div>

    <!-- 조건부 로그인 폼 -->
    <div v-if="!isLoggedIn" class="text-center mt-10">
      <form @submit.prevent="login">
        <input type="text" placeholder="아이디" class="text-black p-2" v-model="userAccountID" />
        <input type="password" placeholder="비밀번호" class="text-black p-2" v-model="userAccountPassword" />
        <button type="submit" class="bg-blue-500 text-white p-2">로그인</button>
      </form>
    </div>

    <!-- 로그인 후 표시 -->
    <div v-if="isLoggedIn" class="text-center text-white mt-10">
      <p>{{ username }}님</p>
      <button @click="logout" class="bg-red-500 text-white p-2">로그아웃</button>
    </div>

    <!-- 조건부 네비게이션 버튼 -->
    <div v-if="isLoggedIn" class="text-center mt-5">
      <button @click="goToOrder" class="bg-red-500 text-white p-2">주문하기</button>
      <button @click="checkBalance" class="bg-green-500 text-white p-2">잔고 확인</button>
      <button @click="checkExchangeRate" class="bg-blue-500 text-white p-2">환율 확인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAccountID: '',
      userAccountPassword: '',
      loginError: false // 로그인 오류 메시지 상태
    };
  },
  computed: {
    // Vuex 스토어 상태 참조
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    username() {
      return this.$store.state.userName;
    },
    userID() {
      return this.$store.state.userData;
    }
  },
  methods: {
    login() {
      if (this.userAccountID === 'user' && this.userAccountPassword === 'password') { // 예시 조건
        // userID,이름 조회 및 사용자 존재 여부 API 호출 통해 확인

        this.loginError = false;

        // 로그인 상태를 Vuex 스토어에 저장합니다.
        this.$store.dispatch('login', {
          userData: this.userID, // 예시 userID
          userName: 'ExampleUser' // 예시 userName
        });

        this.userAccountID = '';
        this.userAccountPassword = '';

        console.log('Logged in as:', this.username);
      } else {
        this.loginError = true;
        console.log('Login failed');
      }
    },
    logout() {
      // 로그아웃 상태를 Vuex 스토어에 저장합니다.
      this.$store.dispatch('logout');
      console.log('Logged out');
    },
    goToOrder() {
      this.$router.push({ name: 'find_item' });
      console.log('Redirecting to order page');
    },
    checkBalance() {
      this.$router.push({ name: 'balance' });
      console.log('Checking balance');
    },
    checkExchangeRate() {
      this.$router.push({ name: 'exchange_rate' });
      console.log('Checking exchange rate');
    }
  }
}
</script>
<style>
body, .bg-img, .section, .h-content {
  background-color: #000000;
  min-height: 100vh;
}
.bg-img, .section, .h-content {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
