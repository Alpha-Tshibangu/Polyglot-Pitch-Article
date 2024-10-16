// src/pages/api/waitlist.js

import { addToWaitlist } from '../../../lib/airtableModule';

export default async function handler(req, res) {
    console.log('API route hit', { method: req.method, body: req.body });
    if (req.method === 'POST') {
      try {
        const { email } = req.body;
        console.log('Attempting to add email:', email);
        const recordId = await addToWaitlist(email);
        console.log('Email added successfully', { recordId });
        res.status(200).json({ success: true, message: 'Added to waitlist', recordId });
      } catch (error) {
        console.error('Error in waitlist API:', error);
        res.status(500).json({ success: false, message: 'Failed to add to waitlist' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }