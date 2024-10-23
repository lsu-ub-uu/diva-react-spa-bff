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
 */

import { DataGroup } from '../../../utils/cora-data/CoraData';

export const createExampleDivaOuput = (title: string): DataGroup => ({
  name: 'output',
  children: [
    {
      name: 'titleInfo',
      attributes: {
        lang: 'alb'
      },
      children: [
        {
          name: 'title',
          value: title
        }
      ]
    },
    {
      name: 'genre',
      value: 'ref',
      attributes: {
        type: 'contentType'
      }
    },
    {
      name: 'language',
      children: [
        {
          name: 'languageTerm',
          value: 'alb',
          attributes: {
            type: 'code',
            authority: 'iso639-2b'
          },
          repeatId: '0'
        }
      ]
    },
    {
      name: 'genre',
      value: 'publication_review-article',
      attributes: {
        type: 'outputType'
      }
    },
    {
      name: 'recordInfo',
      children: [
        {
          name: 'validationType',
          children: [
            {
              name: 'linkedRecordType',
              value: 'validationType'
            },
            {
              name: 'linkedRecordId',
              value: 'diva-output'
            }
          ]
        },
        {
          name: 'dataDivider',
          children: [
            {
              name: 'linkedRecordType',
              value: 'system'
            },
            {
              name: 'linkedRecordId',
              value: 'divaData'
            }
          ]
        }
      ]
    }
  ]
});

export const createBFFDivaOutput = {
  output: {
    titleInfo: {
      _lang: 'alg',
      title: {
        value: 'aaaaaa'
      }
    },
    genre_type_contentType: {
      value: 'ref',
      _type: 'contentType'
    },
    language: {
      languageTerm: [
        {
          value: 'alt',
          _type: 'code',
          _authority: 'iso639-2b'
        }
      ]
    },
    genre_type_outputType: {
      value: 'publication_newspaper-article',
      _type: 'outputType'
    },
    recordInfo: {
      validationType: {
        value: 'diva-output'
      },
      dataDivider: {
        value: 'divaData'
      }
    }
  }
};
