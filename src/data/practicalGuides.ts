


import { PracticalGuide } from '../types/practicalGuide';
import { amicableDivorceGuide } from './practicalGuides/amicableDivorce';
import { childCustodyGuide } from './practicalGuides/childCustody';
import { assetDivisionGuide } from './practicalGuides/assetDivision';
import { alimonyGuide } from './practicalGuides/alimony';
import { conventionGuide } from './practicalGuides/convention';
import { checklistDemarcheGuide } from './practicalGuides/checklistDemarche';
import { separationGuide} from './practicalGuides/separationGui';
import { administrativeDocsGuide} from './practicalGuides/administrativeDocs';
import { emotionalHealingGuide } from './practicalGuides/emotionalHealing';
import { alternateParentingGuide } from './practicalGuides/alternateParenting';
import { livingAloneGuide } from './practicalGuides/livingAlone';
import { selfConfidenceGuide } from './practicalGuides/selfConfidence';
import { selfDiscoveryGuide } from './practicalGuides/selfDiscovery';
import { activeListeningGuide } from './practicalGuides/activeListening';
import { conflictResolutionGuide } from './practicalGuides/conflictResolution';
import { couplesCommunicationGuide } from './practicalGuides/couplesCommunication';
import { emotionalConnectionGuide } from './practicalGuides/emotionalConnection';

export const practicalGuides: PracticalGuide[] = [
  // Guides de séparation
  amicableDivorceGuide,
  childCustodyGuide,
  assetDivisionGuide,
  alimonyGuide,
  conventionGuide,
  checklistDemarcheGuide,
  separationGuide,
  administrativeDocsGuide,
  
  // Guides de reconstruction
  emotionalHealingGuide,
  alternateParentingGuide,
  livingAloneGuide,
  selfConfidenceGuide,
  selfDiscoveryGuide,

  // Guide pour Sauver son couple
  activeListeningGuide,
  conflictResolutionGuide,
  couplesCommunicationGuide,
  emotionalConnectionGuide,
];