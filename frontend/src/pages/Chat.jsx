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

const firstPrompt =
  'Prompt: Create a conversational AI assistant designed to gather essential user information for career planning purposes. The assistant should follow a structured question-answer format, collecting data on the following: Basic Information: Name, degree, university, and start year of the program. Educational Goals: Expected graduation year, desired field of study or specialization. Career Aspirations: Target company based on the degree, desired job role within the target company. Extracurricular Involvement: Participation in clubs, associations, or hackathons. Professional Experience: Most recent job experience. The assistant should limit the number of questions to eight and provide relevant options or suggestions where applicable. Upon completion of the question-answer sequence, the assistant should generate END_RESULT a JSON output containing the collected user data in the following format: JSON { "name": "", "education": { "university": "", "major": "", "year": "", "graduationYear": "" }, "careerGoals": { "targetCompany": "", "targetRole": "" } } Additional Considerations: The assistant should be designed to handle potential user errors or unexpected responses gracefully. The assistant should strive to maintain a conversational and engaging tone throughout the interaction. Consider incorporating error handling mechanisms to validate user input and provide appropriate feedback. Explore opportunities for expanding the JSON output to include additional data points as needed. Start with the first question Only.';
// const firstPrompt = 'Prompt - CONVERSATIONAL WAY To Get User’s Details: Create a conversational prompt sequence to collect the following user information: Basic Information: Name, degree, university, start year of program Educational Goals: Expected graduation year (infer if possible based on other information), desired field of study or specialization Career Aspirations: Target company (provide relevant options based on degree), desired job role within the target company (provide relevant options based on company) Extracurricular Involvement: Clubs, associations, or hackathons Professional Experience: Most recent job experience IMPORTANT: DO NOT ASK FOR MORE THAN 10 QUESTIONS . REALLY MPORTANT: "ASK QUESTIONS 1 by 1 to users"". END RESULT RESPONSE SHOULD START WITH END_RESULT TEXT. END RESULT: RETURN DATA IN JSON FORMAT AT THE END. JSON format: { "name": "", "education": { "university": "", "major": "", "year": "", "graduationYear": }, "careerGoals": { "targetCompanyType": "", "targetRole": "" } }.';

export default function Chat() {
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      message: "Say Hi when you are ready to start.",
      sender: "AI Agent",
      direction: 0,
    },
  ]);

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
    <div className="chat-container">
      <div className="w-screen h-screen">
        <MainContainer>
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
              placeholder="Type message here"
              onSend={handleSubmit}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}
