<template>
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.sender === 'user', 'ai-message': message.sender === 'ai' }">
        <div class="message-text">{{ message.text }}</div>
      </div>
      <LoadingSpinner v-if="loading" />
    </div>
  </template>
  
  <script>
  import LoadingSpinner from './LoadingSpinner.vue';
  
  export default {
    name: 'ChatMessages',
    components: {
      LoadingSpinner,
    },
    props: {
      messages: {
        type: Array,
        required: true,
      },
      loading: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-messages {
    display: flex;
    flex-direction: column;
    height: 500px;
    overflow-y: auto;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 8px;
  }
  
  .message {
    max-width: 60%;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 8px;
  }
  
  .user-message {
    align-self: flex-end;
    background-color: #007bff;
    color: #fff;
  }
  
  .ai-message {
    align-self: flex-start;
    background-color: #e9e9e9;
    color: #333;
  }
  </style>