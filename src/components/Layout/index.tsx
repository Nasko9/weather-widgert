// Component
import Sidemenu from './Sidemenu';

interface ILayout {
  children: JSX.Element;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className=" flex bg-primary-light dark:bg-primary-dark w-[1920px] h-[1080px]">
      <Sidemenu focusKey="sidemenu" />
      <div className="flex-grow">{children}</div>
    </div>
  );
}

//! The previous solution was hardcoded and not scalable for the future
//? When the layout is created and we have a SIdebar element that changes the width, then flex grow is placed on the rest of the content
