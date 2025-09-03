import React from "react";
import "./HeaderSection.css";

const HeaderSection = () => {
  return (
    <header className="header-section">
      <div className="overlay">
        <div className="header-content">
          <h1>Work with us</h1>
          <p>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
            Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>

          <div className="header-links">
            <a href="#">Open roles →</a>
            <a href="#">Internship program →</a>
            <a href="#">Our values →</a>
            <a href="#">Meet our leadership →</a>
          </div>

          <div className="stats">
            <div>
              <h2>12</h2>
              <p>Offices worldwide</p>
            </div>
            <div>
              <h2>300+</h2>
              <p>Full-time colleagues</p>
            </div>
            <div>
              <h2>40</h2>
              <p>Hours per week</p>
            </div>
            <div>
              <h2>Unlimited</h2>
              <p>Paid time off</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
