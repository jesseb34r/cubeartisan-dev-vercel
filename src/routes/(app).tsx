import { Outlet } from 'solid-start';

import { SiteNav } from '~/components/SiteNav/SiteNav';

export default function AppLayout() {
  return (
    <div>
      <div>
        <SiteNav />
        <Outlet />
      </div>
      {/* Footer */}
    </div>
  );
}
