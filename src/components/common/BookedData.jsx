import { Box, LinearProgress, Stack, Typography, colors, linearProgressClasses } from '@mui/material';
import React from 'react';
import MPaper from './MPaper';

const bookedData = [
  {
    title: "PENDING",
    value: 1000,
    percent: 30,
    color: colors.yellow[600]
  },
  {
    title: "CANCELED",
    value: 100,
    percent: 10,
    color: colors.red[600]
  },
  {
    title: "SOLD",
    value: 2800,
    percent: 70,
    color: colors.green[600]
  }
];

const BookedData = () => {
  return (
    <MPaper title="Booked" fullHeight>
      <Stack spacing={4}>
        {bookedData.map((data, index) => (
          <Stack spacing={1} key={index}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="caption" fontWeight="600">{data.title}</Typography>
              <Typography variant="caption" fontWeight="600">{data.value}</Typography>
            </Stack>
            <Box>
              <LinearProgress
                variant="determinate"
                value={data.percent}
                sx={{
                  bgcolor: colors.grey[200],
                  height: 10,
                  borderRadius: 5,
                  [`& .${linearProgressClasses.bar}`]: {
                    borderRadius: 5,
                    bgcolor: data.color
                  }
                }}
              />
            </Box>
          </Stack>
        ))}
      </Stack>
    </MPaper>
  );
};

export default BookedData;