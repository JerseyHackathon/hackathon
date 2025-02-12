import { DeepChat } from "deep-chat-react";

const deepChat = (
  <DeepChat
    style={{ borderRadius: "20px", width: "1000px" }}
    textInput={{ placeholder: { text: "What is in your pantry?" } }}
    directConnection={{
      openAI: {
        key: `${process.env.NEXT_PUBLIC_openAIKey}`,
        chat: {
          max_tokens: 2000,
          system_prompt:
            "Given these food items give me some healthy dishes i can make with them and then assist me with anything i can. Be as concise as possible",
        },
      },
    }}
  />
);

export default deepChat;
