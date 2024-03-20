import AddComments from "./AddComments";
import DisplayComment from "./DisplayComment";
import TopDonation from "./TopDonation";

const Community = () => {
  return (
    <div className="lg:flex  max-w-full">
      <div className=" flex-grow p-4">
        <div>
          <img
            className="w-full max-h-[500px] object-cover"
            src="https://i.ibb.co/1rVVjWv/soundofhope.webp"
            alt=""
          />
          <h2 className="text-4xl font-bold my-4">
            Warm Thanks to Our Generous Donors
          </h2>
          <p className="text-wrap">
            At this wintry time of giving, we extend our heartfelt appreciation
            to each and every donor who has supported our cause. Your generosity
            shines bright, warming the hearts of those in need.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Donor Acknowledgements:
          </h2>

          <div>
            <h1 className="text-xl font-semibold mt-2">1 Yearly Champions:</h1>
            <p>
              Our heartfelt gratitude to those who have committed to supporting
              us year-round. Your consistent generosity fuels our efforts to
              make a lasting impact.
            </p>

            <h1 className="text-xl font-semibold mt-2">
              2 Monthly Contrubutors:
            </h1>
            <p>
              To our monthly contributors, your regular support ensures
              stability and sustains our mission through every season. Thank you
              for your ongoing commitment.
            </p>

            <h1 className="text-xl font-semibold mt-2">3 Weekly supporters:</h1>
            <p>
              We are deeply grateful to our weekly supporters who continuously
              demonstrate their dedication to our cause. Your frequent
              contributions are invaluable in driving positive change.
            </p>

            <h1 className="text-xl font-semibold mt-2">4 Event sponsors:</h1>
            <p>
              Special thanks to our event sponsors whose generosity makes our
              initiatives possible. Your support creates meaningful
              opportunities for our community to come together and make a
              difference.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mt-10 text-center">
              Add your Gratitude Comments
            </h2>
            <AddComments></AddComments>
          </div>
          <div>
            <DisplayComment />
          </div>
        </div>
      </div>
      <div className="flex  mr-4 flex-grow-0  lg:w-1/3 p-4">
        <TopDonation />
      </div>
    </div>
  );
};

export default Community;
