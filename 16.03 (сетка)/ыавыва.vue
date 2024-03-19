<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
<script setup>
import { useCounterStore } from './useCounterStore';

// Получаем экземпляр хранилища
const counterStore = useCounterStore();

// Используем состояние и методы из хранилища
const count = counterStore.count;
const increment = counterStore.increment;
const decrement = counterStore.decrement;

</script>
  