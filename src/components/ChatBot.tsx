import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, User } from 'lucide-react';
import { useImagePreloader } from '../hooks/useImagePreloader';

interface Message {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  className?: string;
}

const initialMessages: Message[] = [
  {
    type: 'bot',
    content: "Hi! I'm Lucius. Feel free to ask me anything about my experience, projects, or skills!",
    timestamp: new Date(),
  },
];

// Simulated AI responses based on keywords
const getAIResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('experience')) {
    return "I have over 5 years of experience in web development. I've worked on various exciting projects, from e-commerce platforms to real-time analytics dashboards. Would you like to know more about any specific aspect of my experience?";
  }
  
  if (lowerMessage.includes('project')) {
    return "I'm particularly proud of my recent projects. My portfolio includes an AI-powered portfolio website, a real-time collaboration platform, and several modern e-commerce solutions. Which one would you like to hear more about?";
  }
  
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
    return "I specialize in React.js, TypeScript, and modern web development. I'm passionate about creating performant and accessible applications. I'd be happy to discuss any specific technology you're interested in!";
  }
  
  if (lowerMessage.includes('education') || lowerMessage.includes('background')) {
    return "I have a strong foundation in Computer Science and I'm constantly learning new technologies. I believe in practical experience combined with theoretical knowledge. What aspect of my background interests you?";
  }

  return "I'd love to tell you more about my work and experience. What specific aspect would you like to know about?";
};

const ChatBot: React.FC<ChatBotProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const imagePath = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d';
  const imageLoaded = useImagePreloader(imagePath);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        content: getAIResponse(inputMessage),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className={className}>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="bg-green-400 text-white p-3 rounded-full shadow-lg hover:bg-green-500 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-24 bottom-0 w-80 md:w-96 bg-white dark:bg-navy-900 rounded-lg shadow-xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-green-400 p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold">Chat with Lucius</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%]
                    ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}
                  >
                    <div className={`p-2 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-green-400 text-white'
                        : 'bg-gray-100 dark:bg-navy-800 text-gray-800 dark:text-gray-200'
                    }`}
                    >
                      {message.content}
                    </div>
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-navy-800">
                      {message.type === 'user' ? (
                        <User size={16} className="text-gray-600 dark:text-gray-300" />
                      ) : (
                        imageLoaded && <img src={imagePath} alt="Lucius" className="w-full h-full object-cover" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    {imageLoaded && <img src={imagePath} alt="Lucius" className="w-full h-full object-cover" />}
                  </div>
                  <div className="bg-gray-100 dark:bg-navy-800 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-navy-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-navy-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-colors"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;