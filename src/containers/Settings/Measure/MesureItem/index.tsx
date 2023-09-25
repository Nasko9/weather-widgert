import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

// Components
import SettingContainer from 'components/Layout/SettingContainer';

interface IMeasureItem {
  sign: string;
}

export default function MeasureItem({ sign }: IMeasureItem) {
  const { ref, focused } = useFocusable({
    onEnterPress: () => {
      console.log(sign, 'sign pressed');
    },
  });

  return (
    <SettingContainer focused={focused}>
      <p ref={ref} className="text-6xl font-bold p-2">
        {sign}
      </p>
    </SettingContainer>
  );
}
