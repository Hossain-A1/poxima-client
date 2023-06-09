import { useEffect } from "react";
import ProjectFashion from "../components/ProjectFashion";
import ProjectForm from "../components/ProjectForm";
import { useProjectsContext } from "../hooks/useProjectsContext";

import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { projects, dispatch } = useProjectsContext();

  const { user } = useAuthContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: data });
      }
    };
    if (user) {
      getAllProjects();
    }
  }, [dispatch, user]);

  // how get ruturn
  return (
    <div className="home container mx-auto py-20 grid lg:grid-cols-3 gap-10 grid-cols-3">
      <div className="home-L lg:col-span-2 col-span-2">
        <h2 className="text-4xl font-medium text-teal-400 mb-10">
          {projects.length < 1 ? "No projects" : "All projects"}
        </h2>
        <div className="porjects-wrapper flex flex-wrap gap-5">
          {projects &&
            projects.map((project) => (
              <ProjectFashion key={project._id} project={project} />
            ))}
        </div>
      </div>

      <ProjectForm />
    </div>
  );
};

export default Home;
