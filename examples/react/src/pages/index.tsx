import React,{useState} from 'react';
import {  Button } from 'antd';
import styles from './index.less';

export default () => {
  let [count, setCount] = useState(1)
  return (
    <div>
      <h1 className={styles.title}>Ant.design {count}</h1>
      <Button type="primary" onClick={()=>setCount(count+1)}>click</Button>
    </div>
  );
}
