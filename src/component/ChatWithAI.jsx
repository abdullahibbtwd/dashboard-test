import React, { useEffect, useRef, useState } from 'react'
import { MdEmojiEmotions } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const ChatWithAI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container on new messages
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    try {
    
      await new Promise(resolve => setTimeout(resolve, 500));
      const aiResponse = { response: "This is a AI response." };
      setMessages(prevMessages => [...prevMessages, { text: aiResponse.response, sender: 'ai' }]);
    } catch (error) {
      console.error("Error sending message to AI:", error);
      setMessages(prevMessages => [...prevMessages, { text: "Error communicating with AI.", sender: 'ai' }]);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-5 pb-10 flex flex-col h-screen ">
    <h3 className="text-lg font-semibold mb-2">Chat with AI</h3>
    <div ref={chatContainerRef} className="overflow-y-auto flex-grow mb-2  p-2 ">
      {messages.map((msg, index) => (
        <div key={index} className={`mb-2 p-2 rounded-md ${msg.sender === 'user' ? 'bg-blue-100 text-blue-800 self-end' : 'bg-gray-100 text-gray-800 self-start'}`}>
          {msg.text}
        </div>
      ))}
    </div>
    <div className="flex items-center w-full">
      <div className='flex items-center gap-1 w-full'>
      <FaPaperclip className='text-xl ' />
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && sendMessage()}
        placeholder="Type your message..."
        className="flex-grow rounded-md py-2 px-2 focus:outline-none focus:ring-0 focus:ring-none"
      />
      <MdEmojiEmotions className='text-xl '/>
      <button
        onClick={sendMessage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <IoIosSend className='text-2xl'/>
      </button>
      </div>
      
    </div>
  </div>
  )
}

export default ChatWithAI