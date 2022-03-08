import { Search } from "./Search";
import styles from "./Nav.module.css";



export function Nav() {
  return(
    <div className={ styles.navContainer } >
      <h1 className={ styles.title } >
        Que peli me echo.!?
      </h1>
      <Search />
    </div>
  )
}
