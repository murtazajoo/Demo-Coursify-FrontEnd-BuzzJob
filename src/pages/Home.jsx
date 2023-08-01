import heroImg from "../assets/images/header.jpg";
import Category from "../components/home/Category";
import { LuPenTool } from "react-icons/lu";
import { BiChip } from "react-icons/bi";
import {
  BsArrowUpRightCircle,
  BsGraphUpArrow,
  BsBriefcase,
} from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import stepOneImg from "../assets/images/track-1.png";
import stepTwoImg from "../assets/images/track-2.png";
import stepThreeImg from "../assets/images/track-3.png";
import employerImg from "../assets/images/can-emp.png";
import Step from "../components/home/Step";
import Benefit from "../components/home/Benefit";

export default function Home() {
  return (
    <div>
      <header className="flex justify-center min-h-[100vh] flex-col-reverse text-center md:text-left py-10  md:flex-row  items-center">
        <div className="w-full pt-4 md:pr-40 ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
            One Step Closer To Your New Job
          </h1>
          <p className="text-md opacity-40 py-5 ">
            Explore thousands of job opportunities with all the information you
            need. It{"'"}s your future. Come find it. Manage all your job
            application from start to finish
          </p>
          <button className="bg-slate-800  text-white hover:bg-slate-300 hover:text-slate-800 duration-300 uppercase px-8 py-4 rounded-xl">
            Apply Now
          </button>
        </div>
        <div className="w-full">
          <img src={heroImg} alt="illustration" />
        </div>
      </header>

      <section className="my-20">
        <h2 className="text-4xl font-semibold leading-tight mt-10">
          Most Demanding Job Categories
        </h2>
        <div className="my-10 gap-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
          {categories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              icon={category.icon}
              number={category.number}
            />
          ))}
          <div className="min-h-[200px] shadow-xl mx-auto  rounded-2xl w-full max-w-[350px] flex justify-between items-center flex-col p-5 bg-slate-200 hover:bg-slate-800  hover:text-white duration-700">
            <BsArrowUpRightCircle size={80} className="opacity-50" />
            <p className=" text-2xl">Find More</p>
          </div>
        </div>
      </section>

      <section className="text-center my-20 py-20">
        <h2 className="text-4xl font-semibold leading-tight ">
          The Fast Track to Your Next Job
        </h2>
        <p className="text-md opacity-40 py-5 ">
          we ensure your next step is a step forward. That{"'"}s why we built a
          job marketplace that cut-off the boring processes
        </p>

        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <Step
            image={stepOneImg}
            name="Create Your Account"
            description="Create your account in a few minutes and get access to thousands of jobs from top companies around the world."
          />
          <Step
            image={stepTwoImg}
            name="Explore Options"
            description="Explore thousands of jobs from top companies. Filter by location, salary, experience, and more."
          />
          <Step
            image={stepThreeImg}
            name="Apply"
            description="Apply to jobs with a single click. Manage all of your applications from one place."
          />
        </div>
      </section>

      <section>
        <div className="flex justify-center  flex-col md:flex-row ">
          <div className="w-full">
            <img src={employerImg} alt="" className="" />
          </div>
          <div className="w-full">
            <h2 className="font-bold text-center mt-5 text-2xl md:text-4xl  leading-normal ">
              Perfect For Candidates. <br /> Beautiful for Employers.
            </h2>
            <div className="grid md:grid-cols-2">
              {Benefits.map((benefit, index) => (
                <Benefit
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  des={benefit.des}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="text-center my-20 py-10">
        <h2 className=" text-4xl font-semibold leading-tight  mb-20 capitalize">
          Leading Companies Build Teams on{" "}
          <span className="bg-slate-800 p-1 rounded text-white">BuzzJob</span>{" "}
        </h2>
        <img
          src="https://d383au3bye3rv1.cloudfront.net/static/dist/logo-map-mobile-ACNY67Z7.png"
          alt=""
          className="mx-auto my-5"
        />
      </section>

      <section className="bg-slate-500 min-h-[300px] px-10 rounded-xl flex justify-center items-center">
        <div className="w-full max-w-[500px]">
          <h2 className="text-4xl font-semibold leading-tight text-center text-white">
            Get Started Today
          </h2>
          <p className="text-md opacity-60 py-5 text-center text-white">
            Create your account in a few minutes and get access to thousands of
            jobs from top companies around the world.
          </p>
          <button className="bg-white text-slate-800 hover:bg-slate-800 hover:text-white duration-300 uppercase px-8 py-4 rounded-xl w-full">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    title: "Design",
    icon: <LuPenTool size={40} />,
    number: 140,
  },
  {
    title: "Technology",
    icon: <BiChip size={40} />,
    number: 230,
  },
  {
    title: "Marketing",
    icon: <BsGraphUpArrow size={40} />,
    number: 180,
  },
];

const Benefits = [
  {
    icon: <AiOutlineStar size={40} className="my-5" />,
    title: "Highlighters",
    des: "Get Highlighted by the company that you've been worked for. You'll get a chance to meet new people.",
  },
  {
    icon: <BsBriefcase size={40} className="my-5" />,
    title: "Career Booster",
    des: "Boost your career journey faster than before with our exclusive program.",
  },
  {
    icon: <MdOutlineAssignment size={40} className="my-5" />,
    title: "Assessment",
    des: "Work on interactive assessments that simulate real-world job tasks.",
  },
  {
    icon: <CgProfile size={40} className="my-5" />,
    title: "Featured Profile",
    des: "Get your profile featured by the company and stand out from the crowd.",
  },
];
