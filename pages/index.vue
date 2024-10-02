<template>
  <main>
    <nav>
      <NuxtLink to="/auth/login">login</NuxtLink>
      <NuxtLink to="/auth/register">register</NuxtLink>
      <NuxtLink to="/auth/logout">logout</NuxtLink>
      <NuxtLink to="/triggers">triggers</NuxtLink>
      <NuxtLink to="/tracking">tracking</NuxtLink>
    </nav>

    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth', 'user'],
});
</script>
