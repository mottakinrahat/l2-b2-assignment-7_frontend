const Footer = () => {
  return (
    <div className="bg-black mt-20 max w-full text-white">
      <div className=" flex justify-evenly items-center py-20">
        <div>
          <img src="https://i.ibb.co/ykLXK2k/1.png" className="h-40 sticky" alt="" />
        </div>
        <div>
          <h2>Extra Links</h2>
          <ul>
            <li>About</li>
            <li>Contacts</li>
            <li>Typography</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h2>Documents</h2>
          <ul>
            <li>News</li>
            <li>Testimonials</li>
            <li>Services</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="text-center">
        <h2>© WINTERWardRobe. All Right Reserved 2020.</h2>
      </div>
    </div>
  );
};

export default Footer;
