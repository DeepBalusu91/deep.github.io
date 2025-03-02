<template>
  <div class="contact-profile">
    <h2>Contact Me</h2>
    <p>Feel free to reach out!</p>
    <div class="contact-info">
          <p><strong>Phone:</strong> <a href="tel:9722145768">+1 (234) 567-890</a></p>
          <p><strong>Email:</strong> <a href="mailto:deep.balusu@gmail.com">deep@example.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="linkedin.com/in/deep-balusu-925918148" target="_blank" rel="noopener noreferrer">linkedin.com/in/deep</a></p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ContactProfile'
}
</script>

<style scoped>
.contact-profile {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
}

.contact-info p {
  font-size: 1.1rem;
  margin: 8px 0;
}

</style>