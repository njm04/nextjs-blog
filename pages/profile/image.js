import Image from "next/image";

const ProfileImage = () => {
  return (
    <Image
      src="/images/profile.jpg" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Neil"
    />
  );
};

export default ProfileImage;
