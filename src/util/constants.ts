interface Event {
  title: string;
  role?: string;
  location: string;
  description: string;
  dateFrom: number;
  dateTo?: number;
}

export const timelineEvents: Event[] = [
  {
    title: 'Massachusetts College of Liberal Arts',
    location: 'North Adams, MA',
    role: 'College',
    description: 'B.S. Physics, B.A. English, minor in mathematics',
    dateFrom: 2006,
    dateTo: 2012,
  },
  {
    title: 'Niels Bohr Library and Archives',
    location: 'College Park, MD',
    role: 'Assistant Researcher, History of Physics',
    description:
      'Wrote stories for a professional trade publication focusing on the science of photonics and quantum computing',
    dateFrom: 2012,
    dateTo: 2013,
  },
  {
    title: 'Photonics',
    location: 'Pittsfield, MA',
    role: 'Science Writer',
    description:
      'Wrote stories for a professional trade publication focusing on the science of photonics and quantum computing',
    dateFrom: 2012,
    dateTo: 2013,
  },
  {
    title: 'Barista',
    location: 'Rochester, NY',
    description:
      "Moved to an over saturated market and couldn't get a job. Started teaching myself how to code",
    dateFrom: 2014,
    dateTo: 2015,
  },
  {
    title: 'Team CMP',
    location: 'Rochester, NY',
    role: 'Tester / Developer',
    description:
      'Networked my way into my first tech job because they had a tab at my cafe. Manually tested product flows and eventually was allowed to develop them in HTML and Angular 1',
    dateFrom: 2015,
    dateTo: 2017,
  },
  {
    title: 'Regal Beloit',
    location: 'Florence, KY',
    role: 'HTML5 Developer',
    description:
      "Used vanilla JS to develop blown up layouts of industrial settings in order to sell parts. Kind of chintzy, but I'm proud of some of the solutions I came up with given the technology limitations",
    dateFrom: 2017,
    dateTo: 2018,
  },
  {
    title: 'Gaslight',
    location: 'Cincinnati, OH',
    role: 'Software Developer Apprentice',
    description:
      'My first big break. Accepted into an apprenticeship program with 2 others and placed at 84.51 working on a full-stack Angular 2+ / Java Springboot application',
    dateFrom: 2018,
    dateTo: 2019,
  },
  {
    title: '84.51\u00B0',
    location: 'Cincinnati, OH',
    role: 'Software Developer',
    description:
      'Kept on after apprenticeship ended. Became an SDET on the data engineering team. No one knew what that meant, so I learned how to do data engineering. Primarily ETL jobs using Hadoop and PySpark for billions of Kroger transactions every week. Moved back to web application development shortly before I left',
    dateFrom: 2019,
    dateTo: 2021,
  },
  {
    title: 'Thoughtworks',
    role: 'Software Developer Consultant',
    location: 'Chicago, IL (remote)',
    description:
      'Working with clients to solve their tricky problems. Using a lot of different technologies and many types of roles',
    dateFrom: 2021,
    dateTo: 2023,
  },
  {
    title: 'Georgia Institute of Technology',
    role: 'Graduate Student',
    location: 'Atlanta, GA (remote)',
    description:
      'M.S. Computer Science with a concentration in computing systems. Selected coursework: Operating Systems, Database Management Systems, Software Analysis, Software Development Processes, Information Security, Computer Networks',
    dateFrom: 2020,
  },
];
