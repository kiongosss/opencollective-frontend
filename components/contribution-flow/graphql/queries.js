import { gql } from '../../../lib/graphql/helpers';

import { contributionFlowAccountFieldsFragment } from './fragments';

export const contributionFlowAccountQuery = gql`
  query ContributionFlowAccount($collectiveSlug: String!, $tierId: Int, $includeTier: Boolean!) {
    account(slug: $collectiveSlug, throwIfMissing: false) {
      id
      ...ContributionFlowAccountFields
    }
    tier(tier: { legacyId: $tierId }, throwIfMissing: false) @include(if: $includeTier) {
      id
      legacyId
      type
      name
      slug
      description
      customFields
      availableQuantity
      singleTicket
      requireAddress
      maxQuantity
      endsAt
      amount {
        valueInCents
        currency
      }
      amountType
      minimumAmount {
        valueInCents
        currency
      }
      interval
      presets
    }
  }
  ${contributionFlowAccountFieldsFragment}
`;
