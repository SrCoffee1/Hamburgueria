// Importações do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
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
const db = getFirestore(app);
const auth = getAuth(app);


// Autenticação
auth.onAuthStateChanged(user => {
    if (!user) {
        alert("Faça login para acessar a área de administração.");
        window.location.href = "login.html";
    }
});

// Logout
document.getElementById("logout").addEventListener("click", () => {
    auth.signOut();
});


// CRUD de Pratos
const dishForm = document.getElementById('dish-form');
dishForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('dish-name').value;
    const price = document.getElementById('dish-price').value;
    const image = document.getElementById('dish-image').files[0];
    try {
        await addDoc(collection(db, "dishes"), { name, price, image });
        alert("Prato cadastrado com sucesso!");
    } catch (error) {
        alert("Erro ao cadastrar prato: " + error.message);
    }
});

// Atualizar Pratos
async function updateDish(dishId, updatedData) {
    const dishRef = doc(db, "dishes", dishId);
    try {
        await updateDoc(dishRef, updatedData);
        alert("Prato atualizado com sucesso!");
    } catch (error) {
        alert("Erro ao atualizar prato: " + error.message);
    }
}

// Deletar Pratos
async function deleteDish(dishId) {
    const dishRef = doc(db, "dishes", dishId);
    try {
        await deleteDoc(dishRef);
        alert("Prato deletado com sucesso!");
    } catch (error) {
        alert("Erro ao deletar prato: " + error.message);
    }
}

// CRUD de Pedidos
const orderForm = document.getElementById('order-form');
orderForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const customerName = document.getElementById('order-name').value;
    const dish = document.getElementById('order-dish').value;
    const address = document.getElementById('order-address').value;
    try {
        await addDoc(collection(db, "orders"), { customerName, dish, address });
        alert("Pedido cadastrado com sucesso!");
    } catch (error) {
        alert("Erro ao cadastrar pedido: " + error.message);
    }
});

// Atualizar Pedidos
async function updateOrder(orderId, updatedData) {
    const orderRef = doc(db, "orders", orderId);
    try {
        await updateDoc(orderRef, updatedData);
        alert("Pedido atualizado com sucesso!");
    } catch (error) {
        alert("Erro ao atualizar pedido: " + error.message);
    }
}

// Deletar Pedidos
async function deleteOrder(orderId) {
    const orderRef = doc(db, "orders", orderId);
    try {
        await deleteDoc(orderRef);
        alert("Pedido deletado com sucesso!");
    } catch (error) {
        alert("Erro ao deletar pedido: " + error.message);
    }
}

// CRUD de Usuários
async function getUsers() {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    } catch (error) {
        alert("Erro ao buscar usuários: " + error.message);
    }
}

async function updateUser(userId, updatedData) {
    const userRef = doc(db, "users", userId);
    try {
        await updateDoc(userRef, updatedData);
        alert("Usuário atualizado com sucesso!");
    } catch (error) {
        alert("Erro ao atualizar usuário: " + error.message);
    }
}

async function deleteUser(userId) {
    const userRef = doc(db, "users", userId);
    try {
        await deleteDoc(userRef);
        alert("Usuário deletado com sucesso!");
    } catch (error) {
        alert("Erro ao deletar usuário: " + error.message);
    }
}

// Funções de Feedback e FAQ
async function submitFeedback(feedback) {
    try {
        await addDoc(collection(db, "feedbacks"), feedback);
        alert("Feedback enviado com sucesso!");
    } catch (error) {
        alert("Erro ao enviar feedback: " + error.message);
    }
}

async function fetchFAQs() {
    try {
        const querySnapshot = await getDocs(collection(db, "faqs"));
        return querySnapshot.docs.map((doc) => doc.data());
    } catch (error) {
        alert("Erro ao buscar FAQs: " + error.message);
    }
}
