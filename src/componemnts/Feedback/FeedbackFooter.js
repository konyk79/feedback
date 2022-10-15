import {
  FacebookIcon,
  Footer,
  LinkedinIcon,
  PinterestIcon,
  Smile1,
  Smile2,
  Smile3,
  SocialLinks,
  TwitterIcon,
} from "./FeedbackFooter.styled";

const FeedbackFooter = () => {
  return (
    <Footer>
      <SocialLinks>
        <LinkedinIcon className="fa fa-linkedin"></LinkedinIcon>
        <TwitterIcon className="fa fa-twitter"></TwitterIcon>
        <FacebookIcon className="fa fa-facebook"></FacebookIcon>
        <PinterestIcon className="fa fa-pinterest-p"></PinterestIcon>
      </SocialLinks>
      <Smile1 />
      <Smile2 />
      <Smile3 />
    </Footer>
  );
};

export default FeedbackFooter;
