import "./App.css";
import Sidebar from "./Component/sidebar";
import "./styles/styles.css";

function App() {
  return (
    <div className="">
      <Sidebar />
      <div className="mapcontainer">
      {/* study room */}
      <div style={{ left: "0px", top: "300px", width: "100px", height: "200px", backgroundColor: "#94C8DA" }} className="study">518</div>
      <div style={{ left: "200px", top: "500px", width: "200px", height: "100px", backgroundColor: "#94C8DA" }} className="study">516</div>
      <div style={{ left: "100px", top: "200px", width: "200px", height: "100px", backgroundColor: "#94C8DA" }} className="study">521</div>
      <div style={{ left: "400px", top: "0px", width: "100px", height: "150px", backgroundColor: "#94C8DA" }} className="study">501</div>

      {/* aj room */}
      <div style={{ left: "150px", top: "400px", width: "50px", height: "50px", backgroundColor: "#D9C07E" }} className="arjan">520</div>
      <div style={{ left: "150px", top: "350px", width: "50px", height: "50px", backgroundColor: "#D9C07E" }} className="arjan">519</div>
      <div style={{ left: "400px", top: "460px", width: "50px", height: "40px", backgroundColor: "#D9C07E" }} className="arjan">515</div>
      <div style={{ left: "450px", top: "450px", width: "50px", height: "50px", backgroundColor: "#D9C07E" }} className="arjan">514</div>
      <div style={{ left: "330px", top: "200px", width: "50px", height: "100px", backgroundColor: "#D9C07E" }} className="arjan">532</div>
      <div style={{ left: "380px", top: "200px", width: "50px", height: "50px", backgroundColor: "#D9C07E" }} className="arjan">508</div>
      <div style={{ left: "380px", top: "250px", width: "50px", height: "50px", backgroundColor: "#D9C07E" }} className="arjan">509</div>
      <div style={{ left: "440px", top: "300px", width: "60px", height: "50px", backgroundColor: "#D9C07E" }} className="arjan">510</div>
      <div style={{ left: "500px", top: "255px", width: "50px", height: "45px", backgroundColor: "#D9C07E" }} className="arjan">504</div>
      <div style={{ left: "550px", top: "255px", width: "50px", height: "45px", backgroundColor: "#D9C07E" }} className="arjan">505</div>
      <div style={{ left: "550px", top: "200px", width: "50px", height: "45px", backgroundColor: "#D9C07E" }} className="arjan">503</div>
      <div style={{ left: "350px", top: "0px", width: "50px", height: "100px", backgroundColor: "#D9C07E" }} className="arjan">529</div>
      <div style={{ left: "370px", top: "100px", width: "30px", height: "50px", backgroundColor: "#D9C07E" }} className="arjan">595</div>
      <div style={{ left: "550px", top: "150px", width: "50px", height: "50px", backgroundColor: "#D9C07E" }} className="arjan">559</div>

      {/* lab room */}
      <div style={{ left: "0px", top: "500px", width: "200px", height: "100px", backgroundColor: "#D9B3A9" }} className="lab">oasys</div>

      {/* Network room */}
      <div style={{ left: "300px", top: "0px", width: "50px", height: "100px", backgroundColor: "#87DAD8" }} className="network">NW</div>

      {/* Lift */}
      <div style={{ left: "200px", top: "100px", width: "100px", height: "50px", backgroundColor: "#9EABD9" }} className="lift">Lift</div>

      {/* restroom */}
      <div style={{ left: "150px", top: "0px", width: "50px", height: "50px", backgroundColor: "#9EABD9" }} className="restroom">GR</div>
      <div style={{ left: "220px", top: "0px", width: "80px", height: "50px", backgroundColor: "#9EABD9" }} className="restroom">MR</div>

      {/* none */}
      <div style={{ left: "500px", top: "0px", width: "100px", height: "150px", backgroundColor: "#4D4D4D" }} className="none"></div>
      <div style={{ left: "300px", top: "100px", width: "40px", height: "50px", backgroundColor: "#4D4D4D" }} className="none"></div>
      <div style={{ left: "200px", top: "350px", width: "150px", height: "100px", backgroundColor: "#4D4D4D" }} className="none"></div>
      <div style={{ left: "250px", top: "50px", width: "50px", height: "25px", backgroundColor: "#4D4D4D" }} className="none"></div>
      <div style={{ left: "250px", top: "75px", width: "50px", height: "25px", backgroundColor: "#4D4D4D" }} className="none"></div>
      <div style={{ left: "440px", top: "350px", width: "60px", height: "50px", backgroundColor: "#4D4D4D" }} className="none"></div>
      <div style={{ left: "400px", top: "370px", width: "40px", height: "30px", backgroundColor: "#4D4D4D" }} className="none"></div>
      <div style={{ left: "440px", top: "255px", width: "60px", height: "45px", backgroundColor: "#4D4D4D" }} className="none"></div>
      <div style={{ left: "450px", top: "200px", width: "100px", height: "45px", backgroundColor: "#4D4D4D" }} className="none"></div>

      {/* walkway */}
      <div style={{ left: "150px", top: "00px", width: "450px", height: "300px", backgroundColor: "grey", zIndex: "-1" }} className="walk"></div>
      <div style={{ left: "0px", top: "300px", width: "400px", height: "300px", backgroundColor: "grey", zIndex: "-1" }} className="walk"></div>
      <div style={{ left: "400px", top: "300px", width: "100px", height: "200px", backgroundColor: "grey", zIndex: "-1" }} className="walk"></div>
      <div style={{ left: "100px", top: "50px", width: "50px", height: "250px", backgroundColor: "grey", zIndex: "-1" }} className="walk"></div>

      {/* fire */}
      <div style={{ left: "400px", top: "400px", width: "100px", height: "50px", backgroundColor: "#DAAEA7" }} className="fire"></div>
      <div style={{ left: "380px", top: "415px", width: "20px", height: "20px", backgroundColor: "#DB5F4D" }} className="fire"></div>
      <div style={{ left: "565px", top: "180px", width: "20px", height: "20px", backgroundColor: "#DB5F4D" }} className="fire"></div>
      <div style={{ left: "80px", top: "150px", width: "20px", height: "20px", backgroundColor: "#DB5F4D" }} className="fire"></div>

      {/* stair */}
      <div style={{ left: "50px", top: "50px", width: "100px", height: "100px", backgroundColor: "#566573" }} className="stair">stair</div>

      {/* line */}
      {/* <div style={{ left: "300px", top: "00px", width: "50px", height: "0px", backgroundColor: "#4D4D4D" }} className="R516"></div> */}
      </div>
    </div>
  );
}

export default App;
