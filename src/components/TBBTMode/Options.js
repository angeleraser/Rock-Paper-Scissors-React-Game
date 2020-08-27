import React from "react";
import Option from "../../components/Option/Option";
export const Options = () => {
  return (
    <>
      <Option name="Rock" animations='animate__backInRight'/>
      <Option name="Paper" animations='animate__backInRight' />
      <Option name="Scissors" animations='animate__backInDown' />
      <Option name="Lizard" animations='animate__backInLeft' />
      <Option name="Spock" animations='animate__backInLeft'/>
      <div className="bg-form"></div>
    </>
  );
};
