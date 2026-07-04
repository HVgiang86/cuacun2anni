export const uiText = {
  hero: {
    scrollPrompt: "Vui lòng kéo xuống!"
  },
  timeCounter: {
    title: "Em có biết...",
    subtitle: "Mỗi phút giây có em bên đời, mỗi khoảnh khắc đều là món quà vô giá",
    daysLabel: "ngày",
    message: "...và sẽ còn đến mãi mãi, mãi mãi về sau 💕"
  },
  timeline: {
    title: "Và anh sẽ kể lại cho em hành trình ấy...",
    subtitle: "những khoảnh khắc tuyệt đẹp trong hành trình của của hai đứa",
    scrollPrompt: "Cuộn để khám phá hành trình của chúng ta",
    fallbackMilestone: {
      title: "Kỷ Niệm Đẹp",
      date: "Hành Trình Của Chúng Ta",
      description: "Mỗi khoảnh khắc bên em đều là một món quà vô giá."
    }
  },
  games: {
    sectionTitle: "Trò chơi nho nhỏ cho em",
    subtitle: "Chơi những mini-game này để thu thập mật mã và mở khóa một bất ngờ đặc biệt nhé!",
    difficultyLabel: "Độ khó:",
    progressHint: "Thu thập mật mã từ cả hai trò chơi để mở khóa phần thưởng cuối cùng!",
    tulipGame: {
      title: "Hứng Hoa Tulip",
      description: "Hãy hứng những bông hoa tulip đang rơi trước khi chúng biến mất! Thu thập đủ 10 bông để nhận mã bí mật đầu tiên.",
      playButton: "🌷 Chơi ngay"
    },
    pairingGame: {
      title: "Ghép Ảnh",
      description: "Hãy tìm ra tất cả các cặp ảnh giống nhau để mở khoá mật mã thứ hai.",
      playButton: "🃏 Chơi ngay",
      backToHome: "← Trang chủ",
      hint: "Ghép các cặp ảnh để nhận phần thưởng",
      footer: "🌷 Happy 2nd Anniversary 🌷"
    },
    tulipCatcher: {
      title: "Hứng Hoa Tulip 🌷",
      subtitle: (targetScore: number) => `Hứng đủ ${targetScore} bông hoa tulip đang rơi để nhận mã bí mật nhé!`,
      howToPlay: "Cách Chơi",
      rule1: "🌷 Chạm vào những bông hoa tulip đang rơi để hứng",
      rule2: (targetScore: number) => `🎯 Hứng đủ ${targetScore} bông hoa để chiến thắng`,
      rule3: "⏱️ Đừng để hoa rơi khỏi màn hình nhé!",
      startButton: "Bắt đầu",
      scoreLabel: "Điểm:",
      waitingMessage: "Chuẩn bị nhé! Hoa tulip đang rơi xuống... 🌷",
      ariaClose: "Đóng trò chơi",
      ariaCatch: "Hứng hoa"
    },
    photoPair: {
      instruction: "Tìm các cặp ảnh kỷ niệm giống nhau!",
      moves: "Số bước",
      matched: "Đã tìm thấy",
      playAgain: "Chơi lại"
    },
    reward: {
      title: "Chúc mừng!",
      subtitle: "Bạn đã hoàn thành thử thách! Đây là phần thưởng của bạn:",
      tapToReveal: "✨ Nhấn để mở ✨",
      hint: "Hãy thu thập thêm 4 chữ số nữa để nhận món quà cuối cùng nhé!",
      playAgain: "🎮 Chơi lại",
      backToHome: "← Quay lại trang chủ"
    }
  },
  invite: {
    labels: {
      date: "Ngày",
      time: "Giờ",
      location: "Địa điểm"
    },
    buttons: {
      yes: "Vâng! Em đồng ý! 💕",
      no: "Không 😢",
      calendar: "📅 Thêm vào Lịch",
      sendAnswer: "💌 Gửi câu trả lời cho anh"
    },
    calendarReminder: "Nhắc nhở: Sắp đến giờ kỷ niệm rồi!",
    yesAlert: "🎉 Yay! Anh biết là em sẽ đồng ý mà... Mong chờ đến ngày đó quá!! 💕"
  }
};
