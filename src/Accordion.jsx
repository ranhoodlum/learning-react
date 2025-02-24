import { useState } from "react";

function Panel({ title, children, isActive, clickHandler }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={clickHandler}>Show</button>
      )}
    </section>
  );
}

export default function Accordion() {
  const [activePanel, setActivePanel] = useState(0);

  const clickHandler = () => {
    setActivePanel(activePanel === 0 ? 1 : 0);
  };

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activePanel === 0}
        clickHandler={clickHandler}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activePanel === 1}
        clickHandler={clickHandler}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
