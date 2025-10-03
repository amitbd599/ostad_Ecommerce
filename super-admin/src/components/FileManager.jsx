import { useState } from "react";
import { Link } from "react-router-dom";

const FileManager = () => {
  const [files, setFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Append new files to existing
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  // Remove file
  const handleRemove = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const [images, setImages] = useState([
    {
      id: 1,
      name: "Image 1",
      url: "https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7075.jpg?t=st=1759498647~exp=1759502247~hmac=57a4712b22c5a4a169b6590fad079602fd961fc6c0daf95384fa6c7d578cf961&w=1480",
    },
    { id: 2, name: "Image 2", url: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Image 3", url: "https://via.placeholder.com/300x200" },
    { id: 4, name: "Image 4", url: "https://via.placeholder.com/300x200" },
  ]);

  // Remove image by ID
  const handleDelete = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo  overflow-hidden'>
        <div className='avatar-upload p-5'>
          <h2>Supper Admin</h2>
          <h5>File Manager</h5>
        </div>
      </div>
      {/* Cover Photo End */}
      <div className='dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--150'>
        {/* Profile Content Start */}
        <div className='profile'>
          <div className='row gy-4'>
            <div className='col-12'>
              <div className='profile-info'>
                <div className='container my-5 p-4 border rounded shadow-sm bg-white'>
                  <h4 className='mb-3'>Upload Files</h4>

                  {/* Upload Input */}
                  <div className='mb-3'>
                    <input
                      type='file'
                      className='form-control'
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>

                  {/* Preview Section */}
                  {files.length > 0 && (
                    <div className='mt-4'>
                      <h6 className='fw-bold mb-3'>Preview:</h6>
                      <div className='row g-3'>
                        {files.map((file, index) => {
                          const isImage = file.type.startsWith("image/");
                          const fileUrl = URL.createObjectURL(file);

                          return (
                            <div
                              key={index}
                              className='col-md-3 col-sm-4 col-6 d-flex flex-column align-items-center'
                            >
                              {/* File Preview */}
                              {isImage ? (
                                <img
                                  src={fileUrl}
                                  alt={file.name}
                                  className='img-thumbnail mb-2'
                                  style={{
                                    height: "120px",
                                    objectFit: "cover",
                                  }}
                                />
                              ) : (
                                <div className='bg-light border rounded p-3 text-center mb-2 w-100'>
                                  <i className='bi bi-file-earmark-text fs-2 text-secondary'></i>
                                  <p className='small text-truncate mb-0'>
                                    {file.name}
                                  </p>
                                </div>
                              )}

                              {/* File name + remove button */}
                              <div className='text-center'>
                                <p
                                  className='small mb-1 text-truncate'
                                  style={{ maxWidth: "120px" }}
                                >
                                  {file.name}
                                </p>
                                <button
                                  className='btn btn-sm btn-danger'
                                  onClick={() => handleRemove(index)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className='dashboard-card'>
                <div className=' p-5'>
                  <h4 className='mb-3'>Image Gallery</h4>
                  <div className='row g-3'>
                    {images.map((img) => (
                      <div className='col-2' key={img.id}>
                        <div className='card shadow-sm position-relative'>
                          {/* Delete button */}
                          <button
                            className='btn btn-sm btn-danger position-absolute top-0 end-0 m-1 rounded-circle'
                            onClick={() => handleDelete(img.id)}
                          >
                            &times;
                          </button>

                          {/* Image */}
                          <img
                            src={img.url}
                            alt={img.name}
                            className='card-img-top'
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />

                          {/* Card body */}
                          <div className='card-body p-2 text-center'>
                            <p className='small text-truncate mb-0'>
                              {img.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {images.length === 0 && (
                      <p className='text-muted text-center'>
                        No images available.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Content End */}
      </div>
    </>
  );
};

export default FileManager;
