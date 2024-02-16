/*
 * Copyright 2024 Uppsala University Library
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

import request from 'supertest';
import app from '../../server';

describe('API endpoint routes', () => {
  describe('/', () => {
    it('GET / returns a 200', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual('');
    });
  });
  describe('/api/translations/', () => {
    it('GET /api/translations/sv returns a 200', async () => {
      const refresh = await request(app).get('/api/refreshDefinitions');
      expect(refresh.statusCode).toBe(200);
      const response = await request(app).get('/api/translations/sv');
      expect(response.statusCode).toBe(200);
      expect(Object.keys(response.body).length).toBeGreaterThanOrEqual(1);
      // expect(response.body).toStrictEqual({ test: 'test' });
    }, 100000);
  });
  describe('/api/refreshDefinitions', () => {
    it('GET /api/refreshDefinitions returns a 200', async () => {
      const response = await request(app).get('/api/refreshDefinitions');
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual({
        message: 'Refreshed cora defs'
      });
    }, 100000);
  });
});