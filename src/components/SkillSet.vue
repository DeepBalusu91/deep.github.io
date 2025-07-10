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
  color: #2f4f4f;
  background-color: rgba(255, 255, 255, 0.9); /* Light semi-transparent white */
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  max-width: 900px;
  margin: 40px auto;
  font-family: 'Helvetica', sans-serif;
}

.skills-container {
  display: flex;
  justify-content: space-around;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.skill-category {
  flex: 1 1 400px;
  padding: 10px;
}

.skill-category h3 {
  color: #4caf50; /* Nature green */
  text-decoration: underline;
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
}

.skills-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.skills-table th,
.skills-table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #a5d6a7; /* lighter green border */
  font-style: italic;
  font-size: 1rem;
  color: #2f4f4f;
  background-color: #e8f5e9; /* very light green background */
  transition: background-color 0.3s ease, color 0.3s ease;
}

.skills-table th {
  background-color: #c8e6c9; /* slightly darker light green */
  color: #388e3c;
  font-weight: 600;
}

.skills-table tr:hover td {
  background-color: #a5d6a7; /* highlight row with green */
  color: white;
  font-weight: 600;
  cursor: default;
}
</style>
