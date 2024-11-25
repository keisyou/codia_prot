import styles from "./styles.module.css";
import { Form } from "./Form";

export default async function Login() {
  return (
    <div className={styles["container"]}>
      <Form />
    </div>
  );
}
