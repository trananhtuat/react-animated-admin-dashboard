import React from 'react';
import MPaper from './MPaper';
import { Box, CircularProgress, Stack, Typography, circularProgressClasses, colors } from '@mui/material';

const toursData = [
  {
    title: "Sold out",
    value: 390,
    color: colors.green[600]
  },
  {
    title: "Availabe",
    value: 190,
    color: colors.grey[300]
  }
];

const ToursData = () => {
  return (
    <MPaper title="Tours Available">
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" justifyContent="center" p={3}>
          <Box position="relative">
            <CircularProgress
              variant="determinate"
              size={200}
              value={100}
              sx={{ color: colors.grey[200] }}
            />
            <CircularProgress
              variant="determinate"
              disableShrink
              size={200}
              value={70}
              sx={{
                position: "absolute",
                left: 0,
                color: colors.green[600],
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: "round"
                }
              }}
            />
            <Box sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}>
              <Typography variant="subtitle2" color={colors.grey[600]}>Tours</Typography>
              <Typography variant="h6">500</Typography>
            </Box>
          </Box>
        </Stack>
        <Stack spacing={1}>
          {toursData.map((data, index) => (
            <Stack key={index} direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <Box sx={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "4px",
                  bgcolor: data.color,
                  mr: 1
                }} />
                <Typography variant="subtitle2" color={colors.grey[700]}>
                  {data.title}
                </Typography>
              </Stack>
              <Typography variant="subtitle2">
                {data.value} Tours
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </MPaper>
  );
};

export default ToursData;