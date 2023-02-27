import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bernardo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptates porro at dolorum dignissimos totam nostrum eius quas ullam, eaque perferendis alias corrupti expedita ea maiores consequuntur officiis illum voluptatibus."
          />
        </main>
      </div>
    </div>
  );
}
