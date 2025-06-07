const experiment = lab.util.fromObject({
    title: "HeyGen Chatbot",
    content: `<div id="chatbot-container" style="width: 100%; max-width: 640px; margin: auto;"></div>`,
    scripts: [
      "https://cdn.jsdelivr.net/npm/@heygen/chatbot-sdk@latest/dist/index.global.js"
    ],
    on_start: () => {
      const chatbot = new HeyGenChatbot.Chatbot({
        el: "#chatbot-container",
        config: {
          apiKey: "N2NjNzhmYjVmODI2NDE2NWFiMmIzMzRhMDVkNzk1MWYtMTc0OTMxOTQwNg==",
          assistant: {
            type: "openai",
            config: {
              openaiApiKey: "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",
              openaiBaseURL: "https://openrouter.ai/api/v1",
              model: "google/gemini-2.5-pro-exp-03-25",
            },
          },
          avatar: {
            id: "c5e81098eb3e46189740b6156b3ac85a",
            voice: "de_de_001",
            language: "de",
          },
          ui: {
            inputPlaceholder: "Geben Sie Ihre Frage ein...",
            sendButtonText: "Senden",
            welcomeMessage: "Willkommen bei unserer Umfrage! Ich bin Ava – ich begleite Sie.",
          },
        },
      });
      chatbot.init();
    }
  });
  
  return experiment;
  
  