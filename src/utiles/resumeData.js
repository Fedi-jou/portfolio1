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
    "I'm a polyvalent individual with adabtable skills coming from IT Management and E-Marketing fields. For now im focusing mostly on Front-end web development but i'm always willing to try my hands at anything new. It will be nice to hear from you if you are interested in Freelance projects or if you got any remarks . ",

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
      title: "Office Assistant - Thika real eastate agency",
      date: "2018-2020",
      description: "description3",
    },
    {
      title:
        "Back-end PHP developer - Freelancer with International Computer Partner (ICP)",
      date: "2016-2018",
      description: "description3",
    },
    {
      title:
        "Trainee affected to managment control department - AMI Insurance 2016",
      date: "2015",
      description: "description3",
    },
    {
      title: "Cyber office agent and computer maintenance - InfoPlus",
      date: "2014-2015",
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
        "CSS",
        "BootStrap / Material-UI",
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
        "https://lh3.googleusercontent.com/uB4VWnNvjyLhMXSbD-689dglXVyoDyKiPdPPirviqOjUXpsNQ-8-XVzdvoXm9SpXq72LMoumMfOeVnFbDgMOvA2Dnp5PVWH3J9Zgwy86wCSycDLHCRN7WAUbwOgImZfJOddIQF9c50SdvMf34F4yPX8F5XJ6Yy7d4YEwJd9drYJZr1oHYDzqp-nENcb8KyAxU9DchAeH_dHHxMaMKcxvxilGP6tN3iv-zM0PPNGeCVXH6Z4J0zF5kWFAAnnwyyRfbqKVkmTDX_HO5aZDG0htLpw6oy7EM4OxqNqdAucWf4LW478jQ5ARbD8n9XRzxFWsFutlrdSxfBfaExRnpfgpWQkC69xG_omqawt96CArD3X_SAL629jDom7EY68Rmil9h1lZ7tC9o7z5yhvxCOpxyUwkwBudC1R-gtuhaW6J_K6q9VmSbEV5QqU3DmqogkrqZGH9VvEPQi3V31wsLw83lbH2XRawdPKzCbGqqFwGd-FgXlI7U73if59o5-smDCew-Sh6VVJCTMEZmKaIuMflhLzN7Ncy1rB8y2eiSEFDAIW6ZmAQfffM5EdhfM_H9-IN6NUyiRcg0GzEzu0iM__x7SB8c1vY78qZtcwGPalLaz8j2X8NZq9kz7fshoh_Zc8dGN-k6HhS2L8kVndX1u9bBgjFhDnfXB09ebIoxUfAlU66vDa8qLj0nKhpownF1viTOOnS9amSySZ2H8bneK4lsQE=w1366-h634-no?authuser=0",
      title: " Day1Studio website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://day1studio.netlify.app",
      links: [
        {
          link: "https://github.com/Fedi-jou?tab=repositories",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://lh3.googleusercontent.com/M1kvQ9TrfyEx9Ii3kiYDSVtSzUGY618MSZNKI4F7wLlrPziDQxt6BR2kV6bvmAlkr1NTIRYcVLn2ua3Dgnzbme_Z-pp3kNocRV4GIHvOx0Wibafbup63LyuFDbacOCWfgRuL1xSPcawgXOp1CdJEjfKwU0thjCrATveGSRGqUDrv8bIld8EAiwloFgEKglxk10Xm_uqTWQ31iB5QE386EDHPJpX4lv5GydkZPvdryhE7SBzA-P4AWPbyIlAzDHX1dYvMJ-a8zdqCgIkm7uiREpIlCKI2h3OLfofx8djZhyP6J2kDgNa4187DadTSJl6GQI0kTmoqLqE5NKCeXHGyTjG0K-t8RPz8MplPgoYOMusDKqSwZ2oVzyp0DhNhBiz6TldQOSZv-SpkSCx2vCktsfws_Xw2P2wboIfAZeS0mEpQSRJ9rUwYfl_BTc74us3leLRwAofostVflgzZPFGt_vbNgZeRckQRaT-Ow1hj0n5EniMep3M2hCzqqe74dYWgtk5gJ4O4R7HVLnhINXBZxeTJ__s9eoOmU6Gttbbd8tzhm7HjFlUBCFz06LyTUJMYe0m5K2G1jDKJk4qbPYZLYIGGkm8HwCT5Ue0y-LEW23MuIjhzklKUL8oEKeVnd_n5j-vbegnzhaahlwFmAkEw6Y2jZ2pTHX2HpvN5p03TI6HBSKQRF7LdCU7t170Yc9JcEVe9UR1r7kd-S9zvmhvSD-Q=w1357-h635-no?authuser=0",
      title: " Vaccination map website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://vaccination-map1.netlify.app",
      links: [
        {
          link: "https://github.com/Fedi-jou?tab=repositories",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://lh3.googleusercontent.com/J0wbb9_Q6OVg4VvR2NkzVoWpL0ZpB4gCjx1Tz2nFJCLYjI-MJNlKE9rFey6-Xay7vLsSJ3ypT5s66MrGlw3woTi4kr-tpQkNC0E79FHcgY15JmR531IZ8U2LuCzaKF8YzFLhrgPsgkrBRH3SFgvMdXnZCrV5yibdOHuWKrmTU8_ZMLfr08wXk2s1nGjAdww-z6WRTaFBsv0R_zXCxtFGuj_XuiUarDgOIpHpzyYleKyD33eWKG2mKGywmwkwhJbImSAioZuu_ky6CPhZ2cS0ZIf4VOM7_FP9tdJSGaW0IrdXFv242ByO2HGSq41Mby6JVismA5a8brmeu96rU8uHIEVE5oFWSRIiMQ5H9h2Ul4e-i1PTe_KDuQirVmoGLD8vEaBTVqS_6JCW9nbevJOcx10sTXbvk2ucVD1IzM5WITuIRCaoS-LMfdt6wf8EI55HveLkU3o0nqRuXcXnTG6iKOpKlig0RyViCTp2FZoa6TuuHa_N28IMdbiY013fSpeSGzTdl6Ko6gsAZtUkCzcxjJMGOu_TttXQx9RimNsL2rXnsctzIRjeMUdaEKAJ4UcktPjKuN-g9FBCZlwUPhX7W5Am2oc7G4Ly-bzA1jJZxXDMcU_xJUYNpy4EitThxPJibaQypvXHzW_7djPCn8BGDufYS5V9WclqNLxEv4dfIAqs9wzjhcw9QrelrJrmEPJc1N5GkpQymwd1UGLek19h7yo=w1362-h635-no?authuser=0",
      title: " Corona status website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://coronagraph.netlify.app/",
      links: [
        {
          link: "https://github.com/Fedi-jou?tab=repositories",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://lh3.googleusercontent.com/d24zd0bNQFTMl7nOeONsa-Rc9itw1hFcIdmP1XjNoeRoRLGfzSmm36GBE0XHIUOVp6-8xT1LLPpuR37XQfTECGCQuR3fYvKOsw8ZeZSWYdOUqMwQoLeNXRIW_y90zZkDXKRI5ll9JCleo3T5vyNKeHaEn_86EZg5EdHXy2JYxaDXfeiTEyMVphSNltv2zlf3-KPLHlQSBVOLKvb3wTiTbuQThELnJreK6rLTqjx_eyKp7lTm9zxd31Iz4X_gQodO-Qq-pBTYKOL36VFngGN4sTIT4JwL53IFuzAqXrB-baBZw_BPY4ILplS0_PcQAJM0OiJEYtiwyeke2k8Yyz5-WW-8Adz2Me2DnmVUmAfPhamV3Lj1RODLfs2hKEj0qykp6fIbyC2r2D2OoWwkjoLExNgogBkR5wawT2fkwOwR76GUNQBdaMEYWl2QoPAGR6R3iAQebzJFTam1u64Tn8FQ8wZ6wtB7ZTm5QbfEV33ExzFqam23oEpjJzRKQ0gIbbFcTpSDYkle27lWO_Oc78wwmcgmFSzT_kOSbisCyi-c3ar4Nc-TgKEJ22STc2C56heKld_AFP2jCHjQ6MB-T2HErjtMHQ8Wsxt50jln3gSotTc5926LXBeiWwjI0ligJlohzOfZPMBcSXZ8xtm0NktYpH6D1Q608oeGd35wA3TR0v5_9WE3NWXv5rzswQ0-Pmm1BB6LnMIMJXuUIcD6zIaZ2k4=w1366-h635-no?authuser=0",
      title: "Weather App",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://meteo-pwa1.netlify.app",
      links: [
        {
          link: "https://github.com/Fedi-jou?tab=repositories",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://lh3.googleusercontent.com/X6sSQj2BllRBU7jJFUP5-UjkJ4c6KEYHrxkiB93uitOVLyFUrQ7yHl-sNFwrAt1ki8dxWV4tEjhDIancebpwsxFXMIsdRmrxau64KC8zzzZAxO1J621E_SF5NRk7zKRfFCQ4w82HX-oEIVER-8upOVccV15Pnsa41HhyfSlntjNxP52_MvsPFgZe8ecwKdlBM2aOOT4N6gpgt3V7muQn8TQD9aGqUQB9v510psX3snyONyMhFoZU42KVVYDdnuojdXNHLF0XGioAoN2D_iDF4mVBEOdWGN1JDbgR3GtYcCYQJ1GuzBfc0t5Up6vKplyTwKCHioacXqY62AnzkbjYjcuwEzXr0Q6S0qwxZQSd2x62HPWrCp50FU4knL6VsFU8J1IaJeCU6wVUqSBE0ETo8jRgV-9Q3ENjzN9nEYt2Jx8LkWYABpavP6eN2bAl1Opb0avoEUpAajz2PDG7U1fcoEaLv5jV5XQsK_-7jK9io7ieDcg_KV3QFpzVaEz1_uWagaZ1N7nvgPNBvTtTctbShng34k4XKpbJmfXsw3l4xa5xdxYTacX5x1vcbEnp847dyGEVE48WOhgywQKN5lU1B7h0tWBE9zxb5AsxeVmy3lFyz29Io2fRN51YWxBN_WN9E1SpPa2-7cepxNvwQBmaN3v6yOYy_SvDJ2dF82khrNxRuzljm9FR7k2zvuRgy4Hzw6qyNOtz0ca6zyAh-iaLePQ=w1363-h595-no?authuser=0",
      title: " dashboard prototype",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: "https://dashboard-exemple.netlify.app",
      links: [
        {
          link: "https://github.com/Fedi-jou?tab=repositories",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Reactjs",
      image:
        "https://lh3.googleusercontent.com/uc03cWHEouRaVjLVTYkH6xtP_3FStwQRvtI0b-h2z12rMeLIY26EqGSjmaeuD2z1U7pqYPJE8KR9O_omqk5UZ1yKaBHYnPbslWYOY0aHcXk9csSQlt6Bx4pW_OlMd4BJ0Qv3AhgZ0wxuTPgewwLazOcPnElpZzD1UR14hZiPAdBY59ZELQ97skvYT0WfRAV2jPaKJ0_CUcRKSN-HI-h7ko9HAJBBGF0pzN1HDJs-W3WYZqeRBNIZ25zJ2cGKqcvE3lQWQZs0SDIbgrK07825djkWJpyDpHHh1RBmlfqFA2T7la0_E4oct_zWh6UhFcJGRBUwX7frs4xdeabQZedvNbTiTuRLfi6IMo8mkug3K7tdNhJkfzJhGKiZVijAOqxXcSFgvafy5pjkPmLsXARBt3jiD9XRcYbpnu0oIyietJftb0tZm9DnDBfPGH6OS-p2TrxSkKWXlXX7No1nMxQI_HXVjiOEtPY45yWQMcpD3vCDtcFjsP9g3j4JzFK8vgUoYOOajdpHqb2fUT3SKZOqt-VMGkaeui1-mFJ1hm2neobsQxbEREoBG9YQxiOwrNBoCPe_Leyc548NWQmslu7e6Mhnp8WTLievPSRY1vVxvpVMedBBzgyeT1DP-QK0WWs3HArHC0K1KR5S_uC--YFXs8e_xaoa1hU1OXJW6zU_Cup8zYJS7AM5Ps0DcFbXhq-X_jgtkKs-pwMMpx-RMyBUMTo=w1360-h635-no?authuser=0",
      title: "Portfolio website",
      caption: "click to see website and code",
      description: "Visit website",
      netlify: ".",
      links: [
        {
          link: "https://github.com/Fedi-jou?tab=repositories",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Angular",
      image:
        "data:image/png;base64,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",
      title: "Angular project",
      caption: "",
      description: "",
      links: [
        {
          link: "https://github.com/Fedi-jou?tab=repositories",
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
