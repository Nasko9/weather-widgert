import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Api
import { getIpAdress } from 'api/ip';
import { getLocationName } from 'api/location';

export default function useUserLocation() {
  const [ip, setIp] = useState<string | null>(null);

  useQuery(['ipAdress'], () => getIpAdress(), {
    onSuccess: (data) => {
      setIp(data?.data?.ip);
    },
  });

  const { data: userLocation } = useQuery(
    ['locationName', ip],
    () => getLocationName(ip!),
    { enabled: !!ip },
  );

  return { userCity: userLocation?.data?.city };
}
