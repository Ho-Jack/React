import React from 'react';
import { Link } from 'umi';

import styles from './index.less';
import  Demo  from '../demo/index'

export default () => {
  var   name="这是父组件给子组件传的值"
  return (
    <div>
      <Demo name={name}><button>这是插槽</button></Demo>
      <h1 className={styles.title}>Page index</h1>

      <Link to="/tabsDemo">tabsDemo</Link>
    </div>
  );
}
