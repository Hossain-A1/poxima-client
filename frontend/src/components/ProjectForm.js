import { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [manager, setManager] = useState("");
  const [dev, setDev] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { dispatch } = useProjectsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // data
    const projectObj = { title, tech, budget, duration, manager, dev };
    // post res
    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectObj),
    });
    const data = await res.json();
    // if !res.ok setError

    if (!res.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
    }

    // res.ok , reset
    if (res.ok) {
      setTitle("");
      setTech("");
      setBudget("");
      setManager("");
      setDev("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_PROJECT", payload: data });

      //project ojbect has been  successed here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-Form flex flex-col gap-5 ">
      <h2 className="text-4xl font-medium text-teal-400 mb-10">
        Add a new project
      </h2>

      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="title"
          className="cursor-pointer hover:text-teal-500 duration-300 capitalize "
        >
          Project title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="e.g. e-commerce website"
          id="title"
          className={`bg-transparent border border-gray-500 py-2 px-5 outline-none rounded-lg focus:border-teal-500 duration-300 ${
            emptyFields.includes("title")
              ? "border-rose-500 "
              : "border-gray-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="tech"
          className="cursor-pointer hover:text-teal-500 duration-300 capitalize"
        >
          Technologies
        </label>
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          type="text"
          placeholder="e.g. node.js, react, redux etc."
          id="tech"
          className={`bg-transparent border border-gray-500 py-2 px-5 outline-none rounded-lg focus:border-teal-500 duration-300 ${
            emptyFields.includes("tech")
              ? "border-rose-500 "
              : "border-gray-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="Budget"
          className="cursor-pointer hover:text-teal-500 duration-300 capitalize"
        >
          Budget (in USD)
        </label>
        <input
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          type="number"
          placeholder="e.g. 500$"
          id="Budget"
          className={`bg-transparent border border-gray-500 py-2 px-5 outline-none rounded-lg focus:border-teal-500 duration-300 ${
            emptyFields.includes("budget")
              ? "border-rose-500 "
              : "border-gray-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="duration"
          className="cursor-pointer hover:text-teal-500 duration-300 capitalize"
        >
          Duration (in weeks)
        </label>
        <input
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="number"
          placeholder="e.g. 3weeks"
          id="duration"
          className={`bg-transparent border border-gray-500 py-2 px-5 outline-none rounded-lg focus:border-teal-500 duration-300 ${
            emptyFields.includes("duration")
              ? "border-rose-500 "
              : "border-gray-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="manager"
          className="cursor-pointer hover:text-teal-500 duration-300 capitalize"
        >
          Manager
        </label>
        <input
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          type="text"
          placeholder="e.g. sofia"
          id="manager"
          className={`bg-transparent border border-gray-500 py-2 px-5 outline-none rounded-lg focus:border-teal-500 duration-300 ${
            emptyFields.includes("manager")
              ? "border-rose-500 "
              : "border-gray-500"
          }`}
        />
      </div>
      <div className="from-control flex flex-col gap-2 ">
        <label
          htmlFor="developer"
          className="cursor-pointer hover:text-teal-500 duration-300 capitalize"
        >
          Developers
        </label>
        <input
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          type="number"
          placeholder="e.g. 5 developers"
          id="developer"
          className={`bg-transparent border border-gray-500 py-2 px-5 outline-none rounded-lg focus:border-teal-500 duration-300 ${
            emptyFields.includes("dev") ? "border-rose-500 " : "border-gray-500"
          }`}
        />
      </div>

      <button
        type="submit"
        className="bg-teal-500 text-gray-900 py-3 rounded-lg hover:bg-teal-600 duration-300"
      >
        Add Project
      </button>
      {error && (
        <p className="bg-rose-600/10 text-rose-500 border border-rose-700 p-5 rounded-lg">
          {error}
        </p>
      )}
    </form>
  );
};

export default ProjectForm;
