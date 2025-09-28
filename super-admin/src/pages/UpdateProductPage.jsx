import MasterLayout from "../layout/MasterLayout";
import Preloader from "../helper/Preloader";
import UpdateProduct from "../components/UpdateProduct";

const UpdateProductPage = () => {
  return (
    <MasterLayout>
      {/* Preloader */}
      <Preloader />

      {/* UpdateProduct */}
      <UpdateProduct />
    </MasterLayout>
  );
};

export default UpdateProductPage;
