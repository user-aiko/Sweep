<h1 align="center">
  Sweep
</h1>

<p align="center">
  A minimal slide-up panel for <a href="https://react.dev" target="_blank">React 18/19</a>.
  <br/>
  <a href="https://lab.ai-ko.dev/sweep" target="_blank">Live preview</a> • <a href="https://lab.ai-ko.dev/sweep/docs" target="_blank">Full docs</a>
</p>

<p align="center">
  <img src="https://i.imgur.com/ADXVkJJ.gif" alt="Sweep preview" width="600" />
</p>

<p align="center">
  <a href="#why-sweep">Why Sweep</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick start</a> •
  <a href="#api-reference">API reference</a> •
  <a href="#styling--theming">Styling</a> •
  <a href="#local-playground">Playground</a>
</p>

---

## Why Sweep

- **Drop-in experience** – Wrap your app once with `SweepWrapper`, call `useSweep()` anywhere, and you have a polished bottom sheet with portals, layering, and scroll locking handled for you.
- **Fluid animations** – Native `Element.animate` timelines drive the open/close/replace transitions, including blur, scale, and async switching when you call `open` twice with different keyed nodes.
- **Touch-native gestures** – Drag to dismiss, configurable snap point, optional body-blocking, and safeguards for iOS Safari quirks (`usePreventScroll`) ship built-in.
- **Configurable but tiny** – Toggle blur, border radius, outside-click behavior, or entirely disable gestures without pulling in CSS frameworks.
- **React 18/19 ready** – Zero dependency on legacy lifecycles, works in SPA or app-router setups, SSR-safe wrapper (hook throws if used outside the provider so bugs show up fast).

---

## Installation

```bash
npm install @aiko-lab/sweep
# or
yarn add @aiko-lab/sweep
# or
pnpm add @aiko-lab/sweep
```

Peer deps: `react` and `react-dom` ≥ 18 (the library is authored against 19). No CSS files to import.

---

## Quick start

1. **Wrap your root**

```tsx
import { SweepWrapper } from "@aiko-lab/sweep";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SweepWrapper
      backgroundColor="rgb(12, 12, 12)" // panel background
      foregroundColor="black" // app background when sheet is open
    >
      {children}
    </SweepWrapper>
  );
}
```

2. **Summon Sweep anywhere**

```tsx
import { useSweep } from "@aiko-lab/sweep";

export function CheckoutButton() {
  const sweep = useSweep(
    {
      blur: true,
      clickBodyToClose: true,
      snapPoint: 96, // px threshold before drag-to-close fires
    },
    {
      onToggle: (isOpen) => console.log("Sheet open?", isOpen),
      onSwitch: (prev, next) => console.log("Swapped", prev, "→", next),
    }
  );

  return (
    <button
      onClick={() =>
        sweep.open(
          <CheckoutSheet key="checkout">
            {/* Important: provide a stable key for switch animations */}
          </CheckoutSheet>
        )
      }
    >
      Review order
    </button>
  );
}
```

3. **Close or replace**

```tsx
const sheet = useSweep();

sheet.open(<Success key="success" />);
sheet.close();
```

Each call to `open` with a new keyed element animates from the old sheet to the new one. Calling `open` with the same key is ignored to avoid flicker.

---

## API reference

### `SweepWrapper`

Wrap **exactly once** as high in the tree as possible (typically `_app.tsx`, `layout.tsx`, or `App`). It provides context, handles layering, and paints the overlay behind your UI.

| Prop                  | Type        | Default     | Description                                                                           |
| --------------------- | ----------- | ----------- | ------------------------------------------------------------------------------------- |
| `children`            | `ReactNode` | —           | Your application. Gets re-parented under a transformable container.                   |
| `backgroundColor`     | `string`    | `undefined` | Color for the **overlay** (panel area). Useful for subtle scrims (`rgba(0,0,0,.65)`). |
| `foregroundColor`     | `string`    | `undefined` | Color for the **app surface** while the sheet is open (helps create contrast).        |
| `backgroundClassName` | `string`    | `undefined` | Tailwind / CSS class applied to the overlay.                                          |
| `foregroundClassName` | `string`    | `undefined` | Tailwind / CSS class applied to the app container.                                    |

When `clickBodyToClose` is enabled at the hook level, clicking the foreground (body) triggers `close` automatically.

### `useSweep(config?, callbacks?)`

Returns `{ open(element: ReactNode), close(): void }`. Must be called inside a descendant of `SweepWrapper`.

#### Config (all optional)

| Key                  | Type      | Default | Notes                                                                  |
| -------------------- | --------- | ------- | ---------------------------------------------------------------------- |
| `blur`               | `boolean` | `false` | Adds a 10px blur during open/close and content switches.               |
| `disableTouchEvents` | `boolean` | `false` | Turns off drag-to-close so only programmatic control remains.          |
| `blockBodyClick`     | `boolean` | `false` | Disables pointer events on the foreground (underlying app) while open. |
| `clickBodyToClose`   | `boolean` | `false` | Tap anywhere outside the sheet to close.                               |
| `borderRadius`       | `number`  | `20`    | Radius applied to the app container when the sheet is revealed.        |
| `snapPoint`          | `number`  | `50`    | Pixel offset required before releasing a drag closes the sheet.        |

Each `open` call captures the config at call time, so you can vary behavior per sheet (e.g., disable gestures for a payment flow but allow them for a menu).

#### Callbacks

| Callback   | Signature                                    | When it fires                                                        |
| ---------- | -------------------------------------------- | -------------------------------------------------------------------- |
| `onToggle` | `(isOpen: boolean) => void`                  | Every time the sheet opens or closes (after React state flips).      |
| `onSwitch` | `(prev: ReactNode, next: ReactNode) => void` | Right before a content swap animation triggers. Great for analytics. |

#### Methods

| Method                  | Description                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `open(node: ReactNode)` | Mounts the node inside the sheet. Give each node a **stable `key`** so Sweep can tell when you intend to switch vs reuse. |
| `close()`               | Starts the closing animation and unmounts the sheet content afterward.                                                    |

---

## Styling & theming

- **Colors** – Prefer plain CSS colors via `backgroundColor`/`foregroundColor` for simple setups. If you already use Tailwind, pass `backgroundClassName="bg-black/80 backdrop-blur"` and `foregroundClassName="bg-gray-950 text-white"`.
- **Layout** – The sheet itself renders exactly what you pass. Bring your own padding, rounded corners, shadows, etc.
- **Responsive behavior** – Combine `snapPoint` with responsive logic: `const snap = window.innerHeight * 0.25` to mimic native iOS sheets, or disable touch events on desktop entirely.
- **Scroll locking** – `usePreventScroll` kicks in automatically when the sheet is open. Inputs keep focus on iOS/Safari thanks to the borrowed Spectrum workaround; no extra config needed.

---

## Patterns & tips

- **Nested flows** – Chain `open` calls with different keys to build multi-step flows. Sweep animates between states without closing.
- **Imperative handles** – The hook returns plain functions, so you can stash them in refs or state machines easily.
- **Server components** – Only the `SweepWrapper` lives near the root; the hook itself is a client-only helper. In Next.js app router, wrap inside a client layout.
- **Accessibility** – Focus stays inside your content because the rest of the document is scroll-locked and pointer-blocked when configured. Provide focus traps if your sheet hosts forms/dialogs.
- **Performance** – Animations rely on the Web Animations API for 60fps transforms. Keep your sheet subtree small (lazy-load heavy content right before calling `open`).

---

## Local playground

The `/test` folder contains a Vite demo used to dogfood Sweep.

```bash
cd test
npm install
npm run dev
```

This runs the example shown in the GIF (multi-step sheet with Lucide icons). Point the playground to your local `src` by keeping the relative import `../../src`.

---

## Troubleshooting

- **“useMyContext must be used within a MyProvider”** – You called `useSweep` outside of `SweepWrapper`. Wrap higher or export helper components that consume the hook internally.
- **Drag dismiss feels too sensitive** – Increase `snapPoint`, or set `disableTouchEvents: true` for that sheet.
- **Need to close on route change** – Call `const sheet = useSweep(); useEffect(() => sheet.close(), [pathname]);`.
- **Animations not running in tests** – Mock `Element.animate` in your Jest/Vitest setup since JSDOM doesn’t implement it by default.

---

## You may also like

- [Aiko Lab](https://lab.ai-ko.dev/) – UI components and experiments.
- [Articles](https://article.ai-ko.dev/) – Interactive write-ups from the same author.

---

## License

MIT © [ai-ko.dev](https://www.ai-ko.dev) · Twitter [@username_aiko](https://twitter.com/username_aiko)
