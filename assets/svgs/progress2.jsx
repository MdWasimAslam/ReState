import Svg, {Path,G,Circle } from 'react-native-svg';

export default function Progress2(props) {
  return (
    <Svg width="235" height="16" viewBox="0 0 235 16" fill={props.color} xmlns="http://www.w3.org/2000/svg">
    <Circle cx="94.5" cy="8.22266" r="5.5" fill="#D2E0FF"/>
    <Circle cx="117.5" cy="8.22266" r="7.5" fill="#246BFD"/>
    <Circle cx="140.5" cy="8.22266" r="5.5" fill="#D2E0FF"/>
    </Svg>
    

  );
}
