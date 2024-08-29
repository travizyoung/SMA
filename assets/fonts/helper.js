export const getFontFamily = (
  baseFont = 'Inter',
  size = '24',
  weight = 'normal',
) => {
  switch (weight) {
    case '100':
      return `${baseFont}_${size}-Thin`;
    case '200':
      return `${baseFont}_${size}-ExtraLight`;
    case '300':
      return `${baseFont}_${size}-Light`;
    case 'normal':
    case '400':
      return `${baseFont}_${size}-Regular`;
    case '500':
      return `${baseFont}_${size}-Medium`;
    case '600':
      return `${baseFont}_${size}-SemiBold`;
    case 'bold':
    case '700':
      return `${baseFont}_${size}-Bold`;
    case '800':
      return `${baseFont}_${size}-ExtraBold`;
    case '900':
      return `${baseFont}_${size}-Black`;
    default:
      return `${baseFont}_24pt-Regular`;
  }
};
