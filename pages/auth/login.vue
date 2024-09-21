<template>
  <main>
    <input v-model="email"    type="text" placeholder="email">
    <input v-model="password" type="text" placeholder="password">

    <button @click="login()">login</button>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
const auth   = useAuth()

const email    = ref<string>('javoavmystery@gmail.com')
const password = ref<string>('1234')

async function login() {
  await auth.login({ email: email.value, password: password.value })

  router.replace('/')
}
</script>
