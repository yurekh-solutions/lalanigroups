import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Hello! 👋 I'm your AI assistant from Lalani Group. I can help you find your dream home! What are you looking for today?",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Project recommendations
    if (lowerMessage.includes("1bhk") || lowerMessage.includes("1 bhk")) {
      const bhk1Projects = projects.filter(p => p.type.includes("1BHK"));
      if (bhk1Projects.length > 0) {
        return `Great! I found ${bhk1Projects.length} projects with 1BHK apartments:\n\n${bhk1Projects.map(p => `• ${p.name} at ${p.location} - Starting from ${p.price}\n  Status: ${p.status}`).join('\n\n')}\n\nWould you like to know more about any of these?`;
      }
    }

    if (lowerMessage.includes("2bhk") || lowerMessage.includes("2 bhk")) {
      const bhk2Projects = projects.filter(p => p.type.includes("2BHK"));
      if (bhk2Projects.length > 0) {
        return `Perfect! Here are our 2BHK options:\n\n${bhk2Projects.map(p => `• ${p.name} at ${p.location} - Starting from ${p.price}\n  Status: ${p.status}`).join('\n\n')}\n\nLet me know if you'd like detailed information!`;
      }
    }

    if (lowerMessage.includes("3bhk") || lowerMessage.includes("3 bhk")) {
      const bhk3Projects = projects.filter(p => p.type.includes("3BHK"));
      if (bhk3Projects.length > 0) {
        return `Excellent choice! Our 3BHK projects:\n\n${bhk3Projects.map(p => `• ${p.name} at ${p.location} - Starting from ${p.price}\n  Status: ${p.status}`).join('\n\n')}\n\nWould you like to schedule a site visit?`;
      }
    }

    // Location-based
    if (lowerMessage.includes("andheri") || lowerMessage.includes("andhari")) {
      const andheriProjects = projects.filter(p => p.location.toLowerCase().includes("andheri"));
      if (andheriProjects.length > 0) {
        return `Here are our properties in Andheri:\n\n${andheriProjects.map(p => `• ${p.name} - ${p.type} starting from ${p.price}`).join('\n')}\n\nAndheri offers excellent connectivity and amenities!`;
      }
    }

    if (lowerMessage.includes("malad")) {
      const maladProjects = projects.filter(p => p.location.toLowerCase().includes("malad"));
      if (maladProjects.length > 0) {
        return `Check out our Malad properties:\n\n${maladProjects.map(p => `• ${p.name} - ${p.type} starting from ${p.price}`).join('\n')}\n\nMalad has great infrastructure and is well-connected!`;
      }
    }

    if (lowerMessage.includes("khar")) {
      const kharProjects = projects.filter(p => p.location.toLowerCase().includes("khar"));
      if (kharProjects.length > 0) {
        return `Our premium Khar properties:\n\n${kharProjects.map(p => `• ${p.name} - ${p.type} starting from ${p.price}`).join('\n')}\n\nKhar is one of Mumbai's most sought-after locations!`;
      }
    }

    if (lowerMessage.includes("goregaon")) {
      const goregaonProjects = projects.filter(p => p.location.toLowerCase().includes("goregaon"));
      if (goregaonProjects.length > 0) {
        return `Properties in Goregaon:\n\n${goregaonProjects.map(p => `• ${p.name} - ${p.type} starting from ${p.price}`).join('\n')}\n\nGoregaon offers excellent connectivity to both suburbs and city!`;
      }
    }

    // Ready possession
    if (lowerMessage.includes("ready") || lowerMessage.includes("possession") || lowerMessage.includes("move")) {
      const readyProjects = projects.filter(p => p.status === "Ready Possession");
      if (readyProjects.length > 0) {
        return `Ready-to-move-in properties:\n\n${readyProjects.map(p => `• ${p.name} at ${p.location} - ${p.type}\n  Price: ${p.price} | ${p.possession}`).join('\n\n')}\n\nThese homes are ready for immediate possession!`;
      }
    }

    // Commercial
    if (lowerMessage.includes("commercial") || lowerMessage.includes("office") || lowerMessage.includes("business")) {
      const commercialProjects = projects.filter(p => p.category === "commercial");
      if (commercialProjects.length > 0) {
        return `Our commercial properties:\n\n${commercialProjects.map(p => `• ${p.name} at ${p.location}\n  ${p.type} - Starting from ${p.price}`).join('\n\n')}\n\nPerfect for your business needs!`;
      }
    }

    // Budget-based
    if (lowerMessage.includes("budget") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return `Our properties start from ₹75 Lakhs and go up to ₹2.2 Cr+. Could you share your budget range? This will help me recommend the best options for you!\n\nYou can also filter by:\n• Configuration (1BHK, 2BHK, 3BHK)\n• Location preference\n• Ready or under-construction`;
    }

    // Amenities
    if (lowerMessage.includes("amenities") || lowerMessage.includes("facilities") || lowerMessage.includes("features")) {
      return `Our projects come with world-class amenities:\n\n✓ Swimming Pool & Gym\n✓ Clubhouse & Indoor Games\n✓ Landscaped Gardens\n✓ 24/7 Security & CCTV\n✓ Power Backup\n✓ Covered Parking\n✓ Children's Play Area\n✓ And much more!\n\nWhich project would you like to know more about?`;
    }

    // RERA
    if (lowerMessage.includes("rera") || lowerMessage.includes("approved") || lowerMessage.includes("registration")) {
      return `All our projects are MahaRERA approved! 🏛️\n\nFor example:\n• Lalani Goodwill: P51800079065 & P51800078852\n• Velentine Apartment: P51800028866\n• Lalani Business Park: P51800033063\n\nYou can verify these on maharerait.mahaonline.gov.in`;
    }

    // Contact
    if (lowerMessage.includes("contact") || lowerMessage.includes("call") || lowerMessage.includes("visit") || lowerMessage.includes("schedule")) {
      return `I'd love to help you schedule a visit! 📅\n\nYou can:\n📞 Call us: +91-22-6728-0000\n📧 Email: sales@lalanigroup.in\n💬 WhatsApp: Click the WhatsApp button\n\nOr fill the enquiry form on any project page, and our team will contact you within 24 hours!`;
    }

    // Greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! 😊 Welcome to Lalani Group! How can I assist you today? I can help you find properties by configuration, location, budget, or any specific requirements!";
    }

    if (lowerMessage.includes("thank")) {
      return "You're welcome! 🙏 Feel free to ask if you need any more information. We're here to help you find your perfect home!";
    }

    // Default response
    return `I'm here to help! I can assist you with:\n\n🏠 Finding properties by configuration (1BHK, 2BHK, 3BHK)\n📍 Location-based search (Andheri, Malad, Khar, etc.)\n💰 Budget planning\n🏢 Commercial properties\n✅ Ready possession homes\n📋 Project details & amenities\n\nWhat would you like to know?`;
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl flex items-center justify-center group hover:shadow-purple-500/50 transition-all"
            aria-label="Open AI Assistant"
          >
            <Sparkles className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-md h-[600px] max-h-[80vh] bg-card rounded-2xl shadow-2xl border border-border/50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">AI Assistant</h3>
                  <p className="text-white/80 text-xs">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "bg-card border border-border"
                    }`}
                  >
                    <p className={`text-sm whitespace-pre-line ${message.sender === "bot" ? "text-foreground" : ""}`}>
                      {message.text}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-card border border-border rounded-2xl px-4 py-2.5">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 rounded-full bg-background border border-border focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ""}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Powered by AI • Lalani Group
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
