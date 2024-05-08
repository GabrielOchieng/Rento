"use client";

import { useState } from "react";
import axios from "axios";
// Replace with your actual API route URL
const CREATE_HOUSE_URL = "http://localhost:5000/api/houses";

const HouseForm = () => {
  const [landlord, setLandlord] = useState(""); // Assuming you have landlord data
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [estate, setEstate] = useState("");
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [rentPrice, setRentPrice] = useState(0);
  const [photos, setPhotos] = useState([]); // Array of image URLs
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const houseData = {
      landlord,
      street,
      town,
      estate,
      address,
      propertyType,
      bedrooms,
      bathrooms,
      rentPrice,
      photos,
      description,

      contactInfo,
    };

    try {
      const response = await axios.post(CREATE_HOUSE_URL, houseData);
      console.log("House created successfully:", response.data);
      console.log(houseData);
      // Handle successful house creation (e.g., redirect to confirmation page)
    } catch (error) {
      console.error("House creation error:", error.response.data);
      // Handle creation errors (e.g., display error messages to user)
    }
  };

  // Handle individual form field updates (similar for other fields)
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col  gap-3 w-full bg-gray-300">
      <div className="pt-4">
        <h1 className="text-3xl font-bold text-center ">Add Your Property</h1>
      </div>
      <div>
        <form className="space-y-4 w-[90%] mx-auto " onSubmit={handleSubmit}>
          {/* Address Section */}
          <h2>Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="town"
                className="block text-sm font-medium text-gray-700"
              >
                Town
              </label>
              <input
                type="text"
                id="town"
                name="town"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setTown(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="estate"
                className="block text-sm font-medium text-gray-700"
              >
                Estate (Optional)
              </label>
              <input
                type="text"
                id="estate"
                name="estate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setEstate(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700"
              >
                Zipcode
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label
              htmlFor="propertyType"
              className="block text-sm font-medium text-gray-700"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Bedsitter">Bedsitter</option>
              <option value="Single">Single</option>
              <option value="OneBedroom">One Bedroom</option>
              <option value="TwoBedroom">Two Bedroom</option>
              <option value="ThreeBedroom">Three Bedroom</option>
              <option value="Home">Home</option>
            </select>
          </div>

          {/* Bedrooms and Bathrooms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="bedrooms"
                className="block text-sm font-medium text-gray-700"
              >
                Bedrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="bathrooms"
                className="block text-sm font-medium text-gray-700"
              >
                Bathrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="rentPrice"
                className="block text-sm font-medium text-gray-700"
              >
                Rent Price
              </label>
              <input
                type="number"
                id="rentPrice"
                name="rentPrice"
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setRentPrice(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="contactInfo"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <input
                type="string"
                id="contactInfo"
                name="contactInfo"
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setContactInfo(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  //   onChange={handlePhotoChange}
                  //   className="hidden"
                />
              </div>
            </div>

            <div className="my-5 ">
              <button
                type="submit"
                className="w-full  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Add Property
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HouseForm;