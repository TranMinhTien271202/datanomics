<script setup>

</script>

<template>
  <div class="home-page">
    <section class="rounded-[48px] relative">
      <div class="max-sm:hidden">
        <nuxt-picture
          loading="lazy"
          src="/images/contact-us-banner.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner' }"
          class="w-full"
        />
      </div>
      <div class="sm:hidden -mx-20">
        <nuxt-picture
          loading="lazy"
          src="/images/contact-us-banner.png"
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

    <Contact class="mt-[80px] 2xl:container mx-auto" />
  </div>
</template>
