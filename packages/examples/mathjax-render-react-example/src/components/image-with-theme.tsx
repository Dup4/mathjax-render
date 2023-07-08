import Image from "next/legacy/image";
import { useTheme } from "next-themes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ImageWithTheme(props: any) {
  const { theme } = useTheme();

  return (
    <Image
      alt={props.alt}
      src={theme === "light" ? props.light : props.dark}
      {...props}
    />
  );
}

export { ImageWithTheme };
