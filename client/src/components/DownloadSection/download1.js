import React from "react";
import Axios from "axios";
import FileDownload from "js-file-download";
const Download = () => {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:5000/download1",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log("res");
      FileDownload(res.data, "Intro_to_Research_Safety.pdf");
    });
  };
  return (
    <>
      <div>
        <button onClick={(e) => download(e)}>Download</button>
      </div>
    </>
  );
};

export default Download;
