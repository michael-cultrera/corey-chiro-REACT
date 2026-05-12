import { Typography, Container, Box, Divider } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function Services() {
  return (
    <Typography>
        <Container>
        <Typography variant="header" sx={{textAlign: "center", mt: 2}}>Our Services</Typography>
        <Divider
            sx={{
            width: 60,
            mx: "auto",
            mb: 5,
            borderColor: "black",
            borderBottomWidth: 3,
            }}
        />
        <Box sx={{ backgroundColor: "var(--light-green)", p: 3}}>
            <Typography variant="header">Network Spinal Analysis (NSA) Treatment</Typography>
            <Typography variant="body">Network Spinal Analysis (NSA) is a gentle, non-invasive approach that helps
                your body release tension and stress while supporting overall spinal and nervous system health. Using precise, 
                light touch along the spine, NSA promotes relaxation, improves energy flow, and enhances your body’s ability to adapt to stress.
                <br/><br/>This technique is safe and effective for anyone—from babies to seniors—and everyone in between.
            </Typography>
            <Typography variant="body" sx={{ pt: 3,}}><strong>Benefits of NSA Include:</strong><br/><br/>
                <ul>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Chronic pain relief</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Improved posture and spinal alignment</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Enhanced athletic performance</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Better sleep quality</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Increased energy levels</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Stress reduction and emotional well-being</li>
                </ul>
            </Typography>
        </Box>
        <Divider
            sx={{
            width: 60,
            mx: "auto",
            my: 4,
            borderColor: "black",
            borderBottomWidth: 3,
            }}
        />
        <Box sx={{ backgroundColor: "var(--dark-green)", p: 3}}>
            <Typography variant="header">Shockwave Therapy</Typography>
            <Typography variant="body">Shockwave Therapy is a non-invasive, evidence-based treatment designed to relieve pain, 
                improve mobility, and accelerate the body’s natural healing process. It is commonly used for chronic musculoskeletal 
                conditions, soft tissue injuries, and areas of pain that have not responded well to traditional care. <br/><br/>
            </Typography>
            <Typography variant="body" sx={{ fontWeight: 'bold', }}>
                How Shockwave Therapy Works
            </Typography>
            <Typography variant="body" sx={{ pt: 3,}}>
                Shockwave Therapy uses high-energy acoustic waves that are delivered directly to injured or painful tissues. These 
                waves stimulate increased blood flow, promote cellular repair, and encourage the body to break down scar tissue and 
                calcifications that may be limiting movement or causing discomfort. By triggering a natural healing response, shockwave
                therapy helps the body repair itself rather than simply masking symptoms. Treatments are quick, require no surgery or 
                injections, and are performed right in our office.
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: 5,}}>
                <Typography variant="body" sx={{ pt: 3,}}><strong>Benefits of Shockwave Therapy:</strong><br/><br/>
                    <ul>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Reduces chronic and acute pain</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Improves range of motion and flexibility</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Stimulates faster healing and tissue regeneration</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Breaks down scar tissue and adhesions</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Increases circulation to injured areas</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Non-invasive with little to no downtime</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> May reduce the need for medication or surgery</li>
                    </ul>
                </Typography>
                <Typography variant="body" sx={{ pt: 3,}}><strong>Conditions Commonly Treated with Shockwave Therapy:</strong><br/><br/>
                    <ul>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Chronic post surgical and injury scar tissue </li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Plantar fasciitis and heel pain</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Achilles tendon pain</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Heel spurs</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Patellar tendon pain (jumper’s knee)</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Tennis elbow and golfer’s elbow</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Rotator cuff–related shoulder pain</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Hip pain and bursitis</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Knee pain and overuse injuries</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Chronic muscle strains and soft tissue injuries</li>
                        <li><ArrowCircleRightIcon fontSize="xsmall"/> Myofascial trigger points</li>
                    </ul>
                </Typography>
            </Box>
        </Box>
        <Divider
            sx={{
            width: 60,
            mx: "auto",
            my: 4,
            borderColor: "black",
            borderBottomWidth: 3,
            }}
        />
        <Box sx={{ backgroundColor: "var(--light-green)", p: 3}}>
            <Typography variant="header">Therapeutic Ultrasound for Chronic Pain Relief</Typography>
            <Typography variant="body">Therapeutic Ultrasound is a non-invasive treatment used to reduce chronic pain, inflammation,
                and muscle tension. By delivering targeted sound waves deep into soft tissues, ultrasound helps improve circulation,
                relax tight areas, and support the body’s natural healing process.<br/><br/>
                This therapy is especially helpful for long-standing pain caused by muscle tightness, tendon irritation, joint 
                stiffness, and scar tissue. When combined with chiropractic care, therapeutic ultrasound can improve mobility, 
                decrease discomfort, and support long-term pain relief.
            </Typography>
            <Typography variant="body" sx={{ pt: 3,}}><strong>Common Conditions Treated:</strong><br/><br/>
                <ul>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Chronic neck and back pain</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Ongoing muscle tension and stiffness</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Tendonitis and overuse injuries</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Joint pain and limited mobility</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Scar tissue and soft tissue adhesions</li>
                </ul>
            </Typography>
        </Box>
        <Divider
            sx={{
            width: 60,
            mx: "auto",
            my: 4,
            borderColor: "black",
            borderBottomWidth: 3,
            }}
        />
        <Box sx={{ backgroundColor: "var(--dark-green)", p: 3}}>
            <Typography variant="header">Instrument-Assisted Mechanical Spine Adjustments</Typography>
            <Typography variant="body">Instrument-assisted mechanical spine adjustments offer a gentle, wellness-centered approach
                to supporting spinal health and overall balance in the body. Using a specialized handheld instrument, precise and
                controlled impulses are applied to areas of the spine that need support, encouraging proper movement and alignment 
                without forceful twisting or cracking. <br/><br/>
                his comfortable technique is designed to work with the body’s natural ability to heal and adapt. By improving joint
                mobility and reducing areas of stress, instrument-assisted adjustments help support nervous system function, promote
                relaxation, and enhance overall well-being. The light, consistent touch makes this approach ideal for individuals 
                of all ages who are seeking a calm, effective, and restorative care experience.
            </Typography>
            <Typography variant="body" sx={{ pt: 3,}}><strong>Benefits Include:</strong><br/><br/>
                <ul>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Gentle support for spinal alignment</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Improved mobility and flexibility</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Reduced physical stress and tension</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> Enhanced comfort and relaxation</li>
                    <li><ArrowCircleRightIcon fontSize="xsmall"/> A safe, low-force option for ongoing wellness care</li>
                </ul>
            </Typography>
        </Box>
        </Container>
    </Typography>
  );
}