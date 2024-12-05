import { PracticalGuide } from '../../types/practicalGuide';
import { amicableDivorceGuide } from './amicableDivorce';
import { childCustodyGuide } from './childCustody';
import { assetDivisionGuide } from './assetDivision';
import { emotionalHealingGuide } from './emotionalHealing';
import { selfConfidenceGuide } from './selfConfidence';
import { selfDiscoveryGuide } from './selfDiscovery';
import { activeListeningGuide } from './activeListening';
import { conflictResolutionGuide } from './conflictResolution';
import { emotionalConnectionGuide } from './emotionalConnection';
import { couplesCommunicationGuide } from './couplesCommunication';
import { alternateParentingGuide } from './alternateParenting';

export const practicalGuides: PracticalGuide[] = [
  // Guides de séparation
  amicableDivorceGuide,
  childCustodyGuide,
  assetDivisionGuide,

  
  // Guides de reconstruction
  emotionalHealingGuide,
  selfConfidenceGuide,
  selfDiscoveryGuide,
  alternateParentingGuide,
  
  // Guides pour sauver son couple
  activeListeningGuide,
  conflictResolutionGuide,
  emotionalConnectionGuide,
  couplesCommunicationGuide
];