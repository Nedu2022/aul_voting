import  { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Person from '../Person/Person';

const initialPosts = [
  {
    title: 'President',
    xAxisData: ['John Doe', 'Noah Smith', 'Joy Smith'],
    seriesData: [20, 50, 33],
  },
  {
    title: 'Vice President',
    xAxisData: ['bar D', 'bar E', 'bar F'],
    seriesData: [48, 70, 19],
  },
  {
    title: 'Secretary',
    xAxisData: ['bar G', 'bar H', 'bar I'],
    seriesData: [30, 62, 28],
  },
];

export default function SimpleCharts() {
  const [posts, setPosts] = useState(initialPosts);

  // Function to handle vote update
  const handleVote = (postIndex, candidateIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].seriesData[candidateIndex] += 1; // Increment vote count
    setPosts(updatedPosts); // Update state
  };

  return (
    <div className="mt-20 h-full flex flex-col items-center space-y-10">
      <h1 className="text-3xl font-bold my-8">Election Poll Results</h1>
      
      {posts.map((post, postIndex) => (
        <div key={postIndex}>
          <h2 className="text-xl font-bold mb-4">{post.title}</h2>
          
          {/* Render the chart */}
          <BarChart
            xAxis={[
              {
                id: `barCategories-${postIndex}`,
                data: post.xAxisData,
                scaleType: 'band',
              },
            ]}
            yAxis={[
              {
                min: 0,
                max: 100,
              },
            ]}
            series={[
              {
                data: post.seriesData,
              },
            ]}
            width={800}
            height={300}
          />

          {/* Render Person components for each candidate */}
 
        </div>
      ))}
    </div>
  );
}
