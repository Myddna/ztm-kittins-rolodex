import styles from './card-list.styles.module.css';
import { Card } from './../card/card.component';

export const CardList = ({monsters, children}) => {
  return (
    <div className={styles.CardList}>
      {monsters.map((item) => {
        return <Card key={item.id} monster={item}/>;
      })}
    </div>
  );
}