import { Box, Typography, Container, TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import FilledButton from "../components/FilledButton";

export default function BookAppointment() {
  return (
    <Container>
      <Typography>
        <Box sx={{px: "20px", pt: "20px"}}>
        <Typography variant="header">Book An Appointment</Typography>
        <Typography variant="body" sx={{pb: 1}}>
          To book an initial exam/appointment with Dr. Corey Cultrera please call{" "}
          <a href="tel:416-497-8585" style={{ color: "var(--link-color)" }}>
            416-497-8585
          </a>{" "}
          and the front desk staff will be happy to help. Initial appointments
          include a health history, physical exam and treatment if warranted
          (depending on your case).{" "}
        </Typography>
        <FilledButton buttonText="Call 416-497-8585" onClick={() => {window.location.href = "tel:416-497-8585"}}/>
        <Box
          sx={{
            pt: 5,
          }}
        >
          <Typography variant="header">Initial Exams</Typography>
          <Typography variant="body" sx={{pb: 1}}>
            Prior to your initial exam you can{" "}
            <a href="/patient-forms" style={{ color: "var(--link-color)" }}>
              download the new patient forms here
            </a>{" "}
            and bring them to your initial exam or please arrive 15-20 minutes
            early to fill them out.
          </Typography>
          <FilledButton buttonText="Download Patient Forms" onClick={() => {window.location.href = "/patient-forms"}}/>
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
          </Box>
          <Box sx={{ width: { xs: '100%', sm: 600 }, maxWidth: '100%', pb: 5, overflowX: 'auto' }}>
          <TableContainer component={Paper}>
            <Table sx={{backgroundColor: "var(--dark-green)", "& .MuiTableCell-root": {
      color: "var(--honeydew)",
    },}}>
              <TableBody>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Initial Exam:</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$100</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Adult Subsequent Visit:</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$50</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Extended Visit (30 mins):</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">Subsequent visit + $20 (E.g. Adult: $70)</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Student Subsequent Visit:</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$40</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Kids (12 and under):</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$35</Typography></TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </Box>
        </Box>
      </Typography>
    </Container>
  );
}
