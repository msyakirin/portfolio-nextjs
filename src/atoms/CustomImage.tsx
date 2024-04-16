import Image from "next/image";

interface CustomImageProps {
  src: string;
  classNames?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, classNames }) => {
  return (
    <div>
      <Image src={src} alt="Image" className={classNames} />
    </div>
  );
};

export default CustomImage;
