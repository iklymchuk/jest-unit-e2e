import Page from 'Page';
test('Page are exist', () => {
  expect((new Page).isPresent).toBeTruthy();
});