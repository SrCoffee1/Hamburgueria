// Importações do Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

// Configuração Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcIrxM4paoy84owwOtiK-mL2wckGaw2Ds",
    authDomain: "hotburguers-724c7.firebaseapp.com",
    projectId: "hotburguers-724c7",
    storageBucket: "hotburguers-724c7.firebasestorage.app",
    messagingSenderId: "987898064446",
    appId: "1:987898064446:web:9b857f6c928861228aab6f",
    measurementId: "G-HZFNY5FE29"
};

// Inicialização Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificação de sessão (autenticação)
auth.onAuthStateChanged(user => {
    if (!user) {
        alert("Faça login para acessar a área de administração.");
        window.location.href = "login.html";
    }
});

// Logout
document.getElementById("logout").addEventListener("click", () => {
    console.log("Logout clicado!");
    signOut(auth)
        .then(() => {
            alert("Você saiu com sucesso!");
            window.location.href = "login.html"; // Redireciona para a página de login
        })
        .catch((error) => {
            console.error("Erro ao fazer logout:", error.message);
            alert("Erro ao sair. Tente novamente.");
        });
});
