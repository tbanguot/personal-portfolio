const technologies = ['React', 'JavaScript', 'Tailwind CSS', 'Vite'];
const wordpressTechnologies = ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'];

const projects = [
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio built to showcase my work and experience.',
    technologies,
    preview: 'portfolio',
    githubUrl: 'https://github.com/tbanguot/Personal-Portfolio',
  },
  {
    name: 'Web Apps',
    description: 'Responsive user interfaces and polished front-end experiences.',
    technologies,
    preview: 'apps',
  },
  {
    name: 'Nile Gazette',
    description: 'A live news platform covering South Sudan, Africa, and the world, built in collaboration with the Wanii team.',
    technologies: wordpressTechnologies,
    preview: 'website',
    websiteUrl: 'https://nilegazette.com/',
  },
  {
    name: 'Tony Talks Football',
    description: 'A live football platform developed and deployed in collaboration with the Wanii team.',
    technologies: wordpressTechnologies,
    preview: 'website',
    websiteUrl: 'https://tonytalksfootball.com/',
  },
  {
    name: 'Used Cars',
    description: 'A website project focused on used cars.',
    technologies,
    preview: 'cars',
  },
  {
    name: 'Space Organization',
    description: 'A project focused on space organization.',
    technologies,
    preview: 'space',
  },
];

export default projects;
