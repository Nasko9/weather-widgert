import { Outlet } from 'react-router-dom';

// Component
import Sidemenu from './Sidemenu';

export default function Layout() {
  return (
    <div className="flex bg-primary-light w-[1920px] h-[1080px] layout">
      <Sidemenu focusKey="sidemenu" />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
