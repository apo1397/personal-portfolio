import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Apoorv's Portfolio", // e.g: 'Name | Developer'
  lang: 'en,fr', // e.g: en, es, fr, jp
  description: 'Welcome to my page', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome to the world of',
  name: 'Apoorv Abhishek',
  subtitle: 'This is the Hero Data subtitle',
  cta: 'Lets Go !',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Product Enthusiast with a strong technical foundation and 2 years experience in fast-paced B2B SaaS and B2C e-commerce organisations.',
  paragraphTwo: 'Have witnessed and been part of unicorns and early phase startups. Currently working in the latter where I worked on the product launch from a PoC to an MVP for Series A funding.',
  paragraphThree: 'Passionate about:\n'
      + '- Sustainable & Scalable Product Designs\n'
      + '- Intuitive User- Experience\n'
      + '- Modular & Extensible Tech Architecture',
  resume: 'https://docs.google.com/document/d/1NGnT_fwBsy9CNNwPozWeYF4v_-OTr0ST/edit?usp=sharing&ouid=103884992942385089784&rtpof=true&sd=true', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'meesho.jpeg',
    title: 'Meesho',
    info: 'A Social Commerce Startup which entered the Unicorn club in 2021 with an evaluation of $2.7 Billion as of June 2021',
    info2: 'Joined the Meesho Rocketship in October 2021 as an Associate Product Manager working on a new venture called Farmiso.',
    url: 'https://www.meesho.com',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cognizer_logo.png',
    title: 'Cognizer AI',
    info: 'A B2B SaaS company specializing in deep-learning powered Natural Language Intelligence, Information Retrieval and Conversational AI',
    info2: 'Joined the company at a very early stage in February 2020 as a Software Engineer and quickly climbed the ladder to a Product Analyst and then the Associate Product Manager.',
    url: 'https://cognizer.ai',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cf_logo.png',
    title: 'Quikr / CommonFloor',
    info: 'One of India\'s largest Realestate Portals which was one of Quikr\'s most profitable verticals.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'apoorvsinha1397@gmail.com',
  phone: '+918297019465'
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/apoorv-abhishek-a9a083144/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ApoorvSinha97',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/apo1397',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
