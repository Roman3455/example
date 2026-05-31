import { Link } from 'expo-router';
import { Text } from 'react-native';
import { useCustomLinkStyles } from './CustomLink.styles';
import { CustomLinkProps } from './CustomLink.types';

export function CustomLink(props: CustomLinkProps) {
  const { text, ...rest } = props;
  return (
    <Link style={useCustomLinkStyles.link} {...rest}>
      <Text>{text}</Text>
    </Link>
  );
}
