# Contact Form Setup

The contact form has been implemented with Formspree integration for handling email submissions on GitHub Pages.

## Current Implementation

- **Form Fields**: Name, Email, Message
- **Validation**: Client-side validation with real-time feedback
- **UI**: Loading states, success/error messages
- **Email Service**: Formspree (free tier: 50 submissions/month)
- **Form ID**: xblkagpw

## Email Integration Options

### 1. EmailJS (Recommended for static sites)
```bash
npm install emailjs-com
```

Update `src/pages/api/contact.ts`:
```typescript
import emailjs from 'emailjs-com';

// In the POST handler:
const result = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: name,
    from_email: email,
    message: message,
    to_email: 'your-email@example.com'
  },
  'YOUR_USER_ID'
);
```

### 2. Formspree (No server setup required)
Replace the form action with:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 3. Netlify Forms (If deploying to Netlify)
Add `data-netlify="true"` to the form:
```html
<form data-netlify="true" name="contact">
```

### 4. SendGrid
```bash
npm install @sendgrid/mail
```

Update `src/pages/api/contact.ts`:
```typescript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'your-email@example.com',
  from: 'noreply@yourdomain.com',
  subject: 'New Contact Form Submission',
  text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  html: `<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
};

await sgMail.send(msg);
```

### 5. Nodemailer (Self-hosted)
```bash
npm install nodemailer
```

## Environment Variables

Create a `.env` file in your project root:
```env
# For SendGrid
SENDGRID_API_KEY=your_api_key_here

# For EmailJS
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_USER_ID=your_user_id
```

## Testing

1. Start the development server: `npm run dev`
2. Navigate to your site and test the contact form
3. Check the browser console and server logs for form submissions

## Security Features Implemented

### ✅ **Client-Side Security:**
- **Input Sanitization**: Removes HTML tags and limits input length
- **Rate Limiting**: 30-second cooldown between submissions
- **Validation**: Email format, length limits, required fields
- **XSS Prevention**: Sanitizes all user inputs

### ✅ **Server-Side Security (Formspree):**
- **Spam Protection**: Built-in filtering
- **HTTPS**: All submissions are encrypted
- **Rate Limiting**: Formspree handles server-side limits
- **Email Validation**: Server-side email verification

### 🔧 **Additional Security Options:**

#### **reCAPTCHA (✅ Implemented)**
- **Site Key**: `6LetS5grAAAAANEwqa9_oqTRawlROQbd-NmxKUDX`
- **Secret Key**: Configure in Formspree settings
- **Validation**: Client-side reCAPTCHA verification
- **Reset**: Automatically resets after submission

#### **Additional Measures:**
- **Honeypot Fields**: Add hidden fields to catch bots
- **Content Security Policy**: Add CSP headers
- **Input Length Limits**: Already implemented (2-50 chars for name, 10-1000 for message)
- **Email Domain Validation**: Can add specific domain restrictions

## Customization

The form styling follows your existing design system. You can customize:
- Form fields by modifying the HTML structure
- Validation rules in the JavaScript class
- Success/error messages in the API endpoint
- Styling in the CSS section 