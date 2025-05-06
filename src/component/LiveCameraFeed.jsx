import React, { useRef, useState } from "react";

const LiveCameraFeed = () => {
  const videoRef = useRef(null);
  const [openCamera, setOpenCamera] = useState(false);

  const isopenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setOpenCamera(true);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="rounded-md shadow-md overflow-hidden h-full w-full bg-white flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center flex-col relative">
        {!openCamera ? (
          <>
            <button
              className="bg-blue-500  cursor-pointer p-3 mt-39 rounded-md text-white"
              onClick={isopenCamera}
            >
              Open Camera
            </button>
          </>
        ) : (
          <></>
        )}

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover "
        />
        {
          openCamera?<>  <div className="absolute right-2 top-2  bg-white  bg-opacity-75 rounded-md shadow-sm">  
              <img className="w-[200px] h-[140px] rounded-md object-cover" src="https://images.pexels.com/photos/31862828/pexels-photo-31862828/free-photo-of-young-man-in-blue-shirt-sitting-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          
          </div></>:<></>
        }
         
      
      </div>
    </div>
  );
};

export default LiveCameraFeed;
