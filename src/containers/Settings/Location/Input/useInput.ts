import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useRef, useState } from 'react';

export default function useInput() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { ref, focused } = useFocusable({
    onFocus: () => {
      if (inputRef.current) {
        return inputRef.current.focus();
      }
    },
    onBlur: () => {
      if (inputRef.current) {
        return inputRef.current.blur();
      }
    },
  });

  const inputHandler = (value: string) => {
    setInputValue(value);
  };
  return { inputValue, inputRef, inputHandler, ref, focused };
}
