import Entity, { EntityId } from './Entity'
import User from './User'
import { SubscriptionPlanId } from './SubscriptionPlan'
import UserToOrganization from './UserToOrganization'

export type OrganizationId = EntityId

export interface OrganizationSubmissionData {
  name: string
  username?: string
}

export default interface Organization extends OrganizationSubmissionData, Entity {
  id: OrganizationId
  users?: User[]
  organizationUsers?: UserToOrganization[]
  subscriptionPlanId: SubscriptionPlanId
}
