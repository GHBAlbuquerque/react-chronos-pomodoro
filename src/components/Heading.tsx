import styles from './Heading.module.css';

export function Heading(props) {
  console.log(props);
  return <h1 className={styles.heading}>{props.children}</h1>;
}
