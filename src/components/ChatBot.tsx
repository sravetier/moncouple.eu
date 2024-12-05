import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis là pour vous aider. Comment puis-je vous accompagner aujourd\'hui ?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simuler une réponse du bot après un délai
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('bonjour') || input.includes('salut')) {
      return 'Bonjour ! Comment puis-je vous aider ?';
    }
    
    if (input.includes('divorce') || input.includes('séparation')) {
      return 'Je comprends que vous traversez une période difficile. Nous avons plusieurs ressources pour vous accompagner dans cette étape. Souhaitez-vous consulter notre guide sur la séparation ?';
    }
    
    if (input.includes('couple') || input.includes('relation')) {
      return 'Les relations de couple peuvent être complexes. Avez-vous essayé nos tests d\'évaluation pour faire le point sur votre situation ?';
    }
    
    if (input.includes('merci')) {
      return 'Je vous en prie ! N\'hésitez pas si vous avez d\'autres questions.';
    }
    
    return 'Je suis là pour vous aider. Pouvez-vous me donner plus de détails sur votre situation ?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#85C196] p-4 rounded-full shadow-lg hover:bg-[#75b086] transition-colors"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col">
          <div className="bg-[#85C196] p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-6 w-6 text-white" />
              <span className="text-white font-medium">Assistant MonCouple</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.isBot ? 'flex justify-start' : 'flex justify-end'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100'
                      : 'bg-[#85C196] text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 rounded-lg p-3">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Écrivez votre message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#85C196]"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`p-2 rounded-lg text-white ${
                  inputValue.trim()
                    ? 'bg-[#85C196] hover:bg-[#75b086]'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}