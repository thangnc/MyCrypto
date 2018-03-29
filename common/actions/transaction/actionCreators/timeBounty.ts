import { SetCurrentTimeBountyAction } from '../actionTypes/timeBounty';
import { TypeKeys } from '../';

type TSetCurrentTimeBounty = typeof setCurrentTimeBounty;
const setCurrentTimeBounty = (
  payload: SetCurrentTimeBountyAction['payload']
): SetCurrentTimeBountyAction => ({
  type: TypeKeys.CURRENT_TIME_BOUNTY_SET,
  payload
});

export { setCurrentTimeBounty, TSetCurrentTimeBounty };
