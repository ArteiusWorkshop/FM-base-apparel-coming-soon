import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Form } from "../form";

export const Mobile = () => {
  return (
    <Box maxWidth="385px" position="absolute" left="0" top="0">
      <Box width={385} height={85}>
        <Box pt={3} pl={4}>
          <Image
            src="/img/logo.svg"
            alt="Logo Base Apparel"
            width="105"
            height="25"
          />
        </Box>
      </Box>
      <Box width={385} height={250}>
        <Image
          src="/img/hero-mobile.jpg"
          alt="Logo Base Apparel"
          width={385}
          height={250}
        />
      </Box>
      <Box pt={7} sx={{ textAlign: "center" }}>
        <Typography variant="h2" className="titles text pink">
          We&#39;re
        </Typography>
        <Typography variant="h3" className="titles">
          coming
        </Typography>
        <Typography variant="h3" className="titles">
          soon
        </Typography>
      </Box>
      <Box pl={5} pr={5} pt={1} sx={{ textAlign: "center" }}>
        <Typography className="para">
          Hello fellow shoppers! We&#39;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </Typography>
      </Box>

      <Form />
    </Box>
  );
};
