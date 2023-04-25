import { useState } from "react";
import "./Widget.css";

const Widget = () => {
  const [indexSelected, setIndexSelected] = useState(0);
  console.log("calculate", indexSelected * 50);
  return (
    <>
      <section>
        <nav className="widget-container">
          <span
            onClick={() => setIndexSelected(0)}
            className="material-symbols-outlined"
          >
            home
          </span>
          <span
            onClick={() => setIndexSelected(1)}
            className="material-symbols-outlined"
          >
            settings
          </span>
          <span
            onClick={() => setIndexSelected(2)}
            className="material-symbols-outlined"
          >
            lock
          </span>
          <div
            className="underline"
            style={{
              translate: `${indexSelected * 50}px`,
            }}
          ></div>
        </nav>
        <a className="content-container"></a>
      </section>
    </>
  );
};

export default Widget;
