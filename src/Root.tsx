import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import EyeCatch from "./EyeCatch";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HelloWorld"
        component={EyeCatch}
        durationInFrames={150}
        fps={60}
        width={900}
        height={1500}
      />
    </>
  );
};
