import { useEffect, useState } from "react";
import ProjectFashion from "../components/ProjectFashion";
import ProjectForm from "../components/ProjectForm";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/projects");
        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getProjects();
  }, []);
// how get ruturn
  return (
    <div className="home container mx-auto py-20 grid lg:grid-cols-3 gap-10 grid-cols-3">
      <div className="home-L lg:col-span-2 col-span-2">
        <h2 className="text-4xl font-medium text-teal-400 mb-10">
          All projects
        </h2>
        <div className="porjects-wrapper flex flex-wrap gap-5">
        {
          projects && projects.map((project)=>(
            <ProjectFashion key={project._id} project={project}/>
          ))
        }
        </div>
      </div>

          <ProjectForm/>
    </div>
  );
};

export default Home;
