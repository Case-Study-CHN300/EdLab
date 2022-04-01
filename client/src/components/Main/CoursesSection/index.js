import React from "react";
import Icon1 from "../../../images/planet-3.svg";
import Icon2 from "../../../images/planet-4.svg";
import Icon3 from "../../../images/planet-1.svg";
import {
  CoursesContainer,
  CoursesH1,
  CoursesWrapper,
  CoursesCard,
  CoursesIcon,
  CoursesH2,
  CoursesP,
} from "./CourseElements";
const Courses = () => {
  return (
    <CoursesContainer id="courses">
      <CoursesH1>Courses</CoursesH1>
      <CoursesWrapper>
        <CoursesCard>
          <CoursesIcon src={Icon1} />
          <CoursesH2>Reduce Expenses</CoursesH2>
          <CoursesP>
            We help reduce your fess and increase your overall revenue.
          </CoursesP>
        </CoursesCard>
        <CoursesCard>
          <CoursesIcon src={Icon2} />
          <CoursesH2>Reduce Expenses</CoursesH2>
          <CoursesP>
            We help reduce your fess and increase your overall revenue.
          </CoursesP>
        </CoursesCard>
        <CoursesCard>
          <CoursesIcon src={Icon3} />
          <CoursesH2>Reduce Expenses</CoursesH2>
          <CoursesP>
            We help reduce your fess and increase your overall revenue.
          </CoursesP>
        </CoursesCard>
      </CoursesWrapper>
    </CoursesContainer>
  );
};

export default Courses;
