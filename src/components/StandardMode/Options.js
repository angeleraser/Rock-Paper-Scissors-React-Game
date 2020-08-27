import React from "react";
import Option from "../../components/Option/Option";
export const Options = () => {
  return (
    <>
      <Option name="Rock" animations='animate__backInUp'/>
      <Option name="Paper" animations='animate__backInLeft' />
      <Option name="Scissors"  animations='animate__backInRight'/>
      <div className="bg-form"></div>
    </>
  );
};
