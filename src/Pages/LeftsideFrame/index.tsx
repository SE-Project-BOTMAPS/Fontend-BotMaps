import "./leftside.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import DailyList from "../../Component/list/dailyList/dailyList";
interface classDescription {
  courseName: string;
  courseCode: string;
  courseInstructor: string;
}
interface data {
  roomNumber: string;
  time: string;
  classDescription?: classDescription;
  instrunctor?: string;
}
interface listData {
  isStudyRoom: boolean;
  data: data[];
}
const studentData: data[] = [
  {
    roomNumber: "401",
    time: "13:00-14:30",
    classDescription: {
      courseName: "Course-Name",
      courseCode: "261xxx",
      courseInstructor: "Instructor",
    },
  },
  {
    roomNumber: "501",
    time: "11:30-12:30",
    classDescription: {
      courseName: "Course-Name",
      courseCode: "261xxx",
      courseInstructor: "Instructor",
    },
  },
  {
    roomNumber: "521",
    time: "11:30-12:30",
    classDescription: {
      courseName: "Course-Name",
      courseCode: "261xxx",
      courseInstructor: "Instructor",
    },
  },
];
const reserveData: data[] = [
  {
    roomNumber: "404",
    time: "12:30-14:00",
    instrunctor: "Instructor name",
  },
  {
    roomNumber: "403",
    time: "12:30-14:00",
    instrunctor: "Instructor name",
  },
];

const LeftsideFrame = () => {
  return (
    <div className="Leftside-container">
      <div>
        <img src="/Logo/botmapsLogo.png" width={150} />
      </div>
      <hr />
      <div>
        <div style={{ display: "flex", alignItems: "end" }}>
          <div style={{ marginBottom: "1px", marginRight: "10px" }}>
            <SearchIcon sx={{ fontSize: "1.5rem", color: "#757575" }} />
          </div>
          <TextField
            size="small"
            id="search"
            label="search"
            variant="standard"
            sx={{ width: "100%" }}
          />
        </div>
        <div>
          <DailyList isStudyRoom={true} data={studentData} />
        </div>
        <div>
          <DailyList isStudyRoom={false} data={reserveData} />
        </div>
      </div>
    </div>
  );
};
export default LeftsideFrame;
