"use client";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.divider}`,
  textAlign: "center",
}));
export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6, 2),
  textAlign: "center",
}));
