import styles from "@/styles/Home.module.css";

export type EmploymentProps = {
  startDate: string;
  endDate?: string;
  title: string;
  responsibilities: Array<string>;
  projects: Array<{
    description: string | Array<string>;
    stack: Array<string>;
  }>;
};

export const Employment: React.FC<EmploymentProps> = ({
  startDate,
  endDate,
  title,
  responsibilities,
  projects,
}) => (
  <>
    <div className={styles.eploymentHistoryTitleGrid}>
      <div className={styles.textUnderscored}>
        <p className={styles.noMargin}>
          {startDate} — {endDate ?? "Present"}
        </p>
      </div>
      <div className={styles.textUnderscored}>
        <p className={styles.noMargin}>{title}</p>
      </div>
    </div>
    <h3>Responsibilities</h3>
    <ul>
      {responsibilities.map((responsibility) => (
        <li>{responsibility}</li>
      ))}
    </ul>
    <h3>Projects</h3>
    {projects.map(({ description, stack }) => (
      <>
        {(description === "string"
          ? [description]
          : (description as Array<string>)
        ).map((text) => (
          <p>{text}</p>
        ))}
        <h3>Stack</h3>
        <ul>
          {stack.map((stackItem) => (
            <li>{stackItem}</li>
          ))}
        </ul>
      </>
    ))}
    <p>
      The second project that I had a pleasure to work in was already existing,
      working platform that allows users to manage, agregate and compare social
      media records (for now Facebook and Instagram posts).
    </p>
    <p>
      The funny part is that it was Vue project and... I have never been using
      Vue before. It's even funnier that it was not so challenging at all. Vue
      nowadays is so similar in concepts to React that you can easily jump from
      one to another.
    </p>
    <p>
      My tasks there were connected with adding new features, refactoring
      existing spaghetticode and proposing UX upgrades to the client.
    </p>
    <h3>Stack</h3>
    <ul>
      <li>Vue</li>
      <li>vue-router</li>
      <li>firebase</li>
      <li>stripe.js</li>
      <li>chart.js</li>
      <li>Bootstrap</li>
    </ul>
  </>
);
