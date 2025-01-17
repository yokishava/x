import { createMutableSchema } from '@empathyco/x-adapter';
import { QuerySuggestionsRequest } from '@empathyco/x-types';
// eslint-disable-next-line max-len
import { PlatformQuerySuggestionsRequest } from '../../types/requests/query-suggestions-request.model';

export const querySuggestionsRequestSchema = createMutableSchema<
  QuerySuggestionsRequest,
  PlatformQuerySuggestionsRequest
>({
  query: 'query',
  start: 'start',
  rows: 'rows',
  extraParams: 'extraParams'
});
