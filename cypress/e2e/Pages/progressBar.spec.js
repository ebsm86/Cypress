import { ProgressBar } from "../components/progressBar/progressbar-components";
const progress = new ProgressBar()
describe('template spec', () => {
    beforeEach(() => {
      cy.visit('/progressbar')
    
    });
    it('User progress Bar', () => {
      progress.startProgressBar()
      progress.stopProgressBarAt75Percent()
    })
})