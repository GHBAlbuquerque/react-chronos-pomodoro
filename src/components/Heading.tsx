import styles from './Heading.module.css';

type HeadingProps = {
  attr: string;
  children: string;
};

export function Heading({ attr, children }: HeadingProps) {
  console.log(attr);
  return <h1 className={styles.heading}>{children}</h1>;
}
