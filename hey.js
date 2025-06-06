export const resume = {
  name: "Hareesh Bhittam",
  title: "Full Stack Developer",
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
  debugNinja: true,
  yearsOfExperience: 3,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length > 10 &&
      this.yearsOfExperience >= 3
    );
  },
}
