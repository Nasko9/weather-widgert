import { useLocation } from 'react-router-dom';

// Component
import Sidemenu from './Sidemenu';

interface ILayout {
  children: JSX.Element;
}

export default function Layout({ children }: ILayout) {
  let location = useLocation();

  return (
    <div className="bg-primary-light dark:bg-primary-dark w-[1920px] h-[1080px]">
      {(location.pathname === '/weather' ||
        location.pathname === '/settings') && <Sidemenu focusKey="sidemenu" />}
      {children}
    </div>
  );
}
