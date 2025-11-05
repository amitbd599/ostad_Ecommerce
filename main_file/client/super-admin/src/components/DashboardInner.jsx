import {
  FaArrowUp,
  FaAward,
  FaFileInvoiceDollar,
  FaRegCircleUser,
  FaUsers,
  FaWallet,
} from "react-icons/fa6";
import { IconBase } from "react-icons/lib";

const DashboardInner = () => {
  return (
    <section className='p-5'>
      <div className='row g-4'>
        <div className='col-md-4'>
          <div className='card user-card shadow-sm border-0 p-3'>
            <div className='card-body text-center'>
              <h6 className='text-secondary mb-2'>Total Users</h6>
              <h2 className='number fw-bold mb-1'>20,000</h2>
              <span className='growth text-success d-block mb-2'>+5000</span>
              <p className='text-muted small mb-0'>Last 30 days users</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card user-card shadow-sm border-0 p-3'>
            <div className='card-body text-center'>
              <h6 className='text-secondary mb-2'>Total Users</h6>
              <h2 className='number fw-bold mb-1'>20,000</h2>
              <span className='growth text-success d-block mb-2'>+5000</span>
              <p className='text-muted small mb-0'>Last 30 days users</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card user-card shadow-sm border-0 p-3'>
            <div className='card-body text-center'>
              <h6 className='text-secondary mb-2'>Total Users</h6>
              <h2 className='number fw-bold mb-1'>20,000</h2>
              <span className='growth text-success d-block mb-2'>+5000</span>
              <p className='text-muted small mb-0'>Last 30 days users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardInner;
