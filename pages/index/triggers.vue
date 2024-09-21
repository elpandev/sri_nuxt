<template>
  <main>
    <section>
      <h2>Key</h2>
      <input v-model="$user.key" type="text" placeholder="key">
    </section>

    <section>
      <h2>Invoice Trigger</h2>
      <input v-model="$user.triggers.invoice.url" type="text" placeholder="url">
      <select v-model="$user.triggers.invoice.method">
        <option value="POST">POST</option>
      </select>
    </section>

    <button @click="update($user)">guardar</button>
  </main>
</template>

<script setup lang="ts">
const { $user } = useAuth()
const { update } = useUserService()
</script>
