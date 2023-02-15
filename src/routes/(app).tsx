import { Outlet } from 'solid-start';

import * as styles from './(app).css';
import { SiteNav } from '~/components/SiteNav/SiteNav';

export default function AppLayout() {
  return (
    <div class={styles.appContainer}>
      <div class={styles.appBody}>
        <SiteNav />
        <Outlet />
      </div>
      {/* Footer */}
    </div>
  );
}
