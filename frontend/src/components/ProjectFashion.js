import { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import moment from "moment";
import ProjectForm from "./ProjectForm";
import { useAuthContext } from "../hooks/useAuthContext";

const ProjectFashion = ({ project }) => {
  const [isModal, setIsModal] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);

  const { dispatch } = useProjectsContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/projects/${project._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_PROJECT", payload: data });
    }
  };

  const handleUpdate = () => {
    setIsModal(true);
    setIsOverlay(true);
  };

  const handleOverlay = () => {
    setIsModal(false);
    setIsOverlay(false);
  };
  return (
    <div className="project bg-gray-800 p-5 rounded-xl shadow-xl border border-teal-900/60 flex flex-col gap-5 xl:w-[30rem] lg:w-[20rem]">
      <div className="top">
        <span className="text-teal-600 truncate">ID: {project._id}</span>
        <h3 className="text-2xl font-medium">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest font-medium text-teal-400">
          {project.tech}
        </span>
      </div>

      <div className="mid text-gray-300/80 flex lg:gap-5 gap-10">
        <div className="left flex flex-col lg:text-sm">
          <span>Budget:{currencyFormatter(project.budget)}</span>
          <span>
            Added:{moment(project.createdAt).format("MMM DD, hh:mm A")}
          </span>
          <span>
            Updated:{moment(project.updatedAt).format("MMM DD, hh:mm A")}
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
        <button
          onClick={handleUpdate}
          className="bg-teal-500 text-gray-900 py-2 px-5 rounded-sm shadow-xl hover:bg-teal-600 duration-300"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="text-rose-500 hover:text-rose-600 duration-300"
        >
          Delete
        </button>
      </div>
      {/* ---------OVERLAY-------------- */}
      <div
        onClick={handleOverlay}
        className={`overlay fixed z-[1] h-screen w-screen bg-gray-950/10 backdrop-blur-sm top-0 left-0 right-0 bottom-0 ${
          isOverlay ? "" : "hidden"
        }`}
      ></div>

      {/*---------MODAL--------------*/}
      <div
        className={`update-modal w-[30rem] lg:h-[100vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-10 rounded-xl shadow-xl border border-teal-800 z-[2] ${
          isModal ? "" : "hidden"
        }`}
      >
        <h1 className=" lg:mb-5 lg:text-3xl text-4xl font-medium text-teal-400 mb-10 ">
          Update project
        </h1>
        <ProjectForm
          project={project}
          setIsModal={setIsModal}
          setIsOverlay={setIsOverlay}
        />
      </div>
    </div>
  );
};

export default ProjectFashion;
