import { TailwindHelpers } from '../../../types';
import { alignIconWithBaseline } from '../icon/utils/align-icon-with-baseline';
import { suggestionSizes } from './sizes';

/**
 * Returns the default styles for component `suggestion`.
 *
 * @param helpers - The {@link TailwindHelpers} to generate CSS.
 * @returns The {@link CssStyleOptions} for the component.
 */
// eslint-disable-next-line  @typescript-eslint/explicit-function-return-type
export function suggestionDefault(helpers: TailwindHelpers) {
  const { theme } = helpers;
  return {
    fontFamily: theme('fontFamily.main'),
    fontWeight: theme('fontWeight.regular'),

    display: 'grid',
    gridAutoFlow: 'column',
    alignItems: 'baseline',
    alignContent: 'center',
    boxSizing: 'border-box',
    cursor: 'pointer',
    textAlign: 'start',

    ...suggestionSizes(helpers).md,

    color: theme('colors.neutral.90'),

    '&:hover': {
      textDecoration: 'underline'
    },

    ...alignIconWithBaseline()
  };
}
