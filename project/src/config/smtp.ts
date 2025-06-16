import { SMTPConfig } from '../types';

// SMTP Configuration
// Update these values with your actual SMTP settings
export const smtpConfig: SMTPConfig = {
  host: 'smtp.gmail.com', // or your SMTP host
  port: 587,
  secure: false, // true for 465, false for other ports
  user: 'your-email@gmail.com', // your email
  pass: 'your-app-password', // your email password or app password
  from: 'NeedsCloud <your-email@gmail.com>' // sender address
};

// Email templates
export const emailTemplates = {
  demoRequest: {
    subject: 'Yeni Demo Talebi - {{name}}',
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
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{name}}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>E-posta:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{email}}</td>
            </tr>
            {{#if phone}}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{phone}}</td>
            </tr>
            {{/if}}
            {{#if company}}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Şirket:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{company}}</td>
            </tr>
            {{/if}}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Tarih:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{date}}</td>
            </tr>
          </table>
          
          {{#if message}}
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Mesaj:</h3>
            <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea;">{{message}}</p>
          </div>
          {{/if}}
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
          <small>Bu e-posta NeedsCloud demo talep formu aracılığıyla gönderilmiştir.</small>
        </div>
      </div>
    `
  },
  
  contact: {
    subject: 'İletişim Formu Mesajı - {{name}}',
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
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{name}}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>E-posta:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{email}}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Konu:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{subject}}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Tarih:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">{{date}}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333;">Mesaj:</h3>
            <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; white-space: pre-line;">{{message}}</p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
          <small>Bu e-posta NeedsCloud iletişim formu aracılığıyla gönderilmiştir.</small>
        </div>
      </div>
    `
  }
};