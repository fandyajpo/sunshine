import React, { useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";

const A = () => {
  const [message, setMessage] = useState();
  const addAudioElement = async (blob: Blob) => {
    try {
      const formData = new FormData();
      formData.append("audio", blob, "recorded-audio.webm");
      const posting = await axios.post(
        "http://speech12.pythonanywhere.com/api/speech-to-text",
        formData,
        {
          method: "POST",
          headers: {},
        }
      );
      setMessage(posting.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-red-500 w-full h-screen">
      {message?.text}
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        // downloadOnSavePress={true}
        downloadFileExtension="webm"
      />
    </div>
  );
};

export default A;
