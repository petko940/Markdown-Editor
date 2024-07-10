import { useContext } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { TextContext } from "../context/TextContext";

const Preview = () => {
    const { content } = useContext(TextContext);

    return (
        <div className='w-[28vw] h-[60vh] bg-gray-100 p-4 overflow-auto'>
            {content
                ? <MarkdownPreview
                    source={content}
                    style={{ padding: 20 }}
                />
                : <>
                    <p className='text-center'>
                        No content
                    </p>
                </>}
        </div>
    )
}

export default Preview;