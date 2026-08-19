import type { ImageProps } from "./Image.types"

export const Image = ({
  src, 
  alt, 
  title
} : ImageProps) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      title={title}
    />
  )
}