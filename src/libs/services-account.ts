export  const serviceAccount = {
    type: process.env.FIREBASE_TYPE,
    projectId: process.env.FIREBASE_PROJECT_ID, // Nota: es projectId, no project_id
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID, // Nota: es privateKeyId, no private_key_id
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Nota: es privateKey, no private_key
    client_email: process.env.FIREBASE_CLIENT_EMAIL, // Nota: es clientEmail, no client_email
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI, // Nota: es authUri, no auth_uri
    token_uri: process.env.FIREBASE_TOKEN_URI, // Nota: es tokenUri, no token_uri
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
  };