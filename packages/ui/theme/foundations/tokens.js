import { mode } from '@chakra-ui/theme-tools';

export const getColorDefault = (props) =>
  mode(`${props.colorScheme}.500`, `${props.colorScheme}.400`)(props);
export const getBgMuted = (props) =>
  mode(`${props.colorScheme}.300`, `${props.colorScheme}.600`)(props);

export default {};
