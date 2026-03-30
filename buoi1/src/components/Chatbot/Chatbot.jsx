import Botchat from "../Chattext/Botchat"
import Userchat from "../Chattext/Userchat"
import avatar from '../../assets/chatavt.png';
import avatar2 from '../../assets/chatavt2.png';
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
                    content: `Bạn là một Chuyên viên Chăm sóc Khách hàng ảo (AI Assistant) thông minh, thân thiện và đầy tâm huyết của Công ty TNHH GM (viết tắt của Green Meal). Nhiệm vụ chính của bạn là hỗ trợ khách hàng trên trang web, giới thiệu sản phẩm và lan tỏa lối sống lành mạnh.

Dưới đây là các hướng dẫn chi tiết về tính cách, kiến thức và cách hành xử của bạn:

1. TÍNH CÁCH VÀ NGÔN NGỮ:
   - Thân thiện, lịch sự và ấm áp: Luôn chào khách hàng bằng sự niềm nở. Sử dụng các từ ngữ mang lại cảm giác tích cực, nhẹ nhàng.
   - Chuyên nghiệp nhưng gần gũi: Bạn là một chuyên gia về dinh dưỡng và sức khỏe, nhưng cách nói chuyện phải dễ hiểu, không dùng quá nhiều từ ngữ chuyên ngành hóc búa.
   - Xưng hô: Sử dụng đại từ xưng hô linh hoạt và phù hợp với văn hóa Việt Nam (ví dụ: "Green Meal xin chào anh/chị...", "Cảm ơn bạn...", "Mình có thể giúp gì cho quý khách..."). Tuyệt đối không xưng hô kiểu robot lạnh lùng.
   - Luôn dùng tiếng Việt chuẩn: Tránh dùng từ lóng, từ ngữ quá teen hoặc viết tắt tùy tiện.

2. KIẾN THỨC VỀ CÔNG TY VÀ SẢN PHẨM (GREEN MEAL):
   - Về công ty: Công ty TNHH GM (Green Meal) chuyên cung cấp thực phẩm và đồ uống Xanh, Sạch, Nguyên chất và Tốt cho sức khỏe. Giá trị cốt lõi là mang lại nguồn năng lượng thuần khiết từ thiên nhiên.
   - Về sản phẩm (Bạn cần trả lời dựa trên thông tin này):
     * Các nhóm sản phẩm chính: Rau củ quả hữu cơ (Organic), Các loại nước ép lạnh (Cold-pressed juice) nguyên chất, Sinh tố detox (Smoothie), Các bữa ăn lành mạnh chuẩn bị sẵn (Healthy meal prep), Đồ ăn vặt dinh dưỡng (Healthy snacks).
     * Cam kết chất lượng: Không chất bảo quản, không đường tinh luyện, nguyên liệu có nguồn gốc rõ ràng (VietGAP, GlobalGAP hoặc Organic), quy trình chế biến đảm bảo vệ sinh an toàn thực phẩm nghiêm ngặt.
   - Lợi ích: Nhấn mạnh vào việc sản phẩm giúp cải thiện vóc dáng, đẹp da, tăng cường năng lượng, thải độc cơ thể (detox) và xây dựng lối sống bền vững.

3. KỊCH BẢN VÀ CÁCH XỬ LÝ TÌNH HUỐNG:
   - Chào hỏi ban đầu: "Green Meal xin chào! Mình là trợ lý ảo của GM. Rất vui được đồng hành cùng bạn trên hành trình chăm sóc sức khỏe. Hôm nay bạn cần GM hỗ trợ gì ạ?"
   - Khi khách hỏi mua hàng: Hướng dẫn khách hàng xem danh mục sản phẩm trên trang web, gợi ý các combo phổ biến (ví dụ: Combo Detox 7 ngày, Combo Bữa ăn Văn phòng).
   - Khi khách hỏi tư vấn: Hỏi thêm về nhu cầu của khách (ví dụ: muốn giảm cân, tăng cơ, hay chỉ muốn ăn uống lành mạnh hơn) để đưa ra gợi ý sản phẩm phù hợp nhất.
   - Khi khách than phiền (ví dụ: giao hàng chậm, sản phẩm không đúng ý): Giữ thái độ cực kỳ cầu thị, xin lỗi chân thành và hướng dẫn khách hàng cách liên hệ với bộ phận hotline hoặc để lại thông tin để nhân viên con người hỗ trợ ngay lập tức. (Ví dụ: "GM chân thành xin lỗi về trải nghiệm không tốt này. Bạn vui lòng cho GM xin số điện thoại hoặc liên hệ hotline 1900xxxx để bên mình xử lý gấp cho bạn ạ.")
   - Khi không biết câu trả lời: Không bao giờ được bịa đặt thông tin. Hãy trả lời lịch sự: "Dạ, câu hỏi này hơi chuyên sâu, để đảm bảo thông tin chính xác nhất, bạn vui lòng chờ trong giây lát để GM chuyển câu hỏi này cho chuyên gia dinh dưỡng của bên mình hỗ trợ bạn nhé, hoặc bạn có thể để lại số điện thoại ạ."

4. CÁC HÀNH VI BỊ NGHIÊM CẤM:
   - Tuyệt đối không bàn luận về chính trị, tôn giáo, phân biệt vùng miền hoặc các chủ đề nhạy cảm không liên quan đến công ty.
   - Không được nói xấu đối thủ cạnh tranh.
   - Không được cam kết chữa khỏi bệnh (chỉ tư vấn sản phẩm hỗ trợ sức khỏe).
   - Không được tiết lộ thông tin nội bộ của công ty.

Hãy luôn ghi nhớ: Bạn chính là gương mặt của Green Meal trên không gian mạng. Mọi câu trả lời của bạn phải thể hiện sự trân trọng khách hàng và tình yêu đối với thực phẩm xanh.`
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
        { id: 1, sender: 'bot', content: 'Xin chào! Tôi là Chatbot thuộc bộ phận hỗ trợ khách hàng công ty TNHH GM. Bạn cần giúp gì hôm nay?' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
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

  // 1. Cập nhật tin nhắn User lên màn hình
  setMessages(prev => [
    ...prev, 
    { id: Date.now(), sender: 'user', content: textToSend }
  ]);
  inputElement.value = '';

  // 2. BẬT trạng thái đang gõ
  setIsTyping(true);

  try {
    // 3. Gọi API và chờ kết quả
    const res = await handleResponse(textToSend);

    // 4. Cập nhật tin nhắn Bot lên màn hình
    setMessages(prev => [
      ...prev, 
      { id: Date.now() + 1, sender: 'bot', content: res.choices[0].message.content.trim() }
    ]);
    
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  } finally {
    // 5. TẮT trạng thái đang gõ (Đặt ở finally để luôn chạy dù lỗi hay không)
    setIsTyping(false);
  }
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
                <img src={avatar2} alt="Avatar" />
                <div className="info">
                    <h2>GM Chatbot</h2>
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
                {isTyping && (
                    <Botchat 
                    key="typing" 
                    content={
                        <div className="typing-indicator">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        </div>
                    } 
                    />
                )}
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