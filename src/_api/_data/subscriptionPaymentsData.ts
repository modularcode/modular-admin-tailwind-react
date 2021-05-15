import { /* get as _get, */ keyBy as _keyBy } from 'lodash'
import SubscriptionPayment from '../_types/SubscriptionPayment'

const list: SubscriptionPayment[] = []

const byId: { [key: number]: SubscriptionPayment } = _keyBy(list, 'id')

const subscriptionPlansData = {
  list,
  byId,
}

export default subscriptionPlansData
