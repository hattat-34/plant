import {Dimensions, PixelRatio} from 'react-native';

type ScaleBase = 'width' | 'height';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Scales are based on Figma design
const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

function normalize(size: number, based: ScaleBase = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const widthPixel = (size: number) => normalize(size, 'width');
const heightPixel = (size: number) => normalize(size, 'height');

export {widthPixel, heightPixel, widthPixel as fontPixel};
