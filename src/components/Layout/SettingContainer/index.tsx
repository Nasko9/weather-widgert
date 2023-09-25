import { ReactNode } from 'react';

interface ISettingContainer {
  children: ReactNode;
  focused?: boolean;
}

export default function SettingContainer({
  children,
  focused,
}: ISettingContainer) {
  return (
    <div
      className={`bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark drop-shadow-md rounded-2xl px-4 py-2 flex items-center ${
        focused
          ? 'border-2 border-[#001D3D] dark:border-[#F3E8CC]'
          : 'border-2 border-[#F3E8CC] dark:border-[#332F2B]'
      }`}
    >
      {children}
    </div>
  );
}
