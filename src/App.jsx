import React, { useState } from "react";
import LiveCameraFeed from "./component/LiveCameraFeed";
import QuestionList from "./component/QuestionList";
import AIScore from "./component/AIScore";
import AiVideoScore from "./component/AiVideoScore";
import AIResult from "./component/AIResult";
import ChatWithAI from "./component/ChatWithAI";

const App = () => {
  const interviewQuestions = [
    "Tell me about yourself.",
    "Why are you interested in this position?",
    "What are your strengths and weaknesses?",
    "Why do you think you are a good fit for this role?",
    "What is the biggest challenge you have faced and how did you overcome it?",
    "Why do you want to leave your current company?",
  ];
  const aiScore = 85;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  return (
    <div className="bg-[#e2e7fa] p-2 flex gap-2">
      <div className="w-[75%] flex flex-col gap-3 p-1 rounded-md">
        <div className="w-full h-[500px]">
          <LiveCameraFeed />
        </div>
        <div className="flex justify-between gap-4 rounded-md ">
          <div className="w-1/3 bg-white rounded-md">
            <QuestionList
              questions={interviewQuestions}
              currentQuestionIndex={currentQuestionIndex}
            />
          </div>
          <div className="w-2/3 flex rounded-md bg-white p-4">
            <div className="w-2/5">
              <AIScore score={aiScore} />
            </div>
            <div className="w-3/5">
              <AiVideoScore  />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[25%] flex flex-col gap-3 p-1  rounded-md">
        <ChatWithAI />
      </div>
    </div>
  );
};

export default App;
