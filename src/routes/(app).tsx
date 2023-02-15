import { Outlet } from 'solid-start';

import * as styles from './(app).css';
import { SiteFooter } from '~/components/SiteFooter';
import { SiteNav } from '~/components/SiteNav/SiteNav';

export default function AppLayout() {
  return (
    <div class={styles.appContainer}>
      <div class={styles.appBody}>
        <SiteNav />
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}
