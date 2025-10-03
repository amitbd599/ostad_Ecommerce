import MasterLayout from "../layout/MasterLayout";
import Preloader from "../helper/Preloader";
import FileManager from "../components/FileManager";

const FileManagerPage = () => {
  return (
    <MasterLayout>
      {/* Preloader */}
      <Preloader />

      {/* FileManager */}
      <FileManager />
    </MasterLayout>
  );
};

export default FileManagerPage;
