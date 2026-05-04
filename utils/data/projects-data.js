import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Campus-Buzz",
    description:
      "Developed a feature-rich Full-Stack social media platform using Next.js, TypeScript, and a modern tech stack. Designed and implemented core features such as post creation, commenting, and image/video uploads. Designed a scalable and efficient monorepo-based application: Implemented a Prisma-based backend with a Neontech PostgreSQL database for handling CRUD operations related to posts, feeds, and communities. Prioritized core functionality while adhering to best practices for securing API routes, handled authentication/authorization using nextAuth (Gmail sign-in), and optimized database queries for performance.",
    tools: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neontech PostgreSQL",
      "nextAuth",
      "Tailwind CSS",
    ],
    role: "Full Stack Developer",
    githubLink: "https://github.com/maheshsp1809/campus-buzz",
    deployLink: "https://campus-buzzz.vercel.app",
    image: crefin,
  },
  {
    id: 2,
    name: "ZoshFood",
    description:
      "Built a full-stack online food delivery platform with role-based access control and JWT authentication. Integrated Stripe for seamless payment processing. Implemented dynamic features including food ordering, cart management, and real-time order tracking. Provided restaurant owners with admin controls for menu items, events, and an admin panel.",
    tools: [
      "Spring Boot",
      "React.js",
      "Redux Toolkit",
      "JWT",
      "Stripe",
      "MySQL",
    ],
    role: "Full Stack Developer",
    githubLink: "https://github.com/maheshsp1809/",
    deployLink: "https://github.com/maheshsp1809/",
    image: ayla,
  },
  {
    id: 3,
    name: "NetflixGpt-4",
    description:
      "Developed a user-friendly movie exploration platform using React.js, Tailwind CSS, Redux Toolkit, Firebase Authentication, TMDB API, OpenAI API, and memoization techniques. Leveraged the power of OpenAI's GPT-3.5 API to integrate natural language movie search capabilities into the TMDB API, enhancing user experience by enabling intuitive and conversational movie searches.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Firebase Authentication",
      "TMDB API",
      "OpenAI API",
    ],
    role: "Frontend Developer",
    githubLink: "https://github.com/maheshsp1809/netflixgpt-4/",
    deployLink: "https://netflix-gpt-4-maheshsps-projects.vercel.app/",
    image: travel,
  },
  {
    id: 4,
    name: "Urban Sound Classification",
    description:
      "Developed a model using Artificial Neural Networks (ANN) and used Mel-Frequency Cepstral Coefficients (MFCC) feature extraction technique, achieving an accuracy of 87% on the Urban Sound 8k dataset. Evaluated the model's performance using multiple metrics, including 10-fold cross-validation classification accuracy, precision, recall, F1-score, and confusion matrix. This work led to a research paper published by IEEE.",
    tools: ["Python", "TensorFlow", "MFCC", "ANN", "Cross-Validation", "IEEE"],
    role: "Researcher",
    githubLink: "https://github.com/maheshsp1809/",
    deployLink: "https://ieeexplore.ieee.org/document/10060146",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     githubLink: '',
//     deployLink: '',
//     image: crefin,
// },
