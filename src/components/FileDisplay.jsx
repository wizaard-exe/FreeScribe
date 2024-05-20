const FileDisplay = ({file,audioStream,resetFile}) => {

  return (
    <main className='flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 w-full max-w-prose mx-auto'>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>Your <span className='text-blue-400 bold'>File</span></h1>
            <div className=' flex flex-col text-left my-4'>
                <h3 className='font-semibold mb-3'>File Name</h3>
                <p className='truncate'>{file ? file.name : "Audio file"}</p>
            </div>
            <div className='flex flex-col mb-2'>
                <audio className='w-full' controls>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <button onClick={resetFile} className='specialBtn  px-3 p-2 rounded-lg text-blue-400 hover:text-blue-800 flex items-center gap-2 font-medium'>Reset</button>
                <button className='specialBtn  px-3 p-2 rounded-lg text-blue-400 flex items-center gap-2 font-medium '>
                    <p>Transcribe</p>
                    <i className="fa-solid fa-pen-nib"></i>
                </button>
            </div>
    </main>
  )
}

export default FileDisplay