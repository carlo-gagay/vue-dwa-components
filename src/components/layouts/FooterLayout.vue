<script setup>
import { IconEnvelop, IconLocation, IconLogo } from '@components/svgs'
</script>

<template>
  <footer class="pt-[31px] px-[40px] pb-[17px] bg-[#000205]">
    <div class="row-start justify-between">
      <div class="column-start gap-y-[30px]">
        <div class="brand column-start gap-y-2">
          <IconLogo />
          <div class="brand-name text-[#FFC94B]">
            <span class="body-2">by</span> <span class="body-1 font-bold">Dusk Wave Arts</span>
          </div>
        </div>
        <div class="small-text text-[#AFAFAF]">ⓒ Dusk Wave Arts 2023. All rights reserved.</div>
      </div>
      <div class="row-start">
        <div class="column-start gap-y-3">
          <div class="text-button text-[#857E76] font-semibold">Navigation</div>
          <div class="body-2 text-[#FFC94B]">Homepage</div>
          <div class="body-2 text-[#FFC94B]">About Us</div>
        </div>
        <div class="column-start gap-y-3 ml-[148px]">
          <div class="text-button text-[#857E76] font-semibold">Contact</div>
          <div class="row-start">
            <IconEnvelop class="w-4 h-4 text-[#FFC94B]" />
            <span class="caption text-[#FFFCF3] max-w-[133px]"> info@duskwavearts.com </span>
          </div>
          <div class="row-start">
            <IconLocation class="w-4 h-4 text-[#FFC94B]" />
            <span class="caption text-[#FFFCF3] max-w-[133px]">
              10877 Wilshire Blvd, Los Angeles, CA 90024 United States
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
