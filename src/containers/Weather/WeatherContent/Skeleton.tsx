import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkeletonCard() {
  return (
    <div className="bg-sidebar-light drop-shadow-md rounded-2xl px-12 py-8 skeletonCardContainer">
      <div className="flex flex-col items-center gap-5">
        <div className=" bg-primary-light w-24 h-4 rounded-md animate-pulse"></div>
        <FontAwesomeIcon
          icon={faCloudSun}
          className="w-32 h-32 animate-pulse text-icon-dark"
        />
        <div className="bg-primary-light w-32 h-10 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
}

export default function Skeleton() {
  const cardList = [];

  for (let i = 0; i < 5; i++) {
    cardList.push(<SkeletonCard key={i} />);
  }

  return <div className="flex gap-10">{cardList}</div>;
}
