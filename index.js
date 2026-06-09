const admin = require("firebase-admin");

const serviceAccount = require("./ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// GANTI DENGAN TOKEN FCM DARI APLIKASI ANDROID
const registrationToken = "PASTE_TOKEN_FCM_DISINI";

const message = {
  notification: {
    title: "Attendance App",
    body: "Notifikasi berhasil dikirim dari Firebase Admin!",
  },
  token: registrationToken,
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("Berhasil mengirim notifikasi:", response);
  })
  .catch((error) => {
    console.error("Error mengirim notifikasi:", error);
  });