export const contactH = async (request: any, reply: any) => {
    const { subject, message } = request.body as { subject: string; message: string }  // TS types for safety
    // Here: Save to DB, email yourself, log it, etc. For now, just log
    console.log(`New contact: Subject=${subject}, Message=${message}`)
    return { success: true, message: 'Thanks! We got your message.' }  // JSON response
  };