<template>
  <section class="hero">
    <div class="hero-content">
      <img src="@/assets/img.png" alt="Deep's Profile Picture" class="profile-pic" />
      <h1>Hi, I'm Deep!</h1>
      <p class="hero-description">
        As a passionate and results-driven Fullstack Developer and Test Automation Engineer, I specialize in leveraging Java to build robust backend solutions while ensuring the highest quality standards through automated testing frameworks. With experience in both Java development and test automation strategies, I bridge the gap between software engineering and quality assurance. I am skilled in designing scalable, maintainable solutions and automating complex test scenarios, contributing to faster release cycles and seamless application performance. My expertise spans frontend, backend, and test automation technologies, making me a versatile asset for any development or quality-focused team.
      </p>
      <br><br/>
      <a href="javascript:void(0);" @click="showContactSection" class="cta-btn-connect">Let's Connect!</a>
      <br><br/>
      <br><br/>

      <!-- Experience Button -->
      <a href="javascript:void(0);" @click="showExperienceSection" class="cta-btn-experience">Experience</a>
      <br><br/>
      <br><br/>
      <a href="https://github.com/DeepBalusu91/personal" class="cta-btn-experience">Personal Git Repo</a>
    </div>
  </section>

  <!-- Conditionally render the CharacterExperience component -->
  <CharacterExperience v-if="showExperience" ref="experienceSection" />

  <!-- Conditionally render the Contact Profile Section -->
  <section v-if="showContact" id="contact" class="contact-profile" ref="contactSection">
    <h2>Contact Me</h2>
    <p>If you'd like to get in touch, feel free to reach out through any of the options below:</p>
    <div class="contact-info">
      <p><strong>Phone:</strong> <a href="tel">+1 (972) 214-5768</a></p>
      <p><strong>Email:</strong> <a href="mailto:deep@example.com">deep.balusu@gmail.com</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/deep" target="_blank" rel="noopener noreferrer">linkedin.com/in/deep</a></p>
    </div>
  </section>
</template>

<script>
// Import the CharacterExperience component
import CharacterExperience from './CharacterExperience.vue';

export default {
  name: 'CharacterProfile',
  components: {
    CharacterExperience
  },
  data() {
    return {
      showExperience: false, // Control visibility of Experience section
      showContact: false,    // Control visibility of Contact section
    };
  },
  methods: {
    showExperienceSection() {
      this.showExperience = true;
      this.showContact = false;

      this.$nextTick(() => {
        // Scroll into view for the Experience section
        if (this.$refs.experienceSection) {
          this.$refs.experienceSection.$el.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Align to the top of the viewport
          });
        }
      });
    },

    showContactSection() {
      this.showContact = true;
      this.showExperience = false;

      this.$nextTick(() => {
        // Scroll into view for the Contact section
        if (this.$refs.contactSection) {
          this.$refs.contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Align to the top of the viewport
          });
        }
      });
    }
  }
}
</script>

<style scoped>
/* Dark Mode with Neon Highlights */
.hero {
  background-color: #121212;
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Arial', sans-serif;
  padding: 30px;
  position: relative;
}

.hero-content {
  max-width: 800px;
  padding: 20px;
  background-color: rgba(33, 33, 33, 0.8); /* Semi-transparent dark background */
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 1;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  font-style: italic;
  color: #B0B0B0;
}

.cta-btn-connect, .cta-btn-experience {
  background-color: #00FF00; /* Neon Green */
  padding: 15px 30px;
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.cta-btn-connect:hover, .cta-btn-experience:hover {
  background-color: #00CC00; /* Darker Green for hover */
  box-shadow: 0 0 15px 5px rgba(0, 255, 0, 0.7);
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 5px solid #00FF00; /* Neon Green Border */
  box-shadow: 0 0 15px 5px rgba(0, 255, 0, 0.7);
}

.contact-profile {
  padding: 40px 20px;
  background-color: rgba(33, 33, 33, 0.9);
  color: white;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  margin-top: 40px;
}

.contact-profile h2 {
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
  color: #00FF00; /* Neon Green */
}

.contact-info p {
  font-size: 1.1rem;
  margin: 8px 0;
  font-style: italic;
  color: #B0B0B0;
}

.contact-info a {
  color: #00FF00; /* Neon Green */
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #00CC00; /* Darker Neon Green */
  text-decoration: underline;
}

/* Adding neon glow to the header */
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #00FF00; /* Neon Green */
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.7);
}
</style>
