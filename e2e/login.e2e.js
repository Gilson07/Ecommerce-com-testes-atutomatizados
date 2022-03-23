describe('Login Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should view home screen', async () => {

    await element(by.id('input-email')).typeText('emailteste@gmail.com');
    await element(by.id('input-senha')).typeText('teste123');

    await element(by.id('button-Login')).tap();

    await expect(element(by.text('Olá'))).toBeVisible();

  });

  it('Should display empty email message', async () => {

    await element(by.id('button-Login')).tap();

    await expect(element(by.text('Favor preencher o E-mail'))).toBeVisible();

  });

  it('Should display empty password message', async () => {

    await element(by.id('input-email')).typeText('emailteste@gmail.com');

    await element(by.id('button-Login')).tap();

    await expect(element(by.text('Favor preencher a senha'))).toBeVisible();

  });
});
