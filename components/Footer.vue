<template>
  <div class="footer">
    <div class="faFooter faPage" v-if="$store.state.lang == 'fa'">
      <div class="topDiv d-flex justify-content-between">
        <div class="d-flex flex-column">
          <img src="/images/faLogo.svg" class="faLogo" alt="faLogo" />
          <p>شرکـــت لابـــراتـــوار های رازک با نیـــم قـــرن تجـــربه</p>
        </div>
        <div class="d-flex flex-column getPadding">
          <h5>محصولات</h5>
          <router-link to="/fa/products">لیست محصولات</router-link>
          <router-link to="/fa/products">محصولات رازک</router-link>
        </div>
        <div class="d-flex flex-column getPadding">
          <h5>ارتباط</h5>
          <router-link to="/fa/contactUs">تماس با ما</router-link>
          <router-link to="/fa/voc">صدای مشتریان</router-link>
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
        <div>
          Razak Pharmacy. All Right Reserved.
          <a href="https://www.ravakagancy.com"> Ravak Agency </a>
        </div>
        <div class="mr-1">2021 @</div>
      </div>
      <div class="rules">
        <router-link to="/fa/">قوانین و مقررات </router-link>
        <span>|</span>
        <router-link to="/fa/">نقشه سایت</router-link>
        <span>|</span>
        <router-link to="/fa/">حریم خصوصی</router-link>
      </div>
      <div class="socials">
        <img src="/icons/whatsapp.svg" alt="whatsapp" />
        <img src="/icons/instagram.svg" alt="instagram" />
        <img src="/icons/linkedin.svg" alt="linkedin" />
      </div>
    </div>
    <div class="enFooter enPage" v-else>
      <div class="topDiv d-flex justify-content-between">
        <div class="d-flex flex-column">
          <img src="/images/enLogo.svg" class="faLogo" alt="faLogo" />
          <p>Razak laboratories company with half a century of experience</p>
        </div>
        <div class="d-flex flex-column getPadding">
          <h5>Products</h5>
          <router-link to="/en/products">Products list</router-link>
          <router-link to="/en/products">Razak products</router-link>
        </div>
        <div class="d-flex flex-column getPadding">
          <h5>Relationship</h5>
          <router-link to="/en/contactUs">contact us</router-link>
          <router-link to="/en/voc">The voice of customers</router-link>
        </div>
        <div class="d-flex flex-column calls getPadding">
          <h5>Contacts</h5>
          <div class="d-flex">
            <img src="/icons/call.svg" class="call" alt="call" />
            <div>021-44537027</div>
          </div>
          <div class="d-flex">
            <img src="/icons/sms.svg" alt="sms" />
            <div>info@razakpharma.com</div>
          </div>
        </div>
      </div>
      <div class="agency d-flex justify-content-center">
        <div>
          Razak Pharmacy. All Right Reserved.
          <a href="https://www.ravakagancy.com"> Ravak Agency </a>
        </div>
        <div class="mr-1">2021 @</div>
      </div>
      <div class="rules">
        <router-link to="/en/">Terms and Conditions </router-link>
        <span>|</span>
        <router-link to="/en/">Sitemap</router-link>
        <span>|</span>
        <router-link to="/en/">Privacy</router-link>
      </div>
      <div class="socials">
        <img src="/icons/whatsapp.svg" alt="whatsapp" />
        <img src="/icons/instagram.svg" alt="instagram" />
        <img src="/icons/linkedin.svg" alt="linkedin" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>