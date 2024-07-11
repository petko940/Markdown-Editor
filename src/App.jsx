import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import Preview from './components/Preview'
import { TextProvider } from './context/TextContext'
import Download from './components/Download'

function App() {

    return (
        <TextProvider>
            <div className='h-[100vh] bg-slate-400'>
                <Header />

                <div className='flex justify-center items-center max-lg:justify-center gap-3 w-2/3 max-lg:w-full mx-auto'>
                    <div>
                        <h1 className='text-center text-teal-50 text-2xl'>Editor</h1>
                        <Editor />
                    </div>
                    <div>
                        <h1 className='text-center text-teal-50 text-2xl'>Preview</h1>
                        <Preview />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <Download />
                </div>
            </div>
        </TextProvider>
    )
}

export default App
