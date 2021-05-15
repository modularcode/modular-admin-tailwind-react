import { keyBy } from 'lodash'
import Organization from '../_types/Organization'
import subscriptionPlansData from './subscriptionPlansData'

const list: Organization[] = [
  {
    id: 1,
    name: 'ModularCode',
    subscriptionPlanId: subscriptionPlansData.list[1].id,
  },
  {
    id: 2,
    name: 'Cool LLC',
    subscriptionPlanId: subscriptionPlansData.list[1].id,
  },
  {
    id: 3,
    name: 'Other LLC',
    subscriptionPlanId: subscriptionPlansData.list[3].id,
  },
]

const byId: { [key: number]: Organization } = keyBy(list, 'id')

const organizationsData = {
  list,
  byId,
}

export default organizationsData
