import { Selector } from 'testcafe'

fixture `BMI`
    .page `../index.html`

test('calculating imc', async t => {
  await t
    .typeText('#altura', '1.60')
    .typeText('#peso', '100')
    .click('#calc-imc-btn')

  const imc = await Selector('#imc')

  await t
    .expect(imc.value)
    .eql('Obeso')

  await t
    .expect(imc.classNames)
    .eql(['form-control', 'form-control-lg', 'border', 'border-danger', 'bg-danger', 'text-white'])

  await t
    .typeText('#peso', '60', { replace: true })
    .pressKey("enter")

  await t
    .expect(imc.value)
    .eql('Peso Normal')
  
  await t
    .expect(imc.classNames)
    .eql(['form-control', 'form-control-lg', 'border', 'border-sucess', 'bg-success', 'text-white'])
})

test('cleaning form fields', async t => {
  await t
    .pressKey("esc")

  const altura = await Selector('#altura').value
  const peso = await Selector('#peso').value
  const imc = await Selector('#imc').value

  await t
    .expect(altura)
    .eql('')

  await t
    .expect(peso)
    .eql('')
  
  await t
    .expect(imc)
    .eql('')
})