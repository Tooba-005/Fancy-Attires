import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export function ImageWithFallback({ src, alt, ...props }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed ? "/images/image-fallback.svg" : src}
      alt={alt}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
