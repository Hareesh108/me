export const resume = {
  name: "Hareesh Bhittam",
  title: "Full Stack Developer | Cloud Wrangler | Code Whisperer",
  skills: [
    "ReactJS",
    "NextJS",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Docker",
    "Kubernetes",
    "AWS",
    "PostgreSQL"
  ],
  hardWorker: true,
  quickLearner: true,
  debugNinja: true,
  yearsOfExperience: 3,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length > 5 &&
      this.yearsOfExperience >= 3
    );
  },
  funFact: "Can deploy a full-stack app before most people finish their coffee ☕",
}
