import SpecularButton from "../SpecularButton";

function SHinyButton({ text }: { text: string }) {
  return (
    <div>
      <SpecularButton
        size="sm"
        radius={18}
        tint="#ffffff"
        tintOpacity={0}
        blur={0}
        textColor="#f5f5f5"
        lineColor="#ffffff"
        baseColor="#525252"
        intensity={1}
        shineSize={10}
        shineFade={40}
        thickness={1}
        speed={0.35}
        followMouse
        proximity={250}
        autoAnimate={false}
        onClick={() => console.log("clicked")}
        className="capabilities-list--child"
      >
        {text}
      </SpecularButton>
    </div>
  );
}

export default SHinyButton;
