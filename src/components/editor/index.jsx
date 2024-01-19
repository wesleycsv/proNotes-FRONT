import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = (props) => {
  const [currentContent, setCurrentContent] = React.useState("");
  const [timer, setTimer] = React.useState(null);

  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/gi, "").slice(0, 30);
    props.updateNota(props.note, { title: title, body: content });
  };

  const handleChange = (content, delta, source) => {
    clearTimeout(timer);
    if (source == "user") {
      setCurrentContent(content);
      setTimer(setTimeout(() => updateNote(content), 2000));
    }
  };

  React.useEffect(() => {
    setCurrentContent(props.note.body);
  }, [props.note]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      value={currentContent}
      modules={modules}
      onChange={handleChange}
    />
  );
};

export default Editor;
