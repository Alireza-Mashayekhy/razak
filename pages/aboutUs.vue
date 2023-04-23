<template>
  <div class="aboutUs">
    <div class="topDiv">
      <div class="effect">
        <div class="enLogo">
          <img src="/images/enLogo.svg" alt="enLogo" />
        </div>
        <div>
          <div class="title">
            درباره ی ما
            <span></span>
          </div>
          <h2>در باره ی شرکت لابراتوارهای رازک</h2>
        </div>
        <div>
          <div class="story">
            <span>01</span>
            داستان ما
          </div>
          <div class="responsibility">
            <span>02</span>
            مسئولیت ما
          </div>
          <div class="team">
            <span>03</span>
            تیم ما
          </div>
        </div>
      </div>
    </div>
    <div class="ourStory">
      <div class="title">
        داستان ما
        <span></span>
      </div>
      <div class="about">
        شرکت سهامی داروسازی لابراتوارهای رازک در سال 1343 هجری شمسی (1964
        میلادی) با نام شرکت سهامی لابراتوارهای فایزر تحت مالکیت شرکت فایزر
        آمریکا فعالیت خود را آغاز نمود.
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <img src="/images/ourStory.svg" alt="ourStory" />
        <p>
          پس از انقلاب اسلامی، سهام این شرکت به سازمان صنایع ملی ایران انتقال
          یافت و نام آن به شرکت داروسازی لابراتوارهای رازک تغییر یافت و در حال
          حاضر شرکت رازک بصورت سهامی عام ادامه فعالیت می دهد و سهام آن در بورس
          اوراق بهادار تهران عرضه می گردد. رازک با بهره گیری از نیروهای متخصص در
          خصوص تولید انواع داروهای انسانی و داروهای دامپزشکی یکی از پیشگامان
          صنعت داروسازی در ایران بشمار میرود. داروهای انسانی رازک در اشکال مختلف
          دارویی و در گروه های مختلف درمانی در دو حوزه داروهای شیمیایی و طبیعی
          در بازار دارویی ایران موجود است...
        </p>
      </div>
      <div class="link">
        <router-link to="/">بیشتر بخوانید</router-link>
      </div>
    </div>
    <div class="ourResponsibility d-flex justify-content-between">
      <div class="titles">
        <h4>
          مسئولیت
          <span></span>
        </h4>
        <h3>مسئولیت ما</h3>
      </div>
      <p>
        ما بر این باور هستیم که زندگی سالم و با‌کیفیت، نه تنها حق اعضای خانوادۀ
        رازک، بلکه وظیفه و تعهد ما در قبال تک تکِ اعضای جامعه است. ما در شرکت
        داروسازی لابراتوارهای رازک، متعهد به تامین نیازمندیهای دارویی جامعه و
        پشتیبانی از نظام سلامت کشور می‌باشیم و در کنار پاسخ‌گویی به انتظارات
        ذی‌نفع‌مان، در عمل به مسئولیت‌های اجتماعی خود، از هیچ تلاشی در تولید
        محصولات باکیفیت، دریغ نخواهیم کرد.
      </p>
    </div>
    <div class="units">
      <div class="title">
        واحد ها
        <span></span>
      </div>
      <h3>واحد های لابراتوارهای رازک</h3>
      <div class="d-flex align-items-center justify-content-between">
        <div class="image d-flex">
          <div>
            <div :class="{ activeItem: unitItem == 2 }" class="item item2">
              تولید
            </div>
            <div :class="{ activeItem: unitItem == 4 }" class="item item4">
              تحقیق و توسعه
            </div>
            <div :class="{ activeItem: unitItem == 6 }" class="item item6">
              منابع انسانی
            </div>
          </div>
          <div class="lineAndCircles">
            <div class="line"></div>
            <div
              @click="scrollTo(0)"
              :class="{ activeCircle: unitItem == 1 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(1)"
              :class="{ activeCircle: unitItem == 2 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(2)"
              :class="{ activeCircle: unitItem == 3 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(3)"
              :class="{ activeCircle: unitItem == 4 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(4)"
              :class="{ activeCircle: unitItem == 5 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(5)"
              :class="{ activeCircle: unitItem == 6 }"
              class="circle"
            ></div>
          </div>
          <div>
            <div :class="{ activeItem: unitItem == 1 }" class="item item1">
              فروش
            </div>
            <div :class="{ activeItem: unitItem == 3 }" class="item item3">
              بازاریابی
            </div>
            <div :class="{ activeItem: unitItem == 5 }" class="item item5">
              فنی و مهندسی
            </div>
          </div>
        </div>
        <div class="texts">
          <section v-for="item in units" :key="item.id" class="unit">
            <div class="d-flex justify-content-between">
              <div>
                <div class="num">{{ item.id }}</div>
                <div class="title">{{ item.title }}</div>
                <span></span>
              </div>
              <div class="unitImg">
                <img src="/icons/cart.svg" alt="cart" class="cart" />
              </div>
            </div>
            <p class="text">{{ item.text }}</p>
            <router-link to="/">
              بیشتر بخوانید
              <img
                src="/icons/leftArrow.svg"
                alt="leftArrow"
                class="leftArrow"
              />
            </router-link>
          </section>
        </div>
      </div>
    </div>
    <div class="certificates">
      <div class="title">
        گواهینامه ها
        <span></span>
      </div>
      <h3>گواهینامه های اخذ شده</h3>
      <splide :options="options" class="slider">
        <splide-slide v-for="i in 16" :key="i">
          <img src="/images/certificate.jpg" alt="certificate" />
        </splide-slide>
      </splide>
    </div>
    <div class="ourTeam">
      <img src="/images/teamBaner.svg" alt="teamBaner" class="teamBaner" />
      <img
        src="/images/reverseTeamBaner.svg"
        alt="reverseTeamBaner"
        class="reverseTeamBaner"
      />
      <div class="d-flex align-items-end justify-content-between">
        <div class="d-flex">
          <div class="titles">
            <div>
              تیم ما
              <span></span>
            </div>
            <h3>تیم با تجربه ما</h3>
          </div>
          <p>
            اعضای تیم بسیار آگاه و با تجربه ی ما دارای ماهیت خلاق، مشارکتی و
            متعهد هستند که رازک را قادر می سازد تا یک شرکت بسیار مؤثر باشد.
          </p>
        </div>
        <router-link to="/">
          دیدن همه
          <img src="/icons/circleArrow.svg" alt="circleArrow" />
        </router-link>
      </div>
      <div class="images d-flex">
        <div class="firstImg">
          <img src="/images/firstTeam.jpg" alt="firstTeam" />
          <div class="name">دکتر احمد شفیعی</div>
          <div class="position">مدیر عامل و نایب رییس هیئت مدیره</div>
        </div>
        <div class="secImg">
          <img src="/images/secTeam.jpg" alt="secTeam" />
          <div class="name">شکوفه لطفی</div>
          <div class="position">مدیر بازاریابی و فروش</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      unitItem: 1,
      units: [
        {
          id: 1,
          title: "واحد فروش",
          text: "ازمهمترین اهداف واحد فروش شرکت، بهره گیری از استراتژی های کوتاه مدت و بلند مدت، تعیین قلمروهای فروش، تعیین اهداف فروش و ارائه راهكارهای بهبود،در راستای استراتژی های کلان سازمان می باشد .",
          image: "/icons/cart.svg",
        },
        {
          id: 2,
          title: "واحد تولید",
          text: "ازمهمترین اهداف واحد فروش شرکت، بهره گیری از استراتژی های کوتاه مدت و بلند مدت، تعیین قلمروهای فروش، تعیین اهداف فروش و ارائه راهكارهای بهبود،در راستای استراتژی های کلان سازمان می باشد .",
          image: "/icons/cart.svg",
        },
        {
          id: 3,
          title: "واحد بازاریابی",
          text: "ازمهمترین اهداف واحد فروش شرکت، بهره گیری از استراتژی های کوتاه مدت و بلند مدت، تعیین قلمروهای فروش، تعیین اهداف فروش و ارائه راهكارهای بهبود،در راستای استراتژی های کلان سازمان می باشد .",
          image: "/icons/cart.svg",
        },
        {
          id: 4,
          title: "واحد تحقیق و توسعه",
          text: "ازمهمترین اهداف واحد فروش شرکت، بهره گیری از استراتژی های کوتاه مدت و بلند مدت، تعیین قلمروهای فروش، تعیین اهداف فروش و ارائه راهكارهای بهبود،در راستای استراتژی های کلان سازمان می باشد .",
          image: "/icons/cart.svg",
        },
        {
          id: 5,
          title: "واحد فنی و مهندسی",
          text: "ازمهمترین اهداف واحد فروش شرکت، بهره گیری از استراتژی های کوتاه مدت و بلند مدت، تعیین قلمروهای فروش، تعیین اهداف فروش و ارائه راهكارهای بهبود،در راستای استراتژی های کلان سازمان می باشد .",
          image: "/icons/cart.svg",
        },
        {
          id: 6,
          title: "واحد منابع انسانی",
          text: "ازمهمترین اهداف واحد فروش شرکت، بهره گیری از استراتژی های کوتاه مدت و بلند مدت، تعیین قلمروهای فروش، تعیین اهداف فروش و ارائه راهكارهای بهبود،در راستای استراتژی های کلان سازمان می باشد .",
          image: "/icons/cart.svg",
        },
      ],
      options: {
        type: "loop",
        perPage: 4,
        perMove: 1,
      },
    };
  },
  methods: {
    scrollTo(num) {
      const texts = document.getElementsByClassName("texts")[0];
      const height = 418;
      this.unitItem = num + 1;
      texts.scrollTop = num * height;
    },
  },
};
</script>

<style>
</style>