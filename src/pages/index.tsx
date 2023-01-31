import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Employment, EmploymentProps } from "@/components/Employment";

const SoftMakerProps: EmploymentProps = {
  startDate: "March 2021",
  title: "Frontend Tech Lead, SoftMaker, Warsaw",
  intro: [
    `I have joined SoftMaker as the main person responsible for front end development, I quickly took it to the next level by introducing TypeScript, Storybook, styled-system, pull request flow and other technologies/practices to developers and designers.`,
    `In just 5 months I worked on 3 projects, my main job was to set up a initial boilerplate code for them, then take care of the hardest part of coding along with reviewing and improving code of other developers.`,
  ],
  responsibilities: [
    "Creation of new, greenfield single page applications",
    "Choosing right technologies/libraries",
    "Managing team of 4 front end developers",
    "Planning sprints",
    "Creating and describing tasks",
    "Cooperation with back end developers and designers to achieve most effective flows for creating web applications",
    "Pairings with/teaching less experienced developers",
    "Writing documentation",
  ],
  projects: [
    {
      title: "Real estate dealers platform",
      description: [
        "The first project that I worked on was a platform for connecting real estate dealers. It included login/registration, advertisements, negotiations, contacts and chat modules.",
        `At the time I joined the company we only had designs for the application and no back end at all. I also had a one middle-skilled developer to help
        me with at this time so to use our resources in the best possible way:`,
        "- I had a chat with a designer to explain him what the style guide is and ask him to prepare it for us",
        "- we used Storybook to create all the needed visual components in isolated environment to give our back end developers a time for creating the API, we used styled-system to achieve consistent, beautiful design system in a short period of time",
        "- after we finished the preparing visual components we already had some API to integrate the application with so we could continue our job without any redundant delays",
      ],
      stack: [
        "React",
        "TypeScript",
        "Storybook",
        "Context API",
        "react-router",
        "react-hook-form",
        "styled-components",
        "styled-system",
        "web sockets",
        "react-google-maps",
      ],
    },
    {
      title: "5g mast development documentation system",
      description: [
        "After I finished all the hardest part of the project above I had a pleasure to create a development documentation system for a company that was responsible for building 5g masts and other objects in Poland.",
        "There was a lot of data that the client initially has been holding in Excel. The main business point was to make the data easier to manage by creating a dedicated app that included:",
        "- creating/editing/removing records of different type module",
        "- tables with tens of thousands records that were searchable with filters and sorting features, because of huge data quantity we had to use table rows virtualization (windowing) along with infinity scroll solution",
      ],
      stack: [
        "React",
        "TypeScript",
        "Context API",
        "react-router",
        "react-hook-form",
        "styled-components",
        "styled-system",
        "react-query",
        "react-table",
        "react-window",
        "react-window-infinite-loader",
      ],
    },
  ],
};

const IdegoGroupProps: EmploymentProps = {
  startDate: "September 2019",
  endDate: "March 2021",
  title: "Senior Front End Developer, Idego Group, Gdynia",
  responsibilities: [
    "Creation of new single page applications",
    "Maintenance of existing projects",
    "Teaching less experienced developers",
    "Lightning talks",
  ],
  projects: [
    {
      title: "Stock Market Analysis Tool",
      description: [
        `The first project that I was engaged in Idego was a greenfield one (I had
            to build it from scratch). It was a platform that offers tools for
            browsing and viewing reports, analyzes and last but not least - ratings of
            companies prepared by analysts hired by that platform.`,
        `The most challenging thing at the beginning was choosing the designs -
            because we haven't had designers onboard and needed as good UX as possible
            I aimed for some proven UI library. After many researches and comparisons
            we were convinced to use material-ui.`,
      ],
      stack: [
        "React",
        "Storybook",
        "Redux",
        "redux-saga",
        "react-router",
        "formik",
        "lodash",
        "material-ui",
        "styled-components",
        "Java/Python",
      ],
    },
    {
      title: "Social Media Management Tool",
      description: [
        `The second project that I had a pleasure to work in was already existing,
        working platform that allows users to manage, agregate and compare social
        media records (for now Facebook and Instagram posts).`,
        `The funny part is that it was Vue project and... I have never been using
        Vue before. It's even funnier that it was not so challenging at all. Vue
        nowadays is so similar in concepts to React that you can easily jump from
        one to another.`,
        `My tasks there were connected with adding new features, refactoring
        existing spaghetticode and proposing UX upgrades to the client.`,
      ],
      stack: [
        "Vue",
        "vue-router",
        "firebase",
        "stripe.js",
        "chart.js",
        "Bootstrap",
      ],
    },
  ],
};

const NetguruProps: EmploymentProps = {
  startDate: "October 2016",
  endDate: "September 2019",
  title: "Front End Developer & Team Leader, Netguru, Poznań",
  intro: [
    "When I joined Netguru as a middle-skilled engineer I was mainly focused on developing my technical skills, but after some time I started managing projects and people then changed my role to a 7-people team leader.",
  ],
  responsibilities: [
    "working on numerous SPAs (single page applications) with both React and Angular (mainly React)",
    "consulting",
    "mentorship of new developers",
    "teaching less experienced developers",
    "presenting at conferences",
    "leading 7-people team of front-end developers",
  ],
};

const AnalogFolkProps: EmploymentProps = {
  startDate: "May 2016",
  endDate: "September 2016",
  title: "Front End Developer, AnalogFolk, London",
  intro: [
    "Since my first trip to Berlin as a 15-years old kid, I decided to add living in another country to my bucket list. So when I gained skills that allowed me to find a job with a salary that'll let me live in London without any monetary support from other sources, I moved in and spent an amazing time in this creative, multicultural interactive agency that among others, had run campaigns for Nike or Sony Playstation.",
  ],
  responsibilities: [
    "creating beautiful business websites with lots of interactive animations",
    "maintenance of existing websites",
    "learning AngularJS in all of my free time",
    "during my time here I've also managed to create an internal app for managing employees' skills and quickly finding people with relevant skills that are right for particular job.",
  ],
};

const YSLABProps: EmploymentProps = {
  startDate: "July 2015",
  endDate: "April 2016",
  title: "Front End Developer, YSLAB, Warsaw",
  intro: ["My first job in a professional interactive agency."],
  responsibilities: [
    "coding PSDs to HTML",
    "much jQuery solutions and animations",
    "front-end for magento shops",
    "work with CMS (Contao, October)",
    "cooperation with web designer and back-end developer",
    "teaching interns",
  ],
};

const MlodziNiewyspaniProps: EmploymentProps = {
  startDate: "April 2015",
  endDate: "June 2015",
  title: "Junior Front End Developer, MłodziNiewyspani, Mińsk Mazowiecki",
  intro: [
    "My first front-end developer job. Did you know that it took me just 2 months of learning to get it? I started with zero knowledge about programming at all. That was quick!",
  ],
  responsibilities: [
    "coding PSDs to HTML",
    "designing and coding simple company websites and landing pages",
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Patryk Nawolski Resume</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto+Mono"
        />
      </Head>
      <main className={styles.container}>
        <section>
          <h2>About me</h2>
          <p>
            Experienced software developer with focus on front end, based in
            Warsaw. I love clean code and pay attention to modularity and
            maintainability of my solutions.
          </p>
          <p>
            I'd never copy and paste existing code without abstracting it
            somehow to make the code reusable.{" "}
            <strong className={`${styles.textUnderscored} ${styles.textLight}`}>
              I'm a developer - not a coder
            </strong>
            . I will not only produce code to implement features described by a
            PM, but also give my own advises in terms of UX of the application
            or even business solutions if I get any ideas.
          </p>
          <p>
            <strong className={`${styles.textUnderscored} ${styles.textLight}`}>
              Let's make your app great together!
            </strong>
          </p>

          <p>
            Contact:{" "}
            <a href="mailto: patryknawolski@gmail.com">
              patryknawolski@gmail.com
            </a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/patryk-nawolski-400389ab/">
              https://www.linkedin.com/in/patryk-nawolski-400389ab/
            </a>
          </p>
        </section>
        <section>
          <h2>Employment history</h2>
          <Employment {...SoftMakerProps} />
          <Employment {...IdegoGroupProps} />
          <Employment {...NetguruProps} />
          <Employment {...AnalogFolkProps} />
          <Employment {...YSLABProps} />
          <Employment {...MlodziNiewyspaniProps} />
        </section>
      </main>
    </>
  );
}
