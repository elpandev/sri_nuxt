<template>
  <main>
    <input v-model="name"     type="text" placeholder="name">
    <input v-model="email"    type="text" placeholder="email">
    <input v-model="password" type="text" placeholder="password">

    <button @click="register()">register</button>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
const auth   = useAuth()

const name     = ref<string>('Francisco Moncayo')
const email    = ref<string>('javoavmystery@gmail.com')
const password = ref<string>('1234')

async function register() {
  await auth.register({ name: name.value, email: email.value, password: password.value })

  router.replace('/')
}
</script>
