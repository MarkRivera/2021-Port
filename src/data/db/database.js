import Mock from "../mock";

// Mark Images
import AboutMark from "../images/Mark-Five.jpg";
import MarkResume from "../files/Software Engineer Summary.pdf";
import MarkHeader from "../images/Mark-Three.jpg";

// Project Images
// -- Protected
import ProtectedHome from "../projects/protected/home.png";
import ProtectedLogin from "../projects/protected/login.png";
import ProtectedMap from "../projects/protected/map.png";
import ProtectedDetails from "../projects/protected/details.png";
import ProtectedInteraction from "../projects/protected/interaction.png";
import ProtectedQuestion from "../projects/protected/question.png";
import ProtectedReview from "../projects/protected/review.png";

// -- RemindMe
import RemindMeHome from "../projects/remindme/home.png";
import RemindMeRegister from "../projects/remindme/register.png";
import RemindMeRemove from "../projects/remindme/remove.png";

// -- BlueWitness
import BlueWitnessHome from "../projects/bluewitness/map.png";
import BlueWitnessGraph from "../projects/bluewitness/graphs.png";
import BlueWitnessLine from "../projects/bluewitness/linegraph.png";
import BlueWitnessPie from "../projects/bluewitness/piechart.png";
import BlueWitnessReports from "../projects/bluewitness/reports.png";
import BlueWitnessResults from "../projects/bluewitness/results.png";
import BlueWitnessStats from "../projects/bluewitness/stats.png";

// -- DevConnector
import DevConnecterHome from "../projects/devconnector/home.png";
import DevConnectorDev from "../projects/devconnector/dev.png";
import DevConnectorLogin from "../projects/devconnector/login.png";
import DevConnectorProfile from "../projects/devconnector/profile.png";
import DevConnectorRegister from "../projects/devconnector/register.png";

// -- WatchThis
import WatchThisHome from "../projects/watchthis/home.png";
import WatchThisLogin from "../projects/watchthis/login.png";
import WatchThisRegister from "../projects/watchthis/register.png";

const database = {
  information: {
    name: "Mark Rivera",
    aboutContent:
      "Software Engineer motivated to develop tech that benefits everyone. I've worked with companies like Roll20, SevenStar and HRF to develop a multitude of projects. From virtual table top characters sheets that over 8 million players use to applications that help protect both officers and citizens during their daily interactions",
    age: null,
    phone: "",
    nationality: "",
    language: "English, Spanish",
    email: "",
    address: "Las Vegas, NV",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://linkedin.com/in/mrivera1991",
      dribbble: "",
      github: "https://github.com/MarkRivera",
    },
    brandImage: MarkHeader,
    aboutImage: AboutMark,
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: MarkResume,
  },
  services: [
    {
      title: "Front-End Development",
      icon: "code",
      details:
        "As a detail-oriented developer I constantly search for improvements to existing solutions while looking to implement the latest in cutting edge technologies. TDD drives my development to engineer redundant and sturdy applications.",
    },
    {
      title: "Back-End Development",
      icon: "database",
      details:
        "A solid infrastructure is a solid foundation to your success. I am passionate about scalability and performance, and will develop with your success in mind.",
    },
    {
      title: "Responsive Design",
      icon: "mobile",
      details:
        "A majority of people will access the internet using a phone or mobile device. Its important for any company or service to be ready for every user. I maintain a mobile first development cycle so that your application looks good on any device.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Working with Mark has been nothing but a great experience, professional, prompt and communicative. 10/10",
      author: {
        name: "Mike Merchant",
        designation: "Actor - Client",
        linkedin: "",
      },
    },
    {
      id: 2,
      content:
        "Mark is always willing to jump in on projects and help out where needed. He is an excellent person to work with and a great team player.",
      author: {
        name: "Michael Rockinham",
        designation: "SvnStar - Co-worker",
        linkedin: "https://www.linkedin.com/in/michaelkrockingham/",
      },
    },
    {
      id: 3,
      content:
        "Mark Rivera is incredibly professional and diligent. During COVID, I decided to open up my own business and wanted a website built from scratch. He sat with me and took time to make sure I understood every step, which I really appreciated as I've had not so great experiences with other developers that rushed me and left me in the dust. I fully recommend to anyone to hire him for your own projects!",
      author: {
        name: "Anauris Soto",
        designation: "Dog Walker - Client",
        linkedin: "",
      },
    },
  ],
  skills: [
    {
      title: "Front End",
      data: [
        {
          title: "HTML5",
          icon: "html5",
        },
        {
          title: "CSS3",
          icon: "css3",
        },
        {
          title: "JavaScript",
          icon: "javascript",
        },
        {
          title: "ReactJS",
          icon: "react",
        },
        {
          title: "TypeScript",
          icon: "code",
        },
      ],
    },

    {
      title: "Back End",
      data: [
        {
          title: "NodeJS",
          icon: "nodejs",
        },
        {
          title: "Express",
          icon: "archive",
        },
        {
          title: "Python",
          icon: "python",
        },
        {
          title: "Django",
          icon: "invention",
        },
        {
          title: "Mongo",
          icon: "files",
        },
        {
          title: "PostgreSQL",
          icon: "database",
        },
      ],
    },

    {
      title: "Testing",
      data: [
        {
          title: "Cypress",
          icon: "laptop-phone",
        },

        {
          title: "RTL",
          icon: "rocket",
        },
      ],
    },

    {
      title: "Operations",
      data: [
        {
          title: "Github",
          icon: "github",
        },

        {
          title: "Wireframing",
          icon: "frame-expand",
        },
      ],
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Protected",
      subtitle:
        "An app designed to protect both officers and citizens during their daily interactions",
      imageUrl: ProtectedHome,
      largeImageUrl: [
        ProtectedLogin,
        ProtectedMap,
        ProtectedDetails,
        ProtectedInteraction,
        ProtectedQuestion,
        ProtectedReview,
      ],
      url: "https://staging.protected-app.com/",
      git: "https://github.com/SevenStar-Development",
    },
    {
      id: 2,
      title: "RemindMe",
      subtitle:
        "An app built on top of python and Django, this will send you a reminder via text message when your license is about to expire",
      imageUrl: RemindMeHome,
      largeImageUrl: [RemindMeRegister, RemindMeRemove],
      url: "https://remindmedjango.herokuapp.com/#/",
      git: "https://github.com/MarkRivera/remindme",
    },
    {
      id: 3,
      title: "Blue Witness",
      subtitle: "Tracks police use of force across the United States",
      imageUrl: BlueWitnessHome,
      largeImageUrl: [
        BlueWitnessGraph,
        BlueWitnessLine,
        BlueWitnessPie,
        BlueWitnessReports,
        BlueWitnessResults,
        BlueWitnessStats,
      ],
      url: "https://a.humanrightsfirst.dev/",
      git: "https://github.com/Lambda-School-Labs/human-rights-first-police-fe-a",
    },
    {
      id: 4,
      title: "DevConnector",
      subtitle: "A social media site for developers",
      imageUrl: DevConnecterHome,
      largeImageUrl: [
        DevConnectorDev,
        DevConnectorLogin,
        DevConnectorProfile,
        DevConnectorRegister,
      ],
      url: "https://safe-brushlands-22158.herokuapp.com/",
      git: "https://github.com/MarkRivera/NetBuilders",
    },

    {
      id: 5,
      title: "Watch This",
      subtitle:
        "An app that allows you to choose 3 generes and get back 3 movies recommended to watch in those genres",
      imageUrl: WatchThisHome,
      largeImageUrl: [WatchThisLogin, WatchThisRegister],
      url: "https://peaceful-scrubland-82341.herokuapp.com/",
      git: "https://github.com/MarkRivera/WatchThis",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Jan 2021 - Present",
        position: "Full Stack Web Developer",
        company: "Seven Star",
        details: [
          `Collaborated with a small team to construct an API, client side app and informational landing page, securing multiple rounds of funding from investors.`,
          `Wore multiple hats to supplement company needs and health during development, resulting in a solid beta application that was presented to the City of Chicago and Port Authority.`,
          `Authored an average about 12 unit and intergration tests per component to ensure app durability and redundancy. Resulting in a fully functional app even after heavy refactoring.`,
        ],
      },
      {
        id: 2,
        year: "Mar 2021 - Jul 2021",
        position: "Sheet Developer",
        company: "Roll20",
        details: [
          `Developed and updated over 20+ virtual table top gaming sheets, which are used by over 8,000,000 users`,
          `Resolved 8 to 10 user generated tickets daily, which resulted in consistently updated sheets and improved user satisfaction`,
          `Designed wireframes for multiple sheets, improving team coordination and development time on long or complex projects`,
        ],
      },
      {
        id: 3,
        year: "Aug 2021 - Present",
        position: "Full Stack Web Developer",
        company: "Human Rights First",
        details:
          "A new development, current researching and discussing how to solve the needs of food insecure communities without introducing harmful biases into potential algorithms",
      },
    ],

    projects: [
      {
        id: 1,
        year: "2021",
        name: "Protected",
        github: "Protected",
        live: "https://staging.protected-app.com/",
        company: "",
        details: [
          `Reduced known bugs by 47% by engineering robust unit and integration tests. Which also improved app stability from version to version`,
          `Engineered custom user authentication flow with input sanitization to protect sensitive user information`,
        ],
      },
      {
        id: 2,
        year: "2021",
        name: "RemindMe",
        github: "https://github.com/MarkRivera/remindme",
        live: "https://remindmedjango.herokuapp.com",
        company: "",
        details: [
          `Implemented a background process with scheduler. Allowing the app to send text messages to users at a scheduled time of day`,
          `Incorporated Redux state management to handle state changes within the application`,
        ],
      },
      {
        id: 3,
        year: "2021",
        name: "Police Use of Force Tracker",
        github: "https://github.com/MarkRivera/human-rights-first-fe-a",
        live: "https://a.humanrightsfirst.dev",
        company: "",
        details: [
          `Reduced unnecessary re-renders by implementing proper hook dependencies, which led to a 96% increase in application performance`,
          `Re-engineered three auto-updating graphs that displayed yearly trends with the goal of improving readability and visualization of the data to users`,
        ],
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "Jan 2020 - Jan 2021",
        graduation: "Full Stack Web Development, Computer Science",
        university: "Lambda School",
        details: "",
      },
      {
        id: 2,
        year: "Jan 2019 - Sep 2022",
        graduation: "A.S. Engineering Science, Computer Engineering",
        university: "CUNY Bronx CC",
        details: "",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["+1-646-684-9212"],
    emailAddress: ["mrivera1991@gmail.com", "mrivera@svnstar.com"],
    address: "Remote (Las Vegas, NV)",
  },
};

Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
