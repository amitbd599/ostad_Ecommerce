import MasterLayout from "../layout/MasterLayout";
import Preloader from "../helper/Preloader";
import AllOrders from "../components/AllOrders";

const FileManagerPage = () => {
  return (
    <MasterLayout>
      {/* Preloader */}
      <Preloader />

      {/* AllOrders */}
      <AllOrders />
    </MasterLayout>
  );
};

export default FileManagerPage;
