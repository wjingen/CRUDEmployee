import { initializeApp  } from 'firebase/app'
import { getFirestore, collection, doc, addDoc, getDoc, deleteDoc, getDocs, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyAfGjS8wfs2vBWkBEq_Jf0mk0jX50K09G4",
	authDomain: "testing-4e46e.firebaseapp.com",
	projectId: "testing-4e46e",
	storageBucket: "testing-4e46e.appspot.com",
	messagingSenderId: "861214617540",
	appId: "1:861214617540:web:1d4ac8104c7e9aefcd3e91",
	measurementId: "G-X1K29BWN9Q"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userCollection = collection(db, "users");
const userRef = doc(userCollection);

export async function addUser(name, email, password) {
	await addDoc(userCollection, {
		name: name,
		email: email,
		password: password
	})
}

export async function getAllUserData() {
	var userDocs = await getDocs(userCollection);
	var data = userDocs.docs.map(function(a) {
		var userInfo = a.data()
		userInfo["id"] = a.id
		return userInfo 
	});
	return data

}

export async function deleteUser(id) {
	try {
		await deleteDoc(doc(db, "users",id))
	} catch (e) {
		console.error(`Error: no document with ${id} exists`)
	}
}