import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { WebOutlined } from "@material-ui/icons";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import StorageIcon from "@material-ui/icons/Storage";
const data = {
  name: "Fedi Joubali",
  title: "Front-end web developer ",
  birthday: "19 march 1989",
  email: "fedijou@gmail.com",
  phone: "+216 20 016 951",
  adress: "Tunisia, Mourouj 5 , 2074 ",

  social: {
    linkedin: {
      link: "https://www.linkedin.com/in/fedi-joubali/",
      text: "https://www.linkedin.com/in/fedi-joubali/",
      icon: <LinkedInIcon />,
    },
    github: {
      link: "https://github.com/Fedi-jou",
      text: "https://github.com/Fedi-jou",
      icon: <GitHubIcon />,
    },
  },
  about:
    "I'm a polyvalent individual with adaptable skills coming from IT Management and E-Marketing fields. For now im focusing mostly on Front-end web development but i'm always willing to try my hand at anything new. It will be nice to hear from you if you are interested in Freelance projects or if you got any remarks . ",

  experiences: [
    {
      title: "Front-end Freelancer - Day1studio",
      date: "2021",
      description: "description1",
    },
    {
      title: "Front-end Certificate (Reactjs) - GoMyCode",
      date: "2020-2021",
      description: "description2",
    },
    {
      title:
        "Front-end developer - Freelancer with International Computer Partner (ICP) ",
      date: "2018-2020",
      description: "description3",
    },
    {
      title: "IT Assistant - IT Department Aziza Stores ",
      date: "2016-2018",
      description: "description3",
    },
    {
      title: "Cyber office agent and computer maintenance - InfoPlus",
      date: "2015",
      description: "description3",
    },
    {
      title:
        "Trainee affected to managment control department - AMI Insurance 2016",
      date: "2015",
      description: "description3",
    },
    {
      title:
        "Implementation of SEO strategies and community managment - SSM Mechanical Services Company ",
      date: "2014",
      description: "description3",
    },
    {
      title:
        "Internship Managment and development of E-banking services - BIAT",
      date: "2011",
      description: "description3",
    },
    {
      title: "Mail Managment - Tunisia Post ",
      date: "2009",
      description: "description3",
    },
  ],
  education: [
    {
      title: "Master degree in E-Marketing",
      date: "2014",
      description: "College of economies and commercial sciences, ESSEC Tunis",
    },
    {
      title: "Bachelor degree in IT managment",
      date: "2011",
      description: "College of economies and commercial sciences, ESSEC Tunis",
    },
    {
      title: "Baccalaureate degree in computer sciences",
      date: "2008",
      description: "Ahmed Amine Mourouj 4 high school",
    },
  ],

  services: [
    {
      title: "web dev 1",
      description: "bla bla 1",
      icon: <WebOutlined />,
    },
    {
      title: "web dev 2",
      description: "bla bla 2",
      icon: <AssignmentIndIcon />,
    },
    {
      title: "web dev 2",
      description: "bla bla 3",
      icon: <StorageIcon />,
    },
  ],
  skills: [
    {
      title: "Front-end",
      description: [
        "Javascript - ES6+",
        "HTML",
        "CSS - SCSS",
        "BootStrap / Material-UI",
        "ReactJs",
      ],
    },
    {
      title: "Version Control",
      description: ["GIT", "GitHub", "GitLab"],
    },
    {
      title: "Back-end",
      description: ["Nodejs", "PHP", "SQL"],
    },
  ],

  projects: [
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1630881337/SC6_qsxeiw.png",
      title: " Day1Studio website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://day-1-studio.netlify.app",
      links: [
        {
          link: "https://github.com/Fedi-jou/Day1studio-ref",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1633645856/SC13_bixcdi.png",
      title: "Modern Portfolio Example",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://react-smooth-portfolio.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/modern-react-portfolio",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1637848095/SC16_bib5da.png",
      title: "memory-game",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://memory-flip-game.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/memory-game",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1643214135/SC18_ulhfdn.png",
      title: "Starred github list repos",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://starred-repos-list.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/starred_repos_list",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1631125836/SC8_lj82ol.png",
      title: " E-commerce website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://online-commerce.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/e-commerce",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1638230463/SC17_auiveu.png",
      title: "Budget Calculator (hooks)",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://budget-calcul.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/budget-calculator",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1637712040/SC15_ltae1z.png",
      title: "Crypto currency tracker API",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://currency-finance.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/currency-tracker",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1637677264/SC14_zd68h0.png",
      title: "Private chat room",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://chat-room-prv.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/chat-room",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1630881334/SC4_s6cnvv.png",
      title: " Vaccination map website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://vaccination-map1.netlify.app",
      links: [
        {
          link: "https://github.com/Fedi-jou/vaccination_map",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1630881333/SC2_hnyskp.png",
      title: " Corona status website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://coronagraph.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/Corona-Tracker",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1630881338/SC5_heifne.png",
      title: "Weather App",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://meteo-pwa1.netlify.app",
      links: [
        {
          link: "https://github.com/Fedi-jou/weatherApp",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1630881334/SC3_u2mmwh.png",
      title: " dashboard prototype",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://dashboard-exemple.netlify.app",
      links: [
        {
          link: "https://github.com/Fedi-jou/dashboard-exemple",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1630881334/SC7_h9j1tr.png",
      title: "Portfolio website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: ".",
      links: [
        {
          link: "https://github.com/Fedi-jou/portfolio1",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "FireBase",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1632254111/SC12_nzkewb.png",
      title: "Quiz Reactjs and firebase (full)",
      caption: "",
      description: " Visit website",
      netlify: "https://quiz-react-firebase.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/quiz-app-reactjs-and-firebase",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "FireBase",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1631557877/SC10_ya3wjh.png",
      title: "Authentification Page ",
      caption: "",
      description: " Visit website",
      netlify: "https://authentification-firebase.netlify.app/login",
      links: [
        {
          link: "https://github.com/Fedi-jou/Authentification-firebase",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "FireBase",
      image:
        "https://res.cloudinary.com/dc83alvmn/image/upload/v1631557877/SC9_deqtgg.png",
      title: "Photos upload  ",
      caption: "",
      description: "Visite website",
      netlify: "https://gallery-fire-base.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou/Gallery-with-firebase",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "Nextjs",
      image:
        "data:image/png;base64,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",
      title: "Nextjs project",
      caption: "",
      description: "",
      links: [
        {
          link: "https://github.com/Fedi-jou?tab=repositories",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};

export default data;
