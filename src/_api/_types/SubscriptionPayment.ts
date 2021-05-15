import Entity, { EntityId } from './Entity'
import { SubscriptionPlanId } from './SubscriptionPlan'
import { OrganizationId } from './Organization'

export type SubscriptionPaymentId = EntityId

export default interface SubscriptionPayment extends Entity {
  id: SubscriptionPaymentId
  name?: string
  amount: number
  status?: 'processed' | 'rejected'
  subscriptionPlanId: SubscriptionPlanId
  organizationId: OrganizationId
}
