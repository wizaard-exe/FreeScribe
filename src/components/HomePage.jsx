import React, { useState,useRef} from 'react'

const HomePage = ({setFile,setAudioStream}) => {
    const [recordingStatus,setRecordingStatus] = useState('inactive');
    const [audioChunks,setAudioChunks] = useState([]);
    const [duration,setDuration] = useState(0);

    const mediaRecorder = useRef(null);
    const mimeType = 'audio/webm';


    const startRecording = async ()=>
    {
        let tempStream = '';
        console.log('start recoindg ');
        try{
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                console.error('MediaDevices API or getUserMedia not supported in this browser.');
                return;
            }

            const streamData = navigator.mediaDevices.getUserMedia({audio:true,video:false});



            console.log(streamData);
            tempStream = streamData;

        }
        catch(e)
        {
            console.log(e);
            return
        }
        // const media = new MediaRecorder(tempStream,{type:mimeType});
        // mediaRecorder.current = media;
        // mediaRecorder.current.start();
    }
    startRecording();

  return (
        <main className='flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4  justify-center pb-20'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>Free<span className='text-blue-400 bold'>Scribe</span></h1>
            <h3 className='font-medium md:text-lg'>Record <span className='text-blue-400'>&rarr;</span> Transcribe <span className='text-blue-400'>&rarr;</span> Translate</h3>
            <button className='flex specialBtn px-4 py-2 rounded-xl items-center text-base justify-between gap-4 mx-auto w-72 max-w-full my-4'>
                <p className='text-blue-400 lg:text-xl' >Record</p>
                <div className='flex items-center gap-2 lg:text-xl'>
                    <i className={"fa-solid duration-200 fa-microphone "}></i>
                </div>
            </button>
            <p className='text-base'>Or <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'>upload <input onChange={(e)=>{
                setFile(e.target.files[0])
            }} className='hidden' type='file' accept='.mp3,.wave' /></label> a mp3 file</p>
            <p className='italic text-slate-400'>Free now free forever</p>
        </main> 
  )
}

export default HomePage