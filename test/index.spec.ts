// @ts-nocheck

import { expect } from 'chai';

import TestAlias from '@src/index';
import Test from '../src/index';

describe('[template] Hello world!', () => {
  it('should load src/index.ts successfully', () => {
    expect(Test).not.to.be.undefined;
    expect(Test()).to.be.equal('success!');
  });

  it('should recognise alias path', () => {
    expect(TestAlias).not.to.be.undefined;
    expect(TestAlias()).to.be.equal('success!');
  });
});
