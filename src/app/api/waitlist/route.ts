// src/app/api/waitlist/route.ts

import { NextResponse } from 'next/server';
import { addToWaitlist } from '../../../lib/airtableModule';  // Adjust this import path as needed

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName } = await request.json();
    console.log('Received data:', { email, firstName, lastName });

    const result = await addToWaitlist({ email, firstName, lastName });
    console.log('Airtable operation result:', result);

    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result, { status: 409 }); // 409 Conflict for duplicate entry
    }
  } catch (error) {
    console.error('Error in waitlist API:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process waitlist request' }, 
      { status: 500 }
    );
  }
}