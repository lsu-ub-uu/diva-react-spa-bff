import {
  BFFMetadataGroup,
  BFFMetadataTextVariable,
  BFFValidationType,
  BFFPresentation,
  BFFPresentationGroup,
  BFFMetadataNumberVariable,
  BFFMetadataCollectionVariable,
  BFFMetadata,
  BFFMetadataItemCollection,
  BFFMetadataRecordLink,
  BFFPresentationRecordLink,
  BFFPresentationSurroundingContainer,
  BFFGuiElement,
  BFFPresentationContainer
} from '../../config/bffTypes';

export const someValidationTypeData: BFFValidationType = {
  id: 'someValidationTypeId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroupId',
  newPresentationGroupId: 'pSomeNewMetadataGroupId',
  // Update/Edit
  metadataGroupId: 'someEditMetadataGroupId',
  presentationGroupId: 'pSomeEditMetadataGroupId',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someValidationTypeForMissingChildIdTypeData: BFFValidationType = {
  id: 'someValidationTypeForMissingChildIdTypeId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroupForMissingChildIdId',
  newPresentationGroupId: 'pSomeNewMetadataGroupForMissingChildIdId',
  // Update/Edit
  metadataGroupId: 'someEditMetadataGroupForMissingChildIdId',
  presentationGroupId: 'pSomeEditMetadataGroupForMissingChildIdId',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataGroupForMissingChildId: BFFMetadataGroup = {
  id: 'someNewMetadataGroupForMissingChildIdId',
  dataDivider: 'someDataDivider',
  nameInData: 'divaOutput',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'mainTitle',
      repeatMin: '0',
      repeatMax: '1'
    },
    {
      childId: 'exampleCollectionVarId',
      repeatMin: '0',
      repeatMax: '1'
    }
  ]
};

export const someEditMetadataGroupForMissingChildIdId: BFFMetadataGroup = {
  id: 'someEditMetadataGroupForMissingChildIdId',
  dataDivider: 'someDataDivider',
  nameInData: 'divaOutput',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'mainTitle',
      repeatMin: '0',
      repeatMax: '1'
    },
    {
      childId: 'exampleCollectionVarId',
      repeatMin: '0',
      repeatMax: '1'
    }
  ]
};

export const pSomeNewMetadataGroupForMissingChildId: BFFPresentationGroup = {
  id: 'pSomeNewMetadataGroupForMissingChildIdId',
  type: 'pGroup',
  presentationOf: 'someNewMetadataGroupForMissingChildIdId', // metadata
  mode: 'input',
  presentationStyle: 'card',
  children: [
    {
      childId: 'pSomeOtherMetadataCollectionVariableWithMissingChildIdId',
      type: 'presentation',
      childStyle: ['twelveChildStyle']
    } // pSomeMetadataCollectionVariableId
  ]
};

export const someManuscriptValidationTypeData: BFFValidationType = {
  id: 'manuscript',
  validatesRecordTypeId: 'divaOutput',
  // New
  newMetadataGroupId: '',
  newPresentationGroupId: '',
  // Update/Edit
  metadataGroupId: 'someManuscriptEditMetadataGroupId',
  presentationGroupId: '',
  nameTextId: '',
  defTextId: ''
};

export const someManuscriptEditMetadataGroup: BFFMetadataGroup = {
  id: 'someManuscriptEditMetadataGroupId',
  dataDivider: 'someDataDivider',
  nameInData: 'divaOutput',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'alternativeTitle',
      repeatMin: '0',
      repeatMax: '1'
    }
  ]
};

export const someAlternativeTitleMetadataChildGroup: BFFMetadataGroup = {
  id: 'alternativeTitle',
  nameInData: 'alternativeTitle',
  dataDivider: 'someDataDivider',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'mainTitle',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'subTitle',
      repeatMin: '0',
      repeatMax: '1'
    }
  ]
};

export const someMainTitleTextVariable: BFFMetadataTextVariable = {
  id: 'mainTitle',
  dataDivider: 'someDataDivider',
  nameInData: 'mainTitle',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someSubTitleTextVariable: BFFMetadataTextVariable = {
  id: 'subTitle',
  dataDivider: 'someDataDivider',
  nameInData: 'subTitle',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someNewMetadataGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNewMetadataGroupNameInData',
  type: 'group',
  textId: 'textId345',
  defTextId: 'defTextId678',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ],
  children: [
    {
      childId: 'someRecordInfoId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataTextVariableId',
      repeatMin: '1',
      repeatMax: '3'
    },
    {
      childId: 'someMetadataTextVariable2Id',
      repeatMin: '1',
      repeatMax: 'X'
    },
    {
      childId: 'someMetadataTextVariable3Id',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataTextVariable4Id',
      repeatMin: '1',
      repeatMax: '3'
    },
    {
      childId: 'someMetadataTextVariable5Id',
      repeatMin: '1',
      repeatMax: '3'
    },
    {
      childId: 'someMetadataTextVariable6Id',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataNumberVarId',
      repeatMin: '0',
      repeatMax: '1'
    },
    {
      childId: 'exampleCollectionVarId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataCollectionVariableWithAttributeId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataNumberWithAttributeVarId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataTextVariableWithAttributeVarId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataChildGroupId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'nationalSubjectCategoryLinkId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someNewRecordLinkId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataChildGroupWithSpecifiedHeadlineTextId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataChildGroupWithShowHeadlineFalseId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someManuscriptGroupId',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const someEditMetadataGroup: BFFMetadataGroup = {
  id: 'someEditMetadataGroupId',
  dataDivider: 'someDataDivider',
  nameInData: 'someEditMetadataGroupNameInData',
  type: 'group',
  textId: 'textId345',
  defTextId: 'defTextId678',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ],
  children: [
    {
      childId: 'someRecordInfoId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataTextVariableId',
      repeatMin: '1',
      repeatMax: '3'
    },
    {
      childId: 'someMetadataTextVariable2Id',
      repeatMin: '1',
      repeatMax: 'X'
    },
    {
      childId: 'someMetadataTextVariable3Id',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataTextVariable4Id',
      repeatMin: '1',
      repeatMax: '3'
    },
    {
      childId: 'someMetadataTextVariable5Id',
      repeatMin: '1',
      repeatMax: '3'
    },
    {
      childId: 'someMetadataNumberVarId',
      repeatMin: '0',
      repeatMax: '1'
    },
    {
      childId: 'exampleCollectionVarId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataCollectionVariableWithAttributeId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataNumberWithAttributeVarId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataTextVariableWithAttributeVarId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataChildGroupId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'nationalSubjectCategoryLinkId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataChildGroupWithSpecifiedHeadlineTextId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataChildGroupWithShowHeadlineFalseId',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const someMetadataChildGroup: BFFMetadataGroup = {
  id: 'someMetadataChildGroupId',
  dataDivider: 'someDataDivider',
  nameInData: 'someChildGroupNameInData',
  type: 'group',
  textId: 'someChildGroupTextId',
  defTextId: 'someChildGroupDefTextId',
  children: [
    {
      childId: 'someMetadataTextVariableId',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const someMetadataChildGroupWithSpecifiedHeadlineText: BFFMetadataGroup = {
  id: 'someMetadataChildGroupWithSpecifiedHeadlineTextId',
  dataDivider: 'someDataDivider',
  nameInData: 'someMetadataChildGroupWithSpecifiedHeadlineTextNameInData',
  type: 'group',
  textId: 'someChildGroupTextId',
  defTextId: 'someChildGroupDefTextId',
  children: [
    {
      childId: 'someMetadataTextVariableId',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};
export const someMetadataChildGroupWithShowHeadlineFalse: BFFMetadataGroup = {
  id: 'someMetadataChildGroupWithShowHeadlineFalseId',
  dataDivider: 'someDataDivider',
  nameInData: 'someMetadataChildGroupWithShowHeadlineFalseNameInData',
  type: 'group',
  textId: 'someChildGroupTextId',
  defTextId: 'someChildGroupDefTextId',
  children: [
    {
      childId: 'someMetadataTextVariableId',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const someMetadataTextVariable: BFFMetadataTextVariable = {
  id: 'someMetadataTextVariableId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInData',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someMetadataTextVariable2: BFFMetadataTextVariable = {
  id: 'someMetadataTextVariable2Id',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInData2',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someMetadataTextVariable3: BFFMetadataTextVariable = {
  id: 'someMetadataTextVariable3Id',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInData3',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex',
  finalValue: 'someFinalValue'
};
export const someMetadataTextVariable4: BFFMetadataTextVariable = {
  id: 'someMetadataTextVariable4Id',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInData4',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};
export const someMetadataTextVariable5: BFFMetadataTextVariable = {
  id: 'someMetadataTextVariable5Id',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInData5',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};
export const someMetadataTextVariable6: BFFMetadataTextVariable = {
  id: 'someMetadataTextVariable6Id',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInData6',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someMetadataTextVariableWithAttributeVar: BFFMetadataTextVariable = {
  id: 'someMetadataTextVariableWithAttributeVarId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInDataTextWithAttrib',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ]
};

export const someMetadataNumberVar: BFFMetadataNumberVariable = {
  id: 'someMetadataNumberVarId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInDataNumberVar',
  type: 'numberVariable',
  textId: 'someNumberVarTextId',
  defTextId: 'someNumberVarDefTextId',
  min: '0',
  max: '20',
  warningMin: '2',
  warningMax: '10',
  numberOfDecimals: '0'
};

export const someMetadataNumberVarWithAttribute: BFFMetadataNumberVariable = {
  id: 'someMetadataNumberWithAttributeVarId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInDataNumberWithAttributeVar',
  type: 'numberVariable',
  textId: 'someNumberVarTextId',
  defTextId: 'someNumberVarDefTextId',
  min: '0',
  max: '20',
  warningMin: '2',
  warningMax: '10',
  numberOfDecimals: '0',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ]
};
export const someMetadataNumberVarWithAttributeAndOtherId: BFFMetadataNumberVariable = {
  id: 'someMetadataNumberWithAttributeVar2Id',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInDataNumberWithAttributeVar',
  type: 'numberVariable',
  textId: 'someNumberVarTextId',
  defTextId: 'someNumberVarDefTextId',
  min: '0',
  max: '20',
  warningMin: '2',
  warningMax: '10',
  numberOfDecimals: '0',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ]
};
export const someMetadataNumberVarWithOtherAttributeId: BFFMetadataNumberVariable = {
  id: 'someMetadataNumberWithAttributeVar2Id',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInDataNumberWithAttributeVar',
  type: 'numberVariable',
  textId: 'someNumberVarTextId',
  defTextId: 'someNumberVarDefTextId',
  min: '0',
  max: '20',
  warningMin: '2',
  warningMax: '10',
  numberOfDecimals: '0',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarOtherId'
    }
  ]
};

export const someMetadataNumberVarWithoutAttribute: BFFMetadataNumberVariable = {
  id: 'someMetadataNumberVarWithoutAttributeId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInDataNumberWithAttributeVar',
  type: 'numberVariable',
  textId: 'someNumberVarTextId',
  defTextId: 'someNumberVarDefTextId',
  min: '0',
  max: '20',
  warningMin: '2',
  warningMax: '10',
  numberOfDecimals: '0'
};

export const someMetadataCollectionVariable: BFFMetadataCollectionVariable = {
  id: 'exampleCollectionVarId',
  dataDivider: 'someDataDivider',
  nameInData: 'colour',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  finalValue: 'pink' // added this for now
};
export const someMetadataCollectionVariable2: BFFMetadataCollectionVariable = {
  id: 'exampleCollectionVarId2',
  dataDivider: 'someDataDivider',
  nameInData: 'colour2',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  finalValue: 'pink' // added this for now
};
export const someMetadataCollectionWithOtherIdVariable: BFFMetadataCollectionVariable = {
  id: 'exampleCollectionVarOtherId',
  dataDivider: 'someDataDivider',
  nameInData: 'colour',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  finalValue: 'pink' // added this for now
};

export const exampleOtherCollectionVarId: BFFMetadataCollectionVariable = {
  id: 'exampleOtherCollectionVarId',
  dataDivider: 'someDataDivider',
  nameInData: 'colour',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  finalValue: 'pink' // added this for now
};

export const someMetadataCollectionVariableWithAttribute: BFFMetadataCollectionVariable = {
  id: 'someMetadataCollectionVariableWithAttributeId',
  dataDivider: 'someDataDivider',
  nameInData: 'colourAttributeVar',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ]
};

export const someMetadataCollectionVariableWithTwoAttributes: BFFMetadataCollectionVariable = {
  id: 'someMetadataCollectionVariableWithAttributeId2',
  dataDivider: 'someDataDivider',
  nameInData: 'colourAttributeVar',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    },
    {
      refCollectionVarId: 'exampleCollectionVarId2'
    }
  ]
};

export const someMetadataItemCollection: BFFMetadataItemCollection = {
  id: 'exampleCollection',
  dataDivider: 'someDataDivider',
  nameInData: 'colour',
  type: 'itemCollection',
  textId: 'exampleCollectionText',
  defTextId: 'exampleCollectionDefText',
  collectionItemReferences: [
    { refCollectionItemId: 'exampleBlueItem' },
    { refCollectionItemId: 'examplePinkItem' },
    { refCollectionItemId: 'exampleYellowItem' }
  ]
};
export const someMetadataCollectionItemBlue: BFFMetadata = {
  id: 'exampleBlueItem',
  dataDivider: 'someDataDivider',
  nameInData: 'blue',
  type: 'collectionItem',
  textId: 'exampleBlueItemText',
  defTextId: 'exampleBlueItemDefText'
};

export const someMetadataCollectionItemPink: BFFMetadata = {
  id: 'examplePinkItem',
  dataDivider: 'someDataDivider',
  nameInData: 'pink',
  type: 'collectionItem',
  textId: 'examplePinkItemText',
  defTextId: 'examplePinkItemDefText'
};

export const someMetadataCollectionItemYellow: BFFMetadata = {
  id: 'exampleYellowItem',
  dataDivider: 'someDataDivider',
  nameInData: 'yellow',
  type: 'collectionItem',
  textId: 'exampleYellowItemText',
  defTextId: 'exampleYellowItemDefText'
};

export const someRecordInfo: BFFMetadataGroup = {
  id: 'someRecordInfoId',
  dataDivider: 'someDataDivider',
  nameInData: 'someRecordInfoNameInData',
  type: 'group',
  textId: 'textId345',
  defTextId: 'defTextId678',
  children: [
    {
      childId: 'someMetadataTextVariableId', // change this!
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const pSomeMetadataNumberVar: BFFPresentation = {
  id: 'pSomeMetadataNumberVariableId',
  presentationOf: 'someMetadataNumberVarId',
  mode: 'input',
  type: 'pNumVar',
  emptyTextId: 'someEmptyTextId',
  showLabel: 'false'
};

export const pSomeMetadataNumberWithAttributeVar: BFFPresentation = {
  id: 'pSomeMetadataNumberWithAttributeVarId',
  presentationOf: 'someMetadataNumberWithAttributeVarId',
  mode: 'input',
  type: 'pNumVar',
  emptyTextId: 'someEmptyTextId',
  attributesToShow: 'none'
};

export const pSomeMetadataTextVariable: BFFPresentation = {
  id: 'pSomeMetadataTextVariableId',
  presentationOf: 'someMetadataTextVariableId',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};

export const pSomeMetadataTextVariableWithAttributeVar: BFFPresentation = {
  id: 'pSomeMetadataTextVariableWithAttributeVarId',
  presentationOf: 'someMetadataTextVariableWithAttributeVarId',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};

// used for repeatMax X (infinite test)

export const pSomeMetadataTextVariable2: BFFPresentation = {
  id: 'pSomeMetadataTextVariable2Id',
  presentationOf: 'someMetadataTextVariable2Id',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId',
  specifiedLabelTextId: 'someOtherLabelTextId'
};
export const pSomeMetadataTextVariable3: BFFPresentation = {
  id: 'pSomeMetadataTextVariable3Id',
  presentationOf: 'someMetadataTextVariable3Id',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};
export const pSomeMetadataTextVariable4: BFFPresentation = {
  id: 'pSomeMetadataTextVariable4Id',
  presentationOf: 'someMetadataTextVariable4Id',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};
export const pSomeMetadataTextVariable5: BFFPresentation = {
  id: 'pSomeMetadataTextVariable5Id',
  presentationOf: 'someMetadataTextVariable5Id',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};
export const pSomeMetadataTextVariable6: BFFPresentation = {
  id: 'pSomeMetadataTextVariable6Id',
  presentationOf: 'someMetadataTextVariable6Id',
  mode: 'output',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};

export const pSomeMetadataCollectionVariable: BFFPresentation = {
  id: 'pSomeMetadataCollectionVariableId',
  presentationOf: 'exampleCollectionVarId',
  mode: 'input',
  type: 'pCollVar',
  emptyTextId: 'someEmptyTextId'
};

export const pSomeOtherMetadataCollectionVariableWithMissingChildId: BFFPresentation = {
  id: 'pSomeOtherMetadataCollectionVariableWithMissingChildIdId',
  presentationOf: 'exampleOtherCollectionVarId',
  mode: 'input',
  type: 'pCollVar',
  emptyTextId: 'someEmptyTextId'
};

export const pSomeMetadataCollectionVariableWithAttribute: BFFPresentation = {
  id: 'pSomeMetadataCollectionVariableWithAttributeId',
  presentationOf: 'someMetadataCollectionVariableWithAttributeId',
  mode: 'input',
  type: 'pCollVar',
  emptyTextId: 'someEmptyTextId'
};

export const pSomeMetadataChildGroup: BFFPresentationGroup = {
  id: 'pSomeMetadataChildGroupId',
  type: 'pGroup',
  presentationOf: 'someMetadataChildGroupId', // metadata
  presentationStyle: 'someMetadataChildGroupPresentationStyle',
  mode: 'input',
  children: [
    {
      childId: 'pSomeMetadataTextVariableId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    }
  ]
};
export const pSomeMetadataChildGroupWithSpecifiedHeadlineText: BFFPresentationGroup = {
  id: 'pSomeMetadataChildGroupWithSpecifiedHeadlineTextId',
  type: 'pGroup',
  presentationOf: 'someMetadataChildGroupWithSpecifiedHeadlineTextId', // metadata
  presentationStyle: 'someMetadataChildGroupPresentationStyle',
  mode: 'input',
  specifiedHeadlineTextId: 'someOtherHeadlineTextId',
  specifiedHeadlineLevel: 'h3',
  children: [
    {
      childId: 'pSomeMetadataTextVariableId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    }
  ]
};
export const pSomeMetadataChildGroupWithShowHeadlineFalse: BFFPresentationGroup = {
  id: 'pSomeMetadataChildGroupWithShowHeadlineFalseId',
  type: 'pGroup',
  presentationOf: 'someMetadataChildGroupWithShowHeadlineFalseId', // metadata
  presentationStyle: 'someMetadataChildGroupPresentationStyle',
  mode: 'input',
  showHeadline: 'false',
  children: [
    {
      childId: 'pSomeMetadataTextVariableId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    }
  ]
};

export const pSomeNewMetadataGroup: BFFPresentationGroup = {
  id: 'pSomeNewMetadataGroupId',
  type: 'pGroup',
  presentationOf: 'someNewMetadataGroupId', // metadata
  mode: 'input',
  presentationStyle: 'card',
  children: [
    {
      childId: 'someHeadlineTextId',
      type: 'text',
      textStyle: 'bold',
      childStyle: ['twelveChildStyle']
    },
    {
      childId: 'pSomeMetadataTextVariableId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataTextVariable2Id',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataTextVariable3Id',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataTextVariable6Id',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataNumberVariableId',
      type: 'presentation',
      minNumberOfRepeatingToShow: '1',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataCollectionVariableId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataCollectionVariableWithAttributeId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataNumberWithAttributeVarId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataTextVariableWithAttributeVarId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataChildGroupId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'nationalSubjectCategoryPLinkId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'someNewRecordPLinkId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeContainerId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeGuiElementLinkId',
      type: 'guiElement',
      childStyle: []
    },
    {
      childId: 'pSomeRepeatingContainerId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataChildGroupWithSpecifiedHeadlineTextId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataChildGroupWithShowHeadlineFalseId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeManuscriptGroupId',
      type: 'presentation',
      childStyle: []
    }
  ]
};
export const pSomeEditMetadataGroup: BFFPresentationGroup = {
  id: 'pSomeEditMetadataGroupId',
  type: 'pGroup',
  presentationOf: 'someEditMetadataGroupId', // metadata
  mode: 'input',
  presentationStyle: 'card',
  children: [
    {
      childId: 'someEditHeadlineTextId',
      type: 'text',
      textStyle: 'bold',
      childStyle: ['twelveChildStyle']
    },
    {
      childId: 'pSomeMetadataTextVariableId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataTextVariable2Id',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataTextVariable3Id',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataNumberVariableId',
      type: 'presentation',
      minNumberOfRepeatingToShow: '1',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataCollectionVariableId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataCollectionVariableWithAttributeId',
      type: 'presentation',
      childStyle: ['threeChildStyle']
    },
    {
      childId: 'pSomeMetadataNumberWithAttributeVarId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataTextVariableWithAttributeVarId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataChildGroupId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'nationalSubjectCategoryPLinkId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeContainerId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeGuiElementLinkId',
      type: 'guiElement',
      childStyle: []
    },
    {
      childId: 'pSomeRepeatingContainerId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataChildGroupWithSpecifiedHeadlineTextId',
      type: 'presentation',
      childStyle: []
    },
    {
      childId: 'pSomeMetadataChildGroupWithShowHeadlineFalseId',
      type: 'presentation',
      childStyle: []
    }
  ]
};

export const pSomeContainer: BFFPresentationSurroundingContainer = {
  id: 'pSomeContainerId',
  type: 'container',
  presentationStyle: 'card',
  presentationsOf: ['someMetadataTextVariable4Id'], // metadata
  mode: 'input',
  children: [
    {
      childId: 'pSomeMetadataTextVariable4Id',
      type: 'presentation',
      childStyle: ['sixChildStyle'],
      minNumberOfRepeatingToShow: '1'
    }
  ],
  repeat: 'children'
};

export const pSomeRepeatingContainer: BFFPresentationContainer = {
  id: 'pSomeRepeatingContainerId',
  type: 'container',
  presentationStyle: 'label',
  presentationOf: 'someMetadataTextVariable5Id',
  mode: 'input',
  children: [
    {
      childId: 'pSomeMetadataTextVariable5Id',
      type: 'presentation',
      childStyle: ['sixChildStyle'],
      minNumberOfRepeatingToShow: '1'
    }
  ],
  repeat: 'this'
};

export const someValidationTypeDataFaultyChildReference: BFFValidationType = {
  id: 'someValidationTypeDataFaultyChildReferenceId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroupFaultyChildReferenceId',
  newPresentationGroupId: 'pSomeNewMetadataGroupId',
  // Update/Edit
  metadataGroupId: 'todo',
  presentationGroupId: 'todo',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataGroupFaultyChildReference: BFFMetadataGroup = {
  id: 'someNewMetadataGroupFaultyChildReferenceId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNameInData',
  type: 'group',
  textId: 'textId345',
  defTextId: 'defTextId678',
  children: [
    {
      childId: 'someRecordInfoId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someFaultyIdNotExistingInMetadataPool',
      repeatMin: '1',
      repeatMax: '3'
    }
  ]
};

export const someMetadataRecordLink: BFFMetadataRecordLink = {
  id: 'nationalSubjectCategoryLinkId',
  dataDivider: 'someDataDivider',
  nameInData: 'nationalSubjectCategory',
  type: 'recordLink',
  textId: 'nationalSubjectCategoryLinkText',
  defTextId: 'nationalSubjectCategoryLinkDefText',
  linkedRecordType: 'nationalSubjectCategory'
};
export const someNewRecordLink: BFFMetadataRecordLink = {
  id: 'someNewRecordLinkId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNewRecordLink',
  type: 'recordLink',
  textId: 'someNewRecordLinkText',
  defTextId: 'someNewRecordLinkDefText',
  linkedRecordType: 'someNewRecordLink'
};

export const pSomeMetadataRecordLink: BFFPresentationRecordLink = {
  id: 'nationalSubjectCategoryPLinkId',
  type: 'pRecordLink',
  presentationOf: 'nationalSubjectCategoryLinkId',
  mode: 'input',
  linkedRecordPresentations: [
    {
      presentedRecordType: 'nationalSubjectCategory',
      presentationId: 'someSubjectCategoryPresentation'
    }
  ]
};
export const pSomeNewRecordLink: BFFPresentationRecordLink = {
  id: 'someNewRecordPLinkId',
  type: 'pRecordLink',
  presentationOf: 'someNewRecordLinkId',
  mode: 'input',
  linkedRecordPresentations: [
    {
      presentedRecordType: 'someNewRecordLink',
      presentationId: 'someNewRecordLink'
    }
  ],
  search: 'someNewRecordLinkSearch'
};

export const someMetadataRecordLinkWithAttributes: BFFMetadataRecordLink = {
  id: 'nationalSubjectCategoryLinkWithAttributesId',
  dataDivider: 'someDataDivider',
  nameInData: 'nationalSubjectCategoryWithAttributes',
  type: 'recordLink',
  textId: 'nationalSubjectCategoryLinkText',
  defTextId: 'nationalSubjectCategoryLinkDefText',
  linkedRecordType: 'nationalSubjectCategory2',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ]
};

export const someMetadataRepeatingRecordLinkWithAttributes: BFFMetadataRecordLink = {
  id: 'nationalSubjectCategoryLinkRepeatingWithAttributesId',
  dataDivider: 'someDataDivider',
  nameInData: 'nationalSubjectCategoryRepeatingWithAttributes',
  type: 'recordLink',
  textId: 'nationalSubjectCategoryLinkText',
  defTextId: 'nationalSubjectCategoryLinkDefText',
  linkedRecordType: 'nationalSubjectCategory2',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ]
};

export const pSomeGuiElementLink: BFFGuiElement = {
  id: 'pSomeGuiElementLinkId',
  url: 'http://www.google.se',
  elementText: 'demoTestLinkGuiElementText',
  presentAs: 'link',
  type: 'guiElementLink'
};

export const someSimpleValidationTypeData: BFFValidationType = {
  id: 'someSimpleValidationTypeId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroup2Id',
  newPresentationGroupId: 'todo',
  // Update/Edit
  metadataGroupId: 'todo',
  presentationGroupId: 'todo',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewSimpleMetadataGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroup2Id',
  dataDivider: 'someDataDivider',
  nameInData: 'someNewMetadataGroupNameInData',
  type: 'group',
  textId: 'textId345',
  defTextId: 'defTextId678',
  children: [
    {
      childId: 'someMetadataTextVariableId',
      repeatMin: '1',
      repeatMax: '3'
    },
    {
      childId: 'someMetadataChildGroupId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'nationalSubjectCategoryLinkId',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};
export const someSimpleValidationTypeDataWithAttributes: BFFValidationType = {
  id: 'someSimpleValidationTypeWithAttributesId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroup2WithAttributesId',
  newPresentationGroupId: 'todo',
  // Update/Edit
  metadataGroupId: 'todo',
  presentationGroupId: 'todo',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewSimpleMetadataGroupWithAttributes: BFFMetadataGroup = {
  id: 'someNewMetadataGroup2WithAttributesId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNewMetadataGroupWithAttributesNameInData',
  type: 'group',
  textId: 'textId345',
  defTextId: 'defTextId678',
  attributeReferences: [
    {
      refCollectionVarId: 'exampleCollectionVarId'
    }
  ],
  children: [
    {
      childId: 'someMetadataTextVariableId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataTextVariableWithAttributeVarId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someMetadataNumberVarId',
      repeatMin: '1',
      repeatMax: 'X'
    },
    {
      childId: 'someMetadataNumberWithAttributeVarId',
      repeatMin: '1',
      repeatMax: '2'
    },
    {
      childId: 'nationalSubjectCategoryLinkWithAttributesId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'nationalSubjectCategoryLinkRepeatingWithAttributesId',
      repeatMin: '1',
      repeatMax: '2'
    }
  ]
};

export const someSimpleValidationTypeRepeatingGroups: BFFValidationType = {
  id: 'someSimpleValidationTypeWithRepeatingGroupsId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroupRepeatingGroupsId',
  newPresentationGroupId: 'todo',
  // Update/Edit
  metadataGroupId: 'todo',
  presentationGroupId: 'todo',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewSimpleMetadataGroupRepeatingGroups: BFFMetadataGroup = {
  id: 'someNewMetadataGroupRepeatingGroupsId',
  dataDivider: 'someDataDivider',
  nameInData: 'someNewMetadataGroupRepeatingGroupsNameInData',
  type: 'group',
  textId: 'textId345',
  defTextId: 'defTextId678',
  children: [
    {
      childId: 'someMetadataChildGroupId',
      repeatMin: '1',
      repeatMax: '2'
    }
  ]
};

export const someManuscriptGroup: BFFMetadataGroup = {
  id: 'someManuscriptGroupId',
  dataDivider: 'someDataDivider',
  nameInData: 'someManuscriptGroupNameInData',
  type: 'group',
  textId: 'textId345',
  defTextId: 'defTextId678',
  children: [
    {
      childId: 'archiveNumberTextVarId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'localIdTextVarId',
      repeatMin: '1',
      repeatMax: '1'
    }
    // {
    //   childId: 'scopusIdTextVarId',
    //   repeatMin: '1',
    //   repeatMax: '1'
    // }
  ]
};

export const pSomeManuscriptGroup: BFFPresentationGroup = {
  id: 'pSomeManuscriptGroupId',
  type: 'pGroup',
  presentationOf: 'someManuscriptGroupId', // metadata
  presentationStyle: '',
  mode: 'input',
  children: [
    {
      childId: 'pSomeManuscriptIdContainer',
      type: 'presentation',
      childStyle: []
    }
  ]
};

export const pSomeManuscriptContainer: BFFPresentationSurroundingContainer = {
  id: 'pSomeManuscriptIdContainer',
  type: 'container',
  presentationStyle: '',
  presentationsOf: ['archiveNumberTextVarId', 'localIdTextVarId', 'scopusIdTextVarId'], // metadata
  mode: 'input',
  children: [
    {
      childId: 'pArchiveNumberTextVarId',
      type: 'presentation',
      childStyle: [],
      minNumberOfRepeatingToShow: '1'
    },
    {
      childId: 'pLocalIdTextVarId',
      type: 'presentation',
      childStyle: [],
      minNumberOfRepeatingToShow: '1'
    },
    {
      childId: 'pScopusIdTextVarId',
      type: 'presentation',
      childStyle: [],
      minNumberOfRepeatingToShow: '1'
    }
  ],
  repeat: 'children'
};

export const someArchiveNumberTextVar: BFFMetadataTextVariable = {
  id: 'archiveNumberTextVarId',
  dataDivider: 'someDataDivider',
  nameInData: 'archiveNumber',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someLocalIdTextVar: BFFMetadataTextVariable = {
  id: 'localIdTextVarId',
  dataDivider: 'someDataDivider',
  nameInData: 'localId',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someScopusIdTextVar: BFFMetadataTextVariable = {
  id: 'scopusIdTextVarId',
  dataDivider: 'someDataDivider',
  nameInData: 'scopusId',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const pSomeArchiveNumberTextVar: BFFPresentation = {
  id: 'pArchiveNumberTextVarId',
  presentationOf: 'archiveNumberTextVarId',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};
export const pSomeLocalIdTextVar: BFFPresentation = {
  id: 'pLocalIdTextVarId',
  presentationOf: 'localIdTextVarId',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};
export const pSomeScopusIdTextVar: BFFPresentation = {
  id: 'pScopusIdTextVarId',
  presentationOf: 'scopusIdTextVarId',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};

export const nationSubjectCategoryValidationTypeData: BFFValidationType = {
  id: 'nationalSubjectCategory',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroupId',
  newPresentationGroupId: 'pSomeNewMetadataGroupId',
  // Update/Edit
  metadataGroupId: 'someEditMetadataGroupId',
  presentationGroupId: 'pSomeEditMetadataGroupId',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const newNationSubjectCategoryValidationType: BFFValidationType = {
  id: 'nationalSubjectCategory',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'nationalSubjectCategoryRecordTypeNewGroup',
  newPresentationGroupId: 'nationalSubjectCategoryRecordTypePGroup',
  // Update/Edit
  metadataGroupId: 'nationalSubjectCategoryRecordTypeGroup',
  presentationGroupId: 'nationalSubjectCategoryRecordTypePGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const newNationalSubjectCategoryRecordTypeNewGroup: BFFMetadataGroup = {
  id: 'nationalSubjectCategoryRecordTypeNewGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'nationalSubjectCategory',
  type: 'group',
  textId: 'nationalSubjectCategoryRecordTypeNewGroupText',
  defTextId: 'nationalSubjectCategoryRecordTypeNewGroupDefText',
  children: [
    {
      childId: 'subjectSweTextVar',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'subjectEngTextVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const newNationalSubjectCategoryRecordTypeGroup: BFFMetadataGroup = {
  id: 'nationalSubjectCategoryRecordTypeGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'nationalSubjectCategory',
  type: 'group',
  textId: 'nationalSubjectCategoryRecordTypeNewGroupText',
  defTextId: 'nationalSubjectCategoryRecordTypeNewGroupDefText',
  children: [
    {
      childId: 'subjectSweTextVar',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'subjectEngTextVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const newNationSubjectCategoryMetadataSubjectSweTextVariable: BFFMetadataTextVariable = {
  id: 'subjectSweTextVar',
  dataDivider: 'someDataDivider',
  nameInData: 'subject',
  type: 'textVariable',
  textId: 'subjectSweTextVarText',
  defTextId: 'subjectSweTextVarDefText',
  regEx: '.+',
  attributeReferences: [
    {
      refCollectionVarId: 'languageSweCollectionVar'
    }
  ]
};
export const newNationSubjectCategoryMetadataSubjectEngTextVariable: BFFMetadataTextVariable = {
  id: 'subjectEngTextVar',
  dataDivider: 'someDataDivider',
  nameInData: 'subject',
  type: 'textVariable',
  textId: 'subjectEngTextVarText',
  defTextId: 'subjectEngTextVarDefText',
  regEx: '.+',
  attributeReferences: [
    {
      refCollectionVarId: 'languageEngCollectionVar'
    }
  ]
};

export const newNationSubjectCategoryMetadataSubjectSweLangCollVariable: BFFMetadataCollectionVariable =
  {
    id: 'languageSweCollectionVar',
    dataDivider: 'someDataDivider',
    nameInData: 'language',
    type: 'collectionVariable',
    textId: 'languageCollectionVarText',
    defTextId: 'languageCollectionVarDefText',
    refCollection: 'languageCollection',
    finalValue: 'swe' // added this for now
  };

export const newNationSubjectCategoryMetadataSubjectEngLangCollVariable: BFFMetadataCollectionVariable =
  {
    id: 'languageEngCollectionVar',
    dataDivider: 'someDataDivider',
    nameInData: 'language',
    type: 'collectionVariable',
    textId: 'languageCollectionVarText',
    defTextId: 'languageCollectionVarDefText',
    refCollection: 'languageCollection',
    finalValue: 'eng' // added this for now
  };

export const pNewNationSubjectCategoryMetadataGroup: BFFPresentationGroup = {
  id: 'nationalSubjectCategoryRecordTypePGroup',
  type: 'pGroup',
  presentationOf: 'nationalSubjectCategoryRecordTypeGroup', // metadata
  mode: 'input',
  children: [
    {
      childId: 'subjectSwePVar',
      type: 'presentation'
    },
    {
      childId: 'subjectEngPVar',
      type: 'presentation'
    }
  ]
};
export const pNewNationSubjectCategorySweVar: BFFPresentation = {
  id: 'subjectSwePVar',
  type: 'pVar',
  presentationOf: 'subjectSweTextVar',
  mode: 'input'
};

export const pNewNationSubjectCategoryEngVar: BFFPresentation = {
  id: 'subjectEngPVar',
  type: 'pVar',
  presentationOf: 'subjectEngTextVar',
  mode: 'input'
};

export const divaOutputValidationType: BFFValidationType = {
  id: 'preprint',
  validatesRecordTypeId: 'divaOutput',
  // New
  newMetadataGroupId: 'preprintNewGroup',
  newPresentationGroupId: 'divaOutputPGroup',
  // Update/Edit
  metadataGroupId: 'divaOutputPGroup',
  presentationGroupId: 'divaOutputPGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const preprintNewGroup: BFFMetadataGroup = {
  id: 'preprintNewGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'divaOutput',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'domainCollectionVar',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'outputTypeGroup',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'titleGroup',
      repeatMin: '0',
      repeatMax: '1'
    }
  ]
};

export const domainCollectionVar: BFFMetadataCollectionVariable = {
  id: 'domainCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'domain',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection'
};

export const outputTypeGroup: BFFMetadataGroup = {
  id: 'outputTypeGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'outputType',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'outputTypeCollectionVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};
export const outputTypeCollectionVar: BFFMetadataCollectionVariable = {
  id: 'outputTypeCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'genre',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  attributeReferences: [
    {
      refCollectionVarId: 'typeOutputTypeCollectionVar'
    }
  ]
};

export const typeOutputTypeCollectionVar: BFFMetadataCollectionVariable = {
  id: 'typeOutputTypeCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'type',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  finalValue: 'outputType'
};

export const titleGroup: BFFMetadataGroup = {
  id: 'titleGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'title',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'mainTitle',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const mainTitleTextVar: BFFMetadataTextVariable = {
  id: 'mainTitle',
  dataDivider: 'someDataDivider',
  nameInData: 'mainTitle',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: '.+'
};

export const someValidationTypeForRepeatingGroupsNameInDataId: BFFValidationType = {
  id: 'someValidationTypeForRepeatingGroupsNameInDataId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroupRepeatingGroupsNameInDataGroup',
  newPresentationGroupId: 'nationalSubjectCategoryRecordTypePGroup',
  // Update/Edit
  metadataGroupId: 'nationalSubjectCategoryRecordTypeGroup',
  presentationGroupId: 'nationalSubjectCategoryRecordTypePGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataGroupRepeatingGroupsNameInDataGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupRepeatingGroupsNameInDataGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'someRootNameInData',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'authorGroup',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'authorOtherGroup',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const authorGroup: BFFMetadataGroup = {
  id: 'authorGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'author',
  type: 'group',
  textId: '',
  defTextId: '',

  children: [
    {
      childId: 'givenNameTextVar',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'familyNameTextVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ],
  attributeReferences: [
    {
      refCollectionVarId: 'languageSweCollectionVar'
    }
  ]
};
export const authorGroup2: BFFMetadataGroup = {
  id: 'authorOtherGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'author',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'givenNameTextVar',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'familyNameTextVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ],
  attributeReferences: [
    {
      refCollectionVarId: 'languageEngCollectionVar'
    }
  ]
};

export const givenNameTextVar: BFFMetadataTextVariable = {
  id: 'givenNameTextVar',
  dataDivider: 'someDataDivider',
  nameInData: 'givenName',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};
export const familyNameTextVar: BFFMetadataTextVariable = {
  id: 'familyNameTextVar',
  dataDivider: 'someDataDivider',
  nameInData: 'familyName',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someValidationTypeForRepeatingCollectionsNameInDataId: BFFValidationType = {
  id: 'someValidationTypeForRepeatingCollectionsNameInDataId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroupRepeatingCollectionNameInDataGroup',
  newPresentationGroupId: 'nationalSubjectCategoryRecordTypePGroup',
  // Update/Edit
  metadataGroupId: 'nationalSubjectCategoryRecordTypeGroup',
  presentationGroupId: 'nationalSubjectCategoryRecordTypePGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataGroupRepeatingCollectionNameInDataGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupRepeatingCollectionNameInDataGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'genreGroup',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'genreCollectionVar',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'genreOtherCollectionVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const genreCollectionVar: BFFMetadataCollectionVariable = {
  id: 'genreCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'genre',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  attributeReferences: [
    {
      refCollectionVarId: 'languageSweCollectionVar'
    }
  ]
};

export const genreOtherCollectionVar: BFFMetadataCollectionVariable = {
  id: 'genreOtherCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'genre',
  type: 'collectionVariable',
  textId: 'exampleCollectionVarText',
  defTextId: 'exampleCollectionVarDefText',
  refCollection: 'exampleCollection',
  attributeReferences: [
    {
      refCollectionVarId: 'languageEngCollectionVar'
    }
  ]
};

export const someValidationTypeForRepeatingRecordLinksNameInDataId: BFFValidationType = {
  id: 'someValidationTypeForRepeatingRecordLinksNameInDataId',
  validatesRecordTypeId: 'record123',
  // New
  newMetadataGroupId: 'someNewMetadataGroupRepeatingRecordLinksNameInDataGroup',
  newPresentationGroupId: 'nationalSubjectCategoryRecordTypePGroup',
  // Update/Edit
  metadataGroupId: 'nationalSubjectCategoryRecordTypeGroup',
  presentationGroupId: 'nationalSubjectCategoryRecordTypePGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataGroupRepeatingRecordLinksNameInDataGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupRepeatingRecordLinksNameInDataGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'recordLinkGroup',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'someNewRecordLinkId',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someOtherNewRecordLinkId',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const someNewRecordLinkId: BFFMetadataRecordLink = {
  id: 'someNewRecordLinkId',
  dataDivider: 'someDataDivider',
  nameInData: 'newRecordLink',
  type: 'recordLink',
  textId: 'nationalSubjectCategoryLinkText',
  defTextId: 'nationalSubjectCategoryLinkDefText',
  linkedRecordType: 'nationalSubjectCategory',
  attributeReferences: [
    {
      refCollectionVarId: 'languageSweCollectionVar'
    }
  ]
};

export const someOtherNewRecordLinkId: BFFMetadataRecordLink = {
  id: 'someOtherNewRecordLinkId',
  dataDivider: 'someDataDivider',
  nameInData: 'newRecordLink',
  type: 'recordLink',
  textId: 'nationalSubjectCategoryLinkText',
  defTextId: 'nationalSubjectCategoryLinkDefText',
  linkedRecordType: 'nationalSubjectCategory',
  attributeReferences: [
    {
      refCollectionVarId: 'languageEngCollectionVar'
    }
  ]
};

export const someValidationTypeForRepeatingTitleInfoId: BFFValidationType = {
  id: 'divaOutputSwepub',
  validatesRecordTypeId: 'divaOutputSwepub',
  // New
  newMetadataGroupId: 'someNewMetadataGroupRepeatingTitleInfoNameInDataGroup',
  newPresentationGroupId: 'someNewMetadataGroupRepeatingTitleInfoNameInDataPGroup',
  // Update/Edit
  metadataGroupId: 'someNewMetadataGroupRepeatingTitleInfoNameInDataGroup',
  presentationGroupId: 'someNewMetadataGroupRepeatingTitleInfoNameInDataPGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataGroupRepeatingTitleInfoNameInDataGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupRepeatingTitleInfoNameInDataGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'output',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'someNewMetadataGroupTitleInfoGroup',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someNewMetadataGroupTitleInfoAlternativeGroup',
      repeatMin: '0',
      repeatMax: '1'
    }
  ]
};

export const pSomeNewMetadataGroupRepeatingTitleInfoNameInDataGroup: BFFPresentationGroup = {
  id: 'someNewMetadataGroupRepeatingTitleInfoNameInDataPGroup',
  type: 'pGroup',
  presentationOf: 'someNewMetadataGroupRepeatingTitleInfoNameInDataGroup', // metadata
  mode: 'input',
  children: [
    {
      childId: 'someNewMetadataGroupTitleInfoGroup',
      type: 'presentation'
    },
    {
      childId: 'someNewMetadataGroupTitleInfoAlternativeGroup',
      type: 'presentation'
    }
  ]
};

export const someNewMetadataGroupTitleInfoGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupTitleInfoGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'titleInfo',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'someMainTitleVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ],
  attributeReferences: [
    {
      refCollectionVarId: 'newLangCollectionVar'
    }
  ]
};

export const pSomeNewMetadataGroupTitleInfoPGroup: BFFPresentationGroup = {
  id: 'pSomeNewMetadataGroupTitleInfoGroup',
  type: 'pGroup',
  presentationOf: 'someNewMetadataGroupTitleInfoGroup', // metadata
  mode: 'input',
  children: [
    {
      childId: 'someMainTitlePVar',
      type: 'presentation'
    }
  ]
};
export const pSomeNewMetadataGroupTitleInfoAlternativePGroup: BFFPresentationGroup = {
  id: 'pSomeNewMetadataGroupTitleInfoGroup',
  type: 'pGroup',
  presentationOf: 'someNewMetadataGroupTitleInfoGroup', // metadata
  mode: 'input',
  children: [
    {
      childId: 'someMainTitlePVar',
      type: 'presentation'
    }
  ]
};

export const someNewMetadataGroupTitleInfoAlternativeGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupTitleInfoAlternativeGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'titleInfo',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'someMainTitleVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ],
  attributeReferences: [
    {
      refCollectionVarId: 'newLangCollectionVar'
    },
    {
      refCollectionVarId: 'typeCollectionVar'
    }
  ]
};

export const typeCollVariable: BFFMetadataCollectionVariable = {
  id: 'typeCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'type',
  type: 'collectionVariable',
  textId: 'typeCollectionVarText',
  defTextId: 'typeCollectionVarDefText',
  refCollection: 'typeCollection',
  finalValue: 'alternative'
};

export const newLangCollVariable: BFFMetadataCollectionVariable = {
  id: 'newLangCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'language',
  type: 'collectionVariable',
  textId: 'engCollectionVarText',
  defTextId: 'engCollectionVarDefText',
  refCollection: 'newLangCollection'
};

export const typeItemCollection: BFFMetadataItemCollection = {
  id: 'typeCollection',
  dataDivider: 'someDataDivider',
  nameInData: 'type',
  type: 'itemCollection',
  textId: 'typeCollectionText',
  defTextId: 'typeCollectionDefText',
  collectionItemReferences: [{ refCollectionItemId: 'alternativeItem' }]
};

export const newLangItemCollection: BFFMetadataItemCollection = {
  id: 'newLangCollection',
  dataDivider: 'someDataDivider',
  nameInData: 'type',
  type: 'itemCollection',
  textId: 'typeCollectionText',
  defTextId: 'typeCollectionDefText',
  collectionItemReferences: [{ refCollectionItemId: 'engItem' }, { refCollectionItemId: 'sweItem' }]
};

export const typeCollectionItemAlternative: BFFMetadata = {
  id: 'alternativeItem',
  dataDivider: 'someDataDivider',
  nameInData: 'alternative',
  type: 'collectionItem',
  textId: 'alternativeItemText',
  defTextId: 'alternativeItemDefText'
};

export const newLangItemCollectionItemEng: BFFMetadata = {
  id: 'engItem',
  dataDivider: 'someDataDivider',
  nameInData: 'english',
  type: 'collectionItem',
  textId: 'alternativeItemText',
  defTextId: 'alternativeItemDefText'
};

export const newLangItemCollectionItemSwe: BFFMetadata = {
  id: 'sweItem',
  dataDivider: 'someDataDivider',
  nameInData: 'swedish',
  type: 'collectionItem',
  textId: 'alternativeItemText',
  defTextId: 'alternativeItemDefText'
};

export const someMainTitleTitleInfoATextVariable: BFFMetadataTextVariable = {
  id: 'someMainTitleVar',
  dataDivider: 'someDataDivider',
  nameInData: 'title',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const pSomeMainTitleTitleInfoTextVariable: BFFPresentation = {
  id: 'someMainTitlePVar',
  presentationOf: 'someMainTitleVar',
  mode: 'input',
  inputType: 'input',
  type: 'pVar',
  emptyTextId: 'someEmptyTextId'
};

export const someValidationTypeNamePartId: BFFValidationType = {
  id: 'namePartValidationTypeId',
  validatesRecordTypeId: 'namePartValidationTypeId',
  // New
  newMetadataGroupId: 'someNewMetadataGroupNamePartGroup',
  newPresentationGroupId: 'someNewMetadataGroupNamePartPGroup',
  // Update/Edit
  metadataGroupId: 'someNewMetadataGroupNamePartGroup',
  presentationGroupId: 'someNewMetadataGroupNamePartPGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataGroupRepeatingNamePartGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupNamePartGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'name',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'someNamePartTextVar',
      repeatMin: '1',
      repeatMax: '1'
    },
    {
      childId: 'someOtherNamePartTextVar',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const someNamePartTextVariable: BFFMetadataTextVariable = {
  id: 'someNamePartTextVar',
  dataDivider: 'someDataDivider',
  nameInData: 'namePart',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex'
};

export const someOtherNamePartTextVariable: BFFMetadataTextVariable = {
  id: 'someOtherNamePartTextVar',
  dataDivider: 'someDataDivider',
  nameInData: 'namePart',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex',
  attributeReferences: [
    {
      refCollectionVarId: 'languageEngCollectionVar'
    }
  ]
};

export const someValidationTypeNamePartWithAttributesId: BFFValidationType = {
  id: 'namePartPartWithAttributesValidationTypeId',
  validatesRecordTypeId: 'namePartPartWithAttributesValidationTypeId',
  // New
  newMetadataGroupId: 'someNewMetadataGroupRepeatingNamePartWithAttributesGroup',
  newPresentationGroupId: 'someNewMetadataGroupRepeatingTitleInfoNameInDataPGroup',
  // Update/Edit
  metadataGroupId: 'someNewMetadataGroupRepeatingNamePartWithAttributesGroup',
  presentationGroupId: 'someNewMetadataGroupRepeatingTitleInfoNameInDataPGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataGroupRepeatingNamePartWithAttributesGroup: BFFMetadataGroup = {
  id: 'someNewMetadataGroupRepeatingNamePartWithAttributesGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'name',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'someNamePartTextVar',
      repeatMin: '0',
      repeatMax: '1'
    },
    {
      childId: 'someOtherNamePartTextVar',
      repeatMin: '0',
      repeatMax: '1'
    }
  ]
};

export const someNamePartWithAttributesTextVariable: BFFMetadataTextVariable = {
  id: 'someNamePartWithAttributesTextVariable',
  dataDivider: 'someDataDivider',
  nameInData: 'namePart',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex',
  attributeReferences: [
    {
      refCollectionVarId: 'languageSweCollectionVar'
    }
  ]
};

export const someOtherNamePartWithAttributesTextVariable: BFFMetadataTextVariable = {
  id: 'someOtherNamePartWithAttributesTextVariable',
  dataDivider: 'someDataDivider',
  nameInData: 'namePart',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex',
  attributeReferences: [
    {
      refCollectionVarId: 'languageEngCollectionVar'
    }
  ]
};

export const someValidationTypeForRequiredAndRepeatingId: BFFValidationType = {
  id: 'someValidationTypeForRequiredAndRepeatingId',
  validatesRecordTypeId: 'someValidationTypeForRequiredAndRepeatingId',
  // New
  newMetadataGroupId: 'someNewMetadataRequiredAndRepeatingRootGroup',
  newPresentationGroupId: 'someNewMetadataRequiredAndRepeatingPGroup',
  // Update/Edit
  metadataGroupId: 'someNewMetadataRequiredAndRepeatingRootGroup',
  presentationGroupId: 'someNewMetadataRequiredAndRepeatingPGroup',
  nameTextId: 'name123',
  defTextId: 'defName456'
};

export const someNewMetadataRequiredAndRepeatingRootGroup: BFFMetadataGroup = {
  id: 'someNewMetadataRequiredAndRepeatingRootGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'output',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'someNewMetadataRequiredAndRepeatingGroup',
      repeatMin: '1',
      repeatMax: '1'
    }
  ]
};

export const someNewMetadataRequiredAndRepeatingGroup: BFFMetadataGroup = {
  id: 'someNewMetadataRequiredAndRepeatingGroup',
  dataDivider: 'someDataDivider',
  nameInData: 'language',
  type: 'group',
  textId: '',
  defTextId: '',
  children: [
    {
      childId: 'someLanguageTerm',
      repeatMin: '1',
      repeatMax: 'X'
    }
  ]
};

export const someLanguageTerm: BFFMetadataTextVariable = {
  id: 'someLanguageTerm',
  dataDivider: 'someDataDivider',
  nameInData: 'languageTerm',
  type: 'textVariable',
  textId: 'someTextId',
  defTextId: 'someDefTextId',
  regEx: 'someRegex',
  attributeReferences: [
    {
      refCollectionVarId: 'typeCodeCollectionVar'
    },
    {
      refCollectionVarId: 'authorityLanguageTermCollectionVar'
    }
  ]
};

export const typeCodeCollectionVar: BFFMetadataCollectionVariable = {
  id: 'typeCodeCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'type',
  type: 'collectionVariable',
  textId: 'typeCollectionVarText',
  defTextId: 'typeCollectionVarDefText',
  refCollection: 'typeCollection',
  finalValue: 'code'
};
export const authorityLanguageTermCollectionVar: BFFMetadataCollectionVariable = {
  id: 'authorityLanguageTermCollectionVar',
  dataDivider: 'someDataDivider',
  nameInData: 'authority',
  type: 'collectionVariable',
  textId: 'authorityCollectionVarText',
  defTextId: 'authorityCollectionVarDefText',
  refCollection: 'authorityCollection',
  finalValue: 'iso639-2b'
};
