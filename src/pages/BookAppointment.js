import * as React from "react";
import Box from "@mui/material/Box";

export default function BookAppointment() {
  return (
    <Box
      sx={{
        px: 5,
        py: 5,
      }}
    >
      <p className="text-2xl font-bold">Book An Appointment</p>
      <p className="pt-5">
        To book an initial exam/appointment with Dr. Corey Cultrera please call{" "}
        <a href="tel:416-497-8585" style={{ color: "var(--link-color)" }}>
          416-497-8585
        </a>{" "}
        and the front desk staff will be happy to help. Initial appointments
        include a health history, physical exam and treatment if warranted
        (depending on your case).{" "}
      </p>
      <Box
        sx={{
          pt: 5,
        }}
      >
        <p className="text-2xl font-bold">Initial Exams</p>
        <p className="pt-5">
          Prior to your initial exam you can{" "}
          <a href="/patient-forms" style={{ color: "var(--link-color)" }}>
            download the new patient forms here
          </a>{" "}
          and bring them to your initial exam or please arrive 15-20 minutes
          early to fill them out.
        </p>
      </Box>
      <Box
        sx={{
          pt: 5,
        }}
      >
        <p className="text-2xl font-bold">Pricing</p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p className="pt-5">
            <strong>Initial Exam:</strong> $100
          </p>
          <p className="pt-5">
            <strong>Adult Subsequent Visit:</strong> $50
          </p>
          <p className="pt-5">
            <strong>Extended Visit (30 mins):</strong> Subsequent visit + $20
            (E.g. Adult: $70)
          </p>
          <p className="pt-5">
            <strong>Student Subsequent Visit:</strong> $40
          </p>
          <p className="pt-5">
            <strong>Kids (12 and under):</strong> $35
          </p>
        </Box>
      </Box>
    </Box>
  );
}
