// lib/fetchProjects.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase.config';

export const fetchProjects = async () => {
  const collectionRef = collection(db, 'projects');
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};
