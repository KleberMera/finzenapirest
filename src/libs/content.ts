export const htmlContent = (name: string, verificationCode: string) => {
    return `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restablecimiento de Contraseña - FinzenApp</title>
    <style>
      /* Estilos base */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        line-height: 1.5;
        color: #374151;
        background-color: #F9FAFB;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 16px;
      }
      
      /* Contenedor principal */
      .email-wrapper {
        max-width: 600px;
        margin: 0 auto;
        background-color: #FFFFFF;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      
      /* Encabezado */
      .email-header {
        background-color: #1E40AF;
        padding: 24px;
        text-align: center;
      }
      .logo-container {
        display: inline-block;
        margin: 0 auto;
        width: 80px;
        height: 80px;
      }
      .app-name {
        color: white;
        font-size: 24px;
        font-weight: 700;
        margin-top: 12px;
        letter-spacing: -0.025em;
      }
      
      /* Contenido */
      .email-content {
        padding: 32px 24px;
      }
      .email-title {
        font-size: 20px;
        font-weight: 700;
        color: #111827;
        margin-bottom: 16px;
        text-align: center;
      }
      .email-text {
        color: #4B5563;
        font-size: 16px;
        margin-bottom: 16px;
      }
      
      /* Código de verificación */
      .verification-container {
        background-color: #F3F4F6;
        border-radius: 8px;
        padding: 24px;
        margin: 24px 0;
        text-align: center;
        border: 1px solid #E5E7EB;
      }
      .verification-label {
        display: block;
        font-size: 14px;
        color: #6B7280;
        margin-bottom: 8px;
        text-align: center;
      }
      .verification-code {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: #1E40AF;
        padding: 8px 16px;
        background-color: white;
        border-radius: 6px;
        display: inline-block;
        min-width: 180px;
        border: 1px dashed #CBD5E1;
      }
      .expiry-note {
        font-size: 14px;
        color: #6B7280;
        margin-top: 8px;
        text-align: center;
        font-style: italic;
      }
      
      /* Alerta */
      .alert {
        background-color: #EFF6FF;
        border-left: 4px solid #1E40AF;
        padding: 16px;
        border-radius: 4px;
        margin: 24px 0;
      }
      .alert-text {
        color: #1E3A8A;
        font-size: 14px;
        margin: 0;
      }
      
      /* Botón */
      .button-container {
        text-align: center;
        margin: 24px 0;
      }
      .button {
        display: inline-block;
        background-color: #1E40AF;
        color: white;
        font-weight: 500;
        text-decoration: none;
        padding: 12px 24px;
        border-radius: 6px;
        text-align: center;
        font-size: 16px;
      }
      
      /* Footer */
      .email-footer {
        background-color: #F9FAFB;
        padding: 24px;
        text-align: center;
        border-top: 1px solid #E5E7EB;
      }
      .footer-text {
        color: #6B7280;
        font-size: 14px;
        margin-bottom: 12px;
      }
      .footer-links {
        color: #6B7280;
        font-size: 14px;
      }
      .footer-link {
        color: #1E40AF;
        text-decoration: none;
      }
      
      /* Espaciado y estilos adicionales */
      .spacer-sm {
        height: 8px;
      }
      .spacer-md {
        height: 16px;
      }
      .spacer-lg {
        height: 32px;
      }
      .accent {
        color: #1E40AF;
        font-weight: 600;
      }
      
      /* Media queries para responsividad */
      @media screen and (max-width: 480px) {
        body {
          padding: 8px;
        }
        .email-wrapper {
          border-radius: 4px;
        }
        .email-header,
        .email-content,
        .email-footer {
          padding: 16px;
        }
        .verification-code {
          font-size: 24px;
          min-width: auto;
          padding: 8px;
        }
        .logo-container {
          width: 60px;
          height: 60px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-header">
        <div class="logo-container">
          <!-- Incrustación directa del SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" /> 
                <stop offset="100%" style="stop-color:#6366F1;stop-opacity:1" /> 
              </linearGradient>
            </defs>
            
            <!-- Background circle -->
            <circle cx="100" cy="100" r="90" fill="url(#logoGradient)" />
            
            <!-- Stylized F -->
            <path d="M60 70 L100 70 L105 55 C110 40 125 50 120 65 L115 85 L140 85 L138 95 L113 95 L108 120 C105 135 95 130 98 120 L103 95 L75 95 L60 70" 
                  fill="white" />
            
            <!-- Zen circle -->
            <circle cx="130" cy="130" r="20" fill="white" opacity="0.7" />
            
            <!-- Financial graph element -->
            <polyline points="50 150 75 120 100 140 150 90" 
                      fill="none" 
                      stroke="white" 
                      stroke-width="6" 
                      stroke-linecap="round" />
          </svg>
        </div>
        <div class="app-name">FinzenApp</div>
      </div>
      
      <div class="email-content">
        <h1 class="email-title">Restablecimiento de Contraseña</h1>
        
        <p class="email-text">Hola <span class="accent">${name}</span>,</p>
        
        <p class="email-text">Hemos recibido una solicitud para restablecer tu contraseña en FinzenApp. Para continuar con el proceso, utiliza el siguiente código de verificación:</p>
        
        <div class="verification-container">
          <span class="verification-label">Tu código de verificación</span>
          <div class="verification-code">${verificationCode}</div>
          <p class="expiry-note">Este código expirará en 15 minutos</p>
        </div>
        
        <div class="alert">
          <p class="alert-text">Si no has solicitado restablecer tu contraseña, puedes ignorar este correo o contactar a nuestro equipo de soporte.</p>
        </div>
        
        <div class="button-container">
          <a href="https://fin-zen.vercel.app/auth/forgot-password" class="button">Restablecer Contraseña</a>
        </div>
        
        <p class="email-text">Saludos,<br>El Equipo de <span class="accent">FinzenApp</span></p>
      </div>
      
      <div class="email-footer">
        <p class="footer-text">&copy; ${new Date().getFullYear()} FinzenApp. Todos los derechos reservados.</p>
        <p class="footer-links">
          ¿Necesitas ayuda? <a href="mailto:soporte@finzenapp.com" class="footer-link">soporte@finzenapp.com</a>
        </p>
      </div>
    </div>
  </body>
  </html>
  `;
  };