import React from "react";
import ProjectPage from "../project";

const WorkProjects = () => {
  return (
    <div className="max-w-screen-xl mx-4 xl:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-6 mt-5">
      <h1 className="text-center col-span-1 md:col-span-2 text-xl sm:text-3xl font-bold tracking-tight sm:mt-3 dark:text-zinc-300 text-zinc-700">
        Work & Projects
      </h1>
      <div className="mt-10">
        <strong className="underline">
          Developed and maintained a Back Office Portal for Bank Employees
        </strong>
        <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
          Built a secure, high-performance portal to streamline administrative
          tasks.
        </p>
        <p className="mt-2 pl-4 relative before:content-['•'] before:absolute before:left-0">
          Integrated role-based access control (RBAC) for secure data handling.
        </p>
      </div>
      <ProjectPage />
    </div>
  );
};

export default WorkProjects;
