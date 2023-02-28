import styles from "./Avatar.module.css";

// O valor default de hasBorder eh true
export function Avatar({ hasBorder = true, src }) {
  // se a propriedade nao for nem enviada, ela vai ser diferente de false
  // const hasBorder = props.hasBorder !== false;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
