import { Typography, Box, Divider } from "@mui/material";
import FilledButton from "../components/FilledButton";
import { Container } from "@mui/system";
import OutlinedButton from "../components/OutlinedButton";

const techniques = [
  {
    title: "Network Spinal Analysis",
    image: "images/network.png",
    headingID: "nsa",
    description:
      "This gentle technique uses light touches along the spine to send signals to the brain, helping the body release built-up tension in the spinal cord, nerves, muscles, and tendons. Patients may feel relaxed, experience deep breaths, muscle movement, or shifts in tension.",
  },
  {
    title: "Neuromechanical Impulse Adjusting",
    image: "images/impulse_adjusting.png",
    headingID: "mechanical",
    description:
      "This technique uses a device to deliver precise thrusts to restricted joints, improving mobility and reducing pain caused by tension and poor body mechanics.",
  },
  {
    title: "Myofascial Release",
    image: "images/myofascial_release.jpg",
    description:
      "Myofascial Release relieves tight muscles through patient movements and practitioner guidance, similar to deep tissue massage but more targeted. Gua Sha tools may also be used to release muscle adhesions and realign tissues.",
  },
  {
    title: "Therapeutic Ultrasound",
    image: "images/ultrasound.png",
    description:
      "Therapeutic ultrasound uses sound waves to break down scar tissue from injuries or strain. The vibrations create heat, boosting blood flow and aiding the body's natural healing process.",
  },
  {
    title: "Shockwave Therapy",
    image: "images/shockwave.jpeg",
    headingID: "shockwave-therapy",
    description:
      "Shockwave therapy (Extracorporeal Shockwave Therapy - ESWT) is a non-invasive, non-surgical treatment that uses high-energy acoustic waves to treat chronic, stubborn soft tissue and bone injuries.",
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
            src="images/sunset.jpg"
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
            <Typography variant="header">
              Our Mission
            </Typography>
            <Divider
              sx={{
                width: 60,
                mx: "auto",
                mb: 5,
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
              Our mission is to improve the health and quality of life of our community and
              families through personalized, compassionate, and evidence-based chiropractic
              care. We focus on restoring balance to the body, relieving pain, and empowering
              patients with the knowledge and tools to live healthier, more active lives.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{backgroundColor: "var(--dark-green)", py: 5, color: "#F7FAFA"}}>
        <Typography variant="header" sx={{ pb: 2, textAlign: "center",}}>
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
        variant="header"
        sx={{ textAlign: "center", fontWeight: 700 }}
      >
        Our Techniques
      </Typography>
      <Divider
        sx={{
          width: 60,
          mx: "auto",
          mb: 5,
          borderColor: "black",
          borderBottomWidth: 3,
        }}
      />
      {techniques.map((technique, index) => {
        const isLight = index % 2 === 0;
      
        const bgColor = isLight
          ? "var(--light-green)"
          : "var(--dark-green)";

        const textColor = isLight
          ? "#000000"
          : "#F7FAFA";

      return (
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
              width: "100%",
              maxWidth: {xs: "300px", sm: "450px", md: "500px"},
              height: "auto",
              mx: { xs: "auto", md: 0 },
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          />
          <Box
            sx={{
              flex: 1,
              backgroundColor: bgColor,
              padding: 2,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold', color: textColor}}>
              {technique.title}
            </Typography>
            <Typography variant="body" sx={{ lineHeight: 1.6, mb: 2, color: `${textColor}CC`}}>
              {technique.description}
            </Typography>
            <Box
              sx={{
                mt: "auto",
                display: "flex",
                justifyContent: "flex-end",
                height: "25px",
              }}
            >
              <OutlinedButton
                fontColor={textColor}
                fontColorHover={bgColor}
                borderColor={textColor}
                buttonText={"Learn More"} 
                onClick={() => {window.location.href = `/services#${technique.headingID}`}}
              />
            </Box>
          </Box>
        </Box>
      )})}
        </Box>
      </Container>
    </Typography>
  );
}
