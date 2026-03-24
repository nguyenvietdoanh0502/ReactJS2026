import Botchat from "../Chattext/Botchat"
import Userchat from "../Chattext/Userchat"
import avatar from '../../assets/chatavt.png';
import "./Chatbot.css";
import { useState, useEffect, useRef } from "react";


async function handleResponse(text) {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
                {
                    role: "system",
                    content: "Bạn là một trợ lý ảo hỗ trợ khách hàng thân thiện. Hãy trả lời các câu hỏi của người dùng một cách ngắn gọn, súc tích, dễ hiểu và luôn dùng tiếng Việt."
                },
                {
                    role: "user",
                    content: text
                }
            ],
          temperature: 0.1
        })
      }
    );
    if (!response.ok) {
        const errorText = await response.text(); 
        throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data; 

  } catch (error) {
    console.error("Chi tiết lỗi gọi API:", error); 
  }
}

function Chatbot() {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'bot', content: 'Xin chào! Tôi là Bot hỗ trợ của bạn. Bạn cần giúp gì hôm nay?' }
    ]);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const handleSendMessage = async (e) => {
        const inputElement = e.target.parentElement.querySelector('input');
        const textToSend = inputElement.value.trim();
        
        if (!textToSend) return;
        setMessages(prev => [...prev, { id: Date.now(), sender: 'user', content: textToSend }]);
        inputElement.value = '';
        const res = await handleResponse(textToSend);
        setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', content: res.choices[0].message.content.trim() }]);
    }; 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage(e);
        }
    };
    return (
        <>
        <div className="chatbot">
            <div className="header">
                <img src={avatar} alt="Avatar" />
                <div className="info">
                    <h2>Support Bot</h2>
                    <p>Online</p>
                </div>
            </div>
            <div className="content">
                {messages.map(message => (
                    message.sender === 'user' ? (
                        <Userchat key={message.id} content={message.content} />
                    ) : (
                        <Botchat key={message.id} content={message.content} />
                    )
                ))}
                <div ref={messagesEndRef} />
            </div>
            
            <div className="inputbox">
                <input type="text" placeholder="Nhập tin nhắn..." onKeyDown={handleKeyDown} />
                <button onClick={handleSendMessage}>Gửi</button>
            </div>
        </div>
        </>
    )
}
export default Chatbot