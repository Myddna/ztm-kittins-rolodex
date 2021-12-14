import styles from "./card.styles.module.css";

export const Card = ({ monster }) => {
  return (
    <div className={styles.Card}>
      <img alt={`${monster.name} monster`} src={`https://robohash.org/${monster.id}?set=set4&size=180x180`} />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
