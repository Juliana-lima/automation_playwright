const { test, expect } = require('@playwright/test'); //Chamando o playwright

test.beforeEach(async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveTitle('QAZANDO Shop E-Commerce');
});


test('Realiza compra com sucesso @compra', async ({page}) => {

    await page.getByRole('link', {name: 'Login'} ).click();

    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible(); 

    await page.locator('#user').fill('juliana_test@mailinator.com');

    await page.locator('#password').fill('123456');

    await page.getByRole('button', { name: 'login' }).click();

    await page.screenshot({ path: 'screenshots/screenshot_login_ok.png' });

    await page.getByText('Olá, juliana_test@mailinator.com').click();

    await page.getByRole('button', { name: 'OK' }).click();

    await page.getByRole('link', { name: 'Home ' }).click();
    await page.getByRole('link', { name: 'Electronics' }).click();
    await page.locator('div:nth-child(3) > .product_item_two > .product_item_inner > .product_img_wrap > a').first().click();

    await page.getByRole('combobox').selectOption('xl');
    await page.locator('div').filter({ hasText: /^Color$/ }).locator('span').nth(3).click();
    await page.getByRole('link', { name: 'Add To Cart' }).click();
    await page.getByRole('link', { name: 'Home ' }).click();
    await page.getByRole('link', { name: 'Electronics' }).click();
    await page.locator('div:nth-child(4) > .product_item_two > .product_item_inner > .product_img_wrap > a').first().click();
    await page.getByRole('combobox').selectOption('small');
    await page.locator('div').filter({ hasText: /^Color$/ }).locator('span').nth(2).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: 'Add To Cart' }).click();
    await page.getByText('Successfully added to your Cart').click();
    await page.getByRole('link', { name: ' 5' }).click();
    await page.locator('#offcanvas-add-cart').getByRole('link', { name: 'Checkout' }).click();
    await page.getByPlaceholder('First name').click();
    await page.getByPlaceholder('First name').fill('Juliana');
    await page.getByPlaceholder('Last name').click();
    await page.getByPlaceholder('Last name').fill('Teste');
    await page.getByPlaceholder('Company Name').click();
    await page.getByPlaceholder('Company Name').fill('Teste LYTD');
    await page.getByPlaceholder('info@gmail.com').click();
    await page.getByPlaceholder('info@gmail.com').fill('juliana_test@mailinator.com');
    await page.getByLabel('Country*').selectOption('usa');
    await page.getByLabel('State/City*').selectOption('Aland Islands');
    await page.getByPlaceholder('Enter Your zipcode').click();
    await page.getByPlaceholder('Enter Your zipcode').fill('456123789');
    await page.getByPlaceholder('Enter your address here..').click();
    await page.getByPlaceholder('Enter your address here..').fill('Rua Test, 306');
    await page.getByPlaceholder('Order notes').click();
    await page.getByPlaceholder('Order notes').fill('Entrega via correios.');
    await page.getByLabel('Save In Address Book').check();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByRole('heading', { name: 'Order success!' }).click();
    await page.getByRole('heading', { name: 'Congrats! Your order was created with sucess!' }).click();
    await page.getByLabel('Close').click();

});


test.afterEach(async ({page}) => {
    await page.close();
});