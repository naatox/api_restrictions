const { db } = require("../firebase");
const { v4: uuidv4 } = require("uuid");
const { Timestamp } = require('firebase-admin/firestore');



const seedData = [
    { reason: 'Completed course' },
    { reason: 'Dropped out' },
    { reason: 'Transferred' },
    { reason: 'Expelled' },
    { reason: 'Graduated' },
    { reason: 'Suspended' },
];


const seedFirestore = async () => {
    try {
      const batch = db.batch();
  
      seedData.forEach((data) => {
        const docRef = db.collection("restrictions").doc(uuidv4()); 
  
        
        batch.set(docRef, {
          ...data, 
          studentId: uuidv4(),  
          createdAt: Timestamp.now().toDate(),  
        });
      });
  
      await batch.commit();  
      console.log("Firestore seeding completed!");
    } catch (error) {
      console.error("Error seeding Firestore:", error);
    }
  };
  
  seedFirestore();