<template>
  <div class="skillset">
    <h2>Skillset</h2>
    <div class="skills-container">
      <div class="skill-category">
        <h3>Development</h3>
        <table class="skills-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Programming languages</td>
              <td>Java 1.8, Java 18, Java 21</td>
            </tr>
            <tr>
              <td>Build and Dependency Management</td>
              <td>Maven</td>
            </tr>
            <tr>
              <td>Backend Development</td>
              <td>Spring MVC, SpringBoot</td>
            </tr>
            <tr>
              <td>FrontEnd Automation</td>
              <td>Vue.js, JavaScript, HTML</td>
            </tr>
            <tr>
              <td>Frontend Styling</td>
              <td>CSS, JavaScript</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="skill-category">
        <h3>Testing</h3>
        <table class="skills-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>API Automation frameworks</td>
              <td>Cucumber, Karate, RestAssured</td>
            </tr>
            <tr>
              <td>Web Automation frameworks</td>
              <td>Selenium WebDriver</td>
            </tr>
            <tr>
              <td>Mobile Automation frameworks</td>
              <td>Appium, SeeTest</td>
            </tr>
            <tr>
              <td>Testing tools</td>
              <td>SOAPUI, RestAPI, Postman</td>
            </tr>
            <tr>
              <td>Relational databases interaction</td>
              <td>SQL, SQLDeveloper, TOAD, MongoDB, MariaDB</td>
            </tr>
            <tr>
              <td>CICD</td>
              <td>Jenkins, Bamboo</td>
            </tr>
            <tr>
              <td>Log Monitoring</td>
              <td>Kibana, AWSCloudWatch, Splunk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsetMatrix',
};
</script>

<style scoped>
.skillset {
  text-align: center;
  color: white;
  background-color: rgba(33, 33, 33, 0.8); /* Dark background */
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
}

.skills-container {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.skill-category {
  max-width: 500px;
  padding: 10px;
}

.skill-category h3 {
  color: #00BFFF; /* Neon blue */
  text-decoration: underline;
  margin-bottom: 15px;
}

.skills-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.skills-table th, .skills-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #B0B0B0;
}

.skills-table th {
  background-color: #333;
  color: #00BFFF; /* Neon blue */
}

.skills-table td {
  color: #B0B0B0;
}

.skills-table tr:hover {
  background-color: #222;
}

.skills-table td, .skills-table th {
  font-size: 1rem;
  font-style: italic;
}

.skills-table tr:hover td {
  color: #00BFFF; /* Highlight text on hover with neon blue */
}
</style>
