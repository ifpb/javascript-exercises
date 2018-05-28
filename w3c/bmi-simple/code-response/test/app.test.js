import { Selector } from 'testcafe'

fixture `BMI`
    .page `../index.html`

test('calculating', async t => {
  await t
    .typeText('#altura', '1.60')
    .typeText('#peso', '100')
    .click('#calc-imc-btn')

  const imc = await Selector('#imc').value

  await t
    .expect(imc)
    .eql('Obeso')
})