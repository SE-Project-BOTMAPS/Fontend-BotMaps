import "../list.css";

// type
import type { ResponseEvent } from "../../../../state/slices/types/sideBar.type.ts";

interface listData {
  isStudyRoom: boolean;
  data?: ResponseEvent[];
}
const DailyList = ({ data, isStudyRoom }: listData) => {
  return (
    <div>
      <h3>{isStudyRoom ? "Study Room" : "Reserve Room"}</h3>
      <div>
        <div>
          <div className="flex">
            <label className="ml-7">Room No.</label>
            <label className="ml-auto mr-16">Time</label>
            {isStudyRoom ? (
              <label className="mr-48">Class</label>
            ) : (
              <label className="mr-32">Instructor</label>
            )}
          </div>
          <hr />
        </div>
        <ul className="list-container px-2">
          {data?.map((data, index) => (
            <li key={index} className="list-item-contianer my-3 px-6 py-5">
              <div className="flex">
                <h6>{data.location}</h6>
                <p className="ml-auto">{data.start_dt}</p>
                {isStudyRoom ? (
                  <div className="me-5">
                    <h6 className="flex ">
                      {data.title}
                      {/*<span>- {data.classDescription?.courseCode}</span>*/}
                    </h6>
                    {/*<p className="text-left">*/}
                    {/*  {data.classDescription?.courseInstructor}*/}
                    {/*</p>*/}
                  </div>
                ) : (
                  <div className="instructor mr-7">
                    <p>{data.who}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DailyList;
