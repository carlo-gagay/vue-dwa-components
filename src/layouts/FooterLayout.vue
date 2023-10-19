<script setup>
import { IconEnvelop, IconLocation, IconLogo } from '@components/svgs'
</script>

<template>
  <footer class="pt-[31px] px-[40px] pb-[17px] bg-black">
    <div class="columnt-start sm:row-start justify-between gap-y-[30px]">
      <div class="column-start gap-y-[30px]">
        <div class="brand column-start gap-y-2">
          <IconLogo />
          <div class="brand-name text-yellow-yellow">
            <span class="text-body-2">by</span>
            <span class="text-body-1 font-bold">Dusk Wave Arts</span>
          </div>
        </div>
        <div class="text-small-text text-grey-03">ⓒ Dusk Wave Arts 2023. All rights reserved.</div>
      </div>
      <div class="row-start">
        <div class="column-start gap-y-3">
          <div class="text-text-button text-neutrals-02 font-semibold">Navigation</div>
          <div class="text-body-2 text-yellow-yellow">Homepage</div>
          <div class="text-body-2 text-yellow-yellow">About Us</div>
        </div>
        <div class="column-start gap-y-3 ml-[148px]">
          <div class="text-text-button text-neutrals-02 font-semibold">Contact</div>
          <div class="row-start">
            <IconEnvelop class="w-4 h-4 text-yellow-yellow" />
            <span class="text-caption text-neutrals-beige max-w-[133px]">
              info@duskwavearts.com
            </span>
          </div>
          <div class="row-start">
            <IconLocation class="w-4 h-4 text-yellow-yellow" />
            <span class="text-caption text-neutrals-beige max-w-[133px]">
              10877 Wilshire Blvd, Los Angeles, CA 90024 United States
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
