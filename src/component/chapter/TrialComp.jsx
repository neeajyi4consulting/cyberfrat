




{/**import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import Sidebar from "../sidebar/Sidebar";
import { useHistory, useParams } from "react-router";
// import { getChapterDetails, getChapterList } from "../../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import {
//   courseClientList,
//   fetchCourseDetails,
//   getChapterClientList,
//   getQuiz,
// } from "../../redux/actions/courseAction";
// import {
//   changeStatusOfChapter,
//   chapterDetails,
//   chapterStatus,
//   fetchChapterDetails,
// } from "../../redux/actions/chapterAction";

function ChapterVideo() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const allState = useSelector((state) => state)
  const { course, user, chapter  } = allState
  {/**const testVar = useSelector((state)=>state)
  const { course } =testVar;

  
  const currentUser = useSelector((state) => state.user?.currentUser);
  const chapterInfo = useSelector((state) => state.chapter?.chapterInfo);
  const courseStatus = useSelector((state) => state.course?.courseClientList);
  const isQuizCompleted= useSelector((state)=>state.course?.quizCompleted);
  const chapterClientList = useSelector(
    (state) => state.course?.chapterClientList
  );

  const [courseName, setCourseName] = useState("");
  const [chapterId, setChapterId] = useState();
  const [showQuizButton, setShowQuizButton] = useState(false);
  const [chapterName, setChapterName] = useState("");
  const [chapterLink, setChapterLink] = useState(
    chapterClientList[0]?.name?.course?.link == undefined
      ? "https://vimeo.com/636272173/ab7fc425e5"
      : chapterClientList[0]?.name?.link
  );
  const [chapterAbout, setChapterAbout] = useState("");
  const [status, setStatus] = useState();
  const [seconds, setSeconds] = useState(0);
  const [totalVideoLength, setTotalVideoLength] = useState();

  const fetchChapterList = async (id) => {
    const response = await getChapterList(id);
    setCourseName(response.data?.data[0]?.course.course_title);
  };

  const handleVideoPlay = async () => {
    const data = new FormData();
    data.append("user_id", currentUser?.user_id);
    data.append("chapter_id", chapterId);
    data.append("status", status);
    data.append("completedVideoLenght", seconds);
    data.append("totalVideoLength", totalVideoLength);
    data.append("course_id", +id);
    console.log(
      currentUser?.user_id,
      chapterId,
      status,
      seconds,
      totalVideoLength,
      +id
    );
    dispatch(changeStatusOfChapter(data));
    if (status == 1) {
      window.location.reload(true);
    }
  };

  const handleClick = async (val) => {
    dispatch(chapterDetails(val?.name?.id));
    // console.log("this is chapter details from video", chapterInfo?chapterInfo:"testhe" );
    setChapterId(val?.name?.id);
    const response = await getChapterDetails(chapterId);
    setChapterName(response.data?.data?.chapter_name);
    setChapterLink(response.data?.data?.link);
    setChapterAbout(response.data?.data?.about);
    const data = new FormData();
    data.append("user_id", currentUser?.user_id);
    data.append("chapter_id", val?.name?.id);
    dispatch(chapterStatus(data));
  };

  const getClientChapterList = async () => {
    const data = new FormData();
    data.append("user_id", currentUser?.user_id);
    data.append("course_id", id);
    dispatch(getChapterClientList(data));
  };

  const getClientCourseList = async () => {
    const data = new FormData();
    data.append("user_id", currentUser?.user_id);
    data.append("course_id", id);
    dispatch(courseClientList(data));
    console.log("isQUizCompletd", courseStatus === "completed" && !isQuizCompleted);
    if (courseStatus === "completed" && !isQuizCompleted) {
      setShowQuizButton(false);
      console.log("test clg if true",showQuizButton);
    } else {
      setShowQuizButton(true);
      console.log("test clg if falss",showQuizButton);
    }
  };

  useEffect(() => {
    getClientChapterList();
    getClientCourseList();
    fetchChapterList(id);
    fetchCourseDetails(id);
    // dispatch(fetchChapterDetails(chapterClientList[0]?.name?.id))
    dispatch(getQuiz(id));
    console.log("effect clg",isQuizCompleted, courseStatus);
  }, []);
 */}

 
  if (course?.loading) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        <div>&nbsp;&nbsp;&nbsp;please wait</div>
      </div>
    );
  }

  return (
    <>
      <Sidebar />

      <div className="bg-gray-200 pt-8">
        <div className="bg-white px-5 py-3 mx-16 rounded-lg hidden md:block">
          <span className="font-bold text-2xl mx-8">
            test hello
            {/* {" "}
            {chapterName ? chapterName : courseName} */}
          </span>
          <span className="float-right ">Home / Dashboard</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:mx-16 mt-10">
          <div className="bg-white  relative col-span-2">
            <div>
              {/* {chapterClientList[0]?.name?.course?.link == undefined ? (
                <div className="flex h-screen w-screen justify-center items-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                  <div>&nbsp;&nbsp;&nbsp;please wait</div>
                </div>
              ) : ( */}
                  <Vimeo
                  video="https://vimeo.com/41675737"
                  height="600px"
                  width="900px"
                  responsive
                  // controls={false}
                  // autoplay
                  onEnd={()=>window.location.reload()}
                  onProgress={(response) => {
                    // setStatus(response.percent);
                    // setSeconds(response.seconds);
                    // setTotalVideoLength(response.duration);
                    // handleVideoPlay();

                  }}
                />
              {/* )} */}
            </div>
            <div className="h-auto border-b-1 border-gray-700 shadow-md bg-white grid grid-cols-1 md:grid-cols-5">
              <Link
                to="/"
                className="text-blue-400 mx-3 py-4 px-8 border-b-2 border-blue-400"
              >
                About
              </Link>
              
              {/* {!isQuizCompleted=="" ? 
        <button>Quizz</button>
      :  */}
                    <button
                    onClick={() => history.push(`/courses/chapterquiz/${id}`)}
                    className={"text-gray-700 mx-3 py-4 px-8 relative"}
                  >
                    Quiz
                  </button>
              {/* } */}
              <button
                // disabled={!isQuizCompleted}
                onClick={() => history.push(`/certificate/${id}`)}
                className={"text-gray-700 mx-3 py-4 px-8 relative"}
              >
                Certificate
              </button>
            </div>
            <div className="bg-white">
              <p className="p-5">About This Course</p>
              <p className="text-gray-500 px-5 py-2 h-auto">test about</p>
            </div>
          </div>
          <div>
            <div className="bg-white">
              <div className="p-5">
                <p className="text-lg font-bold">Chapters In This Course</p>
              </div>
              <div>
                {!course?.chapterClientList
                  ? null
                  : 
                  course?.chapterClientList.map((val) => {
                      return (
                        <div key={val?.name?.id}>
                          <div
                            className={`border-t-2 border-fuchsia-600 p-5  cursor-pointer ${
                              val?.is_completed
                                ? "bg-green-500 text-gray-100"
                                : "bg-white"
                            } `}
                            // onClick={() => handleClick(val)}
                          >
                            <p className="inline-block overflow-hidden">
                              &nbsp; {val?.name?.chapter_name}
                            </p>
                            <p className="text-sm text-gray-600 pl-7">Video</p>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChapterVideo;
 */}