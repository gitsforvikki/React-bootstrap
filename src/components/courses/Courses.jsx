import { Image } from "react-bootstrap";
import course1 from "../../assets/course/course1.svg";
function Courses() {
  return (
    <div className="">
      <h1>Courses</h1>

      <div className=" course-card relative" style={{ position: "relative" }}>
        <Image src={course1} fluid />
        <div
          className="course-description "
          style={{
            position: "absolute",
            bottom: 0,
            left: "70px",
            right: 0,
            marginTop: -"310px",
            width: "200px",
          }}
        >
          <p
            style={{ margin: 0, width: "200px" }}
            className="bg-light py-3  rounded "
          >
            Creating Streamlined Safeguarding Processes with OneRen
            <h6 className="text-success mt-2">Read more... </h6>
          </p>
      
        </div>
      </div>
    </div>
  );
}

export default Courses;
