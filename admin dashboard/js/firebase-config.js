import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyABd8_CJuZxURsyhGp4APYbTjnIAzVGmrA",
    authDomain: "lifjarzstoreid-26f78.firebaseapp.com",
    projectId: "lifjarzstoreid-26f78",
    storageBucket: "lifjarzstoreid-26f78.firebasestorage.app",
    messagingSenderId: "238175505642",
    appId: "1:238175505642:web:a886dbe6a673a24d4c9b93",
};
// 🔥 1. INIT APP DULU
const app = initializeApp(firebaseConfig);

// 🔥 2. BARU EXPORT AUTH & DB
export const auth = getAuth(app);
export const db = getFirestore(app);