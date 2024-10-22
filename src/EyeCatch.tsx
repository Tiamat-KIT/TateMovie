import { AbsoluteFill, Img, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {interpolateStyles, makeTransform, translateY} from "@remotion/animation-utils"

export default function EyeCatch() {

    const FlexCenterStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    
    const value = spring({
        frame,
        fps,
        delay: 45,
        config: {
            stiffness: 100,
        },
    });
    

    const transition = interpolateStyles(
        spring({
            frame,
            fps,
            from: 0,
            to: 240
        }),
        [0,180,240],
        [{
            transform: makeTransform([translateY(800)])
        },
        {
            transform: makeTransform([translateY(-30)])
        },
        {
            transform: makeTransform([translateY(50)])
        }]
    )


    return (
        <AbsoluteFill style={{
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(198,198,198,1) 100%)"
        }}>
            <Sequence name="Logo" from={0}
                style={FlexCenterStyle}>
                <span style={{
                    ...FlexCenterStyle,
                    backgroundImage: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(134,0,255,1) 100%)",
                    padding: "0.8rem",
                    borderRadius: "999px",
                    ...transition
                }}>
                    <span style={{
                        ...FlexCenterStyle,
                        padding: "1.6rem",
                        backgroundColor: "white",
                        borderRadius: "999px"
                    }}>
                        <Img 
                            style={{
                                height: "38vh",
                                borderRadius: "999px",
                                
                            }}
                            src="https://pbs.twimg.com/profile_images/1367786796096970753/qE4p3zW8_400x400.jpg"
                        />
                    </span>
                </span>
                
                <h1 style={{
                    fontSize: "5rem",
                    fontFamily: "cursive",
                    transform: `scale(${value})`,
                }}>Tourism Project</h1>
            </Sequence>

        </AbsoluteFill>
    )
}