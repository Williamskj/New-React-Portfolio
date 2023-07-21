const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/keyann-williams-ab714720a/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/keyann.williams.9"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
