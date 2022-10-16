import React from "react";

const BottomSection = () => {
  return (
    <div className="bg-dark d-flex">
      <div>
      <div className="bg-dark mt-5 d-flex">
        <h1 className="font-weight-bold text-light mx-3">AI</h1>
        <h1 className="font-weight-bold text-primary">framework</h1>
      </div>
      <div className="bg-dark ">
        <div className="vr text-light mx-3">
          <h4 className=" mx-2 text-white">Personalization</h4>
        </div>
        <div className="mx-3 bg-dark">
          <p className="text-light">
            The advanced intelligent system assists in reaching out to customer
            and increasing conversion funnel.
          </p>
        </div>
      </div>
      <div className="bg-dark ">
        <div className="vr text-light mx-3">
          <h4 className=" mx-2 text-white">Efficiency</h4>
        </div>
        <div className="mx-3 bg-dark">
          <p className="text-light">
            Our data model help improve the content. Real-time delivery insights
            are monitored using AI and provide meaningful actions.
          </p>
        </div>
      </div>
      <div className="bg-dark ">
        <div className="vr text-light mx-3">
          <h4 className=" mx-2 text-white">Automtion</h4>
        </div>
        <div className="mx-3 bg-dark">
          <p className="text-light">
            Send email at scale using code written in your preferred programming
            language such as Python, Java or Curl.
          </p>
        </div>
      </div>
      </div>
      <img src="./images/bottom_img.png" alt="bottom" className="mx-5 mt-3"/>
    </div>
  );
};

export default BottomSection;
