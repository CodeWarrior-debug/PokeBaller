import React from "react";
import LoginHeader from "../components/loginheader";
import Navbar from "../components/navbar";
import Suggestions from "../components/suggestions";
import Welcome from "../components/welcome";

const Home = () => {
  return (
    <>
      <LoginHeader />
      <Navbar />
      <Welcome/>
      <Suggestions/>


{/* Componenet - Suggested Card */}


        {/* {{#each suggested}} */}


        {/* <button onclick="add('{{rid}}', '{{rname}}', '{{rrarity}}', '{{rimages}}')" className="card col-2">
            <img src="{{rimages}}" className="img-responsive w-100" alt="{{rname}}"/>
            <div className="overlay">
                <p className="rare-text">
                  {/* {{rrarity}} */}
                  {/* </p>
            </div>
        </button> */} 


        {/* {{/each}} */}


    </>
  );
};

export default Home;
