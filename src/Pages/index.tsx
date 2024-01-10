import FloorPlan from "./FloorPlan";
import Frame from "../Frame";
const MainPage = () => {
  return (
    <div>
      <Frame>
        <div style={{ margin: "auto" }}>
          <FloorPlan />
        </div>
      </Frame>
    </div>
  );
};
export default MainPage;
