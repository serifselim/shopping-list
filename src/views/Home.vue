<template>
  <section
    class="
      flex flex-col
      items-center
      justify-center
      h-screen
      w-10/12
      lg:w-4/12
      mx-auto
    "
  >
    <img src="../assets/logo.svg" alt="logo" />
    <p class="text-center text-white my-5">
      <span class="font-medium text-main">SEPETEKLE</span>, alışverişlerinizde
      size rehberlik edecek bir uygulamadır. Kendiniz bir alışveriş listesi
      oluşturabilir, ürünlerin adedini belirleyebilir ve ihtiyacınız olan
      ürünlere kolayca erişebilirsiniz
    </p>
    <router-link class="w-full" to="/lists">
      <button class="btn">Alışverişe Başla</button>
    </router-link>
  </section>
</template>
<script>
export default {};
</script>
