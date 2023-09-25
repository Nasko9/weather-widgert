import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkeletonCard() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#001D3D] dark:bg-[#F3E8CC] w-24 h-4 rounded-md animate-pulse"></div>
      <FontAwesomeIcon
        icon={faCloudSun}
        className="w-16 h-16 animate-pulse text-text-light dark:text-text-dark"
      />
      <div className="bg-[#001D3D] dark:bg-[#F3E8CC] w-28 h-10 rounded-lg animate-pulse"></div>
    </div>
  );
}

export default function Skeleton({ count }: { count: number }) {
  const cardList = [];

  for (let i = 0; i < count; i++) {
    cardList.push(<SkeletonCard key={i} />);
  }

  return <div className="flex gap-10">{cardList}</div>;
}
