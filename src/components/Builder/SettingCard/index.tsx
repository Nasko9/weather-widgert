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
      className={`bg-primary-light text-text-light drop-shadow-md rounded-2xl px-4 py-2 flex items-center settingContainer ${
        focused
          ? 'border-2 border-[#001D3D] focused '
          : 'border-2 border-[#F3E8CC] unfocused'
      }`}
    >
      {children}
    </div>
  );
}
