
import SingleGuide from "../../components/SingleGuide";

type singleGuidePageProps = {
  query: {
    id: string;
  };
};


function SingleGuidePage({query}: singleGuidePageProps) {
  return <SingleGuide id={query.id} />;
}

export default SingleGuidePage