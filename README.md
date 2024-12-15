<h1 align="center">
  <br>
  Sweep.
  <br>
  <br>
</h1>

<h4 align="center">A minimal slide-up panel built for <a href="https://react.dev/" target="_blank">React</a> ⦁ <a href="https://react.dev/" target="_blank">Live preview</a> </h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#api-preferences">API Preferences</a> •
  <a href="#license">License</a>
</p>

<h1 align="center">
</h1>
<br>

![screenshot](https://i.imgur.com/ADXVkJJ.gif)

## Key Features

- **Simple to Use:** A clean and easy-to-understand API that gets you up and running in no time.
- **Effortless Animations:** It comes with transitions for opening, closing, and switching children.
- **Built for Speed:** Lightweight and optimized for great performance, even on slower devices.

## How To Use

Install Sweep using npm:

```
npm install @aiko-lab/sweep@latest
```

Wrap your App with a SweepWrapper

```JSX
import { SweepWrapper } from "@aiko-lab/sweep";

export default function App({children}) {
  return (
    <html>
      <body>
        <SweepWrapper>
          {children}
        </SweepWrapper>
      </body>
    </html>
  );
}
```

Pass a backgroundColor and foregroundColor to the SweepWrapper component or through a ClassName.

```JSX
<SweepWrapper
  backgroundColor="hsl(0, 0%, 0%)"
  foregroundColor="hsl(0, 0%, 10%)"
>
  {children}
</SweepWrapper>
```

Use the hook to open Sweep.

```JSX
import { useSweep } from "@aiko-lab/sweep";

// Call the custom hook:
const sweep = useSweep();

// Call the open() method and pass the content as JSX:
sweep.open(<Component key={1}/>)

// And don't forget to add a custom key for each component!
```

## API preferences

### SweepWrapper

The SweepWrapper usually wraps the application.

#### Anatomy

```JSX
import { SweepWrapper } from "@aiko-lab/sweep";

...

<SweepWrapper
  backgroundColor="hsl(0, 0%, 0%)"
  foregroundColor="hsl(0, 0%, 10%)"
  backgroundColorClass="bg-black"
  foregroundColor="bg-white"
>
  {children}
</SweepWrapper>
```

#### Preferences

<table>
    <thead>
        <tr align="center">
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th width="100%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr valign="top">
            <td align="start"><code>children</code></td>
            <td align="center">ReactNode</td>
            <td align="center"><code>true</code></td>
            <td align="start">In short, your App.</td>
        </tr>
        <tr valign="top">
            <td align="start"><code>backgroundColor</code></td>
            <td align="center">String</td>
            <td align="center"><code>false</code></td>
            <td align="start">Your App's background color.</td>
        </tr>
        <tr valign="top">
            <td align="start"><code>foregroundColor</code></td>
            <td align="center">String</td>
            <td align="center"><code>false</code></td>
            <td align="start">The slide-up panel's background color.</td>
        </tr>
        <tr valign="top">
            <td align="start"><code>backgroundClassName</code></td>
            <td align="center">String</td>
            <td align="center"><code>false</code></td>
            <td align="start">In case you are using tailwindCSS you could pass the background color (App) as a className. <br> example: <code>bg-indigo-600</code></td>
        </tr>
        <tr valign="top">
            <td align="start"><code>foregroundClassName</code></td>
            <td align="center">String</td>
            <td align="center"><code>false</code></td>
             <td align="start">In case you are using tailwindCSS you could pass the background color (Panel) as a className. <br> example: <code>bg-indigo-900</code></td>
        </tr>
    </tbody>
</table>

### useSweep

The custom hook provided by Sweep..

#### Anatomy

```JSX
import { useSweep } from "@aiko-lab/sweep";

...

const sweep = useSweep({
    blur: false,
    disableTouchEvents: false,
    blockBodyClick: false,
    clickBodyToClose: false,
    borderRadius: 20,
  }, {
    onToggle: (state) => {
      console.log(state);
    },
    onSwitch: (oldChildren, newChildren) => {
      console.log(oldChildren, newChildren);
    },
});

...

sweep.open(<Component key={2} />);

...

sweep.close();
```

#### Preferences

<table>
    <thead>
          <tr align="center">
            <th>Method</th>
            <th width="50%">Parameters</th>
            <th width="50%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr valign="top">
            <td><code>open(element)</code></td>
            <td><code>element</code> : JSX or React component to display.</td>
            <td>Opens the sweep panel and displays the content.</td>
        </tr>
        <tr valign="top">
            <td><code>close()</code></td>
            <td>None</td>
            <td>Closes the sweep panel.</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr align="center">
            <th colspan=2>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th width="100%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr valign="top">
            <td align="start" rowspan=5><code>config</code></td>
            <td align="start"><code>blur</code></td>
            <td align="center">boolean</td>
            <td align="center"><code>false</code></td>
            <td align="start">Adding a 10px of blur to every animation.</td>
        </tr>
        <tr valign="top">
            <td align="start"><code>disableTouchEvents</code></td>
            <td align="center">Boolean</td>
            <td align="center"><code>false</code></td>
            <td align="start">Disable all gestures and touch-based interactions.</td>
        </tr>
        <tr valign="top">
            <td align="start"><code>blockBodyClick</code></td>
            <td align="center">Boolean</td>
            <td align="center"><code>false</code></td>
            <td align="start">Block clicks on the body when Sweep panel is open.</td>
        </tr>
        <tr valign="top">
            <td align="start"><code>clickBodyToClose</code></td>
            <td align="center">Boolean</td>
            <td align="center"><code>false</code></td>
            <td align="start">Clicking outside on the body closes the panel</td>
        </tr>
        <tr valign="top">
            <td align="start"><code>borderRadius</code></td>
            <td align="center">Number</td>
            <td align="center"><code>20</code></td>
             <td align="start">The border radius size (px) of the body when the panel is open.</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr align="center">
            <th colspan=2>Prop</th>
            <th width="50%">Parameters</th>
            <th width="50%" >Description</th>
        </tr>
    </thead>
       <tbody>
        <tr valign="top">
            <td align="start" rowspan=5><code>callbacks</code></td>
            <td align="start"><code>onToggle(state)</code></td>
            <td align="start" 2><code>element</code> : Indicates whether the panel is open or closed.</td>
            <td align="start">Triggered whenever the sweep panel's open/close.</td>
        </tr>
        <tr valign="top">
            <td align="start"><code>onSwitch(old,new)</code></td>
            <td align="start"><code>old</code> : The content of the panel before the switch.<br >
            <code>new</code> : The new content that is about to replace the old content in the panel</td>
            <td align="start">Triggered when the content inside the sweep panel switches while it is open.</td>
        </tr></tbody>
</table>

> **Note:**
> if you call the <code>open()</code> method while sweep is already open, it will automatically animate between the two as long as they are different (they have different keys).

## You may also like...

- [Aiko-lab](https://lab.ai-ko.dev/) - A bunch of UI components.
- [Articles](https://article.ai-ko.dev/) - A collection of interactive articles.

## License

MIT

---

> [ai-ko.dev](https://www.ai-ko.dev) &nbsp;&middot;&nbsp;
> Twitter [@username_aiko](https://twitter.com/username_aiko)
