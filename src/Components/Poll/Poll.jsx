import { BarChart } from '@mui/x-charts/BarChart';
import PropTypes from 'prop-types';

export default function SimpleCharts({ pollData }) {
  return (
    <div className="mt-20 h-full flex flex-col items-center space-y-10">
      <h1 className="text-3xl font-bold my-8">Election Poll Results</h1>

      {pollData.map((post, postIndex) => (
        <div key={postIndex} className="mb-12">
          <h2 className="text-xl font-bold mb-4">{post.postTitle}</h2>

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
                max: Math.max(...post.seriesData) + 10, // Adjust Y-axis based on the max votes
              },
            ]}
            series={[
              {
                data: post.seriesData, // Use updated vote counts
              },
            ]}
            width={800}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}

// Define prop types for validation
SimpleCharts.propTypes = {
  pollData: PropTypes.arrayOf(
    PropTypes.shape({
      postTitle: PropTypes.string.isRequired,
      xAxisData: PropTypes.arrayOf(PropTypes.string).isRequired,
      seriesData: PropTypes.arrayOf(PropTypes.number).isRequired,
    })
  ).isRequired,
};
