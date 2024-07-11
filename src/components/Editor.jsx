import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import ReactMarkdownEditorLite from "react-markdown-editor-lite";
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';

const Editor = () => {
    const { content, setContent } = useContext(TextContext);

    const mdParser = new MarkdownIt();

    const handleEditorChange = ({ text }) => {
        setContent(text);
    };

    return (
        <>
            <ReactMarkdownEditorLite
                value={content}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
                config={{
                    view: {
                        menu: true,
                        md: true,
                        html: false,
                    },
                }}
                className="h-[60vh] max-lg:w-[80%]"
            />
        </>
    )
};

export default Editor;