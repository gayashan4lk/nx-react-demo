import styles from './my-shared-ui.module.css';

/* eslint-disable-next-line */
export interface MySharedUiProps {}

export function MySharedUi(props: MySharedUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MySharedUi!</h1>
    </div>
  );
}

export default MySharedUi;
