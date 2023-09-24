import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect } from 'react';

export interface ISideMenu {
  id: string;
  label: string;
}

export default function useSideMenu(focusKeyParam: string) {
  const { ref, focusKey, focusSelf, hasFocusedChild } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: '',
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  const sideMenu: ISideMenu[] = [
    { id: 'menu-item-stream', label: 'Nazad na strim' },
    { id: 'menu-item-weather', label: 'Prognoza' },
    { id: 'menu-item-settings', label: 'Podešavanja' },
  ];

  return { ref, focusKey, hasFocusedChild, sideMenu };
}
