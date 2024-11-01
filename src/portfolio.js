/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Ethical Design",
  title: "Hi, Welcome to AI Ethical Design",
  subTitle: emoji(
    "An academic and innovator partnership for creating ethical AI systems for children"
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  twitter: "https://x.com/oxfordccai",
  github: "https://github.com/junszhao",
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const missionsSection = {
  title: "What we do",
  subTitle: "Our missions",
  skills: [
    emoji(
      "⚡ Bring principled ethical design thinking to practice"
    ),
    emoji("⚡ Bring together academics and practitioners"),
    emoji(
      "⚡ Promote children's voices in the process of design"
    )
  ],
  display: true // Set false to hide this section, defaults to true
};



const caseStudies = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "YouTube video recommendations",
      company: "YouTube",
      companylogo: require("./assets/images/youtubeLogo.jpg"),
      // date: "June 2018 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Data autonomy on Social media",
      company: "Tiktok",
      companylogo: require("./assets/images/tiktokLogo.png"),
      // date: "May 2017 – May 2018",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "New digital parenting opportunities",
      company: "KOALA Hero",
      companylogo: require("./assets/images/koala.png"),
      // date: "Jan 2015 – Sep 2015",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};


// References Section

const refSection = {
  title: "References",
  subtitle:
    "References underpinning the principles and practices.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  refs: [
    {
      url: "https://www.nature.com/articles/s42256-024-00805-x",
      title: "Challenges and opportunities in translating ethical AI principles into practice for children",
      description:
        "A map of the current global ethics guidelines for AI and their correlation with children."
    },
    {
      url: "https://doi.org/10.1145/3491102.3502057",
      title: "Informing Age-Appropriate AI: Examining Principles and Practices of AI for Children",
      description:
        "A landscape analysis of current children’s AI systems and their alignment with ethical AI design principles."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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



const contactInfo = {
  title: emoji("Contact Us ☎️"),
  subtitle:
    "Discuss a project or just want to say hi?",
  number: "",
  email_address: "info@aiethicaldesign.org"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  missionsSection,
  caseStudies,
  refSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable
};
