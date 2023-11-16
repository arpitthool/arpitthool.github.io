/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arpit Thool",
  title: "Hi all, I'm Arpit",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with expertise in Java, Python, C# and a wide range of technologies, delivering secure innovative solutions and driving seamless user experiences."
    ),
  resumeLink:
    "https://drive.google.com/file/d/1A9vk6raPirDqjD2OioCqbtzNmxncu5RL/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arpitthool",
  linkedin: "https://www.linkedin.com/in/arpitthool/",
  email: "arpitthool@vt.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My skills",
  // subTitle: "Passionate Full Stack Software Engineer with expertise in Java, Python, and a wide range of technologies, delivering innovative solutions and driving seamless user experiences.",
  skills: [
    emoji(
      "⚡ Versatile skills in Java, Python, C++, Spring, React.js, and Flask, Django for building robust software applications."
    ),
    emoji("⚡ Experienced in MySQL, MongoDB, and Redis for efficient data management."),
    emoji(
      "⚡ Proficient in AWS, GCP, Docker, and Kubernetes for seamless application deployment and scalability."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-csharp"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },

    // databases

    {
      skillName: "MySQL",
      fontAwesomeClassname: "fab fa-database"
    },

    {
      skillName: "NoSQl",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fab fa-database"
    },

    // frameworks
    {
      skillName: "Spring",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fab fa-ts"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "fab fa-dotnet"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-django"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fab fa-flask"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fab fa-selenium"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-nodejs"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "AngularJS",
      fontAwesomeClassname: "fab fa-angular"
    },
    
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    
    
  //  other technologies
    
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },


    {
      skillName: "Terraform",
      fontAwesomeClassname: "fab fa-terraform"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-gcp"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Virginia Tech",
      logo: require("./assets/images/vtlogo.jpg"),
      subHeader: "PhD in Computer Science",
      duration: "August 2021 - 2025",
      desc: "Conducted research in software engineering and security domain. Relevant Coursework : CS 5704 Software Engineering, CS 5604 Information Storage and Retrieval, CS 5560 Fundamentals of Information Security, CS 5014 Research Methods, CS 5914 Software Project Management, CS 6204 Advanced Topics in Security and Privacy, CS 5714 Usability Engineering.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Virginia Tech",
    //   logo: require("./assets/images/vtlogo.jpg"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "August 2021 - 2023",
    //   desc: "Conducted research in software engineering and security domain. Relevant Coursework : CS 5704 Software Engineering, CS 5604 Information Storage and Retrieval, CS 5560 Fundamentals of Information Security, CS 5014 Research Methods, CS 5914 Software Project Management, CS 6204 Advanced Topics in Security and Privacy, CS 5714 Usability Engineering.",
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   // ]
    // },
    {
      schoolName: "University of Pune",
      logo: require("./assets/images/sppulogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "August 2016 - April 2020",
      desc: "Ranked top 10% in the program. Coursework : Data Structures & Algorithms, Object-Oriented Programming, Computer Graphics, Database Management Systems, Software Engineering, Project Management, Software Testing, Information Systems, Computer Networks, Operating Systems, Web Technology, Cyber Security, Cloud Computing, High-Performance Computing, Artificial Intelligence, Data Mining, Data Analytics, Machine Learning",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Virginia Tech",
      companylogo: require("./assets/images/vtlogo.jpg"),
      date: "August 2021 – Present",
      desc: "SIS team in the division of IT at Virginia Tech",
      descBullets: [
        "Designed, implemented, tested and maintained software applications, writing clean Java code with version control and appropriate unit and functional tests.",
        "Researched, learned and implemented new technologies for solving problems faced by stakeholders.",
        "Designed and implemented a Java based software system that effectively communicated with ZAP to conduct thorough scans on web applications, leveraging API calls and proficiently processing JSON data.",
        "Deployed an AWS distributed load testing instance through a configured template and designed intricate JMeter scripts to effectively conduct load testing of the login service using the AWS environment.",
        "Created GitLab CI/CD pipeline using YAML  to automate testing using various test scenarios.",
        "Designed and implemented a web app using Python Flask with SSO feature to test the CAS login service. Deployed the app using Gunicorn on a Red-Hat server on a private network",
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Lutron",
      companylogo: require("./assets/images/lutronlogo.webp"),
      date: "May 2022 – August 2022",
      desc: "Interned at Lutron for three months as a software engineer",
      descBullets: [
        "Collaborated with tech lead, product owner and senior engineers to understand requirements, create UML diagrams and to create the documentation for the system architecture.",
        "Spearheaded design, development and deployment of a large scale Java Spring application used to migrate from manual management of a Cloud resource to Terraform, slashing manual process time by 50%.",
        "Wrote CI/CD pipeline script in Groovy to connect the BitBucket repository to the Terraform Provider which in turn performed corresponding changes on Lutron’s Artifactory instance.",
        "Automated a task to decompress and aggregate files fetched from any online Lutron system by implementing the feature in Lutron’s Tech Support Tool using C# and .NET.",
        "Extended functionality of Lutron’s System Diagnostics app to enable debug logging for a connected system using TypeScript and React.",
        
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Acquia",
      companylogo: require("./assets/images/acquialogo.jpg"),
      date: "September 2020 – July 2021",
      desc: "Worked in the Marketing Cloud team on the products : 'Campaign Factory' and 'Campaign Studio'",
      descBullets: [
        "Designed and implemented new product features and maintained and enhanced existing ones by writing clean documented code,  writing unit tests and participating in code reviews.",
        "Collaborated with the product owner and senior engineers to understand the product and discuss innovative solutions to add new functionality and increase system efficiency.",
        "Modeled and implemented an efficient solution to synchronize the creation, modification and deletion of an asset in the parent template to children templates, saving the client time spent on duplicating templates.",
        "Worked closely with the QA and the UX teams to ensure the features are built according to the requirements of the customers using VueJS, Bootstrap, HTML and CSS.",
        "Mentored 3 new college graduates joining Acquia. Conducting weekly progress meetings and provided guidance on revising and focusing on key concepts and technologies for a seamless transition to their respective projects.",

      ]

    },
    {
      role: "Software Engineer Intern",
      company: "Technogong",
      // companylogo: require("./assets/images/none.jpg"),
      date: "September 2019 – March 2020",
      desc: "Worked in a small startup aiming to digitize hotel and restaurant management",
      descBullets: [
        "Designed and developed ‘Bizhawk’, an mobile application for managing day-to-day activities in a restaurant. Saved on estimated costs by delivering the project ahead of time with near zero-defect delivery.",
        "Created Wireframes to emulate user activities. Implemented app activities in high-quality Java code, wrote PHP scripts to run on a LAMP server to implement product functionalities.",
        "Created database queries to be used by the backend to communicate with the MySQL database.",
        
      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME COOL TECH I CREATED",
  projects: [
    {
      image: require("./assets/images/blogger.png"),
      projectName: "Blogger",
      projectDesc: "Developed a Blogger web app using TypeScript, AdonisJS, Edge templates & PostgreSQL. Employed the MVC software pattern to deisgn the app. A guest is able to read existing blogs and sign up for an account. A logged in user can create new blogs, delete their own blogs and also like/dislike the blogs of their choice. Created migrations, schema Models and connected them with relationships for efficient data processing. Deployed the app on an AWS EC2 Ubuntu Instance with Elastic IP for efficient and scalable performance.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/arpitthool/blogger-app"
        },
        {
          name: "Visit Website",
          url: "http://18.213.244.58:3333/"
        }
      ]
    },
    {
      image: require("./assets/images/goLLM.png"),
      projectName: "GoLLM (ChatGPT Clone)",
      projectDesc: "Used Ollama to deploy a llama-2 model on a AWS EC2 instance. Built a web app to interact with the LLM model using Go and Bootstrap for UI.",
      footerLink: [
        {
          name: "Github Link with Demo",
          url: "https://github.com/arpitthool/GoLLM"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/taskmanager.png"),
      projectName: "Task Manager",
      projectDesc: "Developed a Task Manager web app using FARM stack: Python, FastAPI, JavaScript, React and MongoDB.Built a RESTful API backend and a user-friendly frontend with seamless communication through Axios. Utilized MongoDB as the NoSQL database, connected to the backend using the motor driver. Successfully deployed the app on an AWS EC2 Ubuntu Instance with nginx server for efficient and scalable performance.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://54.175.134.26:3000/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/traveldiaryplanner.png"),
      projectName: "Travel Diary & Planner",
      projectDesc: "Hosted a Java web application on an AWS instance using Apache server for currency conversion, hotel availability, visualizing COVID-19 statistics and weather lookup at different locations with the help of REST APIs using JSON data. An authenticated user is able to store and view various types of files just like an online diary. Used Java Jakarta EE web framework and implemented the database using MySQL. Front-end was created using Prime Server Faces framework.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/arpitthool/Travel-Diary-Planner"
        }
      ]
    },
    {
      image: require("./assets/images/carmap.webp"),
      projectName: "Car Mapping",
      projectDesc: "Hosted a flask web app on Heroku to solve a competitive coding task, the database was implemented using MongoDB. Built a CICD pipeline using a Jenkins server, and GitHub webhooks to automate testing and deployment. Collaborated within a team of three people and followed the Agile Process Model for the development process.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/arpitthool/jenkins-git"
        }
      ]
    },
    {
      image: require("./assets/images/amazonclone.png"),
      projectName: "Amazon Clone",
      projectDesc: "A React web app having a few features of the Amazon Website. Hosted React frontend on Firebase, with backend implemented with Express web framework, hosted using Google Cloud's Cloud Functions. Employed Event Driven Architecture using React Context API or Redux. Added feature to work with real-time data residing in a firestore NoSQL database hosted on Firebase. Implemented user login and register functionality using the firebase auth module. Added support for real-time card payments using Stripe.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/arpitthool/amazon-clone"
        },
        {
          name: "Visit Website",
          url: "https://challenge-3742b.web.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "arpitthool@vt.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
