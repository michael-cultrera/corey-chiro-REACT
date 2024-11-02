import * as React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function BookAppointment() {
  return (
    <Container>
      <Typography>
        <Typography variant="header">Book An Appointment</Typography>
        <Typography variant="body">
          To book an initial exam/appointment with Dr. Corey Cultrera please call{" "}
          <a href="tel:416-497-8585" style={{ color: "var(--link-color)" }}>
            416-497-8585
          </a>{" "}
          and the front desk staff will be happy to help. Initial appointments
          include a health history, physical exam and treatment if warranted
          (depending on your case).{" "}
        </Typography>
        <Box
          sx={{
            pt: 5,
          }}
        >
          <Typography variant="header">Initial Exams</Typography>
          <Typography variant="body">
            Prior to your initial exam you can{" "}
            <a href="/patient-forms" style={{ color: "var(--link-color)" }}>
              download the new patient forms here
            </a>{" "}
            and bring them to your initial exam or please arrive 15-20 minutes
            early to fill them out.
          </Typography>
        </Box>
        <Box
          sx={{
            pt: 5,
          }}
        >
          <Typography variant="header">Pricing</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="body">
              <strong>Initial Exam:</strong> $100<br />
              <strong>Adult Subsequent Visit:</strong> $50<br />
              <strong>Extended Visit (30 mins):</strong> Subsequent visit + $20 (E.g. Adult: $70)<br />
              <strong>Student Subsequent Visit:</strong> $40<br />
              <strong>Kids (12 and under):</strong> $35
            </Typography>
          </Box>
        </Box>
      </Typography>
    </Container>
  );
}
