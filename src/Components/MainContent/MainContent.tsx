import CommitmentSection from "./CommitmentSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import CustomerReviewsSection from "./CustomerReviewsSection";
import RequestQuoteSection from "./RequestQuoteSection";
import TopActionBar from "./TopActionBar";

const MainContent = () => {
  return (
    <div>
      <TopActionBar />
      <CommitmentSection />
      <WhyChooseUsSection />
      <CustomerReviewsSection />
      <RequestQuoteSection />
    </div>
  );
};

export default MainContent;
