<script setup>
import { IconLogo } from '@components/svgs'
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <div class="branding-section">
        <div class="brand">
          <IconLogo />
          <div class="brand-name text-yellow">
            <span>by</span>
            <span class="brand-text">Dusk Wave Arts</span>
          </div>
        </div>
        <div class="copy-rights">ⓒ Dusk Wave Arts 2023. All rights reserved.</div>
      </div>
      <div class="navigations">
        <div class="quick-links">
          <div class="section-header">Navigation</div>
          <div class="quick-link-item">Homepage</div>
          <div class="quick-link-item">About Us</div>
        </div>
        <div class="contact-informations">
          <div class="section-header">Contact</div>
          <div class="contact-item">
            <i class="icon icon-mail icon--s16"></i>
            <span class="text-caption"> info@duskwavearts.com </span>
          </div>
          <div class="contact-item">
            <i class="icon icon-pin-drop icon--s16"></i>
            <span class="text-caption">
              10877 Wilshire Blvd, Los Angeles, CA 90024 United States
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
