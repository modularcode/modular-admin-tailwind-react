import Entity, { EntityId } from './Entity'
import { OrganizationId } from './Organization'
import { SubscriptionPlanId } from './SubscriptionPlan'

export type SubscriptionId = EntityId

export interface SubscriptionPlanSubmissionData {
  name?: string
  price: number
  status?: 'active' | 'disabled'
}

export default interface Subscription extends Entity {
  id: SubscriptionId
  organizationId: OrganizationId
  subscriptionPlanId: SubscriptionPlanId
}
