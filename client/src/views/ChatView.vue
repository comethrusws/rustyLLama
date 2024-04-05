<template>
    <div class="chat-container">
      <h1>CrustyLlama</h1>
      <ChatMessages :messages="messages" :loading="loading" />
      <ChatInput @new-message="addMessage" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ChatMessages from '../components/ChatMessages.vue';
  import ChatInput from '../components/ChatInput.vue';
  
  export default {
    name: 'ChatView',
    components: {
      ChatMessages,
      ChatInput,
    },
    data() {
      return {
        messages: [],
        loading: false,
      };
    },
    created() {
      this.fetchMessages();
    },
    methods: {
      async fetchMessages() {
        try {
          const response = await axios.get('/api/messages');
          this.messages = response.data;
        } catch (err) {
          console.error(err);
        }
      },
      addMessage(message) {
        this.messages.push({ sender: 'ai', text: message });
        this.loading = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  </style>