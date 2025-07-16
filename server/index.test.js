const request = require('supertest');
const express = require('express');
const app = require('./index'); // modify index.js to export app

describe('GET /', () => {
  it('responds with message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('API');
  });
});