// import { useState } from 'react';
// import Vote from './Vote';
// import SimpleCharts from './SimpleCharts';
// import data from './data'; // Assuming the data file is named data.js

// // Function to group candidates by their post
// const groupByPost = (post) => {
//   return data.filter(person => person.post === post).map(person => person.name);
// };

// // Initialize posts with xAxisData from the grouped names
// const initialPosts = [
//   {
//     title: 'President',
//     xAxisData: groupByPost('President'), // Get names of candidates for President
//     seriesData: Array(groupByPost('President').length).fill(0), // Start with 0 votes
//   },
//   {
//     title: 'Vice President',
//     xAxisData: groupByPost('Vice President'), // Get names of candidates for Vice President
//     seriesData: Array(groupByPost('Vice President').length).fill(0), // Start with 0 votes
//   },
//   {
//     title: 'Secretary',
//     xAxisData: groupByPost('Secretary'), // Get names of candidates for Secretary
//     seriesData: Array(groupByPost('Secretary').length).fill(0), // Start with 0 votes
//   },
//   {
//     title: 'Social President',
//     xAxisData: groupByPost('Social President'), // Get names of candidates for Social President
//     seriesData: Array(groupByPost('Social President').length).fill(0), // Start with 0 votes
//   },
// ];

// export default function App() {
//   const [posts, setPosts] = useState(initialPosts);

//   // Function to handle vote update
//   const handleVote = (postIndex, candidateIndex) => {
//     const updatedPosts = [...posts];
//     updatedPosts[postIndex].seriesData[candidateIndex] += 1; // Increment vote count
//     setPosts(updatedPosts); // Update state
//   };

//   return (
//     <div>
//       {/* Voting section */}
//       <Vote posts={posts} handleVote={handleVote} />

//       {/* Chart section */}
//       <SimpleCharts posts={posts} />
//     </div>
//   );
// }
