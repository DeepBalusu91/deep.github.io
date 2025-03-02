<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Hi, I'm Deep!</h1>
      <p>I'm a passionate web developer with expertise in creating responsive, user-friendly applications.</p>
      <a href="#contact" class="cta-btn">Let's Connect!</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CharacterProfile'
}
</script>

<style scoped>
.hero {
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.cta-btn {
  background-color: #FF6600;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.cta-btn:hover {
  background-color: #e65c00;
}
</style>
