/* eslint-disable react-hooks/exhaustive-deps */
import { Link, NavLink, Outlet } from "react-router-dom";
import HomeDataCard from "../../components/HomeDataCard";
import ImageSlideShow from "../../components/ImageSlideShow";
import {
  FcAdvance,
  FcApproval,
  FcComboChart,
  FcDocument,
  FcFaq,
  FcGraduationCap,
  FcIdea,
  FcInspection,
  FcReading,
} from "react-icons/fc";
import explorePass from "../../assets/svg/explore-pass.svg";
import PassCard from "../../components/PassCard";
import ExamCard2 from "../../components/ExamCard2";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory, getAllExams } from "../../redux/slices/examSlice";
import { getAllSliderImage } from "../../redux/slices/adminSlice";

function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.exam);
  const { exams } = useSelector((state) => state.exam);
  // console.log(exams?.allExams);
  const dispatch = useDispatch();

  async function getData() {
    await dispatch(getAllCategory());
    await dispatch(getAllExams());
    await dispatch(getAllSliderImage());
  }


  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="mt-[70px] w-full float-right flex flex-col bg-[#fbfcfc]">
      {/* Image Slide Show */}
      <div>
        <ImageSlideShow />
      </div>

      <div className="w-full lg:px-[8rem] flex flex-col gap-20">
        {/* section */}
        <div className="w-full flex flex-col mt-20 justify-center items-center gap-10 ">
          <div className="text-slate-800 lg:text-3xl md:text-2xl">
            One Destination for{" "}
            <span className="text-slate-900 lg:text-3xl md:text-2xl font-bold">
              {" "}
              Complete Exam Preparation
            </span>
          </div>
          <div className="flex justify-center items-center lg:gap-5 md:gap-3 sm:gap-2">
            <span>Learn</span>
            <FcAdvance />
            <span>Practice</span>
            <FcAdvance />
            <span>Improve</span>
            <FcAdvance />
            <span>Success</span>
          </div>
          <div>
            {isLoggedIn == "true" ? (
              <Link to={"/explore-exams"}>
                <button className="bg-green-400 px-5 py-2 text-white rounded-md hover:bg-green-500">
                  Explore Test Series
                </button>
              </Link>
            ) : (
              <Link to={"/login"}>
                <button className="bg-green-400 px-5 py-2 text-white rounded-md hover:bg-green-500">
                  Get Started Now
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* section */}
        <div className="w-full shadow-lg flex justify-center items-start flex-wrap gap-10 px-5 py-10 bg-white rounded-md">
          <HomeDataCard
            icon={<FcGraduationCap size={48} />}
            name="Student Selections"
            data="50k+"
          />
          <HomeDataCard
            icon={<FcDocument size={48} />}
            name="Tests Attempted"
            data="242 Crore+"
          />
          <HomeDataCard
            icon={<FcReading size={48} />}
            name="Classes Attended"
            data="5.5 Crore+"
          />
          <HomeDataCard
            icon={<FcApproval size={50} />}
            name="Valued By"
            data="4.4 Crore+ Students"
          />
        </div>

        {/* section */}
        <div className="w-full flex flex-col gap-5">
          <div className="text-2xl font-semibold">Categories</div>
          {/* categories */}
          <div className="flex items-center gap-5 rounded-md bg-white p-5 shadow-sm overflow-x-auto">
            {categories.allCategories?.map((category) => {
              return (
                <NavLink
                  key={category._id}
                  to={`/category/${category._id}`}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#0ad0f4] text-white rounded-3xl "
                      : "text-slate-500 border-slate-500 border-[1px] rounded-3xl hover:text-[#0ad0f4] hover:border-[#0ad0f4]"
                  }
                >
                  <button className=" flex justify-center items-center px-5 py-2 ">
                    {category.category_name}
                  </button>
                </NavLink>
              );
            })}
          </div>
          <Outlet />
        </div>

        {/* section */}
        <div className="flex flex-col items-center w-full lg:flex-row ">
          {/* left */}
          <div className="flex p-5 w-11/12 lg:w-1/2">
            <img src={explorePass} alt="" />
          </div>
          {/* right */}
          <div className="flex flex-col w-11/12 lg:w-1/2 gap-10">
            <div className="text-sm lg:text-xl font-semibold">
              Enroll in Test Series for 670+ exams with
            </div>
            <div className="text-xl lg:text-3xl font-semibold">
              GyanBook{" "}
              <span className="text-[#0ad0f4] text-2xl lg:text-4xl">Pass</span>
            </div>
            <div className="text-sm lg:text-xl">
              Get unlimited access to the most relevant Mock Tests, on India's
              Structured Online Test series platform
            </div>
            <div className="text-sm lg:text-xl font-semibold">
              What you get with GyanBook Pass
            </div>
            <div className="flex flex-wrap">
              <PassCard
                icon={<FcComboChart size={48} />}
                name={"In-depth Performance Analysis"}
              />
              <PassCard icon={<FcIdea size={48} />} name={"All India Rank"} />
              <PassCard
                icon={<FcInspection size={48} />}
                name={"Latest Exam Patterns"}
              />
              <PassCard
                icon={<FcFaq size={48} />}
                name={"Multi-lingual Mock Tests"}
              />
            </div>
            <div>
              <Link to={"/explore-pass"}>
                <button className="bg-[#0ad0f4] text-white px-5 py-2 rounded-md transition-all duration-200 hover:bg-[#12c1e0] hover:scale-95">
                  Explore GyanBook Pass
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* section */}
        <div className="w-full flex flex-col gap-10">
          <div className="text-2xl font-semibold">Popular Exams</div>
          <div className="flex items-center flex-wrap gap-10">
            {exams?.allExams?.map((exam) => {
              return <ExamCard2 key={exam._id} exam={exam} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
