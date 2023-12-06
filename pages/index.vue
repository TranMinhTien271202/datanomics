<script setup>
const theseServices = ref([
  {
    icon: "/images/these-services-icon.png",
    title: "Data Management",
    description:
      "This is the most technology heavy part in the framework and needs a lot of involvement from IT professionals.",
  },
  {
    icon: "/images/these-services-icon1.png",
    title: "BI & Data Analytics",
    description:
      "Analytics is the most exciting part of the data-driven framework. And, the one with the most potential as well. To compete",
  },
  {
    icon: "/images/these-services-icon2.png",
    title: "Data Strategy",
    description:
      "Many companies make the mistake of starting their transformations or simply making investments in data/information management programs just for the sake of transforming or because everyone is doing it. It is crucial for organizations to align their investments in these initiatives with definitive business goals.",
  },
  {
    icon: "/images/these-services-icon3.png",
    title: "Data Governance",
    description:
      "Data needs to be governed so people, who consume it through reports, dashboards & analytics, etc. and take crucial business",
  },
  {
    icon: "/images/these-services-icon4.png",
    title: "Customer data platform",
    description:
      "The platform aggregates customer data across all touchpoints (online and in-person) into a single platform.",
  },
]);

const slider = ref([
  {
    title: "Testimonials",
    description:
      "Datanomics has been our technology and analytics partner for program implementation, monitoring and reporting. They understand our requirements clearly and quickly, and come up with best, cost-effective solutions. They are very easy to work with and are excellent with communicating progress. Their standout quality is their willingness to take up any challenge, within the time and cost constraints, to ensure that we get the best solutions for our pain points.",
    name: "Mr.Tai",
    position: "CEO Logo bank",
    image: "/images/hero.png",
  },
  {
    title: "Testimonials",
    description:
      "Datanomics has been our technology and analytics partner for program implementation, monitoring and reporting. They understand our requirements clearly and quickly, and come up with best, cost-effective solutions. They are very easy to work with and are excellent with communicating progress. Their standout quality is their willingness to take up any challenge, within the time and cost constraints, to ensure that we get the best solutions for our pain points.",
    name: "Mr.Tai",
    position: "CEO Logo bank",
    image: "/images/hero.png",
  },
  {
    title: "Testimonials",
    description:
      "Datanomics has been our technology and analytics partner for program implementation, monitoring and reporting. They understand our requirements clearly and quickly, and come up with best, cost-effective solutions. They are very easy to work with and are excellent with communicating progress. Their standout quality is their willingness to take up any challenge, within the time and cost constraints, to ensure that we get the best solutions for our pain points.",
    name: "Mr.Tai",
    position: "CEO Logo bank",
    image: "/images/hero.png",
  },
  {
    title: "Testimonials",
    description:
      "Datanomics has been our technology and analytics partner for program implementation, monitoring and reporting. They understand our requirements clearly and quickly, and come up with best, cost-effective solutions. They are very easy to work with and are excellent with communicating progress. Their standout quality is their willingness to take up any challenge, within the time and cost constraints, to ensure that we get the best solutions for our pain points.",
    name: "Mr.Tai",
    position: "CEO Logo bank",
    image: "/images/hero.png",
  },
]);
</script>

<template>
  <div class="home-page">
    <section class="rounded-[48px] relative">
      <div class="max-sm:hidden">
        <nuxt-picture
          loading="lazy"
          src="/images/home-banner-desktop.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner' }"
          class="w-full"
        />
      </div>
      <div class="sm:hidden -mx-20">
        <nuxt-picture
          loading="lazy"
          src="/images/home-banner-mobile.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner-mobile' }"
          class="w-full"
        />
      </div>

      <div
        class="absolute max-2xl:bottom-[15px] top-1/2 max-md:top-[90px] max-md:left-[16px] left-[80px] md:-translate-y-1/2"
      >
        <h1 class="text-secondary max-sm:text-white">Data Driven Origanization</h1>

        <p
          class="w-2/4 text-[16px] text-secondary max-sm:text-[12px] max-sm:w-full font-[600] max-sm:text-white mt-2 max-sm:mt-4 text-black"
        >
          We aspire to be the partner of choice in your transformation into a data-driven organization and enable you to
          manage and monetize data through effective use of people, process and technology.
        </p>

        <div class="relative pt-3 flex gap-6">
          <nuxt-link to="#">
            <button
              class="rounded-[12px] w-[209px] h-[56px] bg-primary text-secondary border-e-0 max-md:hidden border-none"
              aria-label="solution-miraway"
            >
              GET STARTED
            </button>
          </nuxt-link>
          <nuxt-link to="#">
            <button
              class="rounded-[12px] w-[209px] h-[56px] text-secondary border-2 border-white max-md:hidden"
              aria-label="solution-miraway"
            >
              LEARN MORE
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section id="these-services">
      <div class="flex justify-center">
        <div class="mt-[156px] max-lg:mt-[80px]">
          <div>
            <h2 class="lg:max-w-[584px] max-lg:text-center">These services help make your work more efficient</h2>
          </div>
          <div class="flex justify-center mt-[40px] max-lg:flex-wrap max-lg:gap-[20px]">
            <div class="w-[378px] max-lg:flex items-center gap-3" v-for="(sevices, index) in theseServices.slice(0, 2)" :key="index">
              <NuxtPicture :src="sevices.icon" :imgAttrs="{ alt: 'these-services-icon' }" width="60" />
              <div>
                <h3 class="my-[8px] text-[20px] font-bold">{{ sevices.title }}</h3>
                <p
                  class="max-w-[276px] text-neutral text-[14px] text-ellipsis text-justify overflow-hidden line-clamp-3"
                >
                  {{ sevices.description }}
                </p>
                <NuxtLink to="#" class="text-primary text-[14px] font-bold mt-[12px] block"> Xem thêm </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <NuxtPicture src="/images/these-sevices-1.png" width="379" class="max-lg:hidden" />
      </div>

      <div class="flex justify-center mt-[40px] max-lg:flex-wrap max-lg:gap-[20px]">
        <div class="w-[378px] max-lg:flex items-center gap-3" v-for="(sevices, index) in theseServices.slice(2, 5)" :key="index">
          <NuxtPicture :src="sevices.icon" :imgAttrs="{ alt: 'these-services-icon' }" width="60" />
          <div>
            <h3 class="my-[8px] text-[20px] font-bold">{{ sevices.title }}</h3>
            <p class="max-w-[276px] text-neutral text-[14px] text-ellipsis overflow-hidden line-clamp-3">
              {{ sevices.description }}
            </p>
            <NuxtLink to="#" class="text-primary text-[14px] font-bold mt-[12px] block"> Xem thêm </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <CustomerCarousel class="mt-[80px]" />

    <section id="our-vision" class="flex items-center max-lg:flex-col">
      <nuxt-picture
        src="/images/our-vision.png"
        :imgAttrs="{ alt: 'our-vision' }"
        width="100%"
        class="flex-1"
      />
      <div class="flex-1 flex justify-center items-center">
        <div class="max-lg:mt-[16px] max-lg:text-center">
          <h2>Our vision</h2>
          <p class="max-w-[481px] mt-[8px] mb-[20px]">
            We aspire to be the partner of choice in your transformation into a data-driven organization and enable you
            to manage and monetize data through effective use of people, process and technology
          </p>
          <nuxt-link to="#">
            <button
              class="rounded-[12px] w-[209px] h-[56px] bg-primary text-secondary border-e-0 max-md:hidden border-none"
              aria-label="solution-miraway"
            >
              See more
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section id="data-management" class="mt-[32px] flex items-center max-lg:flex-col">
      <div class="flex-1 flex justify-center items-center max-lg:order-1 max-lg:text-center max-lg:mt-[16px]">
        <div>
          <h2>Data management</h2>
          <p class="max-w-[481px] mt-[8px] mb-[20px]">
            Aim to be a leading provider of data strategy, data management, data governance & analytics solutions
          </p>
        </div>
      </div>
      <nuxt-picture
        src="/images/data-management.png"
        :imgAttrs="{ alt: 'data-management' }"
        width="100%"
        class="flex-1"
      />
    </section>

    <section id="best-professional-solutions" class="mt-[32px] flex items-center max-lg:flex-col max-lg:text-center">
      <nuxt-picture
        src="/images/hands-stack-business-people.png"
        :imgAttrs="{ alt: 'data-management' }"
        width="100%"
        class="flex-1"
      />
      <div class="flex-1 flex justify-center items-center max-lg:mt-[16px]">
        <div>
          <h2>Best professional solutions</h2>
          <p class="max-w-[481px] mt-[8px] mb-[20px]">
            Our motto "Your Trusted Partner In Everything Data" signifiles our commitment across all critical stages in
            monetizing data
          </p>

          <h2>Strong team & partners</h2>
          <ul class="list-disc text-left">
            <li>Strong team of experts working both onsite and offsite.</li>
            <li>Strong partners to strengthen our capabilities.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mt-[80px]">
      <a-carousel dot-position="right" autoplay :autoplay-speed="3000" class="custom-carousel">
        <div
          class="bg-[url('/images/bg-card-visit.jpg')] bg-no-repeat bg-cover"
          v-for="(item, index) in slider"
          :key="index"
        >
          <div class="flex items-center gap-[150px] px-[120px] py-[60px] max-lg:flex-col max-lg:gap-[16px] max-sm:px-[20px]">
            <div>
              <h3 class="text-center text-white">{{ item.title }}</h3>
              <div class="max-w-[276px] max-h-[276px] rounded-1/2 border-spacing-3 border-white mt-[12px]">
                <NuxtPicture :src="item.image" :imgAttrs="{ alt: 'avatar' }" />
              </div>
            </div>

            <div>
              <div class="flex gap-2">
                <NuxtPicture
                  src="/images/comma.svg"
                  class="-translate-y-[10px]"
                  :imgAttrs="{ alt: 'icon-comma' }"
                  width="32"
                />
                <div class="">
                  <p class="max-w-[584px] text-white">
                    {{ item.description }}
                  </p>
                  <h4 class="text-white text-[20px] font-blod mt-[40px]">{{ item.name }}</h4>
                  <p class="text-white text-[14px] font-light">{{ item.position }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a-carousel>
    </section>

    <CustomerCarouselTwo class="mt-[80px]" />

    <Contact class="mt-[80px]" />
  </div>
</template>

