import styles from './test-component-2.module.css';

/* eslint-disable-next-line */
export interface TestComponent2Props {}

export function TestComponent2(props: TestComponent2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestComponent2!</h1>
    </div>
  );
}

export default TestComponent2;
