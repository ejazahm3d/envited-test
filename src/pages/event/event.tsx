import { Box, Container, Stack, Typography } from "@mui/material";

export const EventPage = () => {
  return (
    <>
      <Box
        width="100%"
        component="img"
        src="/birthday-cake.png"
        alt="event photo"
      />

      <Container>
        <Stack>
          <Stack sx={{ mb: "1rem" }}>
            <Typography
              fontSize="28px"
              sx={{
                fontWeight: "bold",
                color: "primary.darker",
              }}
            >
              Birthday Bash
            </Typography>
            <Typography
              fontSize="14px"
              sx={{
                color: "#828282",
              }}
            >
              Hosted By{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Elysia
              </Box>
            </Typography>
          </Stack>

          <Stack flexDirection="row">
            <Box sx={{}}>Icon</Box>
            <Stack>
              <Typography>18 August 6:00PM</Typography>
              <Typography>to 19 August 1:00PM UTC +10</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
