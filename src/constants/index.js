const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
];

const counterItems = [
  { value: 200, suffix: '+ hrs', label: 'Training Hours Completed' },
  { value: 50, suffix: '+', label: 'Personal Projects' },
  { value: 10, suffix: '+', label: 'Technologies Used / Skills' },
  { value: 90, suffix: '%', label: 'Test Coverage/Quality' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
  },
  {
    imgPath: '/images/logos/company-logo-8.png',
  },
  {
    imgPath: '/images/logos/company-logo-9.png',
  },
  {
    imgPath: '/images/logos/company-logo-10.png',
  },
  {
    imgPath: '/images/logos/company-logo-11.png',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackImgs = [
  {
    name: 'React.js',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'TailwindCSS',
    imgPath: '/images/logos/TailwindCSS.png',
  },
  {
    name: 'Next.js',
    imgPath: '/images/logos/next-js.svg',
  },
  {
    name: 'Figma',
    imgPath: '/images/logos/Figma.png',
  },
  {
    name: 'Git / Github',
    imgPath: '/images/logos/git.svg',
  },
];

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      'Ayush brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.',
    imgPath: '/images/exp1.png',
    logoPath: '/images/logo1.png',
    company: 'Connect2Roots Academy',
    title: 'Frontend Web Developer',
    date: 'August 2025 - Present',
    responsibilities: [
      'Spearheaded the complete, end-to-end development of the institutional website from scratch to deliver a user-centered and highly scannable online platform.',
      'Engineered and integrated a secure Firebase backend for authentication and user data management that reduced the reported login errors by 95% while guaranteeing high-availability services.',
      'Delivered a modern, highly performant user experience using a cutting-edge stack including ReactJS, Tailwind CSS, and implementing engaging animations with GSAP for a polished interface.',
      'Have a Look: https://connect2-roots-academy.vercel.app/',
    ],
  },
  // {
  //   review:
  //     "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
  //   imgPath: '/images/exp2.png',
  //   logoPath: '/images/logo2.png',
  //   title: 'Full Stack Developer',
  //   date: 'June 2020 - December 2023',
  //   responsibilities: [
  //     "Led the development of Docker's web applications, focusing on scalability.",
  //     'Worked with backend engineers to integrate APIs seamlessly with the frontend.',
  //     'Contributed to open-source projects that were used with the Docker ecosystem.',
  //   ],
  // },
  // {
  //   review:
  //     'Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.',
  //   imgPath: '/images/exp3.png',
  //   logoPath: '/images/logo3.png',
  //   title: 'React Native Developer',
  //   date: 'March 2019 - May 2020',
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     'Improved app performance and user experience through code optimization and testing.',
  //     'Coordinated with the product team to implement features based on feedback.',
  //   ],
  // },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const testimonials = [
  {
    name: 'Lorem Ipsum 1',
    mentions: '@Lorem Ipsum',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat odit aliquid perspiciatis magni deleniti quas deserunt architecto repellat! Laboriosam debitis quas perferendis modi! Commodi ducimus pariatur consequuntur accusamus',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Lorem Ipsum 3',
    mentions: '@Lorem Ipsum',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat odit aliquid perspiciatis magni deleniti quas deserunt architecto repellat! Laboriosam debitis quas perferendis modi! Commodi ducimus pariatur consequuntur accusamus',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Lorem Ipsum 2',
    mentions: '@Lorem Ipsum',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat odit aliquid perspiciatis magni deleniti quas deserunt architecto repellat! Laboriosam debitis quas perferendis modi! Commodi ducimus pariatur consequuntur accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgPath: '/images/client2.jpg',
  },
  {
    name: 'Lorem Ipsum 5',
    mentions: '@Lorem Ipsum',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat odit aliquid perspiciatis magni deleniti quas deserunt architecto repellat! Laboriosam debitis quas perferendis modi! Commodi ducimus pariatur consequuntur accusamus',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Lorem Ipsum 4',
    mentions: '@Lorem Ipsum',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat odit aliquid perspiciatis magni deleniti quas deserunt architecto repellat! Laboriosam debitis quas perferendis modi! Commodi ducimus pariatur consequuntur accusamus',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Lorem Ipsum 6',
    mentions: '@Lorem Ipsum',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus placeat odit aliquid perspiciatis magni deleniti quas deserunt architecto repellat! Laboriosam debitis quas perferendis modi! Commodi ducimus pariatur consequuntur accusamus/',
    imgPath: '/images/client6.png',
  },
];

const socialImgs = [
  {
    name: 'insta',
    url: 'https://www.instagram.com/chauhan_0506/',
    imgPath: '/images/instagram.svg',
  },
  {
    name: 'fb',
    url: 'https://github.com/ayusshhhraj0506',
    imgPath: '/images/github.svg',
  },
  {
    name: 'x',
    url: 'https://x.com/Chauhan_0506',
    imgPath: '/images/x.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/ayushrajfrontenddev/',
    imgPath: '/images/linkedin.svg',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
