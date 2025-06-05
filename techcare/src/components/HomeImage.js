import Image from 'react-bootstrap/Image';

function HomeImage() {
  return (
    <div className="container position-relative">
      <Image src="images/computer_board.jpg" className="rounded-4 w-100 border shadow-lg" alt="computer_board" />
      <div className="position-absolute bottom-0 start-20 text-white m-5 p-3 display-4 rounded-4 shadow-lg fw-bold" style={{ backgroundColor: '#1b2f36' }}>
        Professional Tech Repair
      </div>
      <p className="text-white small position-absolute bottom-0 ms-5 ps-3">Fast and reliable service for all your tech</p>
    </div>
  );
}

export default HomeImage;