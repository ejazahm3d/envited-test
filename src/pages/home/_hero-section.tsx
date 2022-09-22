import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const heroSectionStyles = {
  commonHeadingTextStyles: {
    color: "primary.darker",
    fontSize: "36px",
    fontWeight: "bold",
    lineHeight: "1",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
};

export const HeroSection = () => {
  return (
    <Container>
      <Stack component="section" alignItems="center">
        <Stack alignItems="center" maxWidth="94%" pt="35px">
          <Typography sx={heroSectionStyles.commonHeadingTextStyles}>
            Imagine if
          </Typography>
          <Typography
            sx={(theme: any) => ({
              background: `-webkit-linear-gradient(90deg, ${theme.palette.primary.gradientStart} 24.2%, ${theme.palette.primary.gradientMiddle} 72.33%, ${theme.palette.primary.gradientEnd} 120.46%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              ...heroSectionStyles.commonHeadingTextStyles,
            })}
          >
            Snapchat
          </Typography>
          <Typography sx={heroSectionStyles.commonHeadingTextStyles}>
            had events.
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              fontWeight: "500",
              color: "#4F4F4F",
              lineHeight: "1",
              pt: "16px",
            }}
          >
            Easily host and share events with your friends across any social
            media.
          </Typography>
        </Stack>

        <Box
          component="img"
          src="/landing-page.svg"
          alt="image for landing page"
          sx={{
            width: "40%",
            filter: `drop-shadow(0px 0px 17.6435px rgba(0, 0, 0, 0.05))`,
            "border-radius": "13.2326px",
            pt: "36px",
            pb: "34px",
          }}
        />

        <Link href="/create">
          <Button size="large" variant="contained">
            <Box component="span">🎉</Box>
            Create my event
          </Button>
        </Link>
      </Stack>
    </Container>
  );
};
