/* eslint-disable react/prop-types */
import styles from "./css/Heading.module.css";

export default function Heading({
  children,
  subtext,
  fontSize,
  color,
  lineheight,
  paddingBlock,
}) {
  return (
    <div className={styles.headingLg} style={{ paddingBlock: paddingBlock }}>
      <h2
        style={{
          fontSize: `${fontSize ? `${fontSize}px` : ""}`,
          color: color ? color : "inherit",
          lineHeight: lineheight ? `${lineheight}px` : "",
        }}
      >
        {children}
      </h2>
      <p>{subtext}</p>
    </div>
  );
}
