import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "./ThirdForm";
import ThirdForm from "./ThirdForm";

const SecondForm = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [thirdForm, setThirdForm] = useState(false);

  const handleChange = (html) => {
    setEditorHtml(html);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setThirdForm(true);
  };

  return thirdForm ? (
    <ThirdForm />
  ) : (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h2 style={{ color: "black", margin: "5% 0" }}> Job Description </h2>
        <ReactQuill theme="snow" value={editorHtml} onChange={handleChange} />
        <button type="submit" className="form1_btn">
          {" "}
          Next
        </button>
      </form>
    </div>
  );
};

export default SecondForm;
