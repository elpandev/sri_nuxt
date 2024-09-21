<template>
  <main>
    <h1>Logout</h1>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
const auth = useAuth()

onMounted(async () => {
  await auth.logout()

  router.replace(`/auth/login`)
})
</script>
