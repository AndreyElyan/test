import { Types } from './index';

export function searchRequest(search) {
  return {
    type: Types.SEARCH_REQUEST,
    payload: { search },
  };
}
