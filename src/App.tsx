import { SylvaHero } from "@designcodeio/threeui";

// The package's SylvaHero ships the Living Green world only and has no `variant`
// prop in its types; it is passed through as configured and is ignored by the frame.
const config = {
  variant: "living-green",
  headingFont: "lexend",
  bodyFont: "lexend",
  headingWeight: "300",
  bodyWeight: "300",
  primaryColor: "#ffffff",
  headingSize: 63,
  bodySize: 16.5,
  headingLetterSpacing: -0.006,
};

export function App() {
  return (
    <div className="shader-frame">
      <SylvaHero {...config} />
    </div>
  );
}

export default App;
