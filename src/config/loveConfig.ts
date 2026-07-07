// ============================================================================
// Love Configuration - Personalize this file for your Anniversary! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
  title: string;
  date: string;
  description: string;
  image?: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  // Replace with your actual names
  yourName: "Gavin",
  partnerName: "My Love",
  
  // === RELATIONSHIP START DATE ===
  // Set this to when your relationship began
  // Format: "YYYY-MM-DDTHH:MM:SS+07:00"
  relationshipStart: "2024-07-07T00:00:00+07:00",
  
  // === ANNIVERSARY DATE ===
  anniversaryDate: "2026-07-05",
  
  // === HEADLINE AND INTRO ===
  heroHeadline: "Chúc mừng kỷ niệm hai năm bên nhau!",
  heroSubtext: "Một hành trình đong đầy kỉ niệm vui, buồn, giận hờn, yêu thương. Cảm ơn bé yêu đã đến và ở bên anh, cảm ơn em vì tất cả!",
  
  // === FINAL GIFT VIDEO ===
  // Bạn có thể để link YouTube (VD: https://youtu.be/...) hoặc Google Drive ở đây.
  // Nếu để trống, hệ thống sẽ tự động dùng file ở public/videos/final.mp4
  finalVideoUrl: "https://www.youtube.com/watch?v=wcYlvUjiEmE",

  // === PHOTO GALLERY ===
  // How many photos are in /public/photos/ ?
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 8,
  
  // === TIMELINE MILESTONES ===
  // Add your relationship milestones here
  milestones: [
    {
      title: "Mọi thứ đã bắt đầu như thế",
      date: "07/07/2024",
      description: "Mội chút mạnh dạn từ anh, một chút mong đợi từ em, và cứ thế... mình đã thành đôi",
      image: "mst_1.jpg"
    },
    {
      title: "Lần đầu đi workshop cùng nhau",
      date: "28/09/2024",
      description: "Đây là lần đầu tiên hai đứa đi workshop làm ốp điện thoại cùng nhau. Bức ảnh ấy đã nằm trong ví anh suốt gần hai năm",
      image: "mst_2.jpg"
    },
    {
      title: "Sinh nhật đầu tiên của Cua có Cún",
      date: "02/10/2024",
      description: "Đây là sinh nhật đầu tiên của Cua mà có anh bên cạnh, hôm đó thật là vui. Anh còn nhớ mình đã trốn về trọ để lén lút làm cuốn PhotoBook màu hường tặng em.",
      image: "mst_3.jpg"
    },
    {
      title: "Kỷ niệm 100 ngày bên nhau",
      date: "13/10/2024",
      description: "Đây là cột mốc đầu tiên của hai đứa. Hôm đó mình đã đi Hồ Tây rất vui, chụp được ảnh đẹp và đi ăn ngon. Anh nhớ mãi chiếc bánh kem Cua Cún chấn động của em",
      image: "mst_4.jpg"
    },
    {
      title: "Đón Noel sớm cùng nhau",
      date: "13/12/2024",
      description: "Đây là noel đầu tiên hai đứa bên nhau. Dưới ánh đèn lung linh của của những cửa hàng trên con phố Hàng Mã, anh chợt thấy người yêu anh sao mà xinh đến vậy. Yêu em lắm. À anh cũng không quên ông già Noel ke đầu em tặng anh đâu",
      image: "mst_5.jpg"
    },
    {
      title: "Lần đầu ngắm phao hoa cùng nhau",
      date: "01/01/2025",
      description: "Anh sẽ mãi chẳng bao giờ quên khung cảnh ấy, bên trên là pháo hoa mừng năm mới, bên cạnh là người anh yêu thương. Có lẽ, đó là bức ảnh pháo hoa mà anh sẽ nhớ mãi.",
      image: "mst_6.jpg"
    },
    {
      title: "Valentine đầu tiên",
      date: "14/02/2025",
      description: "Valentine đầu tiên của chúng mình. Ngày ấy em đã tặng anh chiếc áo mà anh thích nhất, giữ kỹ nhất",
      image: "mst_7.jpg"
    },
    {
      title: "Kỷ niệm 1 năm yêu nhau",
      date: "07/07/2025",
      description: "Và cũng là lần đầu tiên hai đứa đi Hải Phòng cùng nhau. Hồi này dỗi nhau suốt ngày, sơ hở là giận dỗi. Nhưng đi chơi cũng rất vui",
      image: "mst_8.jpg"
    },
    {
      title: "Lần đầu đi Huế cùng nhau",
      date: "31/08/2025",
      description: "Lần đầu tiên hai đứa vào Huế chơi. Đi chơi vui, đồ ăn ngon và đặc biệt là chụp được bộ ảnh trông như ảnh cưới",
      image: "mst_9.jpg"
    },
    {
      title: "Lễ tốt nghiệp của hai đứa",
      date: "10/09/2025",
      description: "Một cột mốc thật đáng nhớ. Và cũng là lần đầu ra mắt bố mẹ hai bên. Trộm vía mọi thứ ngon lành",
      image: "mst_10.jpg"
    },
    {
      title: "Lần đầu đi quẩy Concert cùng nhau",
      date: "09/11/2025",
      description: "Vui dã man, dù anh cũng không phải fan Kpop. Năm nay lại thế nhé hehe",
      image: "mst_11.jpg"
    },
    {
      title: "Chuyến đi Cát Bà siêu đáng nhớ",
      date: "2/5",
      description: "Chuyến đi này thật vui, thời tiết thuận lợi, có nhiều ảnh đẹp. Anh sẽ chẳng bao giờ quên bóng hình người anh yêu thướt tha đứng trên du thuyền",
      image: "mst_12.jpg"
    },
    {
      title: "Sinh nhật đáng nhớ nhất của anh",
      date: "08/06/2026",
      description: "Với anh, đây là sinh nhật vui nhất. Cảm ơn em vì tất cả, bé yêu!",
      image: "mst_13.jpg"
    }
  ],
  
  // === EMAIL CONFIGURATION ===
  // For the "Send me your answer" button
  yourEmail: "your.email@example.com", // Replace with your actual email
  emailSubject: "Our Anniversary Celebration 🥂",
  emailBody: "Yes! I'd love to celebrate our anniversary with you! 💕\n\nLove always,\n",
  
  // === INVITE DETAILS ===
  inviteTitle: "Will you celebrate our 2nd Anniversary with me?",
  // The date, time, and location will now be loaded from src/config/invite.json
  // Keeping these for fallback purposes
  inviteDate: "July 05, 2026",
  inviteTime: "8:00 PM",
  inviteLocation: "Let's Sushi Restaurant - No.2 Hàm Nghi, Mỹ Đình, Từ Liêm, HN",
};

export default loveConfig;
