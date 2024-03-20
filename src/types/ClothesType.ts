export type TClothes = {
  _id?: string;
  image: string;
  title: string;
  category: string;
  size: string;
  description?: string;
  price?: string;
};

export type TDonationData = {
  productCategory?: string;
  productPrice?: string;
  name?: string;
};
export type TTestimonialData = {
  name: string;
  testimonial: string;
  location: string;
  image: string;
  donationPrice: number;
  position: string;
};
export type TVolunteer = {
  name: string;
  email: string;
  location: string;
  phone: number;
  why: string;
};
