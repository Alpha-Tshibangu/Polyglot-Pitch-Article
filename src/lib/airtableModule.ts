// airtableModule.js

import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID!);

interface WaitlistEntry {
  email: string;
  firstName: string;
  lastName: string;
}

export async function addToWaitlist({ email, firstName, lastName }: WaitlistEntry) {
  try {
    // First, check if the email already exists
    const existingRecords = await base('Waitlist').select({
      filterByFormula: `{Email} = '${email}'`,
      maxRecords: 1
    }).firstPage();

    if (existingRecords.length > 0) {
      // Email already exists
      return { success: false, message: 'Email already exists in the waitlist!' };
    }

    // If email doesn't exist, add it
    const currentDate = new Date().toISOString().split('T')[0]; // Get only the date part
    const records = await base('Waitlist').create([
      {
        fields: {
          Email: email,
          'First Name': firstName,
          'Last Name': lastName,
          Date: currentDate
        }
      }
    ]);

    return { success: true, message: 'Added to waitlist', recordId: records[0].getId() };
  } catch (error) {
    console.error('Error in Airtable operation:', error);
    throw error;
  }
}