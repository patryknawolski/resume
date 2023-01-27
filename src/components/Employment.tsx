import styles from "@/styles/Home.module.css";

export type EmploymentProps = {
  startDate: string;
  endDate?: string;
  title: string;
  intro?: string | Array<string>;
  responsibilities: Array<string>;
  projects: Array<{
    title?: string;
    description: string | Array<string>;
    stack: Array<string>;
  }>;
};

export const Employment: React.FC<EmploymentProps> = ({
  startDate,
  endDate,
  title,
  intro,
  responsibilities,
  projects,
}) => (
  <div className={styles.employment}>
    <div className={styles.employmentHistoryTitleGrid}>
      <div className={styles.textUnderscored}>
        <p className={styles.noMargin}>
          {startDate} — {endDate ?? "Present"}
        </p>
      </div>
      <div className={styles.textUnderscored}>
        <p className={styles.noMargin}>{title}</p>
      </div>
    </div>
    <>
      {intro
        ? (intro === "string" ? [intro] : (intro as Array<string>)).map(
            (text) => <p>{text}</p>
          )
        : null}
    </>
    <h3>Responsibilities</h3>
    <ul>
      {responsibilities.map((responsibility) => (
        <li>{responsibility}</li>
      ))}
    </ul>
    <h3>Projects</h3>
    {projects.map(({ title, description, stack }) => (
      <div className={styles.employmentProject}>
        <h4 className={styles.employmentProjectTitle}>
          <span className={styles.textUnderscored}>{title}</span>
        </h4>
        {(description === "string"
          ? [description]
          : (description as Array<string>)
        ).map((text) => (
          <p>{text}</p>
        ))}
        <h5>Technology Stack</h5>
        <ul className={styles.employmentStackList}>
          {stack.map((stackItem) => (
            <li>{stackItem}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
