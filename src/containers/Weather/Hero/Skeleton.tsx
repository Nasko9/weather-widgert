import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// animate-pulse
export default function Skeleton() {
  return (
    <div className=" bg-sidebar-light dark:bg-sidebar-dark drop-shadow-md rounded-2xl px-12 py-8 flex flex-col gap-6">
      <div className="flex justify-end">
        <div className="bg-primary-light w-20 h-4 rounded-md animate-pulse"></div>
      </div>

      <div className="flex gap-24 items-center pb-6">
        <FontAwesomeIcon
          icon={faCloudSun}
          className="w-52 h-52 animate-pulse text-icon-dark"
        />
        <div>
          <div className="flex flex-col items-center gap-7">
            <div className="bg-primary-light w-32 h-5 rounded-md animate-pulse"></div>
            <div className="bg-primary-light w-56 h-32 rounded-lg animate-pulse"></div>
            <div className="flex gap-10 text-2xl">
              <div>
                <div className="bg-primary-light w-32 h-4 rounded-md animate-pulse mb-3"></div>
                <div className="bg-primary-light w-32 h-4 rounded-md animate-pulse"></div>
              </div>
              <div>
                <div className="bg-primary-light w-32 h-4 rounded-md animate-pulse mb-3"></div>
                <div className="bg-primary-light w-32 h-4 rounded-md animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
