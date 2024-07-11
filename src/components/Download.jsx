import { useContext } from "react";
import { TextContext } from "../context/TextContext";

const Download = () => {
    const { content } = useContext(TextContext);

    return (
        content && <a
            href={`data:text/plain;charset=utf-8,${encodeURIComponent(content)}`}
            download="markdown.md"
            className="bg-blue-500 mt-3 py-3 px-5 rounded-md text-2xl hover:bg-blue-600 flex gap-1 items-center"
        >
            <i className="fa-solid fa-file-arrow-down"></i>
            markdown.md
        </a>
    );

};

export default Download;