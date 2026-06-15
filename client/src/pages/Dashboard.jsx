import {
  FilePenLineIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const colors = ["#9333ea", "#D97706", "#DC2626", "#0284C7", "#16a34a"];

const Dashboard = () => {
  const [allResume, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume]=useState(false)
  const [showUploadResume, setShowUploadResume]=useState(false)

  const [title, setTitle]=useState('')
  const [resume, setResume]=useState(null)
  const [editResumeId,setEditResumeId]=useState('')

  const navigate=useNavigate()

  const createResume=async (e) => {
    e.preventDefault()
    setShowCreateResume(false)
    navigate('/app/builder/res123')
  }

  const loadAllResume = () => {
    setAllResumes(dummyResumeData);
  };

  useEffect(() => {
    loadAllResume();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Heading */}
        <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent hidden sm:block">
          Welcome, Sheess Hasnain.
        </p>

        {/* Top Buttons */}
        <div className="flex gap-4">
          <button onClick={()=> setShowCreateResume(true)} className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <PlusIcon className="size-11 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-indigo-600">
              Create Resume
            </p>
          </button>

          <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <UploadCloudIcon className="size-11 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full" />
            <p className="text-sm group-hover:text-indigo-600">
              Upload Existing
            </p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm:w-[305px]" />

        {/* Resume Cards */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResume.map((resume, index) => {
            const basecolor = colors[index % colors.length];

            return (
              <div
                key={resume.id || index}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${basecolor}10, ${basecolor}40)`,
                  borderColor: basecolor + "40",
                }}
              >
                {/* Main Icon */}
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: basecolor }}
                />
                <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{color: basecolor}}>
                  {resume.title}
                </p>

                {/* Date */}
                <p
                  className="absolute bottom-1 text-[11px] px-2 text-center"
                  style={{ color: basecolor + "90" }}
                >
                  Updated On{" "}
                  {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                {/* Edit Icon */}
                <PencilIcon className="absolute top-2 left-2 size-6 p-1 hover:bg-white/50 rounded text-slate-700 transition-colors" />

                {/* Delete Icon */}
                <TrashIcon className="absolute top-2 right-2 size-6 p-1 hover:bg-white/50 rounded text-slate-700 transition-colors" />
              </div>
            );
          })}
        </div>
        {
          showCreateResume && (
            <form onSubmit={createResume} onClick={()=> setShowCreateResume(false)} className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
              <div onClick={e => e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-1g w-full max-w-sm p-6 ">
                <h2 className="text-x1 font-bold mb-4">Create Resume</h2>
                <input type="text" placeholder="Enter Resume Title" className="w-full px-4 py-2 mb-4 focus:border-violet-600 ring-purple-600" required />
                <button className="w-full py-2 bg-violet-600 text-white rounded hover:bg-violet-700  transition-colors"> 
                  Create Resume
                </button>
                <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                onClick={()=>{setShowCreateResume(false); setTitle('')}}/>
              </div>
              
            </form>
          )
        }
      </div>
    </div>
  );
};

export default Dashboard;