import { Question } from './types';

const createPlaceholder = (seed: string): string => {
  const hashCode = (str: string): number => {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  const h = hashCode(seed);
  
  const hue = Math.abs(h % 360);
  const saturation = 40 + Math.abs((h >> 8) % 25); // 40-65%
  const lightness = 25 + Math.abs((h >> 16) % 10); // 25-35%
  const bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const textColor = `hsla(0, 0%, 100%, 0.8)`;

  const text = seed.split(' ').slice(0, 5).join(' ').replace(/'/g, '');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">
      <rect width="100%" height="100%" fill="${bgColor}" />
      <text x="50%" y="50%" font-family="sans-serif" font-size="22" fill="${textColor}" text-anchor="middle" dominant-baseline="central" font-weight="bold" style="paint-order: stroke; stroke: rgba(0,0,0,0.3); stroke-width: 1px;">
        ${text}
      </text>
    </svg>`;
  
  // Fixed the encoding issue that broke the SVG syntax
  const encodedSvg = btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;base64,${encodedSvg}`;
};


// NOTE: To meet the 300-question requirement, each array below should contain 100 questions.

export const EASY_QUESTIONS: Question[] = [
  {
    question: "Ai là người đã đọc bản 'Tuyên ngôn Độc lập' khai sinh ra nước Việt Nam Dân chủ Cộng hòa vào ngày 2/9/1945?",
    options: ["Võ Nguyên Giáp", "Hồ Chí Minh", "Trường Chinh", "Phạm Văn Đồng"],
    correctAnswer: "Hồ Chí Minh",
    image: createPlaceholder("Tuyên ngôn Độc lập 1945"),
    explanation: "Tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh đã đọc bản Tuyên ngôn Độc lập, tuyên bố với toàn thế giới về sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào đã quyết định dời đô từ Hoa Lư về thành Đại La và đổi tên thành Thăng Long?",
    options: ["Đinh Tiên Hoàng", "Lê Đại Hành", "Lý Thái Tổ", "Trần Thái Tông"],
    correctAnswer: "Lý Thái Tổ",
    image: createPlaceholder("Lý Thái Tổ dời đô"),
    explanation: "Năm 1010, vua Lý Thái Tổ (Lý Công Uẩn) đã ban 'Chiếu dời đô', chuyển kinh đô của nước Đại Cồ Việt từ Hoa Lư ra thành Đại La, và đặt tên mới là Thăng Long (Hà Nội ngày nay).",
    difficulty: "easy"
  },
  {
    question: "Chiến thắng Điện Biên Phủ lừng lẫy diễn ra vào năm nào?",
    options: ["1945", "1954", "1968", "1975"],
    correctAnswer: "1954",
    image: createPlaceholder("Chiến thắng Điện Biên Phủ"),
    explanation: "Chiến thắng Điện Biên Phủ năm 1954 là đỉnh cao của cuộc kháng chiến chống thực dân Pháp, buộc Pháp phải ký Hiệp định Genève, chấm dứt chiến tranh ở Đông Dương.",
    difficulty: "easy"
  },
  {
    question: "Hai vị nữ tướng nào đã lãnh đạo cuộc khởi nghĩa đầu tiên trong lịch sử chống ách đô hộ của phương Bắc?",
    options: ["Bùi Thị Xuân và Nguyễn Thị Định", "Trưng Trắc và Trưng Nhị", "Bà Triệu và Lê Chân", "Nguyễn Thị Minh Khai và Võ Thị Sáu"],
    correctAnswer: "Trưng Trắc và Trưng Nhị",
    image: createPlaceholder("Khởi nghĩa Hai Bà Trưng"),
    explanation: "Năm 40 sau Công nguyên, Hai Bà Trưng đã phất cờ khởi nghĩa chống lại ách đô hộ của nhà Đông Hán, giành lại độc lập cho dân tộc trong 3 năm.",
    difficulty: "easy"
  },
  {
    question: "Cuộc khởi nghĩa Lam Sơn chống quân Minh do ai lãnh đạo?",
    options: ["Hai Bà Trưng", "Bà Triệu", "Lê Lợi", "Nguyễn Huệ"],
    correctAnswer: "Lê Lợi",
    image: createPlaceholder("Khởi nghĩa Lam Sơn"),
    explanation: "Lê Lợi (Lê Thái Tổ) đã lãnh đạo cuộc khởi nghĩa Lam Sơn kéo dài 10 năm (1418-1427) giành thắng lợi, đuổi quân Minh ra khỏi bờ cõi và lập nên nhà Hậu Lê.",
    difficulty: "easy"
  },
  {
    question: "Thủ đô Hà Nội hiện nay, vào thời nhà Lý có tên là gì?",
    options: ["Đại La", "Đông Đô", "Thăng Long", "Đông Quan"],
    correctAnswer: "Thăng Long",
    image: createPlaceholder("Tên Hà Nội thời Lý"),
    explanation: "Năm 1010, vua Lý Thái Tổ đã dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long, với ý nghĩa 'Rồng bay lên', tượng trưng cho khí thế vươn lên của dân tộc.",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã dẹp loạn 12 sứ quân, thống nhất đất nước?",
    options: ["Ngô Quyền", "Lê Hoàn", "Đinh Bộ Lĩnh", "Lý Công Uẩn"],
    correctAnswer: "Đinh Bộ Lĩnh",
    image: createPlaceholder("Dẹp loạn 12 sứ quân"),
    explanation: "Đinh Bộ Lĩnh, sau này là vua Đinh Tiên Hoàng, đã có công dẹp yên 'Loạn 12 sứ quân', thống nhất giang sơn và lập ra nhà nước Đại Cồ Việt.",
    difficulty: "easy"
  },
  {
    question: "Cuộc Tổng tiến công và nổi dậy giải phóng miền Nam, thống nhất đất nước kết thúc vào ngày tháng năm nào?",
    options: ["30/04/1975", "02/09/1945", "07/05/1954", "20/07/1954"],
    correctAnswer: "30/04/1975",
    image: createPlaceholder("Giải phóng miền Nam 1975"),
    explanation: "Ngày 30/04/1975, với chiến dịch Hồ Chí Minh lịch sử, quân ta đã giải phóng hoàn toàn miền Nam, thống nhất đất nước, kết thúc 21 năm kháng chiến chống Mỹ.",
    difficulty: "easy"
  },
  {
    question: "Vị anh hùng thiếu niên nào đã lấy thân mình lấp lỗ châu mai trong chiến dịch Điện Biên Phủ?",
    options: ["Lê Văn Tám", "Võ Thị Sáu", "Bế Văn Đàn", "Phan Đình Giót"],
    correctAnswer: "Phan Đình Giót",
    image: createPlaceholder("Lấp lỗ châu mai"),
    explanation: "Anh hùng Phan Đình Giót đã dũng cảm lấy thân mình lấp lỗ châu mai của địch, tạo điều kiện cho đồng đội xông lên tiêu diệt cứ điểm Him Lam.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào đã lãnh đạo nhân dân ta ba lần đánh thắng quân xâm lược Mông - Nguyên?",
    options: ["Lý Thái Tổ", "Lê Lợi", "Vua nhà Trần", "Quang Trung"],
    correctAnswer: "Vua nhà Trần",
    image: createPlaceholder("Chống Mông - Nguyên"),
    explanation: "Dưới sự lãnh đạo của các vị vua nhà Trần như Trần Thái Tông, Trần Thánh Tông, Trần Nhân Tông và sự chỉ huy của Hưng Đạo Vương Trần Quốc Tuấn, quân dân ta đã 3 lần đánh bại quân Mông - Nguyên.",
    difficulty: "easy"
  },
  {
    question: "Ai là vị tướng chỉ huy trận Bạch Đằng năm 938, đánh tan quân Nam Hán trên sông?",
    options: ["Lê Hoàn", "Trần Hưng Đạo", "Ngô Quyền", "Lý Thường Kiệt"],
    correctAnswer: "Ngô Quyền",
    image: createPlaceholder("Trận Bạch Đằng 938"),
    explanation: "Ngô Quyền đã sử dụng kế sách cắm cọc gỗ dưới lòng sông Bạch Đằng, nhử quân Nam Hán vào bãi cọc và giành chiến thắng quyết định, chấm dứt hơn 1000 năm Bắc thuộc.",
    difficulty: "easy"
  },
  {
    question: "Trường đại học đầu tiên của Việt Nam, Quốc Tử Giám, được xây dựng dưới triều đại nào?",
    options: ["Nhà Lý", "Nhà Trần", "Nhà Lê", "Nhà Nguyễn"],
    correctAnswer: "Nhà Lý",
    image: createPlaceholder("Quốc Tử Giám"),
    explanation: "Năm 1076, vua Lý Nhân Tông cho lập Quốc Tử Giám cạnh Văn Miếu để làm nơi học tập cho các hoàng tử, con em quý tộc, đánh dấu sự ra đời của nền giáo dục đại học Việt Nam.",
    difficulty: "easy"
  },
  {
    question: "Ai được mệnh danh là 'Bà chúa thơ Nôm' với những tác phẩm mang tư tưởng nữ quyền và châm biếm xã hội phong kiến?",
    options: ["Đoàn Thị Điểm", "Bà Huyện Thanh Quan", "Hồ Xuân Hương", "Công chúa Ngọc Hân"],
    correctAnswer: "Hồ Xuân Hương",
    image: createPlaceholder("Bà chúa thơ Nôm"),
    explanation: "Hồ Xuân Hương là một nữ thi sĩ nổi tiếng với những bài thơ Nôm độc đáo, sắc sảo, thể hiện một tư tưởng nhân văn và khát vọng bình đẳng cho người phụ nữ.",
    difficulty: "easy"
  },
  {
    question: "Thành nhà Hồ ở Thanh Hóa, một di sản văn hóa thế giới, được xây dựng bởi ai?",
    options: ["Trần Thủ Độ", "Lê Lợi", "Hồ Quý Ly", "Nguyễn Huệ"],
    correctAnswer: "Hồ Quý Ly",
    image: createPlaceholder("Thành nhà Hồ"),
    explanation: "Năm 1397, Hồ Quý Ly đã cho xây dựng thành Tây Đô (Thành nhà Hồ) bằng những khối đá lớn, một công trình kiến trúc độc đáo và kiên cố, thể hiện sự cải cách của ông.",
    difficulty: "easy"
  },
  {
    question: "Chiến dịch lịch sử giải phóng Sài Gòn, kết thúc cuộc kháng chiến chống Mỹ, có tên gọi chính thức là gì?",
    options: ["Chiến dịch Mùa xuân 1975", "Chiến dịch Tây Nguyên", "Chiến dịch Hồ Chí Minh", "Chiến dịch Tổng tiến công"],
    correctAnswer: "Chiến dịch Hồ Chí Minh",
    image: createPlaceholder("Chiến dịch Hồ Chí Minh"),
    explanation: "Sau chiến thắng Buôn Ma Thuột, Bộ Chính trị quyết định mở chiến dịch giải phóng Sài Gòn - Gia Định và đặt tên là 'Chiến dịch Hồ Chí Minh' để thể hiện quyết tâm và niềm tin thắng lợi.",
    difficulty: "easy"
  },
  {
    question: "Tên thật của vua Quang Trung là gì?",
    options: ["Nguyễn Lữ", "Nguyễn Nhạc", "Nguyễn Huệ", "Nguyễn Ánh"],
    correctAnswer: "Nguyễn Huệ",
    image: createPlaceholder("Tên thật Quang Trung"),
    explanation: "Vua Quang Trung, anh hùng áo vải cờ đào, tên thật là Nguyễn Huệ. Ông là một trong ba anh em nhà Tây Sơn và là một trong những nhà quân sự tài ba nhất lịch sử Việt Nam.",
    difficulty: "easy"
  },
  {
    question: "Đảng Cộng sản Việt Nam được thành lập vào ngày, tháng, năm nào?",
    options: ["3/2/1930", "2/9/1945", "19/8/1945", "30/4/1975"],
    correctAnswer: "3/2/1930",
    image: createPlaceholder("Thành lập Đảng Cộng sản"),
    explanation: "Đảng Cộng sản Việt Nam được thành lập vào ngày 3/2/1930 tại Cửu Long (Hồng Kông, Trung Quốc) trên cơ sở hợp nhất các tổ chức cộng sản.",
    difficulty: "easy"
  },
  {
    question: "Quốc hiệu đầu tiên của nước ta là gì?",
    options: ["Đại Cồ Việt", "Đại Việt", "Văn Lang", "Âu Lạc"],
    correctAnswer: "Văn Lang",
    image: createPlaceholder("Quốc hiệu đầu tiên"),
    explanation: "Nhà nước Văn Lang do các vua Hùng sáng lập là nhà nước đầu tiên trong lịch sử Việt Nam, với quốc hiệu là Văn Lang.",
    difficulty: "easy"
  },
  {
    question: "Ai là vị nữ vương đầu tiên trong lịch sử Việt Nam?",
    options: ["Bà Triệu", "Trưng Trắc", "Nguyên phi Ỷ Lan", "Dương Vân Nga"],
    correctAnswer: "Trưng Trắc",
    image: createPlaceholder("Nữ vương đầu tiên"),
    explanation: "Sau khi đánh đuổi thái thú Tô Định, Trưng Trắc được các tướng sĩ suy tôn lên làm vua, lấy hiệu là Trưng Nữ Vương, trở thành vị nữ vương đầu tiên của dân tộc.",
    difficulty: "easy"
  },
  {
    question: "Vị vua cuối cùng của triều đại phong kiến Việt Nam là ai?",
    options: ["Hàm Nghi", "Duy Tân", "Thành Thái", "Bảo Đại"],
    correctAnswer: "Bảo Đại",
    image: createPlaceholder("Vua cuối cùng"),
    explanation: "Bảo Đại là vị hoàng đế thứ 13 và cũng là vị vua cuối cùng của triều Nguyễn cũng như của chế độ quân chủ trong lịch sử Việt Nam. Ông thoái vị vào tháng 8/1945.",
    difficulty: "easy"
  },
  {
    question: "Thành Cổ Loa, với kiến trúc vòng xoáy trôn ốc độc đáo, gắn liền với vị vua nào?",
    options: ["Hùng Vương", "An Dương Vương", "Mai Hắc Đế", "Hai Bà Trưng"],
    correctAnswer: "An Dương Vương",
    image: createPlaceholder("Thành Cổ Loa"),
    explanation: "Sau khi thống nhất hai bộ tộc Âu Việt và Lạc Việt, lập ra nước Âu Lạc, Thục Phán An Dương Vương đã cho xây dựng thành Cổ Loa làm kinh đô.",
    difficulty: "easy"
  },
  {
    question: "Cuộc cách mạng Tháng Tám thành công vào năm nào?",
    options: ["1930", "1941", "1945", "1954"],
    correctAnswer: "1945",
    image: createPlaceholder("Cách mạng Tháng Tám"),
    explanation: "Cuộc Cách mạng Tháng Tám diễn ra vào tháng 8 năm 1945 đã giành lại nền độc lập cho Việt Nam từ tay phát xít Nhật, dẫn đến sự ra đời của nước Việt Nam Dân chủ Cộng hòa.",
    difficulty: "easy"
  },
  {
    question: "Tên gọi 'Sài Gòn' được chính thức đổi thành 'Thành phố Hồ Chí Minh' vào năm nào?",
    options: ["1975", "1976", "1980", "1986"],
    correctAnswer: "1976",
    image: createPlaceholder("Sài Gòn đổi tên"),
    explanation: "Năm 1976, Quốc hội khóa VI của nước Việt Nam thống nhất đã quyết định đổi tên thành phố Sài Gòn - Gia Định thành Thành phố Hồ Chí Minh.",
    difficulty: "easy"
  },
  {
    question: "Ai là vị anh hùng đã hô vang câu nói 'Nhằm thẳng quân thù mà bắn'?",
    options: ["Nguyễn Viết Xuân", "La Văn Cầu", "Tô Vĩnh Diện", "Cù Chính Lan"],
    correctAnswer: "Nguyễn Viết Xuân",
    image: createPlaceholder("Nhằm thẳng quân thù"),
    explanation: "Anh hùng Nguyễn Viết Xuân, một chính trị viên đại đội pháo cao xạ, đã hô vang khẩu hiệu 'Nhằm thẳng quân thù mà bắn' để cổ vũ đồng đội chiến đấu dù bị thương nặng.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào của nhà Lý được tôn là 'Phật hoàng' sau khi nhường ngôi cho con và đi tu?",
    options: ["Lý Thái Tông", "Lý Thánh Tông", "Lý Nhân Tông", "Trần Nhân Tông"],
    correctAnswer: "Trần Nhân Tông",
    image: createPlaceholder("Phật hoàng Trần Nhân Tông"),
    explanation: "Sau hai lần lãnh đạo nhân dân đánh thắng quân Nguyên Mông, vua Trần Nhân Tông đã nhường ngôi cho con là Trần Anh Tông, lên núi Yên Tử tu hành và sáng lập ra thiền phái Trúc Lâm Yên Tử.",
    difficulty: "easy"
  },
  {
    question: "Bài hát 'Tiến quân ca' do ai sáng tác đã trở thành Quốc ca của Việt Nam?",
    options: ["Phạm Tuyên", "Văn Cao", "Lưu Hữu Phước", "Đỗ Nhuận"],
    correctAnswer: "Văn Cao",
    image: createPlaceholder("Tiến quân ca - Văn Cao"),
    explanation: "Nhạc sĩ Văn Cao đã sáng tác bài 'Tiến quân ca' vào năm 1944. Bài hát nhanh chóng trở thành bài hát chính thức của Mặt trận Việt Minh và sau đó được chọn làm Quốc ca.",
    difficulty: "easy"
  },
  {
    question: "Kinh đô của nhà Nguyễn được đặt ở đâu?",
    options: ["Thăng Long (Hà Nội)", "Hoa Lư (Ninh Bình)", "Tây Đô (Thanh Hóa)", "Phú Xuân (Huế)"],
    correctAnswer: "Phú Xuân (Huế)",
    image: createPlaceholder("Kinh đô nhà Nguyễn"),
    explanation: "Sau khi lên ngôi, vua Gia Long (Nguyễn Ánh) đã chọn Phú Xuân (Huế) làm kinh đô cho triều đại nhà Nguyễn, triều đại phong kiến cuối cùng của Việt Nam.",
    difficulty: "easy"
  },
  {
    question: "Phong trào Xô Viết Nghệ - Tĩnh diễn ra vào những năm nào?",
    options: ["1925-1926", "1930-1931", "1936-1939", "1940-1941"],
    correctAnswer: "1930-1931",
    image: createPlaceholder("Xô Viết Nghệ Tĩnh"),
    explanation: "Phong trào Xô Viết Nghệ - Tĩnh là đỉnh cao của cao trào cách mạng 1930-1931 do Đảng Cộng sản Đông Dương lãnh đạo, lần đầu tiên chính quyền của dân, do dân, vì dân được thành lập.",
    difficulty: "easy"
  },
  {
    question: "Ai là người anh hùng nhỏ tuổi nổi tiếng với câu chuyện đốt kho xăng của giặc Pháp ở Sài Gòn?",
    options: ["Kim Đồng", "Lê Văn Tám", "Vừ A Dính", "K'Pa K'Lơng"],
    correctAnswer: "Lê Văn Tám",
    image: createPlaceholder("Lê Văn Tám đốt kho xăng"),
    explanation: "Lê Văn Tám là một thiếu niên anh hùng trong lịch sử Việt Nam với hình ảnh 'đuốc sống' tẩm xăng chạy vào đốt kho đạn của quân Pháp tại thị Nghè.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào gắn liền với sự tích 'Hồ Gươm trả gươm'?",
    options: ["Lý Thái Tổ", "Trần Hưng Đạo", "Lê Lợi", "Quang Trung"],
    correctAnswer: "Lê Lợi",
    image: createPlaceholder("Hồ Gươm trả gươm"),
    explanation: "Truyền thuyết kể rằng sau khi đánh đuổi quân Minh, vua Lê Lợi (Lê Thái Tổ) khi dạo chơi trên hồ Tả Vọng đã trả lại gươm thần cho Rùa Vàng. Từ đó, hồ được đặt tên là Hồ Gươm hay hồ Hoàn Kiếm.",
    difficulty: "easy"
  },
  {
    question: "Cuộc khởi nghĩa của Bà Triệu (Triệu Thị Trinh) chống lại ách đô hộ của nhà nào?",
    options: ["Nhà Hán", "Nhà Đường", "Nhà Ngô", "Nhà Tống"],
    correctAnswer: "Nhà Ngô",
    image: createPlaceholder("Khởi nghĩa Bà Triệu"),
    explanation: "Năm 248, Bà Triệu đã lãnh đạo nhân dân Cửu Chân nổi dậy chống lại ách đô hộ của nhà Đông Ngô, với câu nói nổi tiếng: 'Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông...'",
    difficulty: "easy"
  },
  {
    question: "Ai là vị tổng bí thư đầu tiên của Đảng Cộng sản Việt Nam?",
    options: ["Hồ Chí Minh", "Lê Duẩn", "Trường Chinh", "Trần Phú"],
    correctAnswer: "Trần Phú",
    image: createPlaceholder("Tổng bí thư đầu tiên"),
    explanation: "Tại Hội nghị Trung ương tháng 10/1930, đồng chí Trần Phú được bầu làm Tổng Bí thư đầu tiên của Đảng. Ông là người đã khởi thảo Luận cương chính trị của Đảng.",
    difficulty: "easy"
  },
  {
    question: "Chiến thắng nào đã phá tan kế hoạch 'đánh nhanh thắng nhanh' của Pháp trong kháng chiến chống Pháp lần thứ nhất?",
    options: ["Chiến dịch Biên giới 1950", "Chiến dịch Việt Bắc - Thu Đông 1947", "Chiến dịch Thượng Lào 1953", "Chiến dịch Điện Biên Phủ 1954"],
    correctAnswer: "Chiến dịch Việt Bắc - Thu Đông 1947",
    image: createPlaceholder("Phá kế hoạch đánh nhanh"),
    explanation: "Với chiến thắng Việt Bắc - Thu Đông 1947, quân ta đã đập tan cuộc tiến công của Pháp lên căn cứ địa Việt Bắc, bảo vệ an toàn cho cơ quan đầu não kháng chiến và làm phá sản kế hoạch 'đánh nhanh thắng nhanh' của địch.",
    difficulty: "easy"
  },
  {
    question: "Tên nước Đại Việt tồn tại trong khoảng thời gian nào là chủ yếu?",
    options: ["Thời nhà Đinh - Tiền Lê", "Thời nhà Lý - Trần - Hồ - Lê Sơ", "Thời nhà Tây Sơn", "Thời nhà Nguyễn"],
    correctAnswer: "Thời nhà Lý - Trần - Hồ - Lê Sơ",
    image: createPlaceholder("Tên nước Đại Việt"),
    explanation: "Quốc hiệu Đại Việt được vua Lý Thánh Tông đặt năm 1054 và được sử dụng trong suốt các triều đại Lý, Trần, Hồ, Lê Sơ, trở thành quốc hiệu tồn tại lâu dài nhất.",
    difficulty: "easy"
  },
  {
    question: "Ai là người anh hùng đã chặt đứt cánh tay của mình để làm đuốc soi đường cho đồng đội tiến lên?",
    options: ["Bế Văn Đàn", "Tô Vĩnh Diện", "La Văn Cầu", "Phan Đình Giót"],
    correctAnswer: "La Văn Cầu",
    image: createPlaceholder("La Văn Cầu chặt tay"),
    explanation: "Trong một trận đánh, anh hùng La Văn Cầu bị thương nặng, cánh tay phải gần đứt lìa. Ông đã dũng cảm nhờ đồng đội chặt đứt cánh tay để tiếp tục chiến đấu.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào của nhà Trần nổi tiếng với tài làm thơ và là tác giả của 'Hịch tướng sĩ'?",
    options: ["Trần Thái Tông", "Trần Thánh Tông", "Trần Nhân Tông", "Trần Quốc Tuấn"],
    correctAnswer: "Trần Quốc Tuấn",
    image: createPlaceholder("Tác giả Hịch tướng sĩ"),
    explanation: "Dù không phải là vua, nhưng Hưng Đạo Vương Trần Quốc Tuấn là nhà quân sự thiên tài và cũng là một tác giả văn học với tác phẩm 'Hịch tướng sĩ' bất hủ.",
    difficulty: "easy"
  },
  {
    question: "Sự kiện nào đánh dấu sự sụp đổ hoàn toàn của chủ nghĩa thực dân cũ trên toàn thế giới?",
    options: ["Cách mạng tháng Tám 1945", "Chiến thắng Điện Biên Phủ 1954", "Phong trào Đồng Khởi 1960", "Đại thắng mùa Xuân 1975"],
    correctAnswer: "Chiến thắng Điện Biên Phủ 1954",
    image: createPlaceholder("Sụp đổ chủ nghĩa thực dân"),
    explanation: "Chiến thắng Điện Biên Phủ không chỉ là thắng lợi của Việt Nam mà còn là nguồn cổ vũ to lớn cho các dân tộc bị áp bức trên thế giới đứng lên đấu tranh giành độc lập, báo hiệu sự sụp đổ của chủ nghĩa thực dân cũ.",
    difficulty: "easy"
  },
  {
    question: "Nhà nước Âu Lạc là sự hợp nhất của hai bộ tộc nào?",
    options: ["Lạc Việt và Mân Việt", "Âu Việt và Lạc Việt", "Điền Việt và Lạc Việt", "Nam Việt và Âu Việt"],
    correctAnswer: "Âu Việt và Lạc Việt",
    image: createPlaceholder("Nhà nước Âu Lạc"),
    explanation: "Sau khi đánh bại vua Hùng thứ 18, Thục Phán (thủ lĩnh của người Âu Việt) đã hợp nhất vùng đất của người Âu Việt và Lạc Việt, lập ra nước Âu Lạc.",
    difficulty: "easy"
  },
  {
    question: "Tên của người đội viên thiếu niên đầu tiên của Đội TNTP Hồ Chí Minh là gì?",
    options: ["Kim Đồng", "Vừ A Dính", "Dương Văn Nội", "Lý Tự Trọng"],
    correctAnswer: "Kim Đồng",
    image: createPlaceholder("Đội viên đầu tiên"),
    explanation: "Kim Đồng (tên thật là Nông Văn Dền) là người đội trưởng đầu tiên của tổ chức Đội Thiếu niên Tiền phong Hồ Chí Minh. Anh đã hy sinh khi làm nhiệm vụ giao liên.",
    difficulty: "easy"
  },
  {
    question: "Ai là nữ tướng duy nhất trong phong trào Tây Sơn?",
    options: ["Nguyễn Thị Định", "Bà Triệu", "Bùi Thị Xuân", "Hai Bà Trưng"],
    correctAnswer: "Bùi Thị Xuân",
    image: createPlaceholder("Nữ tướng Tây Sơn"),
    explanation: "Bùi Thị Xuân là một trong những nữ tướng kiệt xuất của lịch sử Việt Nam. Bà cùng chồng là Trần Quang Diệu là những tướng lĩnh trụ cột của nhà Tây Sơn.",
    difficulty: "easy"
  },
  {
    question: "Thành phố nào được mệnh danh là 'Thành phố Hoa phượng đỏ'?",
    options: ["Hà Nội", "Hải Phòng", "Đà Nẵng", "Nha Trang"],
    correctAnswer: "Hải Phòng",
    image: createPlaceholder("Thành phố Hoa phượng đỏ"),
    explanation: "Hải Phòng nổi tiếng với những hàng cây phượng vĩ được trồng khắp các con phố, nở hoa đỏ rực vào mùa hè, vì vậy được mệnh danh là 'Thành phố Hoa phượng đỏ'.",
    difficulty: "easy"
  },
  {
    question: "Văn Miếu - Quốc Tử Giám thờ ai là chủ yếu?",
    options: ["Các vị vua nhà Lý", "Đức Phật", "Các vị thần linh", "Khổng Tử và các nhà Nho tiêu biểu"],
    correctAnswer: "Khổng Tử và các nhà Nho tiêu biểu",
    image: createPlaceholder("Văn Miếu thờ ai?"),
    explanation: "Văn Miếu được xây dựng để thờ Khổng Tử, người sáng lập ra Nho giáo. Quốc Tử Giám là trường đại học đầu tiên, và bia tiến sĩ ghi danh những người đỗ đạt cao trong các kỳ thi.",
    difficulty: "easy"
  },
  {
    question: "Ai là người sáng lập ra vương triều nhà Mạc?",
    options: ["Mạc Cửu", "Mạc Đĩnh Chi", "Mạc Đăng Dung", "Mạc Kính Cung"],
    correctAnswer: "Mạc Đăng Dung",
    image: createPlaceholder("Sáng lập nhà Mạc"),
    explanation: "Mạc Đăng Dung vốn là một võ quan của nhà Hậu Lê. Sau khi dẹp được các phe phái và nắm hết quyền bính, ông đã phế truất vua Lê Cung Hoàng để lập ra nhà Mạc vào năm 1527.",
    difficulty: "easy"
  },
  {
    question: "Sông Bạch Đằng, nơi diễn ra nhiều trận thủy chiến nổi tiếng, chảy qua các tỉnh thành nào ngày nay?",
    options: ["Hà Nội, Hưng Yên", "Quảng Ninh, Hải Phòng", "Thái Bình, Nam Định", "Thanh Hóa, Nghệ An"],
    correctAnswer: "Quảng Ninh, Hải Phòng",
    image: createPlaceholder("Sông Bạch Đằng"),
    explanation: "Sông Bạch Đằng là ranh giới tự nhiên giữa thành phố Hải Phòng và tỉnh Quảng Ninh, là nơi ghi dấu những chiến công hiển hách của dân tộc trong việc chống giặc ngoại xâm phương Bắc.",
    difficulty: "easy"
  },
  {
    question: "Cuộc khởi nghĩa Hai Bà Trưng nổ ra ở đâu?",
    options: ["Mê Linh (Hà Nội)", "Cổ Loa (Hà Nội)", "Hoa Lư (Ninh Bình)", "Lam Sơn (Thanh Hóa)"],
    correctAnswer: "Mê Linh (Hà Nội)",
    image: createPlaceholder("Nơi khởi nghĩa Hai Bà Trưng"),
    explanation: "Cuộc khởi nghĩa Hai Bà Trưng bùng nổ vào mùa xuân năm 40 tại Mê Linh (nay thuộc Hà Nội), sau đó nhanh chóng lan rộng ra khắp các quận Giao Chỉ, Cửu Chân, Nhật Nam.",
    difficulty: "easy"
  },
  {
    question: "Chiến dịch nào đã kết thúc thắng lợi cuộc kháng chiến chống thực dân Pháp của nhân dân ta?",
    options: ["Chiến dịch Việt Bắc 1947", "Chiến dịch Biên giới 1950", "Chiến dịch Hòa Bình 1952", "Chiến dịch Điện Biên Phủ 1954"],
    correctAnswer: "Chiến dịch Điện Biên Phủ 1954",
    image: createPlaceholder("Kết thúc kháng chiến Pháp"),
    explanation: "Thắng lợi của chiến dịch Điện Biên Phủ đã giáng đòn quyết định vào ý chí xâm lược của thực dân Pháp, buộc chúng phải ngồi vào bàn đàm phán và ký Hiệp định Genève, chấm dứt chiến tranh ở Đông Dương.",
    difficulty: "easy"
  },
  {
    question: "Vị vua anh minh nào của nhà Hậu Lê đã đưa Đại Việt lên đến thời kỳ cực thịnh?",
    options: ["Lê Thái Tổ", "Lê Thái Tông", "Lê Thánh Tông", "Lê Nhân Tông"],
    correctAnswer: "Lê Thánh Tông",
    image: createPlaceholder("Vua Lê Thánh Tông"),
    explanation: "Vua Lê Thánh Tông là một trong những vị hoàng đế vĩ đại nhất lịch sử. Dưới thời ông trị vì, nước Đại Việt phát triển rực rỡ về mọi mặt từ chính trị, kinh tế, quân sự đến văn hóa, giáo dục.",
    difficulty: "easy"
  },
  {
    question: "Địa đạo Củ Chi, một công trình quân sự độc đáo, thuộc địa phận thành phố nào?",
    options: ["Hà Nội", "Đà Nẵng", "Cần Thơ", "Thành phố Hồ Chí Minh"],
    correctAnswer: "Thành phố Hồ Chí Minh",
    image: createPlaceholder("Địa đạo Củ Chi"),
    explanation: "Địa đạo Củ Chi là một hệ thống phòng thủ trong lòng đất ở huyện Củ Chi, TP. Hồ Chí Minh. Đây là một kỳ quan quân sự độc đáo của quân và dân ta trong kháng chiến chống Mỹ.",
    difficulty: "easy"
  },
  {
    question: "Năm 1959, Trung ương Đảng đã quyết định mở con đường chiến lược nào để chi viện cho miền Nam?",
    options: ["Đường mòn Hồ Chí Minh trên bộ", "Đường mòn Hồ Chí Minh trên biển", "Cả hai con đường trên", "Đường số 9"],
    correctAnswer: "Cả hai con đường trên",
    image: createPlaceholder("Chi viện cho miền Nam"),
    explanation: "Năm 1959, Đoàn 559 được thành lập để mở đường Trường Sơn (Đường mòn Hồ Chí Minh trên bộ) và Đoàn 759 được thành lập để mở đường trên biển, hình thành hai tuyến chi viện chiến lược cho miền Nam.",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã chỉ huy cuộc kháng chiến chống quân Tống lần thứ nhất (năm 981)?",
    options: ["Ngô Quyền", "Đinh Bộ Lĩnh", "Lê Hoàn", "Lý Công Uẩn"],
    correctAnswer: "Lê Hoàn",
    image: createPlaceholder("Chống Tống lần 1"),
    explanation: "Sau khi vua Đinh Tiên Hoàng bị ám hại, thái hậu Dương Vân Nga đã trao long bào cho Thập đạo tướng quân Lê Hoàn để lãnh đạo quân dân Đại Cồ Việt đánh tan quân Tống xâm lược.",
    difficulty: "easy"
  },
  {
    question: "Tên của vị vua nhà Lý có công phá Tống, bình Chiêm là ai?",
    options: ["Lý Thái Tổ", "Lý Thái Tông", "Lý Thánh Tông", "Lý Nhân Tông"],
    correctAnswer: "Lý Thánh Tông",
    image: createPlaceholder("Vua Lý phá Tống"),
    explanation: "Vua Lý Thánh Tông không chỉ là người đặt quốc hiệu Đại Việt mà còn là một vị vua anh minh, có tài quân sự, đã trực tiếp cầm quân đi đánh Chiêm Thành và phá tan âm mưu của nhà Tống.",
    difficulty: "easy"
  },
  {
    question: "Nhà tù Côn Đảo, nơi được mệnh danh là 'địa ngục trần gian', thuộc tỉnh nào ngày nay?",
    options: ["Kiên Giang", "Bà Rịa - Vũng Tàu", "Khánh Hòa", "Cà Mau"],
    correctAnswer: "Bà Rịa - Vũng Tàu",
    image: createPlaceholder("Nhà tù Côn Đảo"),
    explanation: "Côn Đảo là một quần đảo ngoài khơi thuộc tỉnh Bà Rịa – Vũng Tàu. Nơi đây từng là nơi giam giữ và tra tấn các nhà cách mạng và người yêu nước Việt Nam.",
    difficulty: "easy"
  },
  {
    question: "Tên ban đầu của nước ta dưới thời vua An Dương Vương là gì?",
    options: ["Văn Lang", "Đại Cồ Việt", "Âu Lạc", "Vạn Xuân"],
    correctAnswer: "Âu Lạc",
    image: createPlaceholder("Nước thời An Dương Vương"),
    explanation: "Sau khi thống nhất hai bộ tộc Âu Việt và Lạc Việt, Thục Phán An Dương Vương đã lập ra nhà nước mới, đặt tên là Âu Lạc và dời đô về Cổ Loa.",
    difficulty: "easy"
  },
  {
    question: "Cuộc khởi nghĩa của Lý Bí đã lập nên nhà nước nào?",
    options: ["Nhà Tiền Lý", "Nhà Triệu", "Nhà Ngô", "Nước Vạn Xuân"],
    correctAnswer: "Nước Vạn Xuân",
    image: createPlaceholder("Khởi nghĩa Lý Bí"),
    explanation: "Năm 544, sau khi đánh đuổi quân Lương, Lý Bí lên ngôi hoàng đế (Lý Nam Đế), đặt tên nước là Vạn Xuân, thể hiện mong muốn đất nước được độc lập, trường tồn.",
    difficulty: "easy"
  },
  {
    question: "Ai là tác giả của 'Truyện Kiều', kiệt tác văn học của dân tộc Việt Nam?",
    options: ["Hồ Xuân Hương", "Nguyễn Du", "Bà Huyện Thanh Quan", "Nguyễn Đình Chiểu"],
    correctAnswer: "Nguyễn Du",
    image: createPlaceholder("Tác giả Truyện Kiều"),
    explanation: "Đại thi hào Nguyễn Du là tác giả của 'Đoạn trường tân thanh', thường được biết đến với tên gọi 'Truyện Kiều', một kiệt tác của văn học Nôm Việt Nam.",
    difficulty: "easy"
  },
  {
    question: "Chiến thắng nào của quân Tây Sơn được coi là một trong những trận thủy chiến vĩ đại nhất lịch sử?",
    options: ["Trận Bạch Đằng", "Trận Rạch Gầm - Xoài Mút", "Trận Ngọc Hồi - Đống Đa", "Trận Chi Lăng - Xương Giang"],
    correctAnswer: "Trận Rạch Gầm - Xoài Mút",
    image: createPlaceholder("Trận Rạch Gầm Xoài Mút"),
    explanation: "Năm 1785, Nguyễn Huệ đã chỉ huy quân Tây Sơn dùng chiến thuật phục kích trên sông, tiêu diệt gọn 5 vạn quân Xiêm xâm lược tại Rạch Gầm - Xoài Mút (sông Tiền).",
    difficulty: "easy"
  },
  {
    question: "Tên tuổi của nữ anh hùng Võ Thị Sáu gắn liền với địa danh nào?",
    options: ["Nhà tù Phú Quốc", "Nhà tù Sơn La", "Nhà tù Côn Đảo", "Nhà tù Hỏa Lò"],
    correctAnswer: "Nhà tù Côn Đảo",
    image: createPlaceholder("Võ Thị Sáu"),
    explanation: "Nữ anh hùng Võ Thị Sáu bị thực dân Pháp bắt và đày ra Côn Đảo. Tại đây, chị đã bị xử bắn khi chưa đầy 18 tuổi và trở thành biểu tượng cho lòng yêu nước, dũng cảm.",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã có câu nói nổi tiếng 'Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây'?",
    options: ["Hoàng Hoa Thám", "Trương Định", "Nguyễn Trung Trực", "Phan Đình Phùng"],
    correctAnswer: "Nguyễn Trung Trực",
    image: createPlaceholder("Nguyễn Trung Trực"),
    explanation: "Câu nói này của anh hùng Nguyễn Trung Trực trước khi bị giặc Pháp hành hình đã thể hiện khí phách hiên ngang, bất khuất và ý chí chống giặc đến cùng của nhân dân ta.",
    difficulty: "easy"
  },
  {
    question: "Kinh thành Thăng Long xưa có bao nhiêu cửa ô?",
    options: ["4", "5", "16", "36"],
    correctAnswer: "16",
    image: createPlaceholder("Cửa ô Thăng Long"),
    explanation: "Vào thời Lê, kinh thành Thăng Long có 16 cửa ô. Hà Nội ngày nay vẫn còn giữ lại một số địa danh gắn với tên các cửa ô cũ như Ô Chợ Dừa, Ô Cầu Giấy, Ô Quan Chưởng.",
    difficulty: "easy"
  },
  {
    question: "Tổ chức Việt Nam Quang phục hội do ai sáng lập?",
    options: ["Phan Bội Châu", "Phan Chu Trinh", "Nguyễn Thái Học", "Hoàng Hoa Thám"],
    correctAnswer: "Phan Bội Châu",
    image: createPlaceholder("Việt Nam Quang phục hội"),
    explanation: "Sau khi phong trào Đông Du thất bại, Phan Bội Châu đã cùng các nhà yêu nước khác thành lập Việt Nam Quang phục hội (1912) với tôn chỉ 'Đánh đuổi giặc Pháp, khôi phục nước Việt Nam, thành lập nước Cộng hòa Dân quốc Việt Nam'.",
    difficulty: "easy"
  },
  {
    question: "Ai là vị vua sáng lập ra triều Nguyễn?",
    options: ["Nguyễn Huệ", "Nguyễn Nhạc", "Gia Long", "Minh Mạng"],
    correctAnswer: "Gia Long",
    image: createPlaceholder("Sáng lập triều Nguyễn"),
    explanation: "Vua Gia Long tên thật là Nguyễn Ánh. Sau nhiều năm chiến tranh với nhà Tây Sơn, ông đã thống nhất đất nước và lập ra triều Nguyễn vào năm 1802.",
    difficulty: "easy"
  },
  {
    question: "Phong trào 'Vô sản hóa' do tổ chức nào phát động vào năm 1928?",
    options: ["Tân Việt Cách mạng Đảng", "Việt Nam Quốc dân Đảng", "Hội Việt Nam Cách mạng Thanh niên", "Đông Dương Cộng sản Liên đoàn"],
    correctAnswer: "Hội Việt Nam Cách mạng Thanh niên",
    image: createPlaceholder("Phong trào Vô sản hóa"),
    explanation: "Năm 1928, Hội Việt Nam Cách mạng Thanh niên đã phát động phong trào 'Vô sản hóa', đưa các hội viên vào nhà máy, hầm mỏ, đồn điền để tự rèn luyện và truyền bá chủ nghĩa Mác - Lênin.",
    difficulty: "easy"
  },
  {
    question: "Nơi nào được coi là 'thủ đô kháng chiến' trong cuộc kháng chiến chống Pháp?",
    options: ["Pác Bó (Cao Bằng)", "Tân Trào (Tuyên Quang)", "ATK Định Hóa (Thái Nguyên)", "Cả 3 địa danh trên"],
    correctAnswer: "Cả 3 địa danh trên",
    image: createPlaceholder("Thủ đô kháng chiến"),
    explanation: "Khu vực Việt Bắc, bao gồm các địa danh như Pác Bó, Tân Trào, Định Hóa, được coi là 'Thủ đô gió ngàn' hay 'thủ đô kháng chiến', nơi đặt các cơ quan đầu não của Đảng, Chính phủ trong kháng chiến chống Pháp.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào của nhà Trần đã hai lần làm thái thượng hoàng, trực tiếp cùng con lãnh đạo kháng chiến chống Mông-Nguyên?",
    options: ["Trần Thái Tông", "Trần Thánh Tông", "Trần Nhân Tông", "Trần Anh Tông"],
    correctAnswer: "Trần Thánh Tông",
    image: createPlaceholder("Vua Trần làm thái thượng hoàng"),
    explanation: "Vua Trần Thánh Tông sau khi nhường ngôi cho con là Trần Nhân Tông đã trở thành Thái thượng hoàng. Ông cùng với vua con đã trực tiếp lãnh đạo hai cuộc kháng chiến chống Mông-Nguyên lần thứ 2 và 3.",
    difficulty: "easy"
  },
  {
    question: "Cuộc khởi nghĩa của Mai Thúc Loan (Mai Hắc Đế) chống lại ách đô hộ của nhà nào?",
    options: ["Nhà Hán", "Nhà Lương", "Nhà Đường", "Nhà Tống"],
    correctAnswer: "Nhà Đường",
    image: createPlaceholder("Khởi nghĩa Mai Thúc Loan"),
    explanation: "Đầu thế kỷ thứ 8, Mai Thúc Loan đã lãnh đạo nhân dân Hoan Châu nổi dậy chống lại ách đô hộ tàn bạo của nhà Đường. Ông xưng đế (Mai Hắc Đế) và xây dựng căn cứ ở Sa Nam (Nghệ An).",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã cắm lá cờ chiến thắng của quân giải phóng trên nóc Dinh Độc Lập vào trưa ngày 30/4/1975?",
    options: ["Bùi Quang Thận", "Vũ Đăng Toàn", "Phạm Xuân Thệ", "Nguyễn Văn Tòng"],
    correctAnswer: "Bùi Quang Thận",
    image: createPlaceholder("Cắm cờ Dinh Độc Lập"),
    explanation: "Trưa ngày 30/4/1975, đại đội trưởng Bùi Quang Thận, chỉ huy xe tăng 843, đã hạ cờ của chính quyền Sài Gòn và cắm lá cờ của Mặt trận Dân tộc Giải phóng miền Nam Việt Nam lên nóc Dinh Độc Lập.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào đã ban hành bộ 'Quốc triều hình luật' hay còn gọi là Luật Hồng Đức?",
    options: ["Lê Thái Tổ", "Lê Thái Tông", "Lê Thánh Tông", "Lê Nhân Tông"],
    correctAnswer: "Lê Thánh Tông",
    image: createPlaceholder("Luật Hồng Đức"),
    explanation: "Dưới thời vua Lê Thánh Tông, bộ luật thành văn hoàn chỉnh đầu tiên của nước ta là Quốc triều hình luật (Luật Hồng Đức) đã được ban hành. Đây là một bộ luật rất tiến bộ.",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã thành lập nhà Tiền Lê?",
    options: ["Lê Lợi", "Lê Long Đĩnh", "Lê Hoàn", "Lê Đại Hành"],
    correctAnswer: "Lê Hoàn",
    image: createPlaceholder("Sáng lập nhà Tiền Lê"),
    explanation: "Sau khi vua Đinh Tiên Hoàng và Đinh Liễn bị ám hại, Thập đạo tướng quân Lê Hoàn đã được suy tôn lên ngôi vua để lãnh đạo đất nước chống Tống, lập ra nhà Tiền Lê. Lê Đại Hành là miếu hiệu của ông.",
    difficulty: "easy"
  },
  {
    question: "Trận Ngọc Hồi - Đống Đa là chiến thắng của quân Tây Sơn trước đội quân xâm lược nào?",
    options: ["Quân Xiêm", "Quân Thanh", "Quân Minh", "Quân Mãn Châu"],
    correctAnswer: "Quân Thanh",
    image: createPlaceholder("Trận Ngọc Hồi Đống Đa"),
    explanation: "Vào mùa xuân năm Kỷ Dậu 1789, với cuộc hành quân thần tốc, vua Quang Trung - Nguyễn Huệ đã lãnh đạo quân Tây Sơn đại phá 29 vạn quân Thanh xâm lược tại Ngọc Hồi - Đống Đa.",
    difficulty: "easy"
  },
  {
    question: "Tên của vị vua cuối cùng của nhà Lý là gì?",
    options: ["Lý Cao Tông", "Lý Huệ Tông", "Lý Chiêu Hoàng", "Lý Anh Tông"],
    correctAnswer: "Lý Chiêu Hoàng",
    image: createPlaceholder("Vua cuối cùng nhà Lý"),
    explanation: "Lý Chiêu Hoàng là vị nữ hoàng duy nhất trong lịch sử Việt Nam. Bà đã nhường ngôi cho chồng là Trần Cảnh, chấm dứt 216 năm tồn tại của vương triều nhà Lý.",
    difficulty: "easy"
  },
  {
    question: "Ai là người sáng lập ra triều đại nhà Hồ?",
    options: ["Hồ Nguyên Trừng", "Hồ Hán Thương", "Hồ Quý Ly", "Hồ Tông Thốc"],
    correctAnswer: "Hồ Quý Ly",
    image: createPlaceholder("Sáng lập nhà Hồ"),
    explanation: "Năm 1400, sau khi ép vua Trần Thiếu Đế nhường ngôi, Hồ Quý Ly đã lên ngôi hoàng đế, lập ra nhà Hồ và đổi quốc hiệu là Đại Ngu.",
    difficulty: "easy"
  },
  {
    question: "Đại tướng Võ Nguyên Giáp là tổng chỉ huy của chiến dịch lịch sử nào?",
    options: ["Chiến dịch Biên giới 1950", "Chiến dịch Điện Biên Phủ 1954", "Chiến dịch Hồ Chí Minh 1975", "Cả 3 chiến dịch trên"],
    correctAnswer: "Cả 3 chiến dịch trên",
    image: createPlaceholder("Đại tướng Võ Nguyên Giáp"),
    explanation: "Đại tướng Võ Nguyên Giáp là Tổng tư lệnh Quân đội Nhân dân Việt Nam, đã trực tiếp chỉ huy nhiều chiến dịch lớn, trong đó có cả 3 chiến dịch mang tính bước ngoặt lịch sử trên.",
    difficulty: "easy"
  },
  {
    question: "Bến Nhà Rồng, nơi người thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước, nay thuộc thành phố nào?",
    options: ["Hải Phòng", "Đà Nẵng", "Thành phố Hồ Chí Minh", "Quy Nhơn"],
    correctAnswer: "Thành phố Hồ Chí Minh",
    image: createPlaceholder("Bến Nhà Rồng"),
    explanation: "Ngày 5/6/1911, từ Bến cảng Nhà Rồng (Sài Gòn), người thanh niên yêu nước Nguyễn Tất Thành đã lên con tàu Amiral Latouche-Tréville, bắt đầu hành trình tìm đường cứu nước.",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã lãnh đạo cuộc khởi nghĩa nông dân Yên Thế chống Pháp kéo dài gần 30 năm?",
    options: ["Phan Đình Phùng", "Nguyễn Thiện Thuật", "Hoàng Hoa Thám", "Trương Định"],
    correctAnswer: "Hoàng Hoa Thám",
    image: createPlaceholder("Khởi nghĩa Yên Thế"),
    explanation: "Hoàng Hoa Thám, hay còn gọi là Đề Thám, là người lãnh đạo cuộc khởi nghĩa nông dân lớn nhất, kéo dài nhất (1884-1913) trong phong trào chống Pháp cuối thế kỷ 19, đầu thế kỷ 20.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào của nhà Trần đã có câu nói nổi tiếng 'Đầu thần chưa rơi xuống đất, bệ hạ đừng lo'?",
    options: ["Trần Thủ Độ", "Trần Hưng Đạo", "Trần Quang Khải", "Trần Nhật Duật"],
    correctAnswer: "Trần Thủ Độ",
    image: createPlaceholder("Câu nói của Trần Thủ Độ"),
    explanation: "Khi quân Mông-Nguyên xâm lược lần thứ nhất, vua Trần Thái Tông lo lắng hỏi ý kiến Thái sư Trần Thủ Độ. Ông đã khẳng khái trả lời: 'Đầu thần chưa rơi xuống đất, bệ hạ đừng lo', thể hiện quyết tâm chiến đấu đến cùng.",
    difficulty: "easy"
  },
  {
    question: "Cuộc khởi nghĩa của Phùng Hưng chống lại ách đô hộ của nhà nào?",
    options: ["Nhà Hán", "Nhà Đường", "Nhà Tùy", "Nhà Lương"],
    correctAnswer: "Nhà Đường",
    image: createPlaceholder("Khởi nghĩa Phùng Hưng"),
    explanation: "Khoảng cuối thế kỷ thứ 8, Phùng Hưng đã lãnh đạo nhân dân nổi dậy khởi nghĩa chống lại ách đô hộ của nhà Đường, chiếm được thành Tống Bình (Hà Nội). Ông được nhân dân suy tôn là Bố Cái Đại Vương.",
    difficulty: "easy"
  },
  {
    question: "Ai là người được mệnh danh là 'Lưỡng quốc Trạng nguyên'?",
    options: ["Mạc Đĩnh Chi", "Nguyễn Bỉnh Khiêm", "Lê Quý Đôn", "Nguyễn Hiền"],
    correctAnswer: "Mạc Đĩnh Chi",
    image: createPlaceholder("Lưỡng quốc Trạng nguyên"),
    explanation: "Mạc Đĩnh Chi không chỉ đỗ Trạng nguyên ở Việt Nam mà trong một lần đi sứ sang Trung Quốc, ông đã thể hiện tài năng xuất chúng và được vua Nguyên công nhận là Trạng nguyên của cả hai nước.",
    difficulty: "easy"
  },
  {
    question: "Ai là tác giả của tác phẩm 'Lục Vân Tiên'?",
    options: ["Nguyễn Du", "Nguyễn Đình Chiểu", "Hồ Xuân Hương", "Nguyễn Khuyến"],
    correctAnswer: "Nguyễn Đình Chiểu",
    image: createPlaceholder("Tác giả Lục Vân Tiên"),
    explanation: "Nguyễn Đình Chiểu, nhà thơ mù yêu nước của đất Nam Bộ, là tác giả của truyện thơ Nôm nổi tiếng 'Lục Vân Tiên', đề cao tinh thần nghĩa hiệp và đạo lý làm người.",
    difficulty: "easy"
  },
  {
    question: "Ai là vị vua sáng lập triều Lý?",
    options: ["Lý Thường Kiệt", "Lý Nhân Tông", "Lý Công Uẩn", "Lý Chiêu Hoàng"],
    correctAnswer: "Lý Công Uẩn",
    image: createPlaceholder("Sáng lập triều Lý"),
    explanation: "Năm 1009, sau khi vua Lê Long Đĩnh qua đời, Lý Công Uẩn được triều thần tôn lên làm vua, lập ra nhà Lý, lấy miếu hiệu là Lý Thái Tổ.",
    difficulty: "easy"
  },
  {
    question: "Quốc hiệu nước ta được đổi từ Đại Việt thành Việt Nam dưới thời vua nào?",
    options: ["Quang Trung", "Gia Long", "Minh Mạng", "Tự Đức"],
    correctAnswer: "Gia Long",
    image: createPlaceholder("Quốc hiệu Việt Nam"),
    explanation: "Năm 1804, vua Gia Long đã đổi quốc hiệu từ Đại Việt thành Việt Nam. Đây là lần đầu tiên tên gọi Việt Nam chính thức trở thành quốc hiệu của nước ta.",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã lấy thân mình chèn pháo trong chiến dịch Điện Biên Phủ?",
    options: ["Phan Đình Giót", "Bế Văn Đàn", "Tô Vĩnh Diện", "La Văn Cầu"],
    correctAnswer: "Tô Vĩnh Diện",
    image: createPlaceholder("Lấy thân mình chèn pháo"),
    explanation: "Trong khi kéo pháo vào trận địa, dây tời bị đứt, anh hùng Tô Vĩnh Diện đã không ngần ngại lấy thân mình chèn vào bánh pháo, ngăn không cho khẩu pháo cao xạ lăn xuống vực.",
    difficulty: "easy"
  },
  {
    question: "Chiến thắng Chi Lăng - Xương Giang gắn liền với tên tuổi của vị tướng nào?",
    options: ["Trần Hưng Đạo", "Lê Lợi và Nguyễn Trãi", "Lý Thường Kiệt", "Quang Trung"],
    correctAnswer: "Lê Lợi và Nguyễn Trãi",
    image: createPlaceholder("Chiến thắng Chi Lăng"),
    explanation: "Trận Chi Lăng - Xương Giang (1427) là trận đánh quyết định trong cuộc khởi nghĩa Lam Sơn. Dưới sự chỉ huy của Lê Lợi và Nguyễn Trãi, quân ta đã tiêu diệt hoàn toàn viện binh của quân Minh.",
    difficulty: "easy"
  },
  {
    question: "Vị vua nào được nhân dân gọi là 'vua Lợn' do tính cách tàn bạo, hoang dâm?",
    options: ["Lê Uy Mục", "Lê Tương Dực", "Lê Long Đĩnh", "Mạc Mậu Hợp"],
    correctAnswer: "Lê Tương Dực",
    image: createPlaceholder("Biệt danh vua Lợn"),
    explanation: "Vua Lê Tương Dực nổi tiếng là một hôn quân, chỉ biết ăn chơi sa đọa, cho xây Cửu Trùng Đài tốn kém. Vì vậy, dân gian đã gọi ông là 'vua Lợn'.",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã lãnh đạo cuộc khởi nghĩa chống ách đô hộ của nhà Hán và xưng là 'Vua Đen' (Hắc Đế)?",
    options: ["Phùng Hưng", "Mai Thúc Loan", "Lý Bí", "Triệu Quang Phục"],
    correctAnswer: "Mai Thúc Loan",
    image: createPlaceholder("Biệt danh Vua Đen"),
    explanation: "Mai Thúc Loan, do có nước da ngăm đen, nên khi ông xưng đế đã lấy hiệu là Mai Hắc Đế. Cuộc khởi nghĩa của ông đã chống lại ách đô hộ của nhà Đường.",
    difficulty: "easy"
  },
  {
    question: "Ai là người được gọi là 'vua' trong làng báo chí Việt Nam thế kỷ 20?",
    options: ["Tản Đà", "Ngô Tất Tố", "Hoàng Tích Chu", "Vũ Trọng Phụng"],
    correctAnswer: "Hoàng Tích Chu",
    image: createPlaceholder("Vua làng báo chí"),
    explanation: "Hoàng Tích Chu là một nhà báo lỗi lạc, có nhiều đóng góp cho sự phát triển của báo chí Việt Nam trong nửa đầu thế kỷ 20, được giới báo chí thời đó nể trọng và gọi là 'vua phóng viên Bắc Kỳ'.",
    difficulty: "easy"
  },
  {
    question: "Tên của vị tướng đã chỉ huy trận Rạch Gầm - Xoài Mút là ai?",
    options: ["Nguyễn Nhạc", "Nguyễn Huệ", "Nguyễn Lữ", "Bùi Thị Xuân"],
    correctAnswer: "Nguyễn Huệ",
    image: createPlaceholder("Chỉ huy Rạch Gầm Xoài Mút"),
    explanation: "Nguyễn Huệ là người đã trực tiếp lên kế hoạch và chỉ huy quân Tây Sơn làm nên chiến thắng thủy chiến lừng lẫy Rạch Gầm - Xoài Mút, đánh tan 5 vạn quân Xiêm.",
    difficulty: "easy"
  },
  {
    question: "Ai là vị vua sáng lập triều Đinh?",
    options: ["Đinh Liễn", "Đinh Toàn", "Đinh Bộ Lĩnh", "Đinh Điền"],
    correctAnswer: "Đinh Bộ Lĩnh",
    image: createPlaceholder("Sáng lập triều Đinh"),
    explanation: "Sau khi dẹp loạn 12 sứ quân, thống nhất đất nước, Đinh Bộ Lĩnh lên ngôi hoàng đế, tức vua Đinh Tiên Hoàng, đặt quốc hiệu là Đại Cồ Việt, đóng đô ở Hoa Lư.",
    difficulty: "easy"
  },
  {
    question: "Đại hội đại biểu toàn quốc lần thứ II của Đảng (1951) diễn ra ở đâu?",
    options: ["Hà Nội", "Cao Bằng", "Tuyên Quang", "Thái Nguyên"],
    correctAnswer: "Tuyên Quang",
    image: createPlaceholder("Đại hội Đảng lần II"),
    explanation: "Đại hội II của Đảng được tổ chức tại xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang. Đại hội đã quyết định đưa Đảng ra hoạt động công khai với tên gọi mới là Đảng Lao động Việt Nam.",
    difficulty: "easy"
  },
  {
    question: "Ai là vị trạng nguyên trẻ tuổi nhất trong lịch sử khoa bảng Việt Nam?",
    options: ["Lê Văn Thịnh", "Nguyễn Hiền", "Mạc Đĩnh Chi", "Lương Thế Vinh"],
    correctAnswer: "Nguyễn Hiền",
    image: createPlaceholder("Trạng nguyên trẻ nhất"),
    explanation: "Nguyễn Hiền đỗ Trạng nguyên khoa thi năm 1247 dưới triều vua Trần Thái Tông khi chỉ mới 13 tuổi, trở thành vị Trạng nguyên trẻ tuổi nhất trong lịch sử nước nhà.",
    difficulty: "easy"
  },
  {
    question: "Tên gọi 'Đàng Trong' và 'Đàng Ngoài' dùng để chỉ hai thế lực phong kiến nào trong lịch sử?",
    options: ["Nhà Mạc và Nhà Lê", "Chúa Trịnh và Chúa Nguyễn", "Nhà Tây Sơn và Nhà Nguyễn", "Nhà Hồ và Nhà Trần"],
    correctAnswer: "Chúa Trịnh và Chúa Nguyễn",
    image: createPlaceholder("Đàng Trong - Đàng Ngoài"),
    explanation: "Từ thế kỷ 17-18, sông Gianh (Quảng Bình) trở thành ranh giới chia cắt đất nước. Đàng Ngoài do chúa Trịnh cai quản (phò vua Lê), Đàng Trong do chúa Nguyễn cai quản.",
    difficulty: "easy"
  },
  {
    question: "Nữ anh hùng Bùi Thị Xuân là vợ của vị tướng nào của nhà Tây Sơn?",
    options: ["Trần Quang Diệu", "Vũ Văn Dũng", "Ngô Văn Sở", "Lê Văn Hưng"],
    correctAnswer: "Trần Quang Diệu",
    image: createPlaceholder("Chồng Bùi Thị Xuân"),
    explanation: "Đô đốc Bùi Thị Xuân và Thiếu phó Trần Quang Diệu là cặp vợ chồng tướng lĩnh tài ba, đã có nhiều đóng góp to lớn cho vương triều Tây Sơn.",
    difficulty: "easy"
  },
  {
    question: "Ai là người đã lãnh đạo cuộc khởi nghĩa Ba Đình chống Pháp?",
    options: ["Phạm Bành và Đinh Công Tráng", "Nguyễn Thiện Thuật", "Phan Đình Phùng", "Tống Duy Tân"],
    correctAnswer: "Phạm Bành và Đinh Công Tráng",
    image: createPlaceholder("Khởi nghĩa Ba Đình"),
    explanation: "Khởi nghĩa Ba Đình (1886-1887) là một trong các cuộc khởi nghĩa của phong trào Cần Vương. Căn cứ Ba Đình được xây dựng ở Nga Sơn, Thanh Hóa dưới sự chỉ huy của Phạm Bành và Đinh Công Tráng.",
    difficulty: "easy"
  },
  {
    question: "Khu di tích lịch sử Pác Bó, nơi Bác Hồ về nước sau 30 năm, thuộc tỉnh nào?",
    options: ["Cao Bằng", "Lạng Sơn", "Hà Giang", "Tuyên Quang"],
    correctAnswer: "Cao Bằng",
    image: createPlaceholder("Khu di tích Pác Bó"),
    explanation: "Ngày 28/1/1941, sau 30 năm hoạt động ở nước ngoài, Nguyễn Ái Quốc đã trở về nước qua cột mốc 108 ở Pác Bó, huyện Hà Quảng, tỉnh Cao Bằng để trực tiếp lãnh đạo cách mạng.",
    difficulty: "easy"
  }
];

export const MEDIUM_QUESTIONS: Question[] = [
  {
    question: "Ai là tác giả của 'Bình Ngô đại cáo', được xem là bản tuyên ngôn độc lập thứ hai của Việt Nam?",
    options: ["Lê Lợi", "Nguyễn Trãi", "Trần Hưng Đạo", "Lý Thường Kiệt"],
    correctAnswer: "Nguyễn Trãi",
    image: createPlaceholder("Tác giả Bình Ngô đại cáo"),
    explanation: "Nguyễn Trãi, nhà quân sư lỗi lạc của khởi nghĩa Lam Sơn, đã thừa lệnh vua Lê Lợi soạn thảo 'Bình Ngô đại cáo' để tổng kết cuộc kháng chiến chống quân Minh và khẳng định chủ quyền dân tộc.",
    difficulty: "medium"
  },
  {
    question: "Hội nghị Diên Hồng được tổ chức dưới thời vua nào để hỏi ý kiến các bô lão về việc đánh giặc Mông - Nguyên?",
    options: ["Trần Thái Tông", "Trần Thánh Tông", "Trần Nhân Tông", "Trần Anh Tông"],
    correctAnswer: "Trần Thánh Tông",
    image: createPlaceholder("Hội nghị Diên Hồng"),
    explanation: "Năm 1284, trước nguy cơ xâm lược lần thứ hai của quân Mông - Nguyên, Thượng hoàng Trần Thánh Tông đã triệu tập Hội nghị Diên Hồng để hỏi ý kiến các vị phụ lão, thể hiện tinh thần đoàn kết toàn dân.",
    difficulty: "medium"
  },
  {
    question: "Ai là tác giả của bài thơ 'Nam quốc sơn hà' - được coi là bản tuyên ngôn độc lập đầu tiên của Việt Nam?",
    options: ["Nguyễn Trãi", "Lý Thường Kiệt", "Trần Quang Khải", "Phạm Ngũ Lão"],
    correctAnswer: "Lý Thường Kiệt",
    image: createPlaceholder("Nam quốc sơn hà"),
    explanation: "Bài thơ 'Nam quốc sơn hà' được cho là của Lý Thường Kiệt, vang lên bên sông Như Nguyệt để khích lệ tinh thần quân sĩ trong cuộc kháng chiến chống quân Tống (1075-1077).",
    difficulty: "medium"
  },
  {
    question: "Phong trào Cần Vương cuối thế kỷ 19 bùng nổ nhằm mục đích gì?",
    options: ["Chống lại triều đình nhà Nguyễn", "Giúp vua Hàm Nghi chống Pháp", "Thành lập một triều đại mới", "Cải cách đất nước"],
    correctAnswer: "Giúp vua Hàm Nghi chống Pháp",
    image: createPlaceholder("Phong trào Cần Vương"),
    explanation: "Sau khi kinh thành Huế thất thủ năm 1885, Tôn Thất Thuyết đã đưa vua Hàm Nghi ra sơn phòng Tân Sở (Quảng Trị) và hạ chiếu Cần Vương, kêu gọi văn thân, sĩ phu và nhân dân cả nước đứng lên giúp vua cứu nước.",
    difficulty: "medium"
  },
  {
    question: "Hiệp định Genève năm 1954 về Đông Dương đã lấy vĩ tuyến nào làm giới tuyến quân sự tạm thời?",
    options: ["Vĩ tuyến 16", "Vĩ tuyến 17", "Vĩ tuyến 18", "Vĩ tuyến 20"],
    correctAnswer: "Vĩ tuyến 17",
    image: createPlaceholder("Hiệp định Genève 1954"),
    explanation: "Hiệp định Genève quy định lấy vĩ tuyến 17 (dọc sông Bến Hải, Quảng Trị) làm giới tuyến quân sự tạm thời để hai bên tập kết quân đội, chờ tổng tuyển cử thống nhất đất nước.",
    difficulty: "medium"
  },
  {
    question: "Cuộc Tổng tiến công và nổi dậy Mậu Thân 1968 có ý nghĩa chiến lược quan trọng nhất là gì?",
    options: ["Giải phóng hoàn toàn miền Nam", "Tiêu diệt toàn bộ quân Mỹ", "Buộc Mỹ phải xuống thang chiến tranh", "Làm phá sản chiến lược 'Chiến tranh đặc biệt'"],
    correctAnswer: "Buộc Mỹ phải xuống thang chiến tranh",
    image: createPlaceholder("Mậu Thân 1968"),
    explanation: "Mặc dù có nhiều tổn thất, cuộc Tổng tiến công Mậu Thân 1968 đã làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ phải ngừng ném bom miền Bắc và chấp nhận ngồi vào bàn đàm phán tại Paris.",
    difficulty: "medium"
  },
  {
    question: "Ai là người lãnh đạo cuộc khởi nghĩa nông dân lớn nhất thế kỷ 18, lật đổ cả chúa Trịnh, chúa Nguyễn và vua Lê?",
    options: ["Lê Lợi", "Hoàng Hoa Thám", "Nguyễn Hữu Cầu", "Nguyễn Huệ"],
    correctAnswer: "Nguyễn Huệ",
    image: createPlaceholder("Khởi nghĩa Tây Sơn"),
    explanation: "Ba anh em nhà Tây Sơn (Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ) đã lãnh đạo phong trào nông dân khởi nghĩa, lật đổ các thế lực phong kiến cát cứ, thống nhất đất nước và đánh tan quân xâm lược Xiêm, Thanh.",
    difficulty: "medium"
  },
  {
    question: "Vị trạng nguyên đầu tiên của nền khoa bảng Việt Nam là ai?",
    options: ["Mạc Đĩnh Chi", "Chu Văn An", "Lê Văn Thịnh", "Nguyễn Bỉnh Khiêm"],
    correctAnswer: "Lê Văn Thịnh",
    image: createPlaceholder("Trạng nguyên đầu tiên"),
    explanation: "Lê Văn Thịnh, người Kinh Bắc, đã đỗ đầu trong khoa thi Minh kinh bác học năm 1075 dưới thời vua Lý Nhân Tông, trở thành vị Trạng nguyên khai khoa của Việt Nam.",
    difficulty: "medium"
  },
  {
    question: "Chiến dịch nào trong kháng chiến chống Mỹ được mệnh danh là 'Điện Biên Phủ trên không'?",
    options: ["Chiến dịch Đường 9 - Nam Lào", "Cuộc tập kích chiến lược bằng B-52 vào Hà Nội, Hải Phòng", "Chiến dịch Mậu Thân 1968", "Chiến dịch Hồ Chí Minh"],
    correctAnswer: "Cuộc tập kích chiến lược bằng B-52 vào Hà Nội, Hải Phòng",
    image: createPlaceholder("Điện Biên Phủ trên không"),
    explanation: "Tháng 12/1972, quân và dân miền Bắc đã đập tan cuộc tập kích chiến lược bằng máy bay B-52 của Mỹ, làm nên chiến thắng 'Điện Biên Phủ trên không', buộc Mỹ phải ký Hiệp định Paris.",
    difficulty: "medium"
  },
  {
    question: "Tổ chức cách mạng nào do Nguyễn Ái Quốc thành lập vào tháng 6/1925 tại Quảng Châu (Trung Quốc)?",
    options: ["Tân Việt Cách mạng Đảng", "Việt Nam Quốc dân Đảng", "Hội Việt Nam Cách mạng Thanh niên", "Đông Dương Cộng sản Đảng"],
    correctAnswer: "Hội Việt Nam Cách mạng Thanh niên",
    image: createPlaceholder("Hội VN Cách mạng Thanh niên"),
    explanation: "Hội Việt Nam Cách mạng Thanh niên là tổ chức tiền thân của Đảng Cộng sản Việt Nam, có vai trò quan trọng trong việc truyền bá chủ nghĩa Mác - Lênin và chuẩn bị cho sự thành lập Đảng.",
    difficulty: "medium"
  },
  {
    question: "Nhà Trần đã lặp lại chiến thuật gì của Ngô Quyền để giành chiến thắng trong cuộc kháng chiến chống Mông-Nguyên lần thứ ba (1288)?",
    options: ["Vườn không nhà trống", "Cắm cọc gỗ trên sông Bạch Đằng", "Xây dựng phòng tuyến Như Nguyệt", "Sử dụng hỏa hổ"],
    correctAnswer: "Cắm cọc gỗ trên sông Bạch Đằng",
    image: createPlaceholder("Trận Bạch Đằng 1288"),
    explanation: "Dưới sự chỉ huy của Trần Hưng Đạo, quân đội nhà Trần đã tái hiện lại kế sách cắm cọc gỗ trên sông Bạch Đằng để tiêu diệt hạm đội của quân Nguyên, kết thúc thắng lợi cuộc kháng chiến.",
    difficulty: "medium"
  },
  {
    question: "'Hịch tướng sĩ' là tác phẩm dùng để khích lệ tinh thần binh sĩ chống quân Mông-Nguyên của tác giả nào?",
    options: ["Trần Thủ Độ", "Trần Quang Khải", "Phạm Ngũ Lão", "Trần Quốc Tuấn"],
    correctAnswer: "Trần Quốc Tuấn",
    image: createPlaceholder("Tác phẩm Hịch tướng sĩ"),
    explanation: "'Hịch tướng sĩ' là một áng văn chính luận bất hủ do Hưng Đạo Vương Trần Quốc Tuấn viết, nhằm khích lệ lòng yêu nước, ý chí quyết chiến quyết thắng của các tướng sĩ trước họa xâm lăng.",
    difficulty: "medium"
  },
  {
    question: "Phong trào Đông Du do ai khởi xướng và lãnh đạo nhằm đưa thanh niên Việt Nam sang Nhật Bản học tập vào đầu thế kỷ 20?",
    options: ["Phan Chu Trinh", "Phan Bội Châu", "Huỳnh Thúc Kháng", "Lương Văn Can"],
    correctAnswer: "Phan Bội Châu",
    image: createPlaceholder("Phong trào Đông Du"),
    explanation: "Phan Bội Châu là nhà yêu nước, nhà cách mạng lớn. Ông đã tổ chức phong trào Đông Du (1905-1909) với hy vọng dựa vào sự giúp đỡ của Nhật để đào tạo nhân tài, chuẩn bị lực lượng cho công cuộc giải phóng dân tộc.",
    difficulty: "medium"
  },
  {
    question: "Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết vào năm nào?",
    options: ["1954", "1968", "1973", "1975"],
    correctAnswer: "1973",
    image: createPlaceholder("Hiệp định Paris 1973"),
    explanation: "Ngày 27/01/1973, Hiệp định Paris được ký kết, theo đó Mỹ phải cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, và phải rút hết quân đội về nước.",
    difficulty: "medium"
  },
  {
    question: "Vụ án Lệ Chi Viên là một thảm án oan khuất trong lịch sử phong kiến Việt Nam, liên quan đến cái chết của vị anh hùng dân tộc nào?",
    options: ["Trần Hưng Đạo", "Lê Lợi", "Nguyễn Trãi", "Quang Trung"],
    correctAnswer: "Nguyễn Trãi",
    image: createPlaceholder("Vụ án Lệ Chi Viên"),
    explanation: "Năm 1442, vua Lê Thái Tông đột ngột qua đời tại Lệ Chi Viên (vườn vải) nhà Nguyễn Trãi. Lợi dụng việc này, phe cánh gian thần đã vu cho Nguyễn Trãi và vợ là Nguyễn Thị Lộ tội giết vua, dẫn đến án tru di tam tộc.",
    difficulty: "medium"
  },
  {
    question: "Ai là người đã dâng 'Thất trảm sớ' lên vua Trần Dụ Tông để xin chém 7 tên gian thần?",
    options: ["Trần Hưng Đạo", "Chu Văn An", "Trương Hán Siêu", "Phạm Sư Mạnh"],
    correctAnswer: "Chu Văn An",
    image: createPlaceholder("Thất trảm sớ"),
    explanation: "Chu Văn An, một người thầy, một nhà nho lỗi lạc, đã dâng 'Thất trảm sớ' xin chém 7 tên nịnh thần nhưng không được vua chấp thuận. Sau đó, ông đã từ quan về ở ẩn.",
    difficulty: "medium"
  },
  {
    question: "Chiến lược 'Chiến tranh đặc biệt' của Mỹ ở miền Nam Việt Nam diễn ra trong khoảng thời gian nào?",
    options: ["1954-1960", "1961-1965", "1965-1968", "1969-1973"],
    correctAnswer: "1961-1965",
    image: createPlaceholder("Chiến tranh đặc biệt"),
    explanation: "Chiến lược 'Chiến tranh đặc biệt' được Mỹ thực hiện từ năm 1961 đến 1965, với âm mưu 'dùng người Việt đánh người Việt', sử dụng quân đội Sài Gòn làm lực lượng chủ yếu.",
    difficulty: "medium"
  },
  {
    question: "Phong trào Duy Tân do ai lãnh đạo có chủ trương dùng con đường nào để cứu nước?",
    options: ["Bạo động vũ trang", "Cải cách, nâng cao dân trí, dân quyền", "Dựa vào Pháp để cải cách", "Cầu viện Nhật Bản"],
    correctAnswer: "Cải cách, nâng cao dân trí, dân quyền",
    image: createPlaceholder("Phong trào Duy Tân"),
    explanation: "Phong trào Duy Tân (1906-1908) do Phan Chu Trinh, Huỳnh Thúc Kháng, Trần Quý Cáp lãnh đạo, chủ trương vận động cải cách, mở mang công thương nghiệp, lập trường học mới để nâng cao dân trí, dân quyền.",
    difficulty: "medium"
  },
  {
    question: "Ai là người thầy giáo nổi tiếng của các vị vua nhà Trần và được tôn là 'Vạn thế sư biểu' (Người thầy của muôn đời)?",
    options: ["Lê Văn Hưu", "Trương Hán Siêu", "Chu Văn An", "Nguyễn Trãi"],
    correctAnswer: "Chu Văn An",
    image: createPlaceholder("Vạn thế sư biểu"),
    explanation: "Thầy giáo Chu Văn An là một nhà giáo, nhà nho mẫu mực của thời Trần. Ông nổi tiếng về tài năng, đức độ và sự cương trực, được các thế hệ sau tôn là 'Vạn thế sư biểu'.",
    difficulty: "medium"
  },
  {
    question: "Trận đánh quyết định nào đã làm phá sản hoàn toàn chiến lược 'Chiến tranh cục bộ' của Mỹ?",
    options: ["Trận Vạn Tường (1965)", "Trận Ấp Bắc (1963)", "Cuộc Tổng tiến công Mậu Thân (1968)", "Trận Khe Sanh (1968)"],
    correctAnswer: "Cuộc Tổng tiến công Mậu Thân (1968)",
    image: createPlaceholder("Phá sản Chiến tranh cục bộ"),
    explanation: "Thắng lợi của cuộc Tổng tiến công và nổi dậy Xuân Mậu Thân 1968 đã giáng một đòn nặng nề vào chiến lược 'Chiến tranh cục bộ', buộc Mỹ phải thừa nhận thất bại và tìm cách 'phi Mỹ hóa' chiến tranh.",
    difficulty: "medium"
  },
  {
    question: "Bài thơ 'Tụng giá hoàn kinh sư' của Trần Quang Khải được sáng tác sau chiến thắng nào?",
    options: ["Kháng chiến chống Mông-Nguyên lần 1", "Kháng chiến chống Mông-Nguyên lần 2", "Kháng chiến chống Mông-Nguyên lần 3", "Kháng chiến chống quân Tống"],
    correctAnswer: "Kháng chiến chống Mông-Nguyên lần 2",
    image: createPlaceholder("Tụng giá hoàn kinh sư"),
    explanation: "Bài thơ được Thượng tướng Trần Quang Khải sáng tác khi ông đi đón Thái thượng hoàng Trần Thánh Tông và vua Trần Nhân Tông về kinh sau chiến thắng Chương Dương, Hàm Tử, giải phóng kinh thành Thăng Long.",
    difficulty: "medium"
  },
  {
    question: "Vị vua nào của nhà Hậu Lê đã cho vẽ bộ bản đồ đầu tiên của nước ta có tên là 'Hồng Đức bản đồ'?",
    options: ["Lê Thái Tổ", "Lê Thái Tông", "Lê Thánh Tông", "Lê Tương Dực"],
    correctAnswer: "Lê Thánh Tông",
    image: createPlaceholder("Hồng Đức bản đồ"),
    explanation: "Dưới thời vua Lê Thánh Tông, bộ bản đồ địa lý quốc gia đầu tiên của Việt Nam với tên gọi 'Hồng Đức bản đồ' (hay 'Đại Việt bản đồ') đã được hoàn thành, thể hiện chi tiết lãnh thổ Đại Việt.",
    difficulty: "medium"
  },
  {
    question: "Phong trào 'Đồng khởi' năm 1960 nổ ra đầu tiên và mạnh mẽ nhất ở tỉnh nào?",
    options: ["Quảng Ngãi", "Bến Tre", "Cà Mau", "Tây Ninh"],
    correctAnswer: "Bến Tre",
    image: createPlaceholder("Phong trào Đồng khởi"),
    explanation: "Phong trào Đồng khởi bắt đầu từ những cuộc nổi dậy lẻ tẻ ở Bến Tre, sau đó lan rộng ra khắp miền Nam, chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công.",
    difficulty: "medium"
  },
  {
    question: "Ai là người đã chỉ huy xây dựng phòng tuyến sông Như Nguyệt trong cuộc kháng chiến chống Tống (1077)?",
    options: ["Tông Đản", "Lý Thường Kiệt", "Lý Kế Nguyên", "Thân Cảnh Phúc"],
    correctAnswer: "Lý Thường Kiệt",
    image: createPlaceholder("Phòng tuyến sông Như Nguyệt"),
    explanation: "Thái úy Lý Thường Kiệt đã cho xây dựng một phòng tuyến kiên cố bên bờ Nam sông Như Nguyệt (sông Cầu) để chặn đứng quân Tống, tạo nên một trận địa phòng ngự nổi tiếng trong lịch sử.",
    difficulty: "medium"
  },
  {
    question: "Cuộc khởi nghĩa của người anh hùng áo vải Nguyễn Hữu Cầu diễn ra vào thời kỳ nào?",
    options: ["Đầu thời Lê sơ", "Thời Trịnh - Nguyễn phân tranh", "Thời nhà Mạc", "Thời nhà Nguyễn"],
    correctAnswer: "Thời Trịnh - Nguyễn phân tranh",
    image: createPlaceholder("Khởi nghĩa Nguyễn Hữu Cầu"),
    explanation: "Nguyễn Hữu Cầu (Quận He) là một trong những thủ lĩnh xuất sắc của phong trào khởi nghĩa nông dân Đàng Ngoài thế kỷ 18, hoạt động trong bối cảnh xã hội rối ren thời Trịnh - Nguyễn phân tranh.",
    difficulty: "medium"
  },
  {
    question: "Ai là vị vua đã đặt niên hiệu là 'Thái Bình' và cho đúc tiền đồng đầu tiên của Việt Nam?",
    options: ["Ngô Quyền", "Đinh Tiên Hoàng", "Lê Đại Hành", "Lý Thái Tổ"],
    correctAnswer: "Đinh Tiên Hoàng",
    image: createPlaceholder("Tiền đồng đầu tiên"),
    explanation: "Sau khi lên ngôi, vua Đinh Tiên Hoàng đã đặt niên hiệu là Thái Bình và cho đúc đồng tiền 'Thái Bình hưng bảo', khẳng định nền độc lập và tự chủ của quốc gia Đại Cồ Việt.",
    difficulty: "medium"
  },
  {
    question: "Tổ chức nào được xem là chính phủ đầu tiên do Đảng Cộng sản lãnh đạo, thành lập trong Cách mạng Tháng Tám?",
    options: ["Ủy ban Dân tộc Giải phóng Việt Nam", "Mặt trận Việt Minh", "Chính phủ lâm thời Việt Nam Dân chủ Cộng hòa", "Ủy ban Khởi nghĩa Toàn quốc"],
    correctAnswer: "Ủy ban Dân tộc Giải phóng Việt Nam",
    image: createPlaceholder("Chính phủ đầu tiên"),
    explanation: "Tại Quốc dân Đại hội Tân Trào (tháng 8/1945), Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh làm chủ tịch đã được thành lập, được coi là hình thức sơ khai của một chính phủ cách mạng lâm thời.",
    difficulty: "medium"
  },
  {
    question: "Ai là vị tướng tài ba của hai triều đại Lý - Trần, người có công lớn trong việc đánh bại quân Mông-Nguyên lần thứ nhất?",
    options: ["Trần Thủ Độ", "Trần Quang Khải", "Trần Quốc Tuấn", "Trần Nhật Duật"],
    correctAnswer: "Trần Thủ Độ",
    image: createPlaceholder("Chống Mông Nguyên lần 1"),
    explanation: "Mặc dù nổi tiếng với vai trò chuyển giao quyền lực từ nhà Lý sang nhà Trần, Thái sư Trần Thủ Độ cũng là Tổng chỉ huy của cuộc kháng chiến chống quân Mông-Nguyên lần thứ nhất (1258) và đã giành thắng lợi.",
    difficulty: "medium"
  },
  {
    question: "Chủ trương 'Vô sản hóa' năm 1928 của Hội Việt Nam Cách mạng Thanh niên nhằm mục đích chính là gì?",
    options: ["Nâng cao đời sống công nhân", "Chuẩn bị cho khởi nghĩa vũ trang", "Truyền bá chủ nghĩa Mác-Lênin vào giai cấp công nhân", "Xóa bỏ giai cấp tư sản"],
    correctAnswer: "Truyền bá chủ nghĩa Mác-Lênin vào giai cấp công nhân",
    image: createPlaceholder("Mục đích Vô sản hóa"),
    explanation: "Mục đích chính của phong trào là đưa các hội viên thâm nhập vào các nhà máy, hầm mỏ để cùng sống và lao động với công nhân, qua đó tuyên truyền, giác ngộ và tổ chức họ, thúc đẩy sự kết hợp giữa chủ nghĩa Mác-Lênin và phong trào công nhân.",
    difficulty: "medium"
  },
  {
    question: "Ai là tác giả của bộ sử lớn đầu tiên của nước ta có tên là 'Đại Việt sử ký'?",
    options: ["Ngô Sĩ Liên", "Phan Phu Tiên", "Lê Văn Hưu", "Lê Quý Đôn"],
    correctAnswer: "Lê Văn Hưu",
    image: createPlaceholder("Đại Việt sử ký"),
    explanation: "Lê Văn Hưu là nhà sử học đầu tiên của Việt Nam, được vua Trần Thái Tông giao cho biên soạn bộ 'Đại Việt sử ký', ghi lại lịch sử nước ta từ thời Triệu Đà đến hết thời Lý.",
    difficulty: "medium"
  },
  {
    question: "Vị vua nào của nhà Nguyễn đã cho xây dựng Kinh thành Huế theo kiến trúc Vauban của Pháp?",
    options: ["Gia Long", "Minh Mạng", "Thiệu Trị", "Tự Đức"],
    correctAnswer: "Gia Long",
    image: createPlaceholder("Kinh thành Huế"),
    explanation: "Vua Gia Long sau khi lên ngôi đã cho quy hoạch và xây dựng Kinh thành Huế từ năm 1805. Công trình được thiết kế theo kiểu thành lũy phương Tây kết hợp với kiến trúc truyền thống phương Đông.",
    difficulty: "medium"
  },
  {
    question: "Nghị quyết 15 của Ban chấp hành Trung ương Đảng (1/1959) đã có sự chuyển hướng quan trọng nào cho cách mạng miền Nam?",
    options: ["Chuyển từ đấu tranh chính trị sang đấu tranh vũ trang", "Kết hợp đấu tranh chính trị với đấu tranh vũ trang", "Bắt đầu quá trình đàm phán với Mỹ", "Thực hiện cải cách ruộng đất"],
    correctAnswer: "Kết hợp đấu tranh chính trị với đấu tranh vũ trang",
    image: createPlaceholder("Nghị quyết 15"),
    explanation: "Nghị quyết 15 đã xác định con đường phát triển cơ bản của cách mạng miền Nam là khởi nghĩa giành chính quyền về tay nhân dân bằng con đường kết hợp đấu tranh chính trị với đấu tranh vũ trang.",
    difficulty: "medium"
  },
  {
    question: "Tên của vị tướng đã hy sinh trong trận phục kích ở đèo Le (1947) và được truy tặng danh hiệu anh hùng là ai?",
    options: ["Hoàng Văn Thụ", "Phùng Chí Kiên", "Nguyễn Bình", "Cao Bắc"],
    correctAnswer: "Phùng Chí Kiên",
    image: createPlaceholder("Tướng Phùng Chí Kiên"),
    explanation: "Phùng Chí Kiên là một trong những nhà lãnh đạo quân sự đầu tiên của Đảng. Năm 1941, ông hy sinh trong một trận chiến không cân sức với địch ở Cao Bằng. Ông là vị tướng đầu tiên của Quân đội Nhân dân Việt Nam được truy phong.",
    difficulty: "medium"
  },
  {
    question: "Nhà nước Vạn Xuân do Lý Bí thành lập đã tồn tại trong khoảng bao lâu?",
    options: ["Khoảng 3 năm", "Khoảng 10 năm", "Khoảng 30 năm", "Khoảng 60 năm"],
    correctAnswer: "Khoảng 60 năm",
    image: createPlaceholder("Nhà nước Vạn Xuân"),
    explanation: "Nhà nước Vạn Xuân tồn tại từ năm 544 đến năm 602, trải qua các đời vua Lý Nam Đế, Triệu Việt Vương và Hậu Lý Nam Đế, gần 60 năm độc lập trước khi bị nhà Tùy tái đô hộ.",
    difficulty: "medium"
  },
  {
    question: "Trong ba lần kháng chiến chống Mông-Nguyên, ai là người giữ vai trò Tổng chỉ huy quân đội nhà Trần?",
    options: ["Trần Thủ Độ", "Trần Quang Khải", "Trần Khánh Dư", "Trần Quốc Tuấn"],
    correctAnswer: "Trần Quốc Tuấn",
    image: createPlaceholder("Tổng chỉ huy chống Mông-Nguyên"),
    explanation: "Hưng Đạo Vương Trần Quốc Tuấn được vua Trần giao cho chức vụ Quốc công tiết chế, thống lĩnh toàn bộ quân đội trong hai cuộc kháng chiến lần thứ hai (1285) và lần thứ ba (1287-1288).",
    difficulty: "medium"
  },
  {
    question: "Tổ chức 'Đông Kinh Nghĩa Thục' (1907) hoạt động chủ yếu trong lĩnh vực nào?",
    options: ["Quân sự", "Văn hóa - Giáo dục", "Kinh tế", "Ngoại giao"],
    correctAnswer: "Văn hóa - Giáo dục",
    image: createPlaceholder("Đông Kinh Nghĩa Thục"),
    explanation: "Đông Kinh Nghĩa Thục là một trường học do các sĩ phu yêu nước như Lương Văn Can, Nguyễn Quyền... thành lập, nhằm truyền bá tư tưởng Duy Tân, thực học, và cổ động lòng yêu nước thông qua giáo dục.",
    difficulty: "medium"
  },
  {
    question: "Trận đánh mở màn chiến dịch Điện Biên Phủ là trận tấn công vào cứ điểm nào?",
    options: ["Đồi A1", "Cứ điểm C1", "Sân bay Mường Thanh", "Cứ điểm Him Lam"],
    correctAnswer: "Cứ điểm Him Lam",
    image: createPlaceholder("Mở màn Điện Biên Phủ"),
    explanation: "Chiều ngày 13/3/1954, quân ta nổ súng tấn công cứ điểm Him Lam, mở màn cho chiến dịch Điện Biên Phủ. Sau hơn 5 giờ chiến đấu, ta đã hoàn toàn làm chủ cứ điểm này.",
    difficulty: "medium"
  },
  {
    question: "Vị vua nào của nhà Mạc đã cho xây dựng lại thành Thăng Long và phát triển kinh tế, thương mại?",
    options: ["Mạc Đăng Dung", "Mạc Đăng Doanh", "Mạc Phúc Hải", "Mạc Mậu Hợp"],
    correctAnswer: "Mạc Đăng Doanh",
    image: createPlaceholder("Vua Mạc xây Thăng Long"),
    explanation: "Vua Mạc Thái Tông (Mạc Đăng Doanh) sau khi lên ngôi đã có nhiều chính sách nhằm ổn định và phát triển đất nước, cho sửa sang lại kinh thành, khuyến khích công thương nghiệp.",
    difficulty: "medium"
  },
  {
    question: "Nơi diễn ra Hội nghị thành lập Đảng Cộng sản Việt Nam (1930) ở đâu?",
    options: ["Hà Nội (Việt Nam)", "Quảng Châu (Trung Quốc)", "Cửu Long, Hương Cảng (Trung Quốc)", "Pác Bó (Việt Nam)"],
    correctAnswer: "Cửu Long, Hương Cảng (Trung Quốc)",
    image: createPlaceholder("Nơi thành lập Đảng"),
    explanation: "Dưới sự chủ trì của lãnh tụ Nguyễn Ái Quốc, Hội nghị hợp nhất các tổ chức cộng sản đã diễn ra tại Cửu Long, thuộc Hương Cảng (Hong Kong) vào đầu năm 1930.",
    difficulty: "medium"
  },
  {
    question: "Chiến thắng nào của quân dân miền Nam đã làm phá sản về cơ bản chiến lược 'Chiến tranh đặc biệt' của Mỹ?",
    options: ["Trận Ấp Bắc (1/1963)", "Trận Bình Giã (12/1964)", "Trận Vạn Tường (8/1965)", "Trận Đồng Xoài (6/1965)"],
    correctAnswer: "Trận Bình Giã (12/1964)",
    image: createPlaceholder("Phá sản Chiến tranh đặc biệt"),
    explanation: "Chiến thắng Bình Giã (Bà Rịa) đã đánh bại các chiến thuật 'trực thăng vận', 'thiết xa vận' của địch, tiêu diệt nhiều đơn vị chủ lực quân Sài Gòn, làm phá sản về cơ bản chiến lược 'Chiến tranh đặc biệt'.",
    difficulty: "medium"
  },
  {
    question: "Triều đại nào đã cho xây dựng đàn Nam Giao ở Huế để thực hiện lễ tế trời đất?",
    options: ["Nhà Tiền Lê", "Nhà Hậu Lê", "Nhà Tây Sơn", "Nhà Nguyễn"],
    correctAnswer: "Nhà Nguyễn",
    image: createPlaceholder("Đàn Nam Giao Huế"),
    explanation: "Đàn Nam Giao được xây dựng dưới thời vua Gia Long (1806) là nơi các vua nhà Nguyễn tổ chức lễ tế trời đất vào mùa xuân hàng năm, một nghi lễ quan trọng bậc nhất của triều đình.",
    difficulty: "medium"
  },
  {
    question: "Nhà thơ Chế Lan Viên đã ví 'Bình Ngô đại cáo' với sự kiện lịch sử nào của nước Mỹ?",
    options: ["Tuyên ngôn Nhân quyền và Dân quyền", "Hiến pháp Hoa Kỳ", "Tuyên ngôn Độc lập Hoa Kỳ", "Diễn văn Gettysburg"],
    correctAnswer: "Tuyên ngôn Độc lập Hoa Kỳ",
    image: createPlaceholder("Bình Ngô đại cáo ví von"),
    explanation: "'Bình Ngô đại cáo' được coi là bản Tuyên ngôn Độc lập thứ hai của Việt Nam, có giá trị tương đương với bản Tuyên ngôn Độc lập năm 1776 của Mỹ, khẳng định chủ quyền và nền độc lập của dân tộc.",
    difficulty: "medium"
  },
  {
    question: "Trong cuộc kháng chiến chống Mỹ, tỉnh nào được mệnh danh là 'đất lửa' kiên cường?",
    options: ["Quảng Bình", "Quảng Trị", "Thừa Thiên Huế", "Quảng Nam"],
    correctAnswer: "Quảng Trị",
    image: createPlaceholder("Biệt danh đất lửa"),
    explanation: "Quảng Trị là nơi diễn ra những trận chiến ác liệt nhất, đặc biệt là cuộc chiến 81 ngày đêm bảo vệ Thành cổ năm 1972, do đó được mệnh danh là 'đất lửa'.",
    difficulty: "medium"
  },
  {
    question: "Ai là người đã lãnh đạo nhân dân Gò Công khởi nghĩa chống Pháp với khẩu hiệu 'Bình Tây sát Tả'?",
    options: ["Nguyễn Trung Trực", "Trương Định", "Nguyễn Hữu Huân", "Võ Duy Dương"],
    correctAnswer: "Trương Định",
    image: createPlaceholder("Khởi nghĩa Gò Công"),
    explanation: "Mặc dù có lệnh của triều đình bãi binh, Trương Định đã tuân theo ý dân, nhận chức 'Bình Tây Đại nguyên soái' để tiếp tục lãnh đạo nhân dân chống Pháp ở Gò Công.",
    difficulty: "medium"
  },
  {
    question: "Tên ban đầu của Mặt trận Việt Minh là gì?",
    options: ["Việt Nam Độc lập Đồng minh Hội", "Việt Nam Giải phóng Đồng minh Hội", "Việt Nam Cách mạng Đồng minh Hội", "Việt Nam Cứu quốc Đồng minh Hội"],
    correctAnswer: "Việt Nam Độc lập Đồng minh Hội",
    image: createPlaceholder("Mặt trận Việt Minh"),
    explanation: "Việt Minh là tên gọi tắt của Việt Nam Độc lập Đồng minh Hội, một mặt trận dân tộc thống nhất được thành lập theo nghị quyết của Hội nghị Trung ương 8 (5/1941).",
    difficulty: "medium"
  },
  {
    question: "Nền kinh tế của nhà nước Âu Lạc chủ yếu dựa vào ngành nào?",
    options: ["Săn bắt, hái lượm", "Trồng lúa nước", "Thương mại đường biển", "Thủ công nghiệp"],
    correctAnswer: "Trồng lúa nước",
    image: createPlaceholder("Kinh tế Âu Lạc"),
    explanation: "Kế thừa từ thời Văn Lang, nền kinh tế của Âu Lạc vẫn chủ yếu là nông nghiệp trồng lúa nước. Ngoài ra, thủ công nghiệp (đặc biệt là đúc đồng) và thương mại cũng đã phát triển.",
    difficulty: "medium"
  },
  {
    question: "Vị vua nào của triều Nguyễn được coi là người có tư tưởng cải cách và canh tân đất nước mạnh mẽ nhất?",
    options: ["Gia Long", "Minh Mạng", "Tự Đức", "Dục Đức"],
    correctAnswer: "Minh Mạng",
    image: createPlaceholder("Vua Nguyễn cải cách"),
    explanation: "Vua Minh Mạng đã thực hiện nhiều cải cách quan trọng về hành chính (chia cả nước thành 30 tỉnh), quân sự, giáo dục... nhằm củng cố chế độ trung ương tập quyền và xây dựng đất nước.",
    difficulty: "medium"
  },
  {
    question: "Sự kiện Vịnh Bắc Bộ năm 1964 đã được Mỹ dựng lên để làm gì?",
    options: ["Bắt đầu đàm phán hòa bình", "Lấy cớ ném bom miền Bắc Việt Nam", "Rút quân khỏi miền Nam Việt Nam", "Đổ quân vào Campuchia"],
    correctAnswer: "Lấy cớ ném bom miền Bắc Việt Nam",
    image: createPlaceholder("Sự kiện Vịnh Bắc Bộ"),
    explanation: "Chính phủ Mỹ đã dựng lên 'Sự kiện Vịnh Bắc Bộ', vu cáo tàu chiến Việt Nam tấn công tàu khu trục Maddox của Mỹ để lấy cớ leo thang chiến tranh, tiến hành ném bom phá hoại miền Bắc.",
    difficulty: "medium"
  },
  {
    question: "Tác phẩm nào được xem là bộ bách khoa toàn thư đầu tiên của Việt Nam, do Lê Quý Đôn biên soạn?",
    options: ["Đại Việt thông sử", "Phủ biên tạp lục", "Kiến văn tiểu lục", "Vân đài loại ngữ"],
    correctAnswer: "Vân đài loại ngữ",
    image: createPlaceholder("Bách khoa toàn thư đầu tiên"),
    explanation: "'Vân đài loại ngữ' là một công trình đồ sộ của nhà bác học Lê Quý Đôn, trong đó ông tập hợp và phân loại tri thức trên nhiều lĩnh vực như triết học, khoa học, văn học...",
    difficulty: "medium"
  },
  {
    question: "Chiến thắng quyết định trong cuộc khởi nghĩa Lam Sơn, buộc quân Minh phải đầu hàng và rút về nước là trận nào?",
    options: ["Trận Tốt Động - Chúc Động", "Trận Chi Lăng - Xương Giang", "Trận Bạch Đằng (1426)", "Trận Hạ Hồi"],
    correctAnswer: "Trận Chi Lăng - Xương Giang",
    image: createPlaceholder("Chiến thắng khởi nghĩa Lam Sơn"),
    explanation: "Trận Chi Lăng - Xương Giang (1427) là trận quyết chiến chiến lược, nơi quân ta đã tiêu diệt hoàn toàn đạo quân tiếp viện của Liễu Thăng, làm sụp đổ ý chí xâm lược của nhà Minh.",
    difficulty: "medium"
  },
  {
    question: "Sau khi Lý Bí mất, ai là người đã lãnh đạo nhân dân tiếp tục kháng chiến chống quân Lương và xưng là Triệu Việt Vương?",
    options: ["Lý Phật Tử", "Triệu Quang Phục", "Lý Thiên Bảo", "Mai Thúc Loan"],
    correctAnswer: "Triệu Quang Phục",
    image: createPlaceholder("Triệu Việt Vương"),
    explanation: "Triệu Quang Phục là một vị tướng tài của Lý Nam Đế. Sau khi Lý Nam Đế mất, ông đã lui quân về đầm Dạ Trạch, tổ chức lại lực lượng, đánh bại quân Lương và lên ngôi vua.",
    difficulty: "medium"
  },
  {
    question: "Chính sách 'ngụ binh ư nông' là một chính sách quân sự - kinh tế độc đáo của triều đại nào?",
    options: ["Nhà Đinh", "Nhà Tiền Lê", "Nhà Lý và Nhà Trần", "Nhà Nguyễn"],
    correctAnswer: "Nhà Lý và Nhà Trần",
    image: createPlaceholder("Chính sách ngụ binh ư nông"),
    explanation: "Chính sách 'ngụ binh ư nông' (gửi quân ở nhà nông) cho phép quân lính luân phiên nhau về quê sản xuất nông nghiệp khi đất nước hòa bình. Khi có chiến tranh, họ lại được gọi tái ngũ. Điều này vừa đảm bảo sản xuất, vừa có lực lượng quân đội hùng hậu.",
    difficulty: "medium"
  },
  {
    question: "Ai là người đã khởi xướng phong trào chấn hưng Phật giáo ở thế kỷ 13 và sáng lập ra Thiền phái Trúc Lâm Yên Tử?",
    options: ["Lý Thái Tông", "Trần Thái Tông", "Trần Nhân Tông", "Pháp Loa"],
    correctAnswer: "Trần Nhân Tông",
    image: createPlaceholder("Thiền phái Trúc Lâm"),
    explanation: "Sau khi nhường ngôi, Thượng hoàng Trần Nhân Tông đã lên núi Yên Tử tu hành, thống nhất các dòng thiền trước đó và sáng lập ra Thiền phái Trúc Lâm, một dòng thiền mang đậm bản sắc văn hóa Việt Nam.",
    difficulty: "medium"
  },
  {
    question: "Vị nữ tướng nào đã cùng chồng là Thiếu phó Trần Quang Diệu chỉ huy quân Tây Sơn vây hãm thành Quy Nhơn?",
    options: ["Bùi Thị Nhạn", "Trần Thị Lan", "Bùi Thị Xuân", "Nguyễn Thị Dung"],
    correctAnswer: "Bùi Thị Xuân",
    image: createPlaceholder("Nữ tướng vây thành Quy Nhơn"),
    explanation: "Trong cuộc chiến với quân Nguyễn Ánh, vợ chồng danh tướng Bùi Thị Xuân - Trần Quang Diệu đã có công lớn trong việc chỉ huy cuộc vây hãm và hạ thành Quy Nhơn (Bình Định).",
    difficulty: "medium"
  },
  {
    question: "Hội nghị Ban chấp hành Trung ương Đảng lần thứ 8 (5/1941) có quyết định quan trọng nhất là gì?",
    options: ["Thành lập Đảng Cộng sản Việt Nam", "Phát động khởi nghĩa Nam Kỳ", "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu", "Thành lập quân đội nhân dân Việt Nam"],
    correctAnswer: "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
    image: createPlaceholder("Hội nghị Trung ương 8"),
    explanation: "Hội nghị do Nguyễn Ái Quốc chủ trì đã quyết định chuyển hướng chỉ đạo chiến lược, tạm gác khẩu hiệu cách mạng ruộng đất và đặt nhiệm vụ giải phóng dân tộc lên trên hết, trước hết.",
    difficulty: "medium"
  },
  {
    question: "Cải cách hành chính lớn dưới thời vua Minh Mạng là gì?",
    options: ["Xóa bỏ chế độ Tỉnh, lập lại chế độ Trấn", "Chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên", "Chia cả nước thành 13 đạo thừa tuyên", "Đặt ra Lục bộ"],
    correctAnswer: "Chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên",
    image: createPlaceholder("Cải cách vua Minh Mạng"),
    explanation: "Năm 1831-1832, vua Minh Mạng đã thực hiện một cuộc cải cách hành chính lớn, chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên (kinh đô), một hệ thống hành chính tồn tại về cơ bản cho đến ngày nay.",
    difficulty: "medium"
  },
  {
    question: "Trong lịch sử, ai là người đầu tiên xưng 'Đế' (Hoàng đế) để khẳng định sự ngang hàng với phương Bắc?",
    options: ["Ngô Quyền", "Đinh Tiên Hoàng", "Lê Đại Hành", "Lý Nam Đế"],
    correctAnswer: "Lý Nam Đế",
    image: createPlaceholder("Người đầu tiên xưng Đế"),
    explanation: "Sau khi khởi nghĩa thắng lợi, Lý Bí đã lên ngôi, tự xưng là Nam Việt Đế (Lý Nam Đế), đặt niên hiệu là Thiên Đức. Đây là lần đầu tiên một vị vua Việt Nam chính thức xưng Đế.",
    difficulty: "medium"
  },
  {
    question: "Cuộc nổi dậy của công nhân Ba Son (8/1925) do ai lãnh đạo?",
    options: ["Nguyễn Ái Quốc", "Tôn Đức Thắng", "Lê Duẩn", "Phạm Văn Đồng"],
    correctAnswer: "Tôn Đức Thắng",
    image: createPlaceholder("Bãi công Ba Son 1925"),
    explanation: "Cuộc bãi công của công nhân xưởng Ba Son do Công hội bí mật do đồng chí Tôn Đức Thắng thành lập và lãnh đạo. Đây là một sự kiện đánh dấu bước phát triển mới của phong trào công nhân Việt Nam.",
    difficulty: "medium"
  },
  {
    question: "Chiến dịch Tây Nguyên (3/1975) mở màn bằng trận đánh then chốt vào đâu?",
    options: ["Pleiku", "Kon Tum", "Buôn Ma Thuột", "Đắk Lắk"],
    correctAnswer: "Buôn Ma Thuột",
    image: createPlaceholder("Mở màn Chiến dịch Tây Nguyên"),
    explanation: "Sáng 10/3/1975, quân ta bất ngờ tấn công thị xã Buôn Ma Thuột, một vị trí chiến lược hiểm yếu nhưng địch phòng bị sơ hở. Chiến thắng này đã tạo ra bước ngoặt cho toàn bộ cuộc Tổng tiến công.",
    difficulty: "medium"
  },
  {
    question: "Vị vua nào của nhà Lý đã cho xây dựng chùa Một Cột?",
    options: ["Lý Thái Tổ", "Lý Thái Tông", "Lý Thánh Tông", "Lý Nhân Tông"],
    correctAnswer: "Lý Thái Tông",
    image: createPlaceholder("Xây chùa Một Cột"),
    explanation: "Theo truyền thuyết, vua Lý Thái Tông nằm mơ thấy Phật Quan Âm ngồi trên đài sen. Sau khi tỉnh dậy, vua đã cho xây dựng chùa Một Cột vào năm 1049 với kiến trúc độc đáo như một đóa sen.",
    difficulty: "medium"
  },
  {
    question: "Ai là người đã soạn thảo 'Luận cương chính trị' tháng 10/1930 của Đảng Cộng sản Đông Dương?",
    options: ["Nguyễn Ái Quốc", "Trần Phú", "Lê Hồng Phong", "Hà Huy Tập"],
    correctAnswer: "Trần Phú",
    image: createPlaceholder("Luận cương chính trị 1930"),
    explanation: "Trên cương vị Tổng Bí thư đầu tiên, đồng chí Trần Phú đã chủ trì Hội nghị Trung ương và khởi thảo bản 'Luận cương chính trị', xác định những vấn đề chiến lược của cách mạng Đông Dương.",
    difficulty: "medium"
  },
  {
    question: "Ai là người đã sáng lập ra Việt Nam Quốc dân Đảng?",
    options: ["Phan Bội Châu", "Nguyễn Thái Học", "Phan Chu Trinh", "Trần Huy Liệu"],
    correctAnswer: "Nguyễn Thái Học",
    image: createPlaceholder("Sáng lập VN Quốc dân Đảng"),
    explanation: "Việt Nam Quốc dân Đảng là một đảng chính trị theo chủ nghĩa dân tộc, thành lập năm 1927. Người sáng lập và là lãnh tụ của đảng là Nguyễn Thái Học.",
    difficulty: "medium"
  },
  {
    question: "Tên của vị tướng nhà Trần đã có công cảm hóa được đội quân người Chăm và chỉ huy họ đánh tan quân Mông-Nguyên?",
    options: ["Trần Quang Khải", "Trần Nhật Duật", "Trần Khánh Dư", "Phạm Ngũ Lão"],
    correctAnswer: "Trần Nhật Duật",
    image: createPlaceholder("Tướng Trần Nhật Duật"),
    explanation: "Chiêu Văn Vương Trần Nhật Duật nổi tiếng không chỉ về tài quân sự mà còn về khả năng ngoại giao và am hiểu văn hóa các dân tộc. Ông đã thu phục được tướng người Chăm là Trà Ô và đội quân của ông ta.",
    difficulty: "medium"
  },
  {
    question: "Cuộc khởi nghĩa Yên Bái do Việt Nam Quốc dân Đảng lãnh đạo nổ ra vào năm nào?",
    options: ["1927", "1929", "1930", "1931"],
    correctAnswer: "1930",
    image: createPlaceholder("Khởi nghĩa Yên Bái"),
    explanation: "Đêm ngày 9 rạng ngày 10/2/1930, cuộc khởi nghĩa vũ trang do Việt Nam Quốc dân Đảng tổ chức đã nổ ra ở Yên Bái và một số địa phương khác, nhưng nhanh chóng bị thực dân Pháp đàn áp dã man.",
    difficulty: "medium"
  },
  {
    question: "Chính sách nào của nhà Hồ được coi là một cải cách tiến bộ nhưng thất bại do không được lòng dân?",
    options: ["Phát hành tiền giấy", "Hạn điền, hạn nô", "Cải cách giáo dục", "Cả 3 chính sách trên"],
    correctAnswer: "Cả 3 chính sách trên",
    image: createPlaceholder("Cải cách của Hồ Quý Ly"),
    explanation: "Hồ Quý Ly đã thực hiện nhiều cải cách táo bạo như phát hành tiền giấy, hạn chế sở hữu ruộng đất và nô tì của quý tộc. Tuy nhiên, các chính sách này được thực hiện quá vội vàng, đụng chạm đến quyền lợi của nhiều tầng lớp nên không thành công.",
    difficulty: "medium"
  },
  {
    question: "Phong trào 'Thơ Mới' trong văn học Việt Nam diễn ra vào giai đoạn nào?",
    options: ["1900-1918", "1919-1930", "1932-1945", "1945-1954"],
    correctAnswer: "1932-1945",
    image: createPlaceholder("Phong trào Thơ Mới"),
    explanation: "Phong trào Thơ Mới là một cuộc cách mạng trong thi ca, đoạn tuyệt với thơ ca trung đại và mở ra một thời kỳ mới cho văn học Việt Nam hiện đại, với những tên tuổi như Xuân Diệu, Huy Cận, Hàn Mặc Tử...",
    difficulty: "medium"
  },
  {
    question: "Ai là vị vua sáng lập ra triều Tiền Lê?",
    options: ["Lê Long Đĩnh", "Lê Lợi", "Lê Hoàn", "Lê Long Việt"],
    correctAnswer: "Lê Hoàn",
    image: createPlaceholder("Sáng lập Tiền Lê"),
    explanation: "Sau khi vua Đinh Tiên Hoàng bị ám hại, con trai còn nhỏ tuổi không thể gánh vác việc nước. Trước nguy cơ xâm lược của nhà Tống, Thái hậu Dương Vân Nga đã khoác áo long bào cho Thập đạo tướng quân Lê Hoàn, suy tôn ông lên làm vua.",
    difficulty: "medium"
  },
  {
    question: "Vị vua cuối cùng của nhà Mạc là ai?",
    options: ["Mạc Kính Cung", "Mạc Kính Khoan", "Mạc Kính Vũ", "Mạc Mậu Hợp"],
    correctAnswer: "Mạc Mậu Hợp",
    image: createPlaceholder("Vua cuối cùng nhà Mạc"),
    explanation: "Mạc Mậu Hợp là vị vua cuối cùng của nhà Mạc ở Thăng Long. Sau khi quân Lê - Trịnh chiếm lại Thăng Long năm 1592, ông bị bắt và bị giết, chấm dứt giai đoạn Bắc triều.",
    difficulty: "medium"
  },
  {
    question: "Cuộc chiến tranh biên giới phía Bắc giữa Việt Nam và Trung Quốc diễn ra vào năm nào?",
    options: ["1975", "1978", "1979", "1984"],
    correctAnswer: "1979",
    image: createPlaceholder("Chiến tranh biên giới 1979"),
    explanation: "Sáng ngày 17/2/1979, Trung Quốc đã bất ngờ huy động một lực lượng quân sự lớn tấn công Việt Nam trên toàn tuyến biên giới phía Bắc, mở đầu cuộc chiến tranh ngắn nhưng khốc liệt.",
    difficulty: "medium"
  },
  {
    question: "Ai là người đã thành lập ra Thiền phái Tì-ni-đa-lưu-chi, một trong những dòng thiền đầu tiên ở Việt Nam?",
    options: ["Vinitaruci", "Vô Ngôn Thông", "Thảo Đường", "Trần Nhân Tông"],
    correctAnswer: "Vinitaruci",
    image: createPlaceholder("Thiền phái Tì-ni-đa-lưu-chi"),
    explanation: "Thiền sư Vinitaruci (Tì-ni-đa-lưu-chi), người gốc Ấn Độ, đã đến Việt Nam vào thế kỷ thứ 6 và truyền bá thiền học, sáng lập ra dòng thiền đầu tiên được ghi nhận trong lịch sử Phật giáo Việt Nam.",
    difficulty: "medium"
  },
  {
    question: "Bộ 'Đại Việt sử ký toàn thư' do ai chủ trì biên soạn?",
    options: ["Lê Văn Hưu", "Phan Phu Tiên", "Ngô Sĩ Liên", "Lê Quý Đôn"],
    correctAnswer: "Ngô Sĩ Liên",
    image: createPlaceholder("Đại Việt sử ký toàn thư"),
    explanation: "Sử gia Ngô Sĩ Liên dưới thời vua Lê Thánh Tông đã vâng mệnh vua biên soạn bộ 'Đại Việt sử ký toàn thư', đây là bộ quốc sử chính thống lâu đời nhất của Việt Nam còn tồn tại nguyên vẹn đến ngày nay.",
    difficulty: "medium"
  },
  {
    question: "Ai là người sáng lập và là lãnh đạo của phong trào khởi nghĩa nông dân Yên Thế?",
    options: ["Cai Vàng", "Đề Nắm", "Đề Thám", "Cả Đề Nắm và Đề Thám"],
    correctAnswer: "Cả Đề Nắm và Đề Thám",
    image: createPlaceholder("Lãnh đạo khởi nghĩa Yên Thế"),
    explanation: "Khởi nghĩa Yên Thế có hai giai đoạn lãnh đạo chính. Giai đoạn đầu do Lương Văn Nắm (Đề Nắm) lãnh đạo. Sau khi ông mất, Hoàng Hoa Thám (Đề Thám) đã trở thành thủ lĩnh tối cao, đưa phong trào lên đỉnh cao.",
    difficulty: "medium"
  },
  {
    question: "Hội nghị nào đã quyết định Tổng khởi nghĩa giành chính quyền trong cả nước vào tháng 8/1945?",
    options: ["Hội nghị Trung ương 8 (1941)", "Hội nghị Thường vụ Trung ương (3/1945)", "Hội nghị Toàn quốc của Đảng (Tân Trào, 8/1945)", "Quốc dân Đại hội (Tân Trào, 8/1945)"],
    correctAnswer: "Hội nghị Toàn quốc của Đảng (Tân Trào, 8/1945)",
    image: createPlaceholder("Quyết định Tổng khởi nghĩa"),
    explanation: "Từ ngày 13 đến 15/8/1945, Hội nghị đại biểu toàn quốc của Đảng họp tại Tân Trào đã nhận định thời cơ khởi nghĩa đã đến và quyết định phát động Tổng khởi nghĩa trong cả nước.",
    difficulty: "medium"
  },
  {
    question: "Năm 1940, Nhật Bản đã tiến vào Đông Dương dựa trên thỏa thuận với thế lực nào?",
    options: ["Chính phủ Anh", "Chính phủ Pháp (chính phủ Vichy)", "Chính phủ Mỹ", "Quân đội Tưởng Giới Thạch"],
    correctAnswer: "Chính phủ Pháp (chính phủ Vichy)",
    image: createPlaceholder("Nhật vào Đông Dương"),
    explanation: "Sau khi Pháp đầu hàng Đức, chính phủ Vichy thân phát xít đã ký thỏa thuận cho phép quân đội Nhật Bản tiến vào Đông Dương, tạo nên tình thế 'một cổ hai tròng' cho nhân dân ta.",
    difficulty: "medium"
  },
  {
    question: "Vị vua nào của nhà Trần đã có công chinh phạt và sáp nhập hai châu Ô, Lý vào lãnh thổ Đại Việt?",
    options: ["Trần Anh Tông", "Trần Minh Tông", "Trần Hiến Tông", "Trần Dụ Tông"],
    correctAnswer: "Trần Anh Tông",
    image: createPlaceholder("Sáp nhập châu Ô, Lý"),
    explanation: "Năm 1306, vua Champa là Chế Mân đã dâng hai châu Ô và Lý (từ đèo Hải Vân đến bắc Quảng Trị ngày nay) làm sính lễ để cưới công chúa Huyền Trân, con gái Thượng hoàng Trần Nhân Tông.",
    difficulty: "medium"
  },
  {
    question: "Ai là người được mệnh danh là Trạng Lường với tài năng toán học xuất chúng?",
    options: ["Vũ Hữu", "Lương Thế Vinh", "Nguyễn Hữu Thận", "Phan Huy Chú"],
    correctAnswer: "Lương Thế Vinh",
    image: createPlaceholder("Biệt danh Trạng Lường"),
    explanation: "Lương Thế Vinh không chỉ đỗ Trạng nguyên mà còn là một nhà toán học tài ba, tác giả của cuốn 'Đại thành toán pháp'. Ông có nhiều đóng góp trong việc đo đạc, tính toán nên được dân gian gọi là Trạng Lường.",
    difficulty: "medium"
  },
  {
    question: "Chiến dịch Biên giới Thu-Đông 1950 còn có tên gọi khác là gì?",
    options: ["Chiến dịch Thất Khê", "Chiến dịch Cao-Bắc-Lạng", "Chiến dịch Đông Khê", "Chiến dịch Lê Lợi"],
    correctAnswer: "Chiến dịch Cao-Bắc-Lạng",
    image: createPlaceholder("Chiến dịch Biên giới 1950"),
    explanation: "Chiến dịch Biên giới diễn ra chủ yếu trên địa bàn 3 tỉnh Cao Bằng, Bắc Kạn, Lạng Sơn nên còn được gọi là chiến dịch Cao-Bắc-Lạng. Đây là chiến dịch tiến công lớn đầu tiên của ta trong kháng chiến chống Pháp.",
    difficulty: "medium"
  },
  {
    question: "Tên của vị tướng đã chỉ huy quân đội nhà Lý thực hiện chiến lược 'tiên phát chế nhân', đánh sang đất Tống?",
    options: ["Tông Đản", "Lê Phụng Hiểu", "Lý Thường Kiệt", "Lý Kế Nguyên"],
    correctAnswer: "Lý Thường Kiệt",
    image: createPlaceholder("Chiến lược tiên phát chế nhân"),
    explanation: "Năm 1075, để phá vỡ âm mưu xâm lược của nhà Tống, Thái úy Lý Thường Kiệt đã chủ động chỉ huy hơn 10 vạn quân thủy bộ bất ngờ tấn công vào các căn cứ quân sự, hậu cần của địch trên đất Tống.",
    difficulty: "medium"
  },
  {
    question: "Ai là tác giả của bộ 'Phủ biên tạp lục', một công trình khảo cứu giá trị về lịch sử, địa lý Đàng Trong?",
    options: ["Lê Quý Đôn", "Phan Huy Chú", "Ngô Thì Sĩ", "Bùi Dương Lịch"],
    correctAnswer: "Lê Quý Đôn",
    image: createPlaceholder("Tác phẩm Phủ biên tạp lục"),
    explanation: "Trong thời gian làm quan ở Thuận Hóa, nhà bác học Lê Quý Đôn đã biên soạn cuốn 'Phủ biên tạp lục', ghi chép lại một cách chi tiết và hệ thống về mọi mặt của xứ Đàng Trong thế kỷ 18.",
    difficulty: "medium"
  },
  {
    question: "Sau thất bại của cuộc khởi nghĩa Yên Bái, Nguyễn Thái Học đã có câu nói nổi tiếng nào?",
    options: ["'Không thành công cũng thành nhân'", "'Đầu tôi chưa rơi, xin bệ hạ đừng lo'", "'Bao giờ hết cỏ nước Nam...'", "'Chết vinh còn hơn sống nhục'"],
    correctAnswer: "'Không thành công cũng thành nhân'",
    image: createPlaceholder("Câu nói của Nguyễn Thái Học"),
    explanation: "Trước khi bị thực dân Pháp đưa lên máy chém, Nguyễn Thái Học đã hô vang câu nói thể hiện khí phách của nhà cách mạng: 'Không thành công cũng thành nhân'.",
    difficulty: "medium"
  },
  {
    question: "Ai là vị nữ anh hùng đã chỉ huy du kích đánh thắng trận La Ngà nổi tiếng?",
    options: ["Nguyễn Thị Minh Khai", "Nguyễn Thị Định", "Võ Thị Sáu", "Hồ Thị Bi"],
    correctAnswer: "Nguyễn Thị Định",
    image: createPlaceholder("Trận La Ngà"),
    explanation: "Nữ tướng Nguyễn Thị Định, người con của Bến Tre, đã tham gia và chỉ huy nhiều trận đánh, trong đó có trận La Ngà (Đồng Nai) năm 1948, tiêu diệt một đoàn xe quân sự của Pháp.",
    difficulty: "medium"
  },
  {
    question: "Tên của con sông là ranh giới tự nhiên giữa Đàng Trong và Đàng Ngoài trong thời kỳ Trịnh - Nguyễn phân tranh?",
    options: ["Sông Hồng", "Sông Mã", "Sông Gianh", "Sông Bến Hải"],
    correctAnswer: "Sông Gianh",
    image: createPlaceholder("Ranh giới Trịnh - Nguyễn"),
    explanation: "Sông Gianh, chảy trên địa phận tỉnh Quảng Bình, đã trở thành ranh giới chia cắt hai miền Đàng Trong - Đàng Ngoài trong gần 2 thế kỷ, là nơi diễn ra nhiều cuộc giao tranh ác liệt.",
    difficulty: "medium"
  },
  {
    question: "Ai là vị vua sáng lập ra nhà nước Vạn Xuân?",
    options: ["Triệu Quang Phục", "Lý Phật Tử", "Mai Thúc Loan", "Lý Bí"],
    correctAnswer: "Lý Bí",
    image: createPlaceholder("Sáng lập Vạn Xuân"),
    explanation: "Năm 544, sau khi lãnh đạo cuộc khởi nghĩa đánh đuổi quân Lương thắng lợi, Lý Bí đã lên ngôi hoàng đế (Lý Nam Đế) và đặt quốc hiệu là Vạn Xuân.",
    difficulty: "medium"
  },
  {
    question: "Vị vua cuối cùng của triều đại Tiền Lê là ai và nổi tiếng với giai thoại tàn bạo, độc ác?",
    options: ["Lê Trung Tông", "Lê Long Đĩnh", "Lê Long Việt", "Lê Ngọa Triều"],
    correctAnswer: "Lê Long Đĩnh",
    image: createPlaceholder("Vua cuối cùng Tiền Lê"),
    explanation: "Lê Long Đĩnh, hay còn gọi là Lê Ngọa Triều, là vị vua cuối cùng của nhà Tiền Lê. Ông nổi tiếng là một bạo chúa, có nhiều hình phạt tàn khốc và hoang dâm vô độ.",
    difficulty: "medium"
  },
  {
    question: "Chiến dịch Đường 9 - Nam Lào (1971) của quân ta nhằm mục đích gì?",
    options: ["Giải phóng Sài Gòn", "Đánh vào thủ đô của địch", "Đập tan cuộc hành quân Lam Sơn 719 của địch", "Giải phóng cao nguyên Bolaven"],
    correctAnswer: "Đập tan cuộc hành quân Lam Sơn 719 của địch",
    image: createPlaceholder("Chiến dịch Đường 9 Nam Lào"),
    explanation: "Đây là chiến dịch phản công của quân ta nhằm đánh bại cuộc hành quân Lam Sơn 719 của Mỹ và quân đội Sài Gòn, giữ vững tuyến vận tải chiến lược đường mòn Hồ Chí Minh.",
    difficulty: "medium"
  }
];

export const HARD_QUESTIONS: Question[] = [
  {
    question: "Trong cuộc kháng chiến chống Mông-Nguyên lần thứ hai, ai là người đã có công giữ vững vùng đất Hoan - Diễn (Nghệ An - Hà Tĩnh) làm hậu phương vững chắc?",
    options: ["Trần Quang Khải", "Trần Nhật Duật", "Trần Quốc Toản", "Trần Quốc Khang"],
    correctAnswer: "Trần Quốc Khang",
    image: createPlaceholder("Giữ vững Hoan - Diễn"),
    explanation: "Khi quân Nguyên Mông ồ ạt tiến vào Thăng Long, Thượng hoàng và vua Trần đã rút quân về Thiên Trường, sau đó vào Thanh Hóa. Tĩnh Quốc đại vương Trần Quốc Khang được giao trọng trách trấn giữ vùng Hoan - Diễn, tạo hậu phương chiến lược quan trọng.",
    difficulty: "hard"
  },
  {
    question: "Ai là người đầu tiên ở Việt Nam dùng phẫu thuật gây mê bằng cà độc dược để chữa bệnh?",
    options: ["Tuệ Tĩnh", "Hải Thượng Lãn Ông", "Phạm Công Bân", "Nguyễn Đại Năng"],
    correctAnswer: "Nguyễn Đại Năng",
    image: createPlaceholder("Phẫu thuật gây mê"),
    explanation: "Nguyễn Đại Năng, một danh y thời nhà Trần, được cho là người đầu tiên đã biết dùng cà độc dược làm thuốc gây mê trong các ca mổ, đặc biệt là mổ mắt.",
    difficulty: "hard"
  },
  {
    question: "Tổ chức 'Tâm Tâm Xã' nổi tiếng với sự kiện nào vào năm 1924 tại Quảng Châu (Trung Quốc)?",
    options: ["Ám sát toàn quyền Merlin", "Phát động phong trào Đông Du", "Thành lập Hội Việt Nam Cách mạng Thanh niên", "Tổ chức tiếng bom Sa Diện"],
    correctAnswer: "Tổ chức tiếng bom Sa Diện",
    image: createPlaceholder("Tiếng bom Sa Diện"),
    explanation: "Phạm Hồng Thái, một thành viên của Tâm Tâm Xã, đã thực hiện vụ mưu sát viên toàn quyền Đông Dương Martial Merlin tại Sa Diện, Quảng Châu. Vụ mưu sát không thành nhưng đã gây tiếng vang lớn, thức tỉnh lòng yêu nước của nhiều người.",
    difficulty: "hard"
  },
  {
    question: "Dưới thời Pháp thuộc, cuộc khởi nghĩa nào được xem là cuộc khởi nghĩa vũ trang cuối cùng của phong trào Cần Vương?",
    options: ["Khởi nghĩa Ba Đình", "Khởi nghĩa Bãi Sậy", "Khởi nghĩa Hùng Lĩnh", "Khởi nghĩa Hương Khê"],
    correctAnswer: "Khởi nghĩa Hương Khê",
    image: createPlaceholder("Khởi nghĩa cuối cùng Cần Vương"),
    explanation: "Khởi nghĩa Hương Khê (1885-1896) do Phan Đình Phùng lãnh đạo được coi là đỉnh cao và là cuộc khởi nghĩa có quy mô lớn nhất, kéo dài nhất trong phong trào Cần Vương chống Pháp.",
    difficulty: "hard"
  },
  {
    question: "Ai là người đã chỉ huy đạo quân thứ hai của nhà Lý đánh vào đất Tống năm 1075, theo hướng đông bắc?",
    options: ["Lý Thường Kiệt", "Tông Đản", "Lưu Kỷ", "Thân Cảnh Phúc"],
    correctAnswer: "Tông Đản",
    image: createPlaceholder("Đánh Tống hướng Đông Bắc"),
    explanation: "Trong cuộc tấn công 'tiên phát chế nhân', Lý Thường Kiệt chỉ huy quân thủy. Cánh quân bộ đi theo đường Lạng Sơn do Tông Đản chỉ huy, có nhiệm vụ đánh vào châu Ung.",
    difficulty: "hard"
  },
  {
    question: "Kế hoạch De Lattre de Tassigny của Pháp (1950) tập trung vào việc xây dựng hệ thống phòng thủ nào ở đồng bằng Bắc Bộ?",
    options: ["Vành đai thép quanh Hà Nội", "Hệ thống lô cốt và 'boong-ke'", "Hành lang Đông - Tây", "Phòng tuyến sông Đà"],
    correctAnswer: "Hệ thống lô cốt và 'boong-ke'",
    image: createPlaceholder("Kế hoạch De Lattre"),
    explanation: "Kế hoạch này tập trung vào việc xây dựng một vành đai phòng thủ vững chắc bằng hệ thống lô cốt, tháp canh dày đặc bao quanh vùng trung du và đồng bằng Bắc Bộ nhằm 'bình định' và đối phó với chủ lực của ta.",
    difficulty: "hard"
  },
  {
    question: "Nghệ thuật quân sự 'vây thành diệt viện' được quân ta áp dụng thành công trong trận đánh quyết định nào của cuộc kháng chiến chống Minh?",
    options: ["Trận Tốt Động - Chúc Động", "Trận Chi Lăng - Xương Giang", "Trận Hàm Tử - Chương Dương", "Trận Rạch Gầm - Xoài Mút"],
    correctAnswer: "Trận Chi Lăng - Xương Giang",
    image: createPlaceholder("Nghệ thuật vây thành diệt viện"),
    explanation: "Trong trận Chi Lăng - Xương Giang, bộ chỉ huy Lam Sơn do Lê Lợi, Nguyễn Trãi đứng đầu đã cho quân vây hãm thành Xương Giang, sau đó tập trung lực lượng tiêu diệt đạo quân viện binh của Liễu Thăng, buộc quân trong thành phải đầu hàng.",
    difficulty: "hard"
  },
  {
    question: "Ai là vị vua nhà Trần duy nhất không phải là hậu duệ trực tiếp của Trần Cảnh (Trần Thái Tông)?",
    options: ["Trần Thánh Tông", "Trần Nghệ Tông", "Trần Dụ Tông", "Trần Duệ Tông"],
    correctAnswer: "Trần Nghệ Tông",
    image: createPlaceholder("Vua Trần không phải con cháu"),
    explanation: "Sau khi Dương Nhật Lễ cướp ngôi, các quý tộc nhà Trần đã tôn Trần Phủ (con của Trần Minh Tông) lên ngôi, tức vua Trần Nghệ Tông. Ông là anh của Trần Dụ Tông, thuộc một nhánh khác so với các vua trước đó.",
    difficulty: "hard"
  },
  {
    question: "Tên của vị quan nhà Nguyễn đã dâng 'Thời vụ sách' (còn gọi là 'tờ điều trần') lên vua Tự Đức, đề nghị cải cách toàn diện đất nước?",
    options: ["Nguyễn Trường Tộ", "Phạm Phú Thứ", "Nguyễn Lộ Trạch", "Bùi Viện"],
    correctAnswer: "Nguyễn Trường Tộ",
    image: createPlaceholder("Đề nghị cải cách vua Tự Đức"),
    explanation: "Nguyễn Trường Tộ là một nhà cải cách lớn của Việt Nam nửa cuối thế kỷ 19. Ông đã gửi lên triều đình nhiều bản điều trần tâm huyết, đề nghị cải cách về mọi mặt từ chính trị, kinh tế, quân sự, giáo dục nhưng không được chấp nhận.",
    difficulty: "hard"
  },
  {
    question: "Vị vua nào của nhà Hậu Lê đã bị Mạc Đăng Dung phế truất, chấm dứt triều Lê Sơ?",
    options: ["Lê Chiêu Tông", "Lê Cung Hoàng", "Lê Trang Tông", "Lê Anh Tông"],
    correctAnswer: "Lê Cung Hoàng",
    image: createPlaceholder("Vua cuối cùng Lê Sơ"),
    explanation: "Năm 1527, sau khi đã nắm trọn quyền hành trong triều, Thái sư Mạc Đăng Dung đã ép vua Lê Cung Hoàng phải nhường ngôi, lập ra nhà Mạc, chấm dứt triều Lê Sơ.",
    difficulty: "hard"
  },
  {
    question: "Trong chiến dịch Điện Biên Phủ, việc thay đổi phương châm tác chiến từ 'đánh nhanh, thắng nhanh' sang 'đánh chắc, tiến chắc' là quyết định của ai?",
    options: ["Chủ tịch Hồ Chí Minh", "Tổng Bí thư Trường Chinh", "Đại tướng Võ Nguyên Giáp", "Cố vấn Vi Quốc Thanh"],
    correctAnswer: "Đại tướng Võ Nguyên Giáp",
    image: createPlaceholder("Thay đổi phương châm Điện Biên Phủ"),
    explanation: "Sau khi cân nhắc kỹ lưỡng tình hình thực tế tại mặt trận, Tổng tư lệnh Võ Nguyên Giáp đã đưa ra một quyết định khó khăn nhưng vô cùng sáng suốt là thay đổi phương châm tác chiến. Đây được coi là yếu tố quyết định dẫn đến thắng lợi của chiến dịch.",
    difficulty: "hard"
  },
  {
    question: "Ai là người đã thành lập ra nhà nước Vạn Xuân sau khi đánh bại Tiêu Tư, tướng của nhà Lương?",
    options: ["Triệu Quang Phục", "Mai Thúc Loan", "Lý Bí", "Lý Phật Tử"],
    correctAnswer: "Lý Bí",
    image: createPlaceholder("Thành lập Vạn Xuân"),
    explanation: "Năm 542, Lý Bí lãnh đạo nhân dân khởi nghĩa. Đến năm 544, sau khi giải phóng gần như toàn bộ Giao Châu, ông lên ngôi hoàng đế, xưng là Lý Nam Đế và đặt quốc hiệu là Vạn Xuân.",
    difficulty: "hard"
  },
  {
    question: "Tên của vị Hoàng hậu cuối cùng của triều đại phong kiến Việt Nam là gì?",
    options: ["Thừa Thiên Cao Hoàng hậu", "Lệ Thiên Anh Hoàng hậu", "Nam Phương Hoàng hậu", "Từ Dụ Hoàng thái hậu"],
    correctAnswer: "Nam Phương Hoàng hậu",
    image: createPlaceholder("Hoàng hậu cuối cùng"),
    explanation: "Nam Phương Hoàng hậu (tên thật là Nguyễn Hữu Thị Lan) là vợ của vua Bảo Đại. Bà là vị Hoàng hậu cuối cùng của triều Nguyễn và của cả chế độ quân chủ Việt Nam.",
    difficulty: "hard"
  },
  {
    question: "Chiến thuật 'Thiết xa vận' và 'Trực thăng vận' của Mỹ và quân đội Sài Gòn bị phá sản lần đầu tiên trong trận đánh nào?",
    options: ["Trận Vạn Tường", "Trận Bình Giã", "Trận Đồng Xoài", "Trận Ấp Bắc"],
    correctAnswer: "Trận Ấp Bắc",
    image: createPlaceholder("Phá sản Thiết xa vận"),
    explanation: "Trong trận Ấp Bắc (Mỹ Tho) tháng 1/1963, quân giải phóng đã đánh bại một cuộc càn quét quy mô lớn của địch, bắn rơi nhiều máy bay và phá hủy nhiều xe bọc thép, làm thất bại các chiến thuật quân sự mới của Mỹ.",
    difficulty: "hard"
  },
  {
    question: "Ai là người đã chỉ huy cuộc khởi nghĩa của binh lính và cai ngục ở Thái Nguyên vào năm 1917?",
    options: ["Lương Ngọc Quyến và Trịnh Văn Cấn", "Nguyễn Thái Học và Phó Đức Chính", "Phan Bội Châu và Cường Để", "Hoàng Hoa Thám và Cai Vàng"],
    correctAnswer: "Lương Ngọc Quyến và Trịnh Văn Cấn",
    image: createPlaceholder("Khởi nghĩa Thái Nguyên"),
    explanation: "Đêm 30/8/1917, dưới sự lãnh đạo của Đội Cấn (Trịnh Văn Cấn) và Lương Ngọc Quyến, binh lính người Việt đã nổi dậy khởi nghĩa, chiếm được tỉnh lỵ Thái Nguyên và làm chủ trong 6 ngày.",
    difficulty: "hard"
  },
  {
    question: "Ai là người sáng lập ra 'Trí Tri xã' và xuất bản tờ 'Chuông Rè' (La Cloche Fêlée) ở Sài Gòn?",
    options: ["Nguyễn An Ninh", "Phan Văn Trường", "Tạ Thu Thâu", "Huỳnh Thúc Kháng"],
    correctAnswer: "Nguyễn An Ninh",
    image: createPlaceholder("Báo Chuông Rè"),
    explanation: "Nhà yêu nước, nhà báo Nguyễn An Ninh đã có những hoạt động sôi nổi ở Nam Kỳ những năm 1920, trong đó có việc xuất bản tờ báo tiếng Pháp 'La Cloche Fêlée' để đấu tranh cho dân quyền và dân sinh.",
    difficulty: "hard"
  },
  {
    question: "Cuốn 'Dư địa chí' - bộ sách địa lý-lịch sử đầu tiên của Việt Nam - là của tác giả nào?",
    options: ["Lê Quý Đôn", "Trịnh Hoài Đức", "Phan Huy Chú", "Nguyễn Trãi"],
    correctAnswer: "Nguyễn Trãi",
    image: createPlaceholder("Tác giả Dư địa chí"),
    explanation: "'Dư địa chí' là một phần trong bộ 'Ức Trai di tập' của Nguyễn Trãi. Đây được coi là công trình địa lý học đầu tiên của Việt Nam, ghi chép về cương vực, sản vật, phong tục của các đạo.",
    difficulty: "hard"
  },
  {
    question: "Sau khi vua Quang Trung qua đời, ai là người đã lên nối ngôi?",
    options: ["Nguyễn Quang Toản (Cảnh Thịnh)", "Nguyễn Quang Thùy", "Bùi Đắc Tuyên", "Trần Quang Diệu"],
    correctAnswer: "Nguyễn Quang Toản (Cảnh Thịnh)",
    image: createPlaceholder("Nối ngôi Quang Trung"),
    explanation: "Sau khi vua Quang Trung đột ngột băng hà năm 1792, con trai ông là Nguyễn Quang Toản đã lên nối ngôi, lấy niên hiệu là Cảnh Thịnh. Tuy nhiên, vua Cảnh Thịnh còn nhỏ tuổi, không đủ tài năng và uy tín nên triều Tây Sơn suy yếu dần.",
    difficulty: "hard"
  },
  {
    question: "Kế hoạch Staley-Taylor (1961) của Mỹ đề ra mục tiêu 'bình định' miền Nam trong vòng bao lâu?",
    options: ["6 tháng", "12 tháng", "18 tháng", "24 tháng"],
    correctAnswer: "18 tháng",
    image: createPlaceholder("Kế hoạch Staley-Taylor"),
    explanation: "Kế hoạch Staley-Taylor là kế hoạch chiến lược đầu tiên của Mỹ trong 'Chiến tranh đặc biệt', với mục tiêu rất tham vọng là 'bình định' xong miền Nam trong vòng 18 tháng.",
    difficulty: "hard"
  },
  {
    question: "Vị tướng nào của nhà Trần đã có câu nói nổi tiếng 'Xin bệ hạ hãy chém đầu thần trước rồi hãy hàng'?",
    options: ["Trần Hưng Đạo", "Trần Quang Khải", "Trần Bình Trọng", "Trần Quốc Toản"],
    correctAnswer: "Trần Bình Trọng",
    image: createPlaceholder("Câu nói của Trần Bình Trọng"),
    explanation: "Khi bị giặc Mông-Nguyên bắt và dụ dỗ, dọa nạt, danh tướng Trần Bình Trọng đã khẳng khái trả lời: 'Ta thà làm ma nước Nam, chứ không thèm làm vương đất Bắc', thể hiện khí phách hiên ngang, bất khuất.",
    difficulty: "hard"
  },
  {
    question: "Tổ chức chính trị công khai đầu tiên của giai cấp tư sản Việt Nam là gì?",
    options: ["Việt Nam Quốc dân Đảng", "Đảng Lập hiến", "Tân Việt Cách mạng Đảng", "Phục Việt Hội"],
    correctAnswer: "Đảng Lập hiến",
    image: createPlaceholder("Đảng của tư sản Việt Nam"),
    explanation: "Đảng Lập hiến được thành lập năm 1923 ở Sài Gòn do Bùi Quang Chiêu, Nguyễn Phan Long đứng đầu. Đây là chính đảng đầu tiên của giai cấp tư sản, chủ trương thỏa hiệp với Pháp để đòi một số quyền lợi về chính trị, kinh tế.",
    difficulty: "hard"
  },
  {
    question: "Trong lịch sử Việt Nam, có một giai đoạn tồn tại cùng lúc ba vị vua. Đó là thời kỳ nào?",
    options: ["Loạn 12 sứ quân", "Thời Lê mạt", "Đầu thời Nguyễn", "Thời Nam-Bắc triều"],
    correctAnswer: "Thời Lê mạt",
    image: createPlaceholder("Thời kỳ ba vua"),
    explanation: "Đó là thời điểm cuối đời vua Lê Hiển Tông. Khi quân Tây Sơn tiến ra Bắc, vua Lê Chiêu Thống chạy sang Tàu cầu viện. Cùng lúc đó, có một người tên là Lê Duy Chỉ cũng nổi lên tự xưng là vua. Cả ba đều tự nhận là vua của nhà Lê.",
    difficulty: "hard"
  },
  {
    question: "Chiến dịch phòng ngự Cánh đồng Chum - Xiêng Khoảng (1971-1972) là sự phối hợp chiến đấu giữa quân đội Việt Nam và lực lượng nào?",
    options: ["Quân đội Campuchia", "Quân đội Pathét Lào", "Quân đội Thái Lan", "Quân đội Trung Quốc"],
    correctAnswer: "Quân đội Pathét Lào",
    image: createPlaceholder("Chiến dịch Cánh đồng Chum"),
    explanation: "Đây là một chiến dịch phòng ngự quy mô lớn của liên quân Việt - Lào nhằm đánh bại cuộc hành quân lấn chiếm của quân đội Vàng Pao và quân Thái Lan, được Mỹ yểm trợ, tại khu vực Cánh đồng Chum - Xiêng Khoảng.",
    difficulty: "hard"
  },
  {
    question: "Ai là tác giả của 'Thiên Nam ngữ lục', tác phẩm diễn ca lịch sử dài nhất viết bằng chữ Nôm?",
    options: ["Nguyễn Trãi", "Lê Thánh Tông", "Nguyễn Bỉnh Khiêm", "Tác giả khuyết danh"],
    correctAnswer: "Tác giả khuyết danh",
    image: createPlaceholder("Thiên Nam ngữ lục"),
    explanation: "'Thiên Nam ngữ lục' là một tác phẩm vĩ đại bằng chữ Nôm, kể lại lịch sử Việt Nam từ thời Hồng Bàng đến thời Lê. Tác giả của tác phẩm này hiện vẫn chưa được xác định rõ ràng.",
    difficulty: "hard"
  },
  {
    question: "Vị vua nào của nhà Lý đã sáng tạo ra điệu múa 'Bông sen dâng Phật' nổi tiếng?",
    options: ["Lý Thái Tổ", "Lý Thái Tông", "Lý Thánh Tông", "Lý Nhân Tông"],
    correctAnswer: "Lý Thái Tông",
    image: createPlaceholder("Điệu múa Bông sen"),
    explanation: "Sau khi dẹp loạn Nùng Tồn Phúc ở biên giới phía Bắc, vua Lý Thái Tông đã sáng tác ra khúc nhạc 'Tây Thiên' và điệu múa 'Bông sen dâng Phật' để ăn mừng chiến thắng và tạ ơn trời đất.",
    difficulty: "hard"
  },
  {
    question: "Trận Tốt Động - Chúc Động (1426) là một trong những chiến thắng vang dội nhất của nghĩa quân Lam Sơn, do ai trực tiếp chỉ huy?",
    options: ["Lê Lợi", "Nguyễn Trãi", "Lê Sát và Lưu Nhân Chú", "Nguyễn Chích"],
    correctAnswer: "Lê Sát và Lưu Nhân Chú",
    image: createPlaceholder("Trận Tốt Động Chúc Động"),
    explanation: "Mặc dù Lê Lợi và Nguyễn Trãi là lãnh đạo tối cao, nhưng người trực tiếp chỉ huy trận Tốt Động - Chúc Động, một trận phục kích xuất sắc tiêu diệt phần lớn quân Minh, là các tướng Lê Sát, Lưu Nhân Chú, và Nguyễn Xí.",
    difficulty: "hard"
  },
  {
    question: "Vị quan nào dưới triều Nguyễn đã tự bỏ tiền túi ra để đóng tàu, thuyền và đi sang các nước phương Tây để tìm hiểu, học hỏi?",
    options: ["Nguyễn Trường Tộ", "Bùi Viện", "Đặng Huy Trứ", "Phan Thanh Giản"],
    correctAnswer: "Bùi Viện",
    image: createPlaceholder("Quan Bùi Viện"),
    explanation: "Bùi Viện, một vị quan có tư tưởng canh tân, đã hai lần phụng mệnh vua Tự Đức đi sứ sang Mỹ. Ông cũng là người có công trong việc thành lập cảng Hải Phòng.",
    difficulty: "hard"
  },
  {
    question: "Kế hoạch 'Tìm và diệt' là nội dung chính trong chiến lược chiến tranh nào của Mỹ ở miền Nam Việt Nam?",
    options: ["Chiến tranh đặc biệt", "Chiến tranh cục bộ", "Việt Nam hóa chiến tranh", "Chiến tranh đơn phương"],
    correctAnswer: "Chiến tranh cục bộ",
    image: createPlaceholder("Kế hoạch Tìm và diệt"),
    explanation: "Trong chiến lược 'Chiến tranh cục bộ' (1965-1968), quân Mỹ và đồng minh đã mở hàng loạt cuộc hành quân 'tìm và diệt' quy mô lớn nhằm tiêu diệt quân chủ lực của ta, nhưng hầu hết đều thất bại.",
    difficulty: "hard"
  },
  {
    question: "Ai là người đã lãnh đạo cuộc nổi dậy của người Chăm ở Thuận Hải chống lại nhà Nguyễn vào đầu thế kỷ 19?",
    options: ["Lê Văn Khôi", "Nông Văn Vân", "Katip Sumat", "Ja Thak Wa"],
    correctAnswer: "Katip Sumat",
    image: createPlaceholder("Khởi nghĩa người Chăm"),
    explanation: "Katip Sumat là một thủ lĩnh tôn giáo người Chăm đã lãnh đạo một cuộc nổi dậy lớn chống lại triều đình Minh Mạng vào năm 1833, nhưng cuối cùng đã bị đàn áp.",
    difficulty: "hard"
  },
  {
    question: "Trong lịch sử khoa bảng, ai là người duy nhất đỗ Trạng nguyên ở cả kỳ thi Đình và kỳ thi Đông các?",
    options: ["Lê Quý Đôn", "Phạm Đôn Lễ", "Vũ Duệ", "Nguyễn Trực"],
    correctAnswer: "Phạm Đôn Lễ",
    image: createPlaceholder("Trạng nguyên hai kỳ thi"),
    explanation: "Phạm Đôn Lễ, người làng Hải Triều (Hưng Yên), nổi tiếng với giai thoại học tài thi phận. Ông đỗ Trạng nguyên khoa thi Tân Mùi (1451) và sau đó lại đỗ đầu trong kỳ thi chọn người vào Đông các.",
    difficulty: "hard"
  },
  {
    question: "Hội nghị Versailles năm 1919 có sự kiện gì quan trọng liên quan đến Nguyễn Ái Quốc?",
    options: ["Thành lập Hội Liên hiệp Thuộc địa", "Gửi 'Bản yêu sách của nhân dân An Nam'", "Đọc tham luận tại Đại hội Tours", "Thành lập Hội Việt Nam Cách mạng Thanh niên"],
    correctAnswer: "Gửi 'Bản yêu sách của nhân dân An Nam'",
    image: createPlaceholder("Hội nghị Versailles 1919"),
    explanation: "Thay mặt những người Việt Nam yêu nước tại Pháp, Nguyễn Ái Quốc đã gửi đến Hội nghị Hòa bình Versailles bản 'Yêu sách của nhân dân An Nam' gồm 8 điểm, đòi các quyền tự do, dân chủ cho nhân dân Việt Nam.",
    difficulty: "hard"
  },
  {
    question: "Tên của tờ báo bí mật đầu tiên của Hội Việt Nam Cách mạng Thanh niên là gì?",
    options: ["Người Cùng Khổ", "Thanh Niên", "Búa Liềm", "Cờ Vô Sản"],
    correctAnswer: "Thanh Niên",
    image: createPlaceholder("Báo Thanh Niên"),
    explanation: "Báo Thanh Niên do Nguyễn Ái Quốc sáng lập và trực tiếp chỉ đạo, ra số đầu tiên vào ngày 21/6/1925. Đây là cơ quan ngôn luận của Hội, có vai trò to lớn trong việc truyền bá chủ nghĩa Mác-Lênin vào Việt Nam.",
    difficulty: "hard"
  },
  {
    question: "Vị tướng nào dưới thời Hậu Lê đã có công dẹp yên cuộc nổi dậy của 'vua Chay' ở Hưng Hóa?",
    options: ["Nguyễn Xí", "Lê Sát", "Trịnh Khả", "Đinh Liệt"],
    correctAnswer: "Trịnh Khả",
    image: createPlaceholder("Dẹp loạn vua Chay"),
    explanation: "Năm 1440, một người tên là Nguyễn Hữu Cầu (không phải Quận He) tự xưng là 'vua Chay', nổi dậy ở Hưng Hóa. Tướng Trịnh Khả đã được cử đi và dẹp yên cuộc nổi loạn này.",
    difficulty: "hard"
  },
  {
    question: "Sự kiện nào đánh dấu sự chấm dứt hoàn toàn của vương triều nhà Mạc?",
    options: ["Trận chiến ở Thăng Long năm 1592", "Cái chết của Mạc Kính Cung năm 1625", "Họ Mạc đầu hàng nhà Thanh năm 1683", "Cái chết của Mạc Kính Vũ ở Cao Bằng"],
    correctAnswer: "Họ Mạc đầu hàng nhà Thanh năm 1683",
    image: createPlaceholder("Chấm dứt nhà Mạc"),
    explanation: "Sau khi bị quân Lê-Trịnh đánh bật khỏi Thăng Long, nhà Mạc rút lên Cao Bằng và tồn tại ở đó một thời gian dài dưới sự bảo hộ của nhà Minh, rồi nhà Thanh. Đến năm 1683, khi không còn được nhà Thanh ủng hộ, họ Mạc mới chấm dứt hoàn toàn.",
    difficulty: "hard"
  },
  {
    question: "Ai là người đã sáng tác bộ 'Lịch triều hiến chương loại chí', một công trình được coi là bộ bách khoa toàn thư của Việt Nam thời trung đại?",
    options: ["Lê Quý Đôn", "Ngô Thì Sĩ", "Phan Huy Chú", "Trịnh Hoài Đức"],
    correctAnswer: "Phan Huy Chú",
    image: createPlaceholder("Lịch triều hiến chương loại chí"),
    explanation: "'Lịch triều hiến chương loại chí' là một công trình biên khảo đồ sộ của nhà bác học Phan Huy Chú, tổng hợp tri thức về lịch sử, thể chế của các triều đại Việt Nam từ khởi thủy đến thời Lê.",
    difficulty: "hard"
  },
  {
    question: "Trận đánh nào được coi là trận then chốt, mở đường cho quân Tây Sơn tiến ra Bắc lần thứ nhất (1786)?",
    options: ["Trận Rạch Gầm - Xoài Mút", "Trận Cẩm Sa", "Trận Phú Xuân", "Trận Ngọc Hồi"],
    correctAnswer: "Trận Phú Xuân",
    image: createPlaceholder("Tây Sơn tiến ra Bắc"),
    explanation: "Năm 1786, sau khi nhận thấy sự suy yếu của chúa Trịnh, Nguyễn Huệ đã quyết định đưa quân ra Bắc với danh nghĩa 'phù Lê diệt Trịnh'. Trận đánh chiếm thành Phú Xuân của chúa Nguyễn là bước đi chiến lược đầu tiên, tạo bàn đạp vững chắc.",
    difficulty: "hard"
  },
  {
    question: "Phong trào 'Chấn hưng nội hóa, bài trừ ngoại hóa' vào những năm 20 của thế kỷ 20 do giai cấp nào khởi xướng?",
    options: ["Công nhân", "Nông dân", "Tư sản dân tộc", "Tiểu tư sản"],
    correctAnswer: "Tư sản dân tộc",
    image: createPlaceholder("Chấn hưng nội hóa"),
    explanation: "Đây là một phong trào kinh tế - xã hội do giai cấp tư sản dân tộc khởi xướng, nhằm vận động người Việt dùng hàng Việt, tẩy chay hàng hóa ngoại quốc (chủ yếu là Pháp và Hoa kiều) để phát triển nền kinh tế dân tộc.",
    difficulty: "hard"
  },
  {
    question: "Trong bộ máy quan lại nhà Lê Thánh Tông, chức quan nào có quyền hành cao nhất, thay mặt vua giải quyết mọi việc?",
    options: ["Thái sư", "Tể tướng", "Tướng quốc", "Không có chức quan nào"],
    correctAnswer: "Không có chức quan nào",
    image: createPlaceholder("Quan lại thời Lê Thánh Tông"),
    explanation: "Để tăng cường quyền lực trung ương tập quyền, vua Lê Thánh Tông đã bãi bỏ các chức Tể tướng, Đại hành khiển, những chức quan có quyền lực rất lớn từ thời Lý - Trần. Vua trực tiếp điều hành Lục bộ.",
    difficulty: "hard"
  },
  {
    question: "Ai là người lãnh đạo cuộc khởi nghĩa của nhân dân Campuchia chống Pháp, có sự phối hợp và giúp đỡ của nghĩa quân Trương Định?",
    options: ["Si Votha", "Acha Xoa", "Poukambo", "Norodom"],
    correctAnswer: "Poukambo",
    image: createPlaceholder("Khởi nghĩa Poukambo"),
    explanation: "Poukambo là một nhà sư yêu nước người Campuchia, đã lãnh đạo một cuộc khởi nghĩa lớn chống Pháp. Ông đã liên kết với nghĩa quân của Trương Định và Thiên hộ Dương để cùng kháng chiến.",
    difficulty: "hard"
  },
  {
    question: "Vị vua nào của nhà Trần đã tự mình cầm quân đi đánh Chiêm Thành và tử trận tại đó?",
    options: ["Trần Anh Tông", "Trần Minh Tông", "Trần Duệ Tông", "Trần Thuận Tông"],
    correctAnswer: "Trần Duệ Tông",
    image: createPlaceholder("Vua Trần tử trận"),
    explanation: "Năm 1377, vua Trần Duệ Tông đã quá tự tin, đích thân mang đại quân đi đánh Chiêm Thành. Do chủ quan, khinh địch, vua đã bị trúng tên và tử trận, gây ra một tổn thất lớn cho nhà Trần.",
    difficulty: "hard"
  }
];