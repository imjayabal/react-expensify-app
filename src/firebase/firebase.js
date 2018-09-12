// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARQyAK82r6swRMjC_fyTpWPQOOE5KZNG8",
    authDomain: "expensify-c151d.firebaseapp.com",
    databaseURL: "https://expensify-c151d.firebaseio.com",
    projectId: "expensify-c151d",
    storageBucket: "expensify-c151d.appspot.com",
    messagingSenderId: "596726140171"
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

  
// //   child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// Get the data one time using "once"
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
        
// });

// Get the data and update the data on run time using "on"
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// // Create data
//   database.ref('expenses').push({
//       description:'Electricity Bill',
//       note: 'Jan month electricity paid',
//       amount: 7300,
//       createdAt: 2000
//   })




















//   database.ref('notes/-LLooyvKqgcr27sYgLpO').remove();
  
//   database.ref('notes').push({
//       title: 'Angular',
//       course: 'Angular 5/6 for future'
//   });

//  Fetch data from firebase
//   database.ref()
//     .on('value', (snapshot) => {
//         const data = snapshot.val();
//         const textMessage = `${data.name} is a ${data.job.title} at ${data.job.company}`
//         console.log(textMessage);
//     }, (e) => {
//         console.log('Error', e);
//     });


//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })



// Creat data
//   database.ref().set({
//       name: 'Jayabal Malaichamy',
//       age: 32,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Mopro'
//       },
//       location: {
//           city: 'Chennai',
//           country: 'India'
//       }
//   }).then(() => { // Promises data saved
//       console.log('Data is saved!');
//   }).catch((e) => { // Promises error
//       console.log('This failed. ', e);
//   });

// //   update data
//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Google',
//       'location/city': 'New York'
//   })

//   remove data
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Remove successfully!');
//     })
//     .catch((e) => {
//         console.log('Remove failed: ', e);
//     });


