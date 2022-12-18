// useAppShell.ts
import create from "zustand";
import { persist } from "zustand/middleware";
var useAppShell = create()(
  persist(
    (set) => ({
      mode: "light" /* LIGHT */,
      activePage: "home",
      setMode: (mode) => set(() => ({ mode })),
      setActivePage: (page) => set(() => ({ activePage: page }))
    }),
    {
      name: "app-shell"
    }
  )
);

// Shell.tsx
import { AppShell as AppShell2, MantineProvider as MantineProvider2, ColorSchemeProvider as ColorSchemeProvider2 } from "@mantine/core";

// TopBar.tsx
import React from "react";
import {
  Header,
  Title,
  useMantineTheme,
  Group,
  useMantineColorScheme,
  ActionIcon,
  Container
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
var styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  }
};
var TopBar = ({ title }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const colors = {
    ["dark" /* DARK */]: {
      accent: theme.colors.violet[8]
    },
    ["light" /* LIGHT */]: {
      accent: theme.colors.violet[9]
    }
  };
  return /* @__PURE__ */ React.createElement(Header, { height: 60, p: "xs" }, /* @__PURE__ */ React.createElement(Container, { style: styles.header }, /* @__PURE__ */ React.createElement("span", null, "PLAYGROUND"), /* @__PURE__ */ React.createElement(Title, { color: colors[theme.colorScheme].accent }, title), /* @__PURE__ */ React.createElement(Group, { position: "center", my: "xl" }, /* @__PURE__ */ React.createElement(
    ActionIcon,
    {
      onClick: () => toggleColorScheme(),
      size: "lg",
      sx: (theme2) => ({
        borderWidth: 1,
        borderColor: theme2.colorScheme === "dark" /* DARK */ ? theme2.colors.dark[4] : theme2.colors.gray[4]
      })
    },
    colorScheme === "dark" /* DARK */ ? /* @__PURE__ */ React.createElement(IconSun, { size: 18 }) : /* @__PURE__ */ React.createElement(IconMoonStars, { size: 18 })
  ))));
};

// Shell.tsx
import { jsx } from "react/jsx-runtime";
var Shell = ({
  title,
  children
}) => {
  const { mode, setMode } = useAppShell();
  const toggleColorScheme = (value) => {
    setMode((value != null ? value : mode === "dark" /* DARK */) ? "light" /* LIGHT */ : "dark" /* DARK */);
  };
  return /* @__PURE__ */ jsx(
    ColorSchemeProvider2,
    {
      colorScheme: mode,
      toggleColorScheme,
      children: /* @__PURE__ */ jsx(
        MantineProvider2,
        {
          theme: { colorScheme: mode },
          withGlobalStyles: true,
          withNormalizeCSS: true,
          children: /* @__PURE__ */ jsx(AppShell2, { padding: "md", header: /* @__PURE__ */ jsx(TopBar, { title }), children })
        }
      )
    }
  );
};
export {
  Shell,
  useAppShell
};
