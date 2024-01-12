import classes from './loading.module.css';

function Loading(props) {
  return <div className={classes.loading}>{props.children}</div>;
}

export default Loading;
