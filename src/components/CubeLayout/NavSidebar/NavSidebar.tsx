import { Button } from '@kobalte/core';
import { Component } from 'solid-js';

import * as styles from './NavSidebar.css';

export const NavSidebar: Component<{ open: boolean; setClosed: () => void }> = (props) => (
  <nav data-open={props.open} class={styles.navSidebar}>
    <Button.Root onClick={() => props.setClosed()} class={styles.navSidebarCloseButton}>
      <svg
        class={styles.navSidebarCloseButtonIcon}
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    </Button.Root>
    <ul class={styles.navSidebarContent}>
      <li>
        <h2 class={styles.navSidebarListTitle}>List</h2>
        <ul class={styles.navSidebarList}>
          <li class={styles.navSidebarListLink}>Mainboard</li>
          <li class={styles.navSidebarListLink}>Maybeboard</li>
          <li class={styles.navSidebarListLink}>Other Modules here</li>
        </ul>
      </li>
      <li>
        <h2 class={styles.navSidebarListTitle}>About</h2>
        <ul class={styles.navSidebarList}>
          <li class={styles.navSidebarListLink}>Primer</li>
          <li class={styles.navSidebarListLink}>Blog</li>
          <li class={styles.navSidebarListLink}>Changelog</li>
        </ul>
      </li>
      <li class={styles.navSidebarLink}>Playtest</li>
      <li class={styles.navSidebarLink}>Compare</li>
      <li class={styles.navSidebarLink}>Analysis</li>
    </ul>
  </nav>
);
