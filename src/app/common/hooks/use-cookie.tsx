import { useCallback, useState } from 'react';
import Cookies from 'js-cookie';

const useCookie = (
  name: string,
): [string | undefined, (newValue: string, attrs: Cookies.CookieAttributes) => void, () => void] => {
  const [value, setValue] = useState(Cookies.get(name));

  const setCookie = useCallback(
    (newValue: string, attrs: Cookies.CookieAttributes = {}) => {
      Cookies.set(name, newValue, attrs);
      setValue(newValue);
    },
    [name],
  );

  const removeCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(undefined);
  }, [name]);

  return [value, setCookie, removeCookie];
};

export default useCookie;
