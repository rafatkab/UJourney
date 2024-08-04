const MODEL_NAME = 'gemini-1.5-pro';

export async function runChat(genAI, userInput) {
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const chat = model.startChat({
    history: [],
  });

  const response = await chat.sendMessage(userInput);
  
  return response;
}

export async function exitChat(genAI) {
  genAI.exitChat();
  return;
}