import { useState } from "react";
import styles from "./StartRating.module.css";

function StarRating() {
  const [checked, setchecked] = useState(true);
  return (
    <div className={styles.rate}>
      <div className={styles.star}>star</div>
    </div>
  );
}

export default StarRating;
