import Form from "./components/Form";
import Table from "./components/Table";
import { useSelector } from "react-redux";
import { getModalOpen } from "./components/studentSlice";
import styles from "./app.module.scss";

function App() {
  const open = useSelector(getModalOpen);
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.container}>
        <div className={styles.pageContent}>{open ? <Form /> : <Table />}</div>
      </div>
    </div>
  );
}

export default App;
