<script>
export default {
  name: 'signup',
  data() {
    return {
      countryName: [],
      countryPhoneCode: [],
    }
  },
}
</script>

<template>
  <div class="signup-page">
    <div class="signup-page-child">
      <h3 class="font-semibold text-blue-500">اهلاً وسهلاً</h3>
      <h1 class="signup-page-title">تسجيل حساب مستخدم</h1>
      <form>
        <div class="mb-2 grid grid-cols-2 gap-4">
          <div>
            <label for="first-name" class="app-input-lable">الاسم الأول</label>
            <input type="text" name="first-name" placeholder="ادخل الاسم الأول" class="app-input" />
          </div>

          <div>
            <label for="last-name" class="app-input-lable">اسم العائلة</label>
            <input
              type="text"
              name="second-name"
              placeholder="ادخل اسم العائلة"
              class="app-input"
            />
          </div>
        </div>

        <div class="mb-2">
          <label for="phone-number" class="app-input-lable">رقم الهاتف</label>
          <div class="grid grid-cols-12 gap-2">
            <select
              name="country"
              class="app-select xl:cols-span-2 col-span-3 lg:col-span-2"
              style="background-position: calc(100% - 90%) center !important"
              required
            >
              <option selected>+963</option>
              <option>+971</option>
              <option>+</option>
            </select>
            <input
              type="text"
              name="phone-number"
              placeholder="ادخل رقم الهاتف"
              class="app-input col-span-9 lg:col-span-10 xl:col-span-10"
            />
          </div>
        </div>

        <div class="mb-2 grid grid-cols-1 gap-4">
          <!--  <div class="">
          <label for="nationality" class="app-input-lable">الجنسية</label>
          <select name="nationality" class="app-select" required>
            <option disabled selected hidden>اختيار الجنسية...</option>
            <option>سوريا</option>
            <option>الإمارات العربية المتحدة</option>
          </select>
        </div>
 -->

          <div class="">
            <label for="country" class="app-input-lable">بلد الإقامة</label>
            <select name="country" class="app-select">
              <option disabled selected hidden>اختيار بلد الإقامة...</option>
              <option>سوريا</option>
              <option>الإمارات العربية المتحدة</option>
            </select>
          </div>
        </div>

        <div class="mb-2">
          <label for="email-address" class="app-input-lable">البريد الإلكتروني</label>
          <input
            type="text"
            name="email-address"
            placeholder="ادخل البريد الإلكتروني"
            class="app-input"
            autocomplete="email"
          />
        </div>

        <div class="mb-2">
          <label for="password" class="app-input-lable">كلمة المرور</label>
          <input
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="ادخل كلمة المرور"
            class="app-input"
          />
        </div>

        <div class="mb-2">
          <label for="password" class="app-input-lable">تأكيد كلمة المرور</label>
          <input
            type="password"
            name="password"
            placeholder=" اعد ادخل كلمة المرور"
            class="app-input"
            autocomplete="new-password"
          />
        </div>

        <div class="signup-page-mid">
          <div class="flex items-center">
            <div class="flex items-center">
              <input id="terms" name="terms" type="checkbox" class="app-checkbox" />
            </div>

            <div class="mr-2">
              <label for="terms" class="app-checkbox-lable"
                >انا موافق على
                <router-link class="text-blue-600 underline" to="/signup"
                  >شروط الاستخدام</router-link
                >
                و
                <router-link class="text-blue-600 underline" to="/signup"
                  >سياسة الخصوصية</router-link
                >
              </label>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <button type="submit" class="app-submit-btn">تسجيل الدخول</button>
        </div>
      </form>
      <div class="signup-page-bottom">
        <p class="">
          لديك حساب بالفعل؟
          <router-link class="text-blue-600 underline" to="/login">تسجيل الدخول</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.signup-page {
  @apply my-20 grid grid-cols-8  items-center justify-center gap-4 transition-all duration-200;
}

.signup-page-mid {
  @apply mt-8 flex items-center justify-between;
}
.signup-page-bottom {
  @apply mt-10 text-center text-base text-gray-900;
}

.signup-page-child {
  @apply col-start-1 col-end-9 rounded-xl p-8 pb-16 shadow md:col-start-3 md:col-end-7;
}
.signup-page-title {
  @apply mb-10 mt-5 text-3xl font-semibold;
}
</style>
