import React, { useState } from "react";

const FileManagerPopup = () => {
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
  return (
    <div>
      <div className='dashboard-card'>
        <div className=' p-5'>
          <h4 className='mb-3'>Image Gallery</h4>
          <div className='row g-3'>
            {images.map((img) => (
              <div className='col-2' key={img.id}>
                <div className='card shadow-sm position-relative'>
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
                    <p className='small text-truncate mb-0'>{img.name}</p>
                  </div>
                </div>
              </div>
            ))}

            {images.length === 0 && (
              <p className='text-muted text-center'>No images available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileManagerPopup;
