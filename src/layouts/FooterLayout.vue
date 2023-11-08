<script setup>
import { IconLogo } from '@components/svgs'
</script>

<template>
  <footer class="footer">
    <div class="columnt-start sm:row-start justify-between gap-y-[30px]">
      <div class="column-start gap-y-[30px]">
        <div class="brand column-start gap-y-2">
          <IconLogo />
          <div class="brand-name text-yellow">
            <span class="text-body-2">by</span>
            <span class="text-body-1">Dusk Wave Arts</span>
          </div>
        </div>
        <div class="text-small-text text-grey-03">ⓒ Dusk Wave Arts 2023. All rights reserved.</div>
      </div>
      <div class="column-start sm:row-start">
        <div class="column-start gap-y-3">
          <div class="text-button text-neutral-02 font-semibold">Navigation</div>
          <div class="text-body-2 text-yellow">Homepage</div>
          <div class="text-body-2 text-yellow">About Us</div>
        </div>
        <div class="column-start gap-y-3 mt-[30px] sm:mt-0 sm:ml-[148px]">
          <div class="text-button text-neutral-02 font-semibold">Contact</div>
          <div class="row-start">
            <i class="icon icon-mail icon--s16 text-yellow"></i>
            <span class="text-caption text-beige max-w-[133px]"> info@duskwavearts.com </span>
          </div>
          <div class="row-start">
            <i class="icon icon-pin-drop icon--s16 text-yellow"></i>
            <span class="text-caption text-beige max-w-[133px]">
              10877 Wilshire Blvd, Los Angeles, CA 90024 United States
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  @apply pt-[31px] px-4 sm:px-[40px] pb-[17px] bg-black;
}
</style>
