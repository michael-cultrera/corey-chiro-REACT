import { Typography, Grid, Box, Divider } from "@mui/material";
import FilledButton from "../components/FilledButton";
import { Container } from "@mui/system";

const techniques = [
  {
    title: "Network Spinal Analysis",
    image: "images/network.jpeg",
    description:
      "This gentle technique uses light touches along the spine to send signals to the brain, helping the body release built-up tension in the spinal cord, nerves, muscles, and tendons. Patients may feel relaxed, experience deep breaths, muscle movement, or shifts in tension.",
  },
  {
    title: "Neuromechanical Impulse Adjusting",
    image: "images/sample1.jpeg",
    description:
      "This technique uses a device to deliver precise thrusts to restricted joints, improving mobility and reducing pain caused by tension and poor body mechanics.",
  },
  {
    title: "Myofascial Release",
    image: "images/sample1.jpeg",
    description:
      "Myofascial Release relieves tight muscles through patient movements and practitioner guidance, similar to deep tissue massage but more targeted. Gua Sha tools may also be used to release muscle adhesions and realign tissues.",
  },
  {
    title: "Therapeutic Ultrasound",
    image: "images/sample1.jpeg",
    description:
      "Therapeutic ultrasound uses sound waves to break down scar tissue from injuries or strain. The vibrations create heat, boosting blood flow and aiding the body's natural healing process.",
  },
  {
    title: "Exercise Prescription",
    image: "images/sample1.jpeg",
    description:
      "Exercise prescriptions help maintain alignment and stability after releasing tension, ensuring muscles fire correctly for efficient movement.",
  },
];

export default function About() {
  return (
    <Typography>
      <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 8 },
          px: { xs: 3, sm: 6, md: 10 },
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              fontWeight: 600,
              display: "block",
              mb: 2,
              letterSpacing: 2,
            }}
          >
            Welcome to Kinect Chiropractic
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            Unlock Your Wellness Journey.
          </Typography>

          <FilledButton
            buttonText="Book An Appointment"
            onClick={() => {
              window.location.href = "/book-appointment";
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          <Box
            component="img"
            src="images/sample1.jpeg"
            alt="Network Spinal Analysis"
            sx={{
              width: "100%",
              maxHeight: { xs: 300, md: 500 },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          py: 3,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 3, md: 5 },
            }}
          >
            <Typography
              variant="header"
              sx={{
                pb: 0, //since header is default to padding on bottom, change this so header has 0 padding on bottom
              }}
            >
              Our Mission
            </Typography>
            <Divider
              sx={{
                width: 60,
                mx: "auto",
                my: 3,
                borderColor: "black",
                borderBottomWidth: 3,
              }}
            />
            <Typography
              variant="body"
              sx={{
                fontWeight: 500,
                lineHeight: 1.4,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{backgroundColor: "var(--dark-green)", py: 5}}>
        <Typography variant="header" sx={{ pb: 2, textAlign: "center", }}>
          About Dr. Corey Cultrera
        </Typography>
        <Box sx={{height: "100%", width: "100%", display: "flex", flexDirection: {xs: "column", md: "row"}, alignItems: "center", justifyContent: "center", px: "40px", gap: "50px"}}>
          <Box
            component="img"
            src="/images/corey_img.jpeg"
            alt="Dr. Corey Cultrera"
            sx={{
              height:{ xs: "250px", sm: "300px", xl: "450px" },
              objectFit: "cover",
            }}
          />
          <Typography variant="body">
            Dr. Corey Cultrera is a dedicated chiropractor committed to helping patients achieve optimal health and wellness through personalized care.
            His approach combines gentle techniques, modern chiropractic methods, and patient education to support spinal health, nervous system function, and overall well-being.
            <br/><br/>Dr. Corey’s passion for chiropractic care comes from personal experience. He was once a patient dealing with chronic pain and, after years of exploring different therapies
            and techniques, he was able to regain his health. This journey not only allowed him to return to exercising and playing as a goalie in hockey but also gave him deep empathy
            for people in pain and a strong motivation to help others live the lives they want and deserve—free from the limitations of pain and dysfunction.
            <br/><br/>He believes that every patient deserves individualized attention and a treatment plan tailored to their unique needs—whether it’s relieving pain, improving mobility,
            or enhancing overall health. Dr. Cultrera is committed to creating a welcoming, supportive environment where patients of all ages can feel comfortable and confident in their care.
            Outside the clinic, he enjoys staying active, exploring new wellness techniques, and helping others lead healthier, more balanced lives.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 8 }, px: { xs: 2, md: 6 } }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: 700, mb: 5 }}
      >
        Our Techniques
      </Typography>
      {techniques.map((technique, index) => (
        <Box
          key={technique.title}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
            alignItems: "flex-start",
            mb: 6,
          }}
        >
          <Box
            component="img"
            src={technique.image}
            alt={technique.title}
            sx={{
              width: { xs: "100%", md: "40%" },
              height: 250,
              objectFit: "cover",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          />
          <Box
            sx={{
              flex: 1,
              backgroundColor: "var(--light-green)",
              p: 3,
              display: "inline-block",
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {technique.title}
            </Typography>
            <Typography variant="body" sx={{ lineHeight: 1.6 }}>
              {technique.description}
            </Typography>
          </Box>
        </Box>
      ))}
        </Box>
      </Container>
    </Typography>
  );
}
