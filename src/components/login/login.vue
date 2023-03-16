<script>
export default {
  name: 'login',
}
</script>

<template>
  <div class="login-page">
    <div class="login-page-child">
      <h1 class="login-page-title">تسجيل الدخول</h1>

      <div class="mb-2">
        <label for="email-address" class="app-input-lable">البريد الإلكتروني</label>
        <input
          type="text"
          name="email-address"
          placeholder="ادخل البريد الإلكتروني"
          autocomplete="email"
          class="app-input"
        />
      </div>

      <div class="mb-2">
        <label for="pass-word" class="app-input-lable">كلمة المرور</label>
        <input
          type="password"
          name="pass-word"
          placeholder="ادخل كلمة المرور"
          autocomplete="password"
          class="app-input"
        />
      </div>

      <div class="login-page-mid">
        <div class="flex items-center">
          <div class="flex items-center">
            <input id="terms" name="terms" type="checkbox" class="app-checkbox" />
          </div>

          <div class="mr-2">
            <label for="terms" class="app-checkbox-lable">تذكرني</label>
          </div>
        </div>

        <router-link class="text-blue-600 underline" to="/signup">هل نسيت كلمة المرور؟</router-link>
      </div>
      <div class="mt-4">
        <button type="submit" class="app-submit-btn">تسجيل الدخول</button>
      </div>

      <div class="login-page-bottom">
        <p class="">
          ليس لديك حساب مستخدم؟
          <router-link class="text-blue-600 underline" to="/signup">سجل الأن</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.login-page {
  @apply my-20 grid grid-cols-8 items-start justify-center gap-4 transition-all duration-200;
}

.login-page-mid {
  @apply mt-8 flex items-center justify-between;
}
.login-page-bottom {
  @apply mt-10 text-center text-base text-gray-900;
}

.login-page-child {
  @apply col-start-1 col-end-9 rounded-xl p-8 pb-16 shadow md:col-start-3 md:col-end-7;
}
.login-page-title {
  @apply mb-10 mt-5 text-3xl;
}
</style>
