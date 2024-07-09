import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import Preview from './components/Preview'
import { TextProvider } from './context/TextContext'

function App() {

    return (
        <TextProvider>
            <div className='h-[100vh] bg-slate-400'>
                <Header />

                <div className='flex justify-between w-2/3 mx-auto'>
                    <div>
                        <h1>Editor</h1>
                        <Editor />
                    </div>
                    <div>
                        <h1>Preview</h1>
                        <Preview />
                    </div>
                </div>
            </div>
        </TextProvider>
    )
}

export default App
