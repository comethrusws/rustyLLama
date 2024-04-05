<template>
    <div class="chat-input">
      <input v-model="message" @keyup.enter="sendMessage" placeholder="Type your message..." />
      <button @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ChatInput',
    data() {
      return {
        message: '',
      };
    },
    methods: {
      async sendMessage() {
        if (this.message.trim()) {
          try {
            const response = await axios.post('/api/messages', { text: this.message });
            this.$emit('new-message', response.data.response);
            this.message = '';
          } catch (error) {
            console.error(error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-input {
    display: flex;
    margin-top: 1rem;
  }
  </style>