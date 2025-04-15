import CommitmentSection from "./WePromiseSection/WePromiseSection";
import WhyChooseUsSection from "./WhyChooseUsSection/WhyChooseUsSection";
import CustomerReviewsSection from "./CustomerReviewsSection/CustomerReviewsSection";
import RequestQuoteSection from "./RequestQuoteSection/RequestQuoteSection";
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
