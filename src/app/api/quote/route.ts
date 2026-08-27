import { NextResponse } from 'next/server'
import { sendQuoteEmail } from '@/lib/send-quote-email'
import { validateQuoteData } from '@/lib/quote-validation'

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Le format de la demande est invalide.' }, { status: 400 })
  }

  const result = validateQuoteData(body)
  if (!result.data) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  try {
    await sendQuoteEmail(result.data)
    return NextResponse.json({ message: 'Votre demande a bien été envoyée.' })
  } catch {
    return NextResponse.json(
      { error: 'Une erreur est survenue. Vérifiez vos informations et réessayez.' },
      { status: 500 },
    )
  }
}
