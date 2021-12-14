import styles from './search-box.module.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input className={styles.SearchBox} type="search" placeholder={ placeholder } onChange={ handleChange } />
  );
}