import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Configuration
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Email templates
const emailTemplates = {
  demoRequest: (data) => ({
    subject: `Yeni Demo Talebi - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">NeedsCloud</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Yeni Demo Talebi</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <h2 style="color: #333; margin-bottom: 20px;">Demo Talep Detayları</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>E-posta:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.email}</td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.phone}</td>
            </tr>
            ` : ''}
            ${data.company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Şirket:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.company}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Tarih:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${new Date().toLocaleString('tr-TR')}</td>
            </tr>
          </table>
          
          ${data.message ? `
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Mesaj:</h3>
            <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea;">${data.message}</p>
          </div>
          ` : ''}
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
          <small>Bu e-posta NeedsCloud demo talep formu aracılığıyla gönderilmiştir.</small>
        </div>
      </div>
    `
  }),
  
  contact: (data) => ({
    subject: `İletişim Formu Mesajı - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">NeedsCloud</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">İletişim Formu Mesajı</p>
        </div>
        
        <div style="padding: 30px; background: white;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>E-posta:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Konu:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Tarih:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${new Date().toLocaleString('tr-TR')}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Mesaj:</h3>
            <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; white-space: pre-line;">${data.message}</p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
          <small>Bu e-posta NeedsCloud iletişim formu aracılığıyla gönderilmiştir.</small>
        </div>
      </div>
    `
  })
};

// Demo request endpoint
app.post('/api/demo-request', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Ad Soyad ve e-posta alanları zorunludur.'
      });
    }

    const template = emailTemplates.demoRequest({ name, email, phone, company, message });

    const mailOptions = {
      from: process.env.SMTP_FROM || `"NeedsCloud" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: template.subject,
      html: template.html
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Demo talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    });

  } catch (error) {
    console.error('Demo request error:', error);
    res.status(500).json({
      success: false,
      message: 'Bir hata oluştu. Lütfen tekrar deneyin.'
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Tüm alanlar zorunludur.'
      });
    }

    const template = emailTemplates.contact({ name, email, subject, message });

    const mailOptions = {
      from: process.env.SMTP_FROM || `"NeedsCloud" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: template.subject,
      html: template.html
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Bir hata oluştu. Lütfen tekrar deneyin.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Test SMTP configuration
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter.verify()
      .then(() => console.log('SMTP configuration is valid'))
      .catch(err => console.error('SMTP configuration error:', err.message));
  } else {
    console.warn('SMTP credentials not configured. Email functionality will not work.');
  }
});