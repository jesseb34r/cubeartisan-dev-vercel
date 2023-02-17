import { Separator } from '@kobalte/core';

import * as styles from './test-1.css';
import { ListHero } from '~/components/CubeListView/test-1';
import { ListActions } from '~/components/CubeListView/test-1/ListActions';
import { ListTableView } from '~/components/CubeListView/test-1/ListTableView';

export default function TestView1() {
  return (
    <main class={styles.container}>
      <ListHero />
      <Separator.Root class={styles.hSeparator} />
      <ListActions />
      <ListTableView />
    </main>
  );
}
