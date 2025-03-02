<template>
  <div class="experience">
    <h2>My Experience</h2>
    <ul>
      <li><strong>Senior SDET</strong> at Barclays Bank (2024 Dec - 2025 Jan)</li>
      <p>Worked as senior automation Engineer for CWS (customer website) front end for Password less Authentication bypassing the security checks based on customer login activity.
       Developed automation scripts to simulate bypassing security checks based on customer login activity. This involved simulating different customer authentication states (e.g., authenticated via OTP, biometrics, or magic links) to verify that only legitimate login sessions could bypass security mechanisms.
       </p>
      <li><strong>Fullstack Engineer</strong> at Capital One (2024 Feb - 2024 October)</li>
      <p>
      Worked in Capital One as full stack developer owning the whole SDLC, which includes development, testing, production readiness and deployment.
      Worked in DICE vertical of CapitalOne Team, and worked on Empath application, which is the main application for live agents to interact with customers. Collaborated with the team in implementing Intelligent Guidance project, which is the smart way for the agents to guide customers in fulfilling the servicing needs they are eligible for.
      </p>
      <li><strong>Senior SDET</strong> at Barclays Bank (2017 - 2024)</li>
      <p>
      BAPI stands for Business API domain whose main responsibility is to ensure business communication between the vendors/clients and the core applications, by taking charge of API and web services development and testing Rewards Redeem mainly handles the core functionality of developing/maintaining the Services/domains/microservices related to redemption related functionality of credit card Line of business. Critical projects such as RCI member Rewards introduction, Uber relaunch, Incomm to Encore platform migration, GAP loyalty tier update etc. are delivered successfully while working in Rewards Redeem.
      </p>
      <li><strong>Java BIS Intern</strong> at First Command Financial Services (2017 - 2018)</li>
      <p>
      Worked on MRS.
      Metric Reporting System, abbreviated as MRS, is an internal application consisting of the financial reports for the selected fiscal year which is accessed only by the advisors.
      </p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CharacterExperience',
}
</script>

<style scoped>
.experience {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.experience h2 {
  text-align: center;
}

.experience ul {
  list-style-type: none;
  padding: 0;
}

.experience li {
  font-size: 1.1rem;
  padding: 5px 0;
}
</style>
