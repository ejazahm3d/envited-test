import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { FormEvent, useState } from "react";
import { Dayjs } from "dayjs";
import { useRouter } from "next/router";

export const CreateEventPage = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const router = useRouter();

  const handleDateStartChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };
  const handleDateEndChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/event");
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <Typography
            sx={(theme: any) => ({
              fontSize: "2.5rem",
              textAlign: "center",
              lineHeight: "1",
              pt: "1rem",
              color: "primary.darker",
              fontWeight: "bold",
              background: `-webkit-linear-gradient(90deg, ${theme.palette.primary.gradientStart} 24.2%, ${theme.palette.primary.gradientMiddle} 72.33%, ${theme.palette.primary.gradientEnd} 120.46%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            })}
          >
            Create <Box component="span">event.</Box>
          </Typography>

          <Stack
            pt="2.5rem"
            spacing="1rem"
            component="form"
            onSubmit={handleOnSubmit}
          >
            <TextField label="Event Name" />
            <TextField label="Host Name" />

            <MobileDatePicker
              label="Date Start"
              inputFormat="MM/DD/YYYY"
              value={startDate}
              onChange={handleDateStartChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="Date End"
              inputFormat="MM/DD/YYYY"
              value={endDate}
              onChange={handleDateEndChange}
              renderInput={(params) => <TextField {...params} />}
            />

            <Box mt="1rem"></Box>
            <Button variant="contained" type="submit">
              Next
            </Button>
          </Stack>
        </Container>
      </LocalizationProvider>
    </>
  );
};
