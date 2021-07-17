<template>
  <div class="flex flex-col items-center justify-center h-screen mx-7">
    <img src="../assets/logo.svg" alt="logo" />
    <p class="text-center text-white my-5">
      <span class="font-medium text-main">SEPETEKLE</span>, alışverişlerinizde
      size rehberlik edecek bir uygulamadır. Kendiniz bir alışveriş listesi
      oluşturabilir, ürünlerin adedini belirleyebilir ve ihtiyacınız olan
      ürünlere kolayca erişebilirsiniz
    </p>
    <router-link class="w-full" to="/lists">
      <button
        class="
          bg-main
          py-3
          w-full
          rounded-full
          text-white
          font-bold
          hover:bg-main-dark
        "
      >
        Alışverişe Başla
      </button>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
