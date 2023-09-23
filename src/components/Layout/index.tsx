import { Outlet } from 'react-router-dom';

// Component
import Sidemenu from './Sidemenu';

export default function Layout() {
  return (
    <div className=" flex bg-primary-light dark:bg-primary-dark w-[1920px] h-[1080px]">
      <Sidemenu focusKey="sidemenu" />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
