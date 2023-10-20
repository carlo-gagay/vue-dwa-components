<script setup>
import { reactive, ref } from 'vue'
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'
import { IconLogo } from '@components/svgs'
import { Modal } from '@components/modals'
import { FormInput } from '@components/forms'

import { useRouter } from 'vue-router'
const router = useRouter()

const authModal = reactive({
  shown: false
})

const isSignIn = ref(false)

const email = ref('')
const password = ref('')

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
    router.push('/admin')
  } else {
    router.push('/admin')
  }
}
</script>

<template>
  <HeaderLayout>
    <template #slot-brand>
      <button role="button" @click="() => $router.push('/')">
        <IconLogo />
      </button>
    </template>
    <template #slot-nav-links>
      <div class="row-middle">
        <button class="btn btn-primary-inline ml-[35px]" role="button">About Us</button>
      </div>
    </template>
    <template #slot-cta-buttons>
      <div class="row-middle justify-end gap-x-[26px]">
        <button class="btn btn-primary-inline btn-md" role="button" @click="onSignInClick">
          Sign In
        </button>
        <button class="btn btn-primary btn-md" role="button" @click="onSignUpClick">Sign Up</button>
      </div>
    </template>
  </HeaderLayout>
  <div class="container-flex mt-[60px]">
    <slot></slot>
  </div>
  <Modal :shown="authModal.shown" @onClose="onAuthModalClose">
    <div class="auth-form">
      <div class="heading">
        <div class="text-heading-1 font-bold">{{ isSignIn ? 'Sign In' : 'Sign Up' }}</div>
        <button class="close-btn" @click="onAuthModalClose">
          <i class="icon icon-close icon--s40"></i>
        </button>
      </div>
      <div class="form mt-[47px] column-start gap-y-10">
        <FormInput
          formInputClass="form-input-w-436"
          id="email"
          label="Email"
          name="email"
          placeholder="johndoe@gmail.com"
          type="email"
          :model="email"
          :required="true"
        />
        <FormInput
          formInputClass="form-input-w-436"
          id="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          :hasPostfixIcon="true"
          :model="password"
          :required="true"
        >
          <template #postfix-icon>
            <i class="icon icon-visibility icon--s20"></i>
          </template>
        </FormInput>
      </div>
      <div class="submit-button flex justify-end mt-[37px]">
        <button class="btn btn-md btn-primary" @click="onFormSubmit">
          {{ isSignIn ? 'Sign In' : 'Create Account' }}
        </button>
      </div>
      <hr class="bg-neutral-03 mt-[38px] mb-[30px]" />
      <div class="column-middle items-center">
        <div class="text-body-2">{{ isSignIn ? 'Or sign in using' : 'Or sign up using' }}</div>
        <div class="row-middle"></div>
        <div class="row-middle mt-[20px]">
          <div class="text-body-2">
            {{ isSignIn ? 'Don’t have an account?' : 'Already have an account?' }}
          </div>
          <button class="text-body-2 underline" @click="() => (isSignIn = !isSignIn)">
            {{ isSignIn ? 'Sign Up' : 'Sign In' }}
          </button>
        </div>
      </div>
    </div>
  </Modal>
  <FooterLayout />
</template>

<style lang="scss">
body {
  @apply bg-beige overflow-x-hidden;
}
</style>
