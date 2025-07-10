<template>
  <div class="nature-wrapper">
    <section class="hero">
      <div class="hero-content">
        <img src="@/assets/img.png" alt="Deep's Profile Picture" class="profile-pic" />
        <h1>Hi, I'm Deep!</h1>
        <p class="hero-description">
          As a passionate and results-driven Fullstack Developer and Test Automation Engineer, I specialize in leveraging Java to build robust backend solutions while ensuring the highest quality standards through automated testing frameworks. With experience in both Java development and test automation strategies, I bridge the gap between software engineering and quality assurance. I am skilled in designing scalable, maintainable solutions and automating complex test scenarios, contributing to faster release cycles and seamless application performance. My expertise spans frontend, backend, and test automation technologies, making me a versatile asset for any development or quality-focused team.
        </p>
        <br><br/>
        <a href="javascript:void(0);" @click="showExperienceSection" class="cta-btn-experience">Experience</a>
        <br><br/>
        <a href="https://github.com/DeepBalusu91" class="cta-btn-experience">Personal Git Repo</a>
        <br><br/>
        <a href="javascript:void(0);" @click="showSkillsSection" class="cta-btn-experience">Skills</a>
        <br><br/>
        <a href="javascript:void(0);" @click="showContactSection" class="cta-btn-connect">Let's Connect!</a>
        <br><br/>
        <router-link to="/journal" class="cta-btn-experience">📓 My Journal (Admin access)</router-link>
        <br><br/>
        <router-link to="/books" class="cta-btn-experience">📚 My Insights on Books</router-link>
        <br><br/>
        <router-link to="/journal/view" class="cta-btn-experience">Public Journal View</router-link>
      </div>

      <!-- Falling leaves container -->
      <div class="leaves-container">
        <div v-for="n in 15" :key="n" class="leaf" :style="getLeafStyle(n)"></div>
      </div>
    </section>

    <CharacterExperience v-if="showExperience" ref="experienceSection" />
    <section v-if="showSkills" ref="skillsSection">
      <SkillsetMatrix />
    </section>

    <section v-if="showContact" id="contact" class="contact-profile" ref="contactSection">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out through any of the options below:</p>
      <div class="contact-info">
        <p><strong>Phone:</strong> <a href="tel:+19722145768">+1 (972) 214-5768</a></p>
        <p><strong>Email:</strong> <a href="mailto:deep.balusu@gmail.com">deep.balusu@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/deep-balusu-925918148" target="_blank" rel="noopener noreferrer">linkedin.com/in/deep</a></p>
      </div>
    </section>
  </div>
</template>

<script>
import CharacterExperience from './CharacterExperience.vue';
import SkillsetMatrix from './SkillSet.vue';

export default {
  name: 'CharacterProfile',
  components: {
    CharacterExperience,
    SkillsetMatrix
  },
  data() {
    return {
      showExperience: false,
      showSkills: false,
      showContact: false,
    };
  },
  methods: {
    showExperienceSection() {
      this.showExperience = true;
      this.showSkills = false;
      this.showContact = false;
      this.$nextTick(() => {
        if (this.$refs.experienceSection) {
          this.$refs.experienceSection.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    showSkillsSection() {
      this.showSkills = true;
      this.showExperience = false;
      this.showContact = false;
      this.$nextTick(() => {
        if (this.$refs.skillsSection) {
          this.$refs.skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    showContactSection() {
      this.showContact = true;
      this.showExperience = false;
      this.showSkills = false;
      this.$nextTick(() => {
        if (this.$refs.contactSection) {
          this.$refs.contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    },
    getLeafStyle(n) {
      const seed = n * 7;
      const size = (Math.abs(Math.sin(seed)) * 15 + 15).toFixed(2) + 'px';
      const delay = (Math.abs(Math.cos(seed)) * 20).toFixed(2) + 's';
      const left = ((seed * 13) % 100).toFixed(2) + '%';
      const duration = (10 + (seed % 15)).toFixed(2) + 's';
      return {
        width: size,
        height: size,
        left: left,
        animationDelay: delay,
        animationDuration: duration,
      };
    }
  }
}
</script>

<style scoped>
.nature-wrapper {
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'); /* peaceful forest */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
  color: #2f4f4f;
  position: relative;
}

/* Hero Section */
.hero {
  position: relative;
  max-width: 800px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  padding: 30px 40px;
  text-align: center;
  overflow: hidden;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  font-style: italic;
  color: #3b3b3b;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 4px solid #4caf50;
  box-shadow: 0 0 12px rgba(76, 175, 80, 0.6);
}

/* Buttons */
.cta-btn-connect,
.cta-btn-experience {
  background-color: #4caf50;
  padding: 15px 30px;
  font-size: 1.05rem;
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
  cursor: pointer;
}

.cta-btn-connect:hover,
.cta-btn-experience:hover {
  transform: scale(1.05);
  box-shadow: 0 0 18px rgba(76, 175, 80, 0.8);
}

.cta-btn-connect:active,
.cta-btn-experience:active {
  transform: scale(1);
}

/* Contact Section */
.contact-profile {
  padding: 40px 20px;
  background-color: rgba(255, 255, 255, 0.95);
  color: #2f4f4f;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  margin-top: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.contact-profile h2 {
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
  color: #4caf50;
}

.contact-info p {
  font-size: 1.1rem;
  margin: 8px 0;
  font-style: italic;
  color: #555;
}

.contact-info a {
  color: #388e3c;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #2e7d32;
  text-decoration: underline;
}

/* Headings */
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #2e7d32;
  text-shadow: 0 0 12px rgba(76, 175, 80, 0.3);
}

/* Falling leaves animation styles */
.leaves-container {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 1;
}

.leaf {
  position: absolute;
  top: -50px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Leaf_icon.svg/1024px-Leaf_icon.svg.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.8;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}
</style>
