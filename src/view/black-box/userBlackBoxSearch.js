import { usePagingSearch } from '@/hook';
import { DESK_APP_INDEX } from '@/service';

export function userBlackBoxSearch() {
  return {
    ...usePagingSearch(DESK_APP_INDEX),
  };
}
