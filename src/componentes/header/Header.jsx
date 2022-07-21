export const Header = ({ active, setActive }) => {
  return (
    <nav>
      <div className="logo">
        <h2>{'</>'}</h2>
      </div>
      <div id="hamburguesa" onClick={() => setActive(!active)}>
        <div className={!active ? "" : "linea1"}></div>
        <div className={!active ? "" : "linea2"}></div>
        <div className={!active ? "" : "linea3"}></div>
      </div>
    </nav>
  )
}