import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useAuth0 } from "@auth0/auth0-react";

// const firstPrompt = 'Prompt - CONVERSATIONAL WAY To Get User’s Details: Create a conversational prompt sequence to collect the following user information: Basic Information: Name, degree, university, start year of program Educational Goals: Expected graduation year (infer if possible based on other information), desired field of study or specialization Career Aspirations: Target company (provide relevant options based on degree), desired job role within the target company (provide relevant options based on company) Extracurricular Involvement: Clubs, associations, or hackathons Professional Experience: Most recent job experience IMPORTANT: DO NOT ASK FOR MORE THAN 10 QUESTIONS . REALLY MPORTANT: "ASK QUESTIONS 1 by 1 to users"". END RESULT RESPONSE SHOULD START WITH END_RESULT TEXT. END RESULT: RETURN DATA IN JSON FORMAT AT THE END. JSON format: { "name": "", "education": { "university": "", "major": "", "year": "", "graduationYear": }, "careerGoals": { "targetCompanyType": "", "targetRole": "" } }.';

export default function Chat() {
  const [typing, setTyping] = useState(false);
  const { user } = useAuth0();

  const [messages, setMessages] = useState([
    {
      message: "Say Hi when you are ready to start.",
      sender: "AI Agent",
      direction: 0,
    },
  ]);

  const firstPrompt =
  'Prompt: Greet the student with their name = '+user.name;

  const handleSubmit = async (currentMessage) => {
    const prevMessages = messages.map((msg) => msg.message).join(", ");
    const newMessage = {
      message: currentMessage,
      sender: "User",
      direction: 1,
    };

    let newMessages = [...messages, newMessage];
    setMessages(newMessages);

    //Set Typing state to true
    setTyping(true);
    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInput:
          messages.length < 2
            ? firstPrompt
            : "Prompt: " +
              firstPrompt +
              "PrevContext: " +
              prevMessages +
              ", UserInput: " +
              newMessage.message,
      }),
    });
    const data = await response.json();
    newMessages = [
      ...messages,
      { message: data.response, sender: "AI Agent", direction: 0 },
    ];
    setTyping(false);
    setMessages(newMessages);
  };
  // fetch('http://localhost:3000/chat', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     userInput:
  //       messages.length < 2
  //         ? firstPrompt
  //         : 'Prompt: ' +
  //           firstPrompt +
  //           'PrevContext: ' +
  //           prevMessages +
  //           ', UserInput: ' +
  //           newMessage.message,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const newMessages = [
  //       ...messages,
  //       { message: data.response, sender: 'AI Agent', direction: 0},
  //     ];
  //     setMessages(newMessages);
  //   });

  // };

  return (
    <div className="chat-container relative w-full flex justify-center items-center p-4">
      <div className="relative w-full h-full">
        <MainContainer className="relative w-full h-full rounded-xl p-4">
          <ChatContainer>
            <MessageList
              typingIndicator={
                typing ? <TypingIndicator content="Typing..." /> : null
              }
            >
              {messages.map((message, index) => (
                <Message key={index} model={message} />
              ))}
            </MessageList>
            <MessageInput
            fancyScroll={true}
              placeholder="Type message here"
              onSend={handleSubmit}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}
