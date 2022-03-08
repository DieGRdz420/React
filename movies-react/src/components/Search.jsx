import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";
import styles from "./search.module.css";

export function Search() {

    
    const query = useQuery();
    const search = query.get('search');

    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <form 
            className={styles.searchContainer} 
            onSubmit={handleSubmit} >
                <div className={styles.searchBox} >
                    <input 
                        type="text" 
                        className={styles.searchInput}
                        value={search}
                        placeholder="Title"
                        aria-label="Search Movies"
                        onChange={(e) => {
                            const value = e.target.value;
                            history.push("/?search=" + value);
                        }} />
                
                    <FaSearch 
                        color="#212121"
                        size={20} 
                        className={styles.searchButton} /> 
                </div>
        </form>
    )
}
