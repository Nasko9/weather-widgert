import { ReactNode } from 'react';

interface ICardContainer {
  children: ReactNode;
  focused?: boolean;
}

export default function CardContainer({ children, focused }: ICardContainer) {
  return (
    <div
      className={`bg-element-light dark:bg-element-dark text-text-light dark:text-text-dark drop-shadow-md rounded-2xl px-12 py-8 flex items-center ${
        focused ? 'scale-110' : 'scale-100'
      }`}
    >
      {children}
    </div>
  );
}
