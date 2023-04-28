<template>
  <div class="footer">
    <div class="topDiv d-flex justify-content-between">
      <div class="d-flex flex-column">
        <img src="/images/faLogo.svg" class="faLogo" alt="faLogo" />
        <p>شرکـــت لابـــراتـــوار های رازک با نیـــم قـــرن تجـــربه</p>
      </div>
      <div class="d-flex flex-column getPadding">
        <h5>محصولات</h5>
        <router-link to="/products">لیست محصولات</router-link>
        <router-link to="/products">محصولات رازک</router-link>
      </div>
      <div class="d-flex flex-column getPadding">
        <h5>ارتباط</h5>
        <router-link to="/contactUs">تماس با ما</router-link>
        <router-link to="/voc">صدای مشتریان</router-link>
      </div>
      <div class="d-flex flex-column calls getPadding">
        <h5>اطلاعات تماس</h5>
        <div class="d-flex">
          <img src="/icons/call.svg" alt="call" />
          <div>۰۲۱-۴۴۵۳۷۰۲۷</div>
        </div>
        <div class="d-flex">
          <img src="/icons/sms.svg" alt="sms" />
          <div>info@razakpharma.com</div>
        </div>
      </div>
    </div>
    <div class="agency d-flex justify-content-center">
      <div>Razak Pharmacy. All Right Reserved.Dayan Agency</div>
      <div class="mr-1">2021 @</div>
    </div>
    <div class="rules">
      <router-link to="/">قوانین و مقررات </router-link>
      <span>|</span>
      <router-link to="/">نقشه سایت</router-link>
      <span>|</span>
      <router-link to="/">حریم خصوصی</router-link>
    </div>
    <div class="socials">
      <img src="/icons/whatsapp.svg" alt="whatsapp" />
      <img src="/icons/instagram.svg" alt="instagram" />
      <img src="/icons/linkedin.svg" alt="linkedin" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>