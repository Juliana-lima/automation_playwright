const { test, expect } = require('@playwright/test'); //Chamando o playwright

//test.use({
    //viewport: { width: 820, height: 1180 },
  //});
  
test.beforeEach(async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveTitle('QAZANDO Shop E-Commerce');
});

test('Realiza login com sucesso @login', async ({page}) => {

    const button = await page.getByRole('button', { name: 'Send Mail' })
    await button.scrollIntoViewIfNeeded();
    await button.click();

    await page.getByRole('link', {name: 'Login'} ).click();//Obter por função "getByRole"
    await page.screenshot({ path: 'screenshots/screenshot_home.png', fullPage: true });

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible(); 
    await page.screenshot({ path: 'screenshots/screenshot_login.png' });

    await page.locator('#user').fill('juliana_test@mailinator.com');

    await page.locator('#password').fill('123456');
    await page.locator('#password').screenshot({ path: 'screenshots/screenshot_senha.png' });

    await page.getByRole('button', { name: 'login' }).click();

    await page.getByRole('heading', { name: 'Login realizado' }).click();
    await page.screenshot({ path: 'screenshots/screenshot_login_ok.png' });
    await page.getByRole('heading', { name: 'Login realizado' }).screenshot({ path: 'screenshots/screenshot_logado.png' });

    await page.getByText('Olá, juliana_test@mailinator.com').click();

    await page.getByRole('button', { name: 'OK' }).click();
    

    await page.getByText('juliana_test@mailinator.com Dashboard Meus pedidos Logout').click();

});


test('Login sem email', async ({page}) => {

    const text = await page.waitForSelector('text=NEWSLETTER')
    await text.scrollIntoViewIfNeeded();
    

    await page.getByRole('link', {name: 'Login'} ).click();
    await page.screenshot({ path: 'screenshots/screenshot_home.png', fullPage: true });

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible(); 
    await page.screenshot({ path: 'screenshots/screenshot_login.png' });
    
    await page.locator('#password').fill('123456');

    await page.locator('#btnLogin').click();
    await page.getByText('E-mail inválido.').click();
    await page.getByText('E-mail inválido.').screenshot({ path: 'screenshots/screenshot_erro_email.png' });

});

test.afterEach(async ({page}) => {
    await page.close();
});