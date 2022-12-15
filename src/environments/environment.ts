import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4201';

const oAuthConfig = {
  // issuer: 'https://localhost:44376/',
  issuer: 'https://localhost:44343/',
  redirectUri: baseUrl,
  clientId: 'shop-secret',
  responseType: 'code',
  scope: 'offline_access Shop',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Shop',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44358',
      rootNamespace: 'Shop',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
