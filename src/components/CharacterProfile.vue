<template>
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
      <br><br/>
      <a href="https://github.com/DeepBalusu91" class="cta-btn-experience">Personal Git Repo</a>
      <br><br/>
      <br><br/>
      <a href="javascript:void(0);" @click="showSkillsSection" class="cta-btn-experience">Skills</a>
            <br><br/>
            <br><br/>
            <a href="javascript:void(0);" @click="showContactSection" class="cta-btn-connect">Let's Connect!</a>
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
      <p><strong>Phone:</strong> <a href="tel">+1 (972) 214-5768</a></p>
      <p><strong>Email:</strong> <a href="mailto:deep@example.com">deep.balusu@gmail.com</a></p>
      <p><strong>LinkedIn:</strong> <a href="linkedin.com/in/deep-balusu-925918148" target="_blank" rel="noopener noreferrer">linkedin.com/in/deep</a></p>
    </div>
  </section>
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
      showExperience: false, // Control visibility of Experience section
      showSkills: false,     // Control visibility of Skills section
      showContact: false,    // Control visibility of Contact section
    };
  },
  methods: {
    showExperienceSection() {
      this.showExperience = true;
      this.showSkills = false;
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

    showSkillsSection() {
      this.showSkills = true;
      this.showExperience = false;
      this.showContact = false;

      this.$nextTick(() => {
        // Scroll into view for the Skills section
        if (this.$refs.skillsSection) {
          this.$refs.skillsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Align to the top of the viewport
          });
        }
      });
    },

    showContactSection() {
      this.showContact = true;
      this.showExperience = false;
      this.showSkills = false;

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
/* Set the body background to black */
body {
  background-color: #000000; /* Black background for the whole page */
  color: #fff; /* White text for readability */
  margin: 0;
  font-family: 'Helvetica', sans-serif;
}

/* Hero Section */
.hero {
  background-color: #111111; /* Dark background to make neon pop */
  color: #fff; /* Ensure text stands out against the dark background */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* Darker shadow for a deeper look */
}

.hero-content {
  max-width: 800px;
  padding: 20px;
  background-color: #222222; /* Dark background for content */
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  font-style: italic;
  color: #bbb; /* Slightly lighter gray for description text */
}

/* CTA Buttons with Neon Light Effect */
.cta-btn-connect, .cta-btn-experience {
  background-color: #00BFFF; /* Neon blue for the glowing effect */
  padding: 15px 30px;
  font-size: 1.1rem;
  color: #000;
  text-decoration: none;
  border-radius: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block;
  box-shadow: 0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF; /* Neon blue glow effect */
}

.cta-btn-connect:hover, .cta-btn-experience:hover {
  transform: scale(1.05); /* Slightly scale up the button on hover */
  box-shadow: 0 0 30px #00BFFF, 0 0 40px #00BFFF, 0 0 60px #00BFFF; /* Glowing effect intensifies */
}

.cta-btn-connect:active, .cta-btn-experience:active {
  transform: scale(1); /* Reset scale on click */
}

/* Profile Picture */
.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 5px solid #00BFFF; /* Neon blue border around the profile picture */
  box-shadow: 0 0 10px #00BFFF; /* Neon glow effect */
}

/* Contact Section */
.contact-profile {
  padding: 40px 20px;
  background-color: #222222; /* Dark background for contact section */
  color: #fff;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
}

.contact-profile h2 {
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
  color: #00BFFF; /* Neon blue heading */
}

.contact-info p {
  font-size: 1.1rem;
  margin: 8px 0;
  font-style: italic;
  color: #bbb; /* Light gray text for contact info */
}

.contact-info a {
  color: #00BFFF; /* Neon blue links */
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #1E90FF; /* Change to neon blue on hover */
  text-decoration: underline;
}

/* Headings */
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #00BFFF; /* Neon blue heading */
  text-shadow: 0 0 15px #00BFFF, 0 0 20px #00BFFF; /* Glowing neon effect */
}
</style>
