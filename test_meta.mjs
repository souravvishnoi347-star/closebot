import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const phoneNumberId = "1163304356874717";
const accessToken = "EAAOT7zHPrGABRZCaZAtZBdvdptPh3SeoIX3jV2EU52IoZBbdAg2Qmi8JpPnH2Aiutal0bhOjRYXRHoQY8XNo0CHYoxZBHTx75li3urau0DLeX8CcCI1S91TPKNxFerK3p3uUhvYUZBKgQ7IP69gDbryRGUFAcqovrjHtnZAlZBYsW04YnEFii5ZBIeX1wfwm4jhZA2gzcwZBemWjbqRGZCNuFm4BK16NT1kJzZAb9aRJg9dg2Yqssb2lxEqEpTZCuQ7elUYYikTALmO7HZCZBBaDpVaQg1CNMpLo";

async function test() {
  const url = `https://graph.facebook.com/v21.0/${phoneNumberId}?fields=id,display_phone_number,verified_name,quality_rating`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const data = await res.json();
  console.log("Meta API Response:", data);
}

test();
