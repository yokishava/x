/**
 * Returns the default styles for component `suggestion group button`.
 *
 * @returns The {@link CssStyleOptions} for the component.
 */
// eslint-disable-next-line  @typescript-eslint/explicit-function-return-type
export function suggestionGroupButtonDefault() {
  return {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    alignContent: 'center',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: 'currentColor',
    minHeight: 'inherit',
    aspectRatio: '1',
    '&:hover': {
      transform: 'scale(1.2)'
    },

    /*To fix icon baseline alignment needs text to know the baseline*/
    '&::after': {
      content: `'|'`,
      width: 0,
      visibility: 'hidden'
    }
  };
}
