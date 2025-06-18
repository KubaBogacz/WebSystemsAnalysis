import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.novatech.co.uk/products/monitors/');
  await page.getByRole('link', { name: '4K UHD Monitors (18)' }).click();
  await page.getByRole('button', { name: 'Price' }).click();
  await page.getByRole('link', { name: 'Filter 4K UHD Monitors by £200 - £499.99 £200 - £499.99 (9)' }).click();
  await page.getByRole('button', { name: 'Availability' }).click();
  await page.getByRole('link', { name: 'Filter 4K UHD Monitors by availability Show items in stock only' }).click();
  await page.getByRole('link', { name: 'LG 27UP650K-W 27inch Class 4K' }).click();
  await page.getByRole('button', { name: 'scroll thumbnail images right' }).click();
  await page.getByRole('button', { name: 'Add to Basket' }).click();
  await page.getByRole('searchbox', { name: 'Site Search' }).click();
  await page.getByRole('searchbox', { name: 'Site Search' }).fill('blue laser computer mouse');
  await page.getByRole('searchbox', { name: 'Site Search' }).click();
  await page.getByRole('searchbox', { name: 'Site Search' }).press('Enter');
  await page.getByRole('link', { name: 'filter unchecked Peripherals - Keyboards And Mice - Wired Mice (23)' }).click();
  await page.getByRole('link', { name: 'Dell MS116 Mouse - Optical -' }).click();
  await page.locator('#newspec-imageblock center').click();
  await page.getByTitle('Dell MS116 Mouse - Optical -').click();
  await page.getByRole('button', { name: 'Add to Basket' }).click();
  await page.getByRole('link', { name: '2', exact: true }).click();
  await page.getByRole('link', { name: '' }).first().click();
  await page.locator('#delsel').selectOption('DEL30');
  await page.getByRole('link', { name: 'Secure Checkout ' }).click();
});