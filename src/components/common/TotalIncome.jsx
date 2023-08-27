import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Paper, Stack, Typography, colors } from '@mui/material';
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const chartData = {
  labels: ["May", "Jun", "July", "Aug", "May", "Jun", "July", "Aug"],
  datasets: [
    {
      label: "Revenue",
      data: [301, 301, 302, 303, 302, 301, 302, 303],
      borderColor: colors.green[600],
      tension: 0.5
    }
  ]
};

const TotalIncome = () => {
  return (
    <Paper elevation={0} sx={{
      p: 3,
      background: "linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)",
      color: colors.green[800],
      heightL: "100%"
    }}>
      <Stack spacing={3}>
        <Stack direction="row" justifyContent="space-between">
          <Stack spacing={2}>
            <Typography variant="body2" fontWeight="bold">Total Incomes</Typography>
            <Typography variant="h4" fontWeight="bold">$29,110</Typography>
          </Stack>
          <Stack>
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <TrendingUpOutlinedIcon fontSize="small" />
              <Typography variant="body2" fontWeight="bold">
                +3.5%
              </Typography>
            </Stack>
            <Typography variant="subtitle2" fontWeight={400}>
              than last month
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Line
            data={chartData}
            height="100px"
            options={{
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                x: { display: false },
                y: { display: false }
              },
              elements: { point: { radius: 0 } },
              plugins: { legend: { display: false } }
            }}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default TotalIncome;