import { currencyFormatter } from "../utils/currencyFormatter";

const ProjectFashion = ({ project }) => {
  return (
    <div className="project bg-gray-800 p-5 rounded-xl shadow-xl border border-teal-900/60 flex flex-col gap-5 xl:w-[30rem]">
      <div className="top">
        <span className="text-teal-600">ID: {project._id}</span>
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest font-medium text-teal-400">
          {project.tech}
        </span>
      </div>
      <div className="mid text-gray-300/80 flex lg:gap-5 gap-10">
        <div className="left flex flex-col lg:text-sm">
          <span>Budget:{currencyFormatter(project.budget)}</span>
          <span>
            Added on:{new Date(project.createdAt).toLocaleDateString()}
          </span>
          <span>
            Last updated:{new Date(project.updatedAt).toLocaleDateString()}
          </span>
        </div>
        <div className="right flex flex-col lg:text-sm">
          <span>Manager: {project.manager}</span>
          <span>Developers: {project.dev}</span>
          <span>
            Duration:{" "}
            {`${project.duration} week${project.duration === 1 ? "" : "s"}`}
          </span>
        </div>
      </div>
      <div className="bottom flex justify-between">
        <button className="bg-teal-500 text-gray-900 py-2 px-5 rounded-sm shadow-xl hover:bg-teal-600 duration-300">
          Update
        </button>
        <button className="text-rose-500 hover:text-rose-600 duration-300">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectFashion;
