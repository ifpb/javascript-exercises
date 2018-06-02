import { Selector } from 'testcafe'

fixture `Lorem`
    .page `../index.html`

test('generating lorem ipsum', async t => {

  const typeSelect = await Selector('#type')
  const typeOption = await typeSelect.find('option')
  const cardBody = await Selector('.card-body')
  const expectedWords = `<p>Lorem ipsum dolor sit amet</p>`
  const expectedParagraphs = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla ut morbi tincidunt augue interdum. Senectus et netus et malesuada. Massa tempor nec feugiat nisl pretium. Cursus in hac habitasse platea dictumst quisque. Diam maecenas ultricies mi eget mauris pharetra et. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. Lectus urna duis convallis convallis tellus id interdum velit. Donec ultrices tincidunt arcu non sodales. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Tortor posuere ac ut consequat semper viverra. Facilisis magna etiam tempor orci. Elit duis tristique sollicitudin nibh sit amet commodo. Cursus metus aliquam eleifend mi in. Nulla pharetra diam sit amet nisl. Donec ultrices tincidunt arcu non.</p>
<p>Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Volutpat odio facilisis mauris sit amet massa vitae tortor. Risus sed vulputate odio ut enim blandit. Placerat vestibulum lectus mauris ultrices eros. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nunc sed blandit libero volutpat sed cras. Risus quis varius quam quisque id diam. Sit amet tellus cras adipiscing enim eu turpis egestas. Consectetur lorem donec massa sapien. Ut sem viverra aliquet eget sit amet tellus. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Sit amet est placerat in. Adipiscing elit duis tristique sollicitudin. Rutrum tellus pellentesque eu tincidunt. Amet mattis vulputate enim nulla aliquet porttitor lacus. Hendrerit dolor magna eget est lorem ipsum.</p>`

  await t
    .typeText('#quantity', '2')
    .click(typeSelect)
    .click(typeOption.withText('Paragraphs'))
    .click('#generate')

  console.log(cardBody)

  await t
    .expect(cardBody.innerHTML)
    .eql(expectedParagraphs)

  await t
    .typeText('#quantity', '5')
    .click(typeSelect)
    .click(typeOption.withText('Words'))
    .click('#generate')

  await t
    .expect(cardBody.innerHTML)
    .eql(expectedWords)

})
