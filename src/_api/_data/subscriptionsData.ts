import { keyBy as _keyBy } from 'lodash'
import Subscription from '../_types/Subscription'

const list: Subscription[] = [
  {
    id: 1,
    organizationId: 1,
    subscriptionPlanId: 1,
  },
]

const byId: { [key: number]: Subscription } = _keyBy(list, 'id')

const subscriptionPlansData = {
  list,
  byId,
}

export default subscriptionPlansData
