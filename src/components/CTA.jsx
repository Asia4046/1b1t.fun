import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Join Our Discord And Contribute to the server</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We Accept Suggestions from The community and bring them to the server.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
     <a href="https://discord.gg/4dJ8dqmeCx"><Button /></a>
    </div>
  </section>
);

export default CTA;
