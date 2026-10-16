const wordpressTechnologies = ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'];

const projects = [
  {
    id: 'chiogong-blog',
    name: 'Chiogong Blog',
    category: 'Full-Stack Web App',
    description:
      'A personal blog and publishing platform. It features clean article layouts, fast page loads, and simple reading.',
    role: 'Full-stack development',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Netlify'],
    githubUrl: 'https://github.com/tbanguot/chiogong-blog',
    image: '/projects/chiogong-blog.png',
    imageAlt: 'Chiogong Blog homepage showing article layout and publication header',
    websiteUrl: 'https://nyanchiew-malual.netlify.app/',
    domain: 'nyanchiew-malual.netlify.app',
  },
  {
    id: 'tenzies-pro',
    name: 'Tenzies Pro',
    category: 'Interactive React App',
    description:
      'A fast-paced interactive dice game. Players roll dice to hold matching numbers until all ten match.',
    role: 'Frontend software engineering',
    technologies: ['React', 'JavaScript', 'CSS', 'State Management'],
    githubUrl: 'https://github.com/tbanguot/tenzies-pro',
    image: '/projects/tenzies-pro.png',
    imageAlt: 'Tenzies Pro game screen showing dice grid and roll counter',
    websiteUrl: 'https://tenziez-pro.netlify.app/',
    domain: 'tenziez-pro.netlify.app',
  },
  {
    id: 'nile-gazette',
    name: 'Nile Gazette',
    category: 'Live News Platform',
    description:
      'A live daily news publication. It covers South Sudan, African affairs, and world news.',
    role: 'Web developer · Wanii team',
    technologies: wordpressTechnologies,
    image: '/projects/nile-gazette.webp',
    imageAlt: 'Nile Gazette homepage showing news coverage and article layout',
    websiteUrl: 'https://nilegazette.com/',
    domain: 'nilegazette.com',
  },
  {
    id: 'tony-talks-football',
    name: 'Tony Talks Football',
    category: 'Live Sports Platform',
    description:
      'A published football media platform. It delivers match analysis, commentary, and football news.',
    role: 'Web developer · Wanii team',
    technologies: wordpressTechnologies,
    image: '/projects/tony-talks-football.webp',
    imageAlt: 'Tony Talks Football homepage showing football content and article layout',
    websiteUrl: 'https://tonytalksfootball.com/',
    domain: 'tonytalksfootball.com',
  },
];

export default projects;
