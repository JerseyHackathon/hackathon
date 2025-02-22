import { DeepChat } from "deep-chat-react";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";

const ChatBlurb = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div>
      {isChatVisible && (
        <DeepChat
          className="overflow-y-auto shadow-lg rounded-md"
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            width: "400px",
            height: "600px",
            zIndex: 10,
          }}
          textInput={{ placeholder: { text: "What is in your pantry?" } }}
          directConnection={{
            openAI: {
              key: `${process.env.NEXT_PUBLIC_openAIKey}`,

              chat: {
                max_tokens: 2000,

                system_prompt:
                  "Given these food items give me a healthy dish i can make with only the ingredients given and then assist me with anything i can. Be as concise as possible.",
              },
            },
          }}
        />
      )}

      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-blue-600 rounded-full shadow-lg z-10 btn-sm"
      >
        <FaRobot />
      </button>
    </div>
  );
};

export default ChatBlurb;
