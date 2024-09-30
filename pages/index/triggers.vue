<template>
  <main>
    <section>
      <h2>Key</h2>
      <input v-model="$user.token" type="text" placeholder="key">
      <button @click="update_token">generate</button>
    </section>

    <section>
      <h2>Invoice Trigger</h2>
      <input v-model="$user.trigger_invoice.url" type="text" placeholder="url">
      <select v-model="$user.trigger_invoice.method">
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
      </select>
    </section>

    <button @click="update">guardar</button>
  </main>
</template>

<script setup lang="ts">
const { $user, update, update_token } = useAuth()
</script>
