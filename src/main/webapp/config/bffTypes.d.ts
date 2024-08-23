/*
 * Copyright 2023 Uppsala University Library
 *
 * This file is part of DiVA Client.
 *
 *     DiVA Client is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     DiVA Client is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with DiVA Client.  If not, see <http://www.gnu.org/licenses/>.
 */

import { ActionLink } from '../utils/cora-data/CoraData';

export interface BFFRecordLink {
  name: string;
  recordType: string | undefined;
  id: string | undefined;
  readLink?: ActionLink;
}

export interface BFFBase {
  id: string;
}

export interface BFFRecordType extends BFFBase {
  metadataId: string;
  presentationViewId: string;
  listPresentationViewId: string;
}

export abstract interface BFFMetadata extends BFFBase {
  nameInData: string;
  type:
    | 'group'
    | 'numberVariable'
    | 'resourceLink'
    | 'collectionItem'
    | 'recordLink'
    | 'textVariable'
    | 'collectionVariable'
    | 'itemCollection';
  textId: string;
  defTextId: string;
}

export interface BFFAttributeReference {
  refCollectionVarId: string;
}

export interface BFFMetadataTextVariable extends BFFMetadata {
  regEx: string;
  finalValue?: string;
  attributeReferences?: BFFAttributeReference[];
}

export interface BFFMetadataNumberVariable extends BFFMetadata {
  min: string;
  max: string;
  warningMin: string;
  warningMax: string;
  numberOfDecimals: string;
  finalValue?: string;
  attributeReferences?: BFFAttributeReference[];
}

export interface BFFMetadataRecordLink extends BFFMetadata {
  linkedRecordType: string;
  finalValue?: string;
  attributeReferences?: BFFAttributeReference[];
}

export interface BFFMetadataCollectionVariable extends BFFMetadata {
  refCollection: string;
  finalValue?: string;
  attributeReferences?: BFFAttributeReference[];
}

export interface BFFCollectionItemReference {
  refCollectionItemId: string;
}

export interface BFFMetadataItemCollection extends BFFMetadata {
  collectionItemReferences: BFFCollectionItemReference[];
}

export interface BFFMetadataGroup extends BFFMetadata {
  attributeReferences?: BFFAttributeReference[];
  children: BFFMetadataChildReference[];
}

export interface BFFMetadataChildReference {
  childId: string;
  repeatMin: string;
  repeatMax: string;
  recordPartConstraint?: 'write' | 'readWrite';
}

export interface BFFPresentation extends BFFBase {
  type:
    | 'pGroup'
    | 'pVar'
    | 'pNumVar'
    | 'pCollVar'
    | 'container'
    | 'pRecordLink'
    | 'pResourceLink'
    | 'presentation';
  presentationOf: string;
  mode: 'input' | 'output';
  inputType?: string;
  emptyTextId?: string;
  specifiedLabelTextId?: string;
  showLabel?: string;
  inputFormat?: 'password';
  attributesToShow?: 'all' | 'selectable' | 'none';
}

export interface BFFPresentationRecordLink extends BFFPresentation {
  linkedRecordPresentations: BFFLinkedRecordPresentation[];
  search?: string;
}

export interface BFFLinkedRecordPresentation {
  presentedRecordType: string;
  presentationId: string;
}

export interface BFFPresentationContainer extends BFFPresentation {
  repeat: 'children' | 'this';
  presentationStyle?: string;
  children: BFFPresentationChildReference[];
}

type SurroundingContainerBase = Omit<BFFPresentationContainer, 'presentationOf'>;

export interface BFFPresentationSurroundingContainer extends SurroundingContainerBase {
  presentationsOf?: string[];
}

export interface BFFPresentationGroup extends BFFPresentation {
  presentationOf: string;
  presentationStyle?: string;
  children: BFFPresentationChildReference[];
  specifiedHeadlineTextId?: string;
  specifiedHeadlineLevel?: string;
  showHeadline?: string;
}

export interface BFFPresentationChildReference {
  childId: string;
  type: 'text' | 'presentation' | 'guiElement';
  minNumberOfRepeatingToShow?: string;
  textStyle?: string;
  childStyle?: string[];
  presentationSize?: string;
}

export interface BFFText extends BFFBase {
  sv: string;
  en?: string;
}

export interface BFFSearch extends BFFBase {
  metadataId: string;
  presentationId: string;
  recordTypeToSearchIn: string[];
  searchGroup: autocomplete | publicSearch;
  searchDefText: string;
  searchText: string;
}

export interface BFFGuiElement extends BFFBase {
  url?: string;
  elementText?: string;
  presentAs?: 'link' | 'image';
  type: string;
}

export interface BFFValidationType extends BFFBase {
  validatesRecordTypeId: string;
  newMetadataGroupId: string;
  metadataGroupId: string;
  newPresentationGroupId: string;
  presentationGroupId: string;
  nameTextId: string;
  defTextId: string;
}

export interface BFFLoginUnit extends BFFBase {
  login: string;
  loginDescription: string;
}

export interface BFFLogin extends BFFBase {
  type: string;
}

export interface BFFLoginWebRedirect extends BFFLogin {
  loginName: string;
  url: string;
}
export interface BFFLoginPassword extends BFFLogin {
  viewDefinition: string;
  viewPresentation: unknown;
  description: string;
}
