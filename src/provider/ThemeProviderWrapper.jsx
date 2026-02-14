"use client";

import { ThemeProvider } from "next-themes";

const ThemeProviderWrapper = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
