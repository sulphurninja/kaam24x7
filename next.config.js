const withPWA = require("next-pwa");

module.exports = withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },

    env: {
        "BASE_URL": "https://www.kaam24x7.com",
        "MONGODB_URL": "mongodb+srv://aditya4sure:RiseAbove@work.3smun.mongodb.net/Work?retryWrites=true&w=majority",
        "ACCESS_TOKEN_SECRET": "Dk8n4%Q_AYcSNDVmbt374PwDX9=G2N=?vE49RpvC",
        "REFRESH_TOKEN_SECRET": "5$ngjG%y7rhB*Ufm&A$XHFBY?BfT^W+f7a*K3@H@",
        "PAYPAL_CLIENT_ID": "AVjDkEiXFmFAEkGDfwpwbngL4uzfGpSj4F4ncJHErbZW6u04Z-kGasPW2A7UTdJdeD9_IdbKQhtazA_c",
        "CLOUD_UPDATE_PRESET": "x8yy4v2u",
        "CLOUD_NAME": "kaam-24x7",
        "CLOUD_API": "https://api.cloudinary.com/v1_1/kaam-24x7/image/upload",
        "CLOUD_URL": "CLOUDINARY_URL=cloudinary://854331266778512:t5CixNRtN0I10mfAHE1HRe_Kutw@kaam-24x7"
    }
}
<<<<<<< HEAD
);
=======
>>>>>>> 9f844cfd0e019f02ca3baac550916ef7f33d2a42

