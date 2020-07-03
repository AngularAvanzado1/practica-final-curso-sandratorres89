import { getGreeting } from '../support/app.po';

describe('world-bank', () => {
  beforeEach(() => cy.visit('/home'));

  it('should load regions', () => {
    getGreeting().contains('East Asia & Pacific');
  });

});
