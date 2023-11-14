<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'
import { AppModal } from '@components/modals'
import { InputPasswordField, InputTextField } from '@components/forms'
import { useRouter } from 'vue-router'

const router = useRouter()

const authModal = reactive({
  shown: false
})

const isSignIn = ref(false)

const form = reactive({
  email: '',
  password: ''
})

const showMobileNavs = ref(false)

const onAuthModalShow = () => (authModal.shown = true)
const onAuthModalClose = () => (authModal.shown = false)
const onSignInClick = () => {
  isSignIn.value = true
  onAuthModalShow()
}
const onSignUpClick = () => {
  isSignIn.value = false
  onAuthModalShow()
}

const onFormSubmit = () => {
  if (isSignIn.value) {
    router.push('/dashboard')
  } else {
    router.push('/dashboard')
  }
}

onMounted(() => document.querySelector('body').classList.add('readersLayout'))
onUnmounted(() => document.querySelector('body').classList.remove('readersLayout'))
</script>

<template>
  <HeaderLayout
    :show-mobile-navs="showMobileNavs"
    @on-logo-click="() => $router.push('/')"
    @on-show-mobile-navs="() => (showMobileNavs = !showMobileNavs)"
  >
    <template #slot-nav-links>
      <div class="row-middle">
        <button class="tab tab-type-3" role="button">About Us</button>
      </div>
    </template>
    <template #slot-cta-buttons>
      <div class="header-cta">
        <button class="btn btn-secondary btn-md" role="button" @click="onSignInClick">
          Sign In
        </button>
        <button class="btn btn-primary btn-md" role="button" @click="onSignUpClick">Sign Up</button>
      </div>
    </template>
  </HeaderLayout>
  <div class="container-flex mt-[60px]">
    <slot></slot>
  </div>
  <AppModal :shown="authModal.shown" @on-close="onAuthModalClose">
    <div class="auth-form">
      <div class="heading">
        <div class="text-heading-1">{{ isSignIn ? 'Sign In' : 'Sign Up' }}</div>
        <button class="close-btn" @click="onAuthModalClose">
          <i class="icon icon-close icon--s40"></i>
        </button>
      </div>
      <div class="form-wrap form">
        <InputTextField
          v-model="form.email"
          id="email"
          label="Email"
          name="email"
          placeholder="johndoe@gmail.com"
          type="email"
          :min-width="436"
          :required="true"
        />
        <InputPasswordField
          v-model="form.password"
          id="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          :min-width="436"
          :required="true"
        />
      </div>
      <div class="submit-button">
        <button class="btn btn-md btn-primary" @click="onFormSubmit">
          {{ isSignIn ? 'Sign In' : 'Create Account' }}
        </button>
      </div>
      <hr class="divider" />
      <div class="column-middle items-center">
        <div class="text-body-2">{{ isSignIn ? 'Or sign in using' : 'Or sign up using' }}</div>
        <div class="other-auth-options">
          <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#524B43" />
              <path
                d="M27.7852 25.7812L28.6719 20H23.125V16.25C23.125 14.668 23.8984 13.125 26.3828 13.125H28.9062V8.20312C28.9062 8.20312 26.6172 7.8125 24.4297 7.8125C19.8594 7.8125 16.875 10.582 16.875 15.5938V20H11.7969V25.7812H16.875V39.7578C17.8945 39.918 18.9375 40 20 40C21.0625 40 22.1055 39.918 23.125 39.7578V25.7812H27.7852Z"
                fill="#FFFCF3"
              />
            </svg>
          </button>
          <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#524B43" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.18 20.7766C32.18 19.9139 32.1026 19.0843 31.9588 18.288H20.5V22.9943H27.0479C26.7658 24.5151 25.9086 25.8036 24.6201 26.6664V29.7191H28.5521C30.8527 27.601 32.18 24.4819 32.18 20.7766Z"
                fill="#FFFCF3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4995 32.6668C23.7845 32.6668 26.5386 31.5773 28.5517 29.7191L24.6196 26.6664C23.5301 27.3964 22.1365 27.8278 20.4995 27.8278C17.3307 27.8278 14.6485 25.6875 13.6917 22.8118H9.62695V25.964C11.6289 29.9403 15.7435 32.6668 20.4995 32.6668Z"
                fill="#FFFCF3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.6919 22.8117C13.4485 22.0817 13.3103 21.302 13.3103 20.5001C13.3103 19.6982 13.4485 18.9184 13.6919 18.1884V15.0361H9.6271C8.80308 16.6786 8.33301 18.5368 8.33301 20.5001C8.33301 22.4633 8.80308 24.3215 9.6271 25.964L13.6919 22.8117Z"
                fill="#FFFCF3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4995 13.1724C22.2858 13.1724 23.8896 13.7863 25.1505 14.9919L28.6401 11.5022C26.5331 9.53898 23.779 8.33337 20.4995 8.33337C15.7435 8.33337 11.6289 11.0598 9.62695 15.0361L13.6917 18.1884C14.6485 15.3126 17.3307 13.1724 20.4995 13.1724Z"
                fill="#FFFCF3"
              />
            </svg>
          </button>
        </div>
        <div class="portal-switcher">
          <div class="text-body-2">
            {{ isSignIn ? 'Don’t have an account?' : 'Already have an account?' }}
          </div>
          <button class="text-body-2 underline" @click="() => (isSignIn = !isSignIn)">
            {{ isSignIn ? 'Sign Up' : 'Sign In' }}
          </button>
        </div>
      </div>
    </div>
  </AppModal>
  <FooterLayout />
</template>
