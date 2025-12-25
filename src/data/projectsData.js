import hivo from "../assets/img/projects/Hivo.png";
import mindkeeper from "../assets/img/projects/MindKeeper.png";
import karbonis from "../assets/img/projects/Karbonis.png";
import cineview from "../assets/img/projects/CineviewKidi.png";
import warungkula from "../assets/img/projects/warungkula.png";

const projects = [
  {
    id: "warungkula",
    title: "WarungKula",
    image: warungkula,
    description:
      "WarungKula is a comprehensive business management web application designed for small to medium enterprises, featuring cashier transactions, real-time inventory tracking, and automatic barcode generation.",
    feature: `Business Management Features:
• Complete inventory management system
• Sales transaction processing with receipt generation
• Real-time sales dashboard and analytics
• Automatic barcode generation and printing
• Customer management and purchase history
• Multi-user support with role-based access
• Responsive design for desktop and mobile
• Offline capability for uninterrupted operations`,
    details: `Business Solution:
WarungKula is specifically designed for Indonesian small businesses (warungs) to digitalize their operations. The application helps business owners track inventory, manage sales, and analyze business performance through an intuitive interface that requires minimal technical knowledge.`,
    repo: "https://github.com/481n4y4/warungkula.git",
    demo: "https://warungkula-app.vercel.app/",
    techStack: [
      "Vite",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Chart.js",
      "PWA",
    ],
    date: "October 2025",
    status: "Completed",
    role: "Full Stack Developer",
    duration: "2 Weeks",
  },
  {
    id: "cineview",
    title: "Cineview",
    image: cineview,
    description:
      "Cineview is a comprehensive movie discovery web application that lets users explore movies, give ratings, and share reviews with a global community of film enthusiasts.",
    feature: `Movie Discovery Features:
• Advanced search by title, genre, and year
• Detailed movie information (poster, synopsis, rating, cast)
• Popular and trending movies showcase
• User rating and review system
• Personalized movie recommendations
• Watchlist functionality
• Multi-language support`,
    details: `Platform Details:
Cineview integrates with The Movie Database (OMDB) API to provide up-to-date movie information. The platform features a clean, intuitive interface that makes movie discovery enjoyable and engaging for all users.`,
    repo: "https://github.com/rakhaafd/cineview.git",
    demo: "https://cineview-blush.vercel.app/",
    techStack: ["OMDB API", "Tailwind CSS", "JavaScript"],
    date: "September 2025",
    status: "Completed",
    role: "Frontend Developer",
    duration: "2 Weeks",
  },
  {
    id: "karbonis",
    title: "Karbonis",
    image: karbonis,
    description: `
Karbonis is a comprehensive web application to calculate estimated greenhouse gas emissions from daily activities such as transportation, household energy, and food consumption. The app helps users understand and reduce their carbon footprint.
    `,
    feature: `Calculation Features:
• Transportation emissions (car, motorcycle, train, bus)
• Household energy consumption (electricity, gas)
• Food consumption carbon footprint
• Monthly emissions summary in kg CO₂e
• Environmental impact comparisons
• Carbon reduction tips and suggestions`,
    details: `Environmental Impact:
Karbonis uses scientifically validated emission factors to provide accurate calculations. The application aims to raise awareness about personal carbon footprints and empower users to make more environmentally conscious decisions in their daily lives.`,
    repo: "https://github.com/481n4y4/karbonis",
    demo: "https://karbonis.netlify.app/",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    date: "July 2025",
    status: "Completed",
    role: "Frontend Developer",
    duration: "2 Weeks",
  },
  {
    id: "mindkeeper",
    title: "MindKeeper",
    image: mindkeeper,
    description: `
MindKeeper is an IoT-based solution to monitor digital distractions and improve productivity. The system tracks computer usage patterns and provides insights to help users maintain focus and manage their time more effectively.
    `,
    feature: `Key Features:
• Real-time activity monitoring and tracking
• Smart distraction detection algorithms
• Automated reminder system for breaks
• Productivity analytics and reports
• Customizable focus sessions
• Cross-platform compatibility`,
    details: `Technical Implementation:
MindKeeper combines hardware sensors with web-based analytics. The system uses ESP32 microcontrollers for data collection and a React-based dashboard for visualization. The application helps users understand their digital habits and make informed decisions to improve productivity.`,
    repo: "https://github.com/481n4y4/MindKeeper.git",
    demo: "https://mindkeeper.streamlit.app/",
    techStack: ["Streamlit", "ESP32", "Python", "MongoDB", "IoT"],
    date: "April 2025",
    status: "Completed",
    role: "Full Stack Developer",
    duration: "2 months",
  },

  {
    id: "hivo",
    title: "Hidden Voice",
    image: hivo,
    description: `
Hidden Voice (HiVo) is an innovative AI-based web application designed to support communication for people with speech impairments. This application utilizes computer vision and machine learning to translate hand gestures into text and speech, providing an accessible communication solution.
    `,
    feature: `Main Features:
• Real-time hand gesture recognition using camera
• Object detection technology for accurate gesture interpretation
• Text-to-speech conversion for audible communication
• Support for multiple common hand gestures
• User-friendly interface designed for accessibility
• No special hardware required - works with standard webcam`,
    details: `Project Details:
Hidden Voice was developed to address communication challenges faced by individuals with speech impairments. The application uses TensorFlow.js for machine learning models and integrates with Web Speech API for text-to-speech functionality. This project demonstrates the potential of web technologies in creating assistive tools that are accessible to everyone.`,
    repo: "https://github.com/xyleneSVG/HiVo.git",
    demo: "https://hidden-voice.vercel.app/",
    techStack: [
      "React",
      "TensorFlow.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Speech API",
    ],
    date: "March 2025",
    status: "Uncompleted",
    role: "Project Manager",
    duration: "3 months",
  },
  
];

export default projects;
