"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  Shell: () => Shell,
  useAppShell: () => useAppShell
});
module.exports = __toCommonJS(ui_exports);

// useAppShell.ts
var import_zustand = __toESM(require("zustand"));
var import_middleware = require("zustand/middleware");
var useAppShell = (0, import_zustand.default)()(
  (0, import_middleware.persist)(
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
var import_core2 = require("@mantine/core");

// TopBar.tsx
var import_react = __toESM(require("react"));
var import_core = require("@mantine/core");
var import_icons = require("@tabler/icons");
var styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  }
};
var TopBar = ({ title }) => {
  const { colorScheme, toggleColorScheme } = (0, import_core.useMantineColorScheme)();
  const theme = (0, import_core.useMantineTheme)();
  const colors = {
    ["dark" /* DARK */]: {
      accent: theme.colors.violet[8]
    },
    ["light" /* LIGHT */]: {
      accent: theme.colors.violet[9]
    }
  };
  return /* @__PURE__ */ import_react.default.createElement(import_core.Header, { height: 60, p: "xs" }, /* @__PURE__ */ import_react.default.createElement(import_core.Container, { style: styles.header }, /* @__PURE__ */ import_react.default.createElement("span", null, "PLAYGROUND"), /* @__PURE__ */ import_react.default.createElement(import_core.Title, { color: colors[theme.colorScheme].accent }, title), /* @__PURE__ */ import_react.default.createElement(import_core.Group, { position: "center", my: "xl" }, /* @__PURE__ */ import_react.default.createElement(
    import_core.ActionIcon,
    {
      onClick: () => toggleColorScheme(),
      size: "lg",
      sx: (theme2) => ({
        borderWidth: 1,
        borderColor: theme2.colorScheme === "dark" /* DARK */ ? theme2.colors.dark[4] : theme2.colors.gray[4]
      })
    },
    colorScheme === "dark" /* DARK */ ? /* @__PURE__ */ import_react.default.createElement(import_icons.IconSun, { size: 18 }) : /* @__PURE__ */ import_react.default.createElement(import_icons.IconMoonStars, { size: 18 })
  ))));
};

// Shell.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Shell = ({
  title,
  children
}) => {
  const { mode, setMode } = useAppShell();
  const toggleColorScheme = (value) => {
    setMode((value != null ? value : mode === "dark" /* DARK */) ? "light" /* LIGHT */ : "dark" /* DARK */);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_core2.ColorSchemeProvider,
    {
      colorScheme: mode,
      toggleColorScheme,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_core2.MantineProvider,
        {
          theme: { colorScheme: mode },
          withGlobalStyles: true,
          withNormalizeCSS: true,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.AppShell, { padding: "md", header: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { title }), children })
        }
      )
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Shell,
  useAppShell
});
