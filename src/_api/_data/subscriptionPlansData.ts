import { keyBy as _keyBy } from 'lodash'
import SubscriptionPlan from '../_types/SubscriptionPlan'

const list: SubscriptionPlan[] = [
  {
    id: 1,
    name: 'Trial',
    price: 0,
    status: 'active',
  },
  {
    id: 2,
    name: 'Pro',
    price: 30,
    status: 'active',
  },
  {
    id: 3,
    name: 'Silver',
    price: 59,
    status: 'active',
  },
  {
    id: 4,
    name: 'Gold',
    price: 99,
    status: 'active',
  },
]

const byId: { [key: number]: SubscriptionPlan } = _keyBy(list, 'id')

const subscriptionPlansData = {
  list,
  byId,
}

export default subscriptionPlansData
