import { Box, Typography, Container, TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import FilledButton from "../components/FilledButton";
import DownloadIcon from '@mui/icons-material/Download';

export default function BookAppointment() {
  return (
    <Typography>
      <Container>
        <Box sx={{px: "20px", pt: "20px"}}>
        <Typography variant="header">Book An Appointment</Typography>
        <Typography variant="body" sx={{pb: 1, mr: { md: 35 }}}>
          To book an initial exam/appointment with Dr. Corey Cultrera please call{" "}
          <a href="tel:416-497-8585" style={{ color: "#3B7597" }}>
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
          <Typography variant="body" sx={{pb: 1, mr: { md: 35 }}}>
            Prior to your initial exam you can download the new patient forms below
            and bring them to your initial exam or please arrive 15-20 minutes
            early to fill them out.
          </Typography>
          <FilledButton 
          buttonText={
            <>
              Download Patient Forms 
              <Box
                component="span"
                sx={{ ml: 1 }}
              >
                <DownloadIcon fontSize="small" />
              </Box>
            </>
          } 
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/patient_forms/new_patient_form.pdf";
            link.download = "new-patient-form.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}/>
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
              color: "#F7FAFA",
            },}}>
              <TableBody>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Initial Examination:</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$110</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Adult Subsequent Visit:</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$55</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Kids Initial Exam (12 and Under):</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$80</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Kids Subsequent Visit:</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$45</Typography></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell scope="row">
                      <Typography variant="body">Extended Subsequent Visit:</Typography>
                    </TableCell>
                    <TableCell align="right"><Typography variant="body">$75</Typography></TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        </Box>
        </Box>
      </Container>
    </Typography>
  );
}
