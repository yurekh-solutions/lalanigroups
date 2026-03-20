import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNeYqR4OvUYIoiDonev6HuEkZneXvzdF0",
  authDomain: "lalanigroup-94b10.firebaseapp.com",
  databaseURL: "https://lalanigroup-94b10-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lalanigroup-94b10",
  storageBucket: "lalanigroup-94b10.firebasestorage.app",
  messagingSenderId: "258555559200",
  appId: "1:258555559200:web:ad5356d0ae3240898b2b45",
  measurementId: "G-CHHMMJFTKM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface LeadData {
  id?: string;
  timestamp: string;
  type: 'whatsapp' | 'phone' | 'form' | 'page_view';
  source: string;
  visitorId: string;
  ip: string;
  location: {
    city: string;
    country: string;
  };
  device: string;
  browser: string;
  page: string;
  data?: Record<string, unknown>;
}

export const saveLeadToFirebase = async (lead: Omit<LeadData, 'id'>): Promise<void> => {
  try {
    await addDoc(collection(db, 'leads'), {
      ...lead,
      createdAt: Timestamp.now()
    });
    console.log('Lead saved to Firebase');
  } catch (error) {
    console.error('Error saving lead to Firebase:', error);
    throw error;
  }
};

export const getLeadsFromFirebase = async (): Promise<LeadData[]> => {
  try {
    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as LeadData));
  } catch (error) {
    console.error('Error fetching leads from Firebase:', error);
    throw error;
  }
};
