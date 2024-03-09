<template>
    <div class="success-component">
      <div class="icon">
        <!-- Success Icon (You can replace this with your own icon) -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1-2a1 1 0 10-2 0v4a1 1 0 102 0V7z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="message">
        <h3 class="text-xl font-bold text-primary">You have been registered successfully</h3>
        <p class="text-lg">Be patient till your order reaches</p>
      </div>
      <div class="footer">
        <button class="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded">
          Ok
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SuccessComponent',
    props: {
      message: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        default: 'OK'
      }
    }
  }
  </script>
  
  <style scoped>
  .success-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    margin: auto;
    justify-content: center;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    min-height: 200px;
  }
  
  .icon {
    margin-bottom: 20px;
  }
  
  .message {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .footer {
    display: flex;
    justify-content: center;
  }
  </style>