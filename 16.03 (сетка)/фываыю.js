import { defineStore } from 'pinia';
import { watch, ref, computed} from 'vue'
import axios from 'axios';

export const useUsersStore = defineStore('usersStore', () => {

  let startData = JSON.parse(localStorage.getItem('users')) ?? []
  let users = ref(startData)
  

  let fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      users.value = response.data;
  }

  let deleteUserById = (userId) => {
      users.value = users.value.filter(user => user.id !== userId);
  }

  watch(users, () => {
    localStorage.setItem('users', JSON.stringify(users))
  })

  let computedEmailUsers = computed(() => {
    return users.value.filter(user => user.email.endsWith('.net'))
  })

  return {
    users,
    fetchUsers,
    deleteUserById,
    computedEmailUsers
  }
})
