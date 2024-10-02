<template>
  <main>
    <section>
      <h2>Tracking</h2>
      <input v-model="invoice_id" type="text" placeholder="Id de la factura">
      <button @click="search_invoice">buscar</button>
    </section>

    <section v-if="invoice">
      <div class="containers">
        <div class="container company">
          <span class="ruc">{{ invoice.company.ruc }}</span>
          <span class="name">{{ invoice.company.name }}</span>
          <span class="trade_name">{{ invoice.company.trade_name }}</span>
          <span class="address">{{ invoice.company.address }}</span>
          <span class="accountable">{{ invoice.company.accountable }}</span>
        </div>

        <ul class="container events">
          <li v-for="event in invoice.events" :key="`${event.key}${event.created_at}`" class="event">
            <span class="key">{{ event.key }}</span>
            <span class="created_at">{{ new Date(event.created_at).toLocaleString() }}</span>
            <span v-if="event.status" class="status">{{ event.status }}</span>
            <span v-if="event.url"    class="url"   >{{ event.url }}</span>
            <span v-if="event.method" class="method">{{ event.method }}</span>
          </li>
        </ul>

        <ul class="container emails">
          <li v-for="email in invoice.emails" :key="`${email.email}${email.created_at}`" class="email">
            <span class="email">{{ email.email }}</span>
            <span class="created_at">{{ new Date(email.created_at).toLocaleString() }}</span>
            <span class="status">{{ email.status }}</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const invoice_id = ref<string>('')
const invoice    = ref<IInvoice>()

const { get_invoice } = useInvoice()

async function search_invoice() {
  invoice.value = await get_invoice({ id: invoice_id.value })

  invoice.value.events.sort((a, b) => a.created_at - b.created_at)
}
</script>

<style lang="scss">
.containers {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 21px;
  .container {
    border: 1px solid #ddd;
    padding: 12px;
    border-radius: 9px;
    height: fit-content;
    &.company, &.events {
      display: grid;
      gap: 4px;
      align-content: baseline;
    }
    &.events, &.emails {
      > .event, > .email {
        display: grid;
        border: 1px solid #ddd;
        padding: 12px;
        border-radius: 9px;
      }
    }
  }
}
</style>
