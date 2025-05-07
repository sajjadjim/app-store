import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router';
import { FaArrowAltCircleLeft } from "react-icons/fa";
function AppDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const [app, setApp] = useState({});
  const [isInstalled, setIsInstalled] = useState(false);
  const [hasInstalledOnce, setHasInstalledOnce] = useState(false);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [reviewInput, setReviewInput] = useState({ user: '', rating: '', comment: '' });

  useEffect(() => {
    const newApp = data.find((singleApp) => singleApp.id == id);
    setApp(newApp);
  }, [data, id]);

  const handleInstallClick = () => {
    setIsInstalled((prev) => {
      const newStatus = !prev;
      if (newStatus) setHasInstalledOnce(true); // Track install permanently
      return newStatus;
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      user: reviewInput.user,
      rating: parseFloat(reviewInput.rating),
      comment: reviewInput.comment,
    };

    setApp((prev) => ({
      ...prev,
      reviews: [...(prev.reviews || []), newReview],
    }));

    setHasReviewed(true);
    setReviewInput({ user: '', rating: '', comment: '' });
  };

  return (
    <div>
      <main className="w-10/12 mx-auto my-10">
      <Link to='/app'><FaArrowAltCircleLeft className='md:block hidden h-10 w-auto'/></Link>
        {/* <p>{app.name}</p> */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          <img
            src={app.thumbnail}
            alt={`${app.name} banner`}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <img
                src={app.banner}
                alt={`${app.name} thumbnail`}
                className="w-20 h-20 rounded-xl"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{app.name}</h2>
                <p className="text-sm text-gray-500">by {app.developer}</p>
                <p className="text-sm text-gray-400">Category: {app.category}</p>
              </div>
              <button
                onClick={handleInstallClick}
                className={`px-4 py-2 rounded-sm text-white ${
                  isInstalled ? 'bg-red-600 hover:bg-red-700' : 'bg-green-700 hover:bg-green-800'
                }`}
              >
                {isInstalled ? 'Uninstall' : 'Install'}
              </button>
            </div>

            <div className="mt-4">
              <p className="text-gray-700">{app.description}</p>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Array.isArray(app.features) && app.features.length > 0 ? (
                app.features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))
              ) : (
                <p className="text-gray-500">No features listed.</p>
              )}
            </div>

            <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
              <span>⭐ {app.rating} / 5</span>
              <span>{app.downloads}+ Downloads</span>
            </div>

            {/* --- Review Form --- */}
            {hasInstalledOnce && !hasReviewed && (
              <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={reviewInput.user}
                    onChange={(e) => setReviewInput({ ...reviewInput, user: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="Rating (1 to 5)"
                    min="1"
                    max="5"
                    value={reviewInput.rating}
                    onChange={(e) => setReviewInput({ ...reviewInput, rating: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <textarea
                    placeholder="Your comment"
                    value={reviewInput.comment}
                    onChange={(e) => setReviewInput({ ...reviewInput, comment: e.target.value })}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}

            {/* --- Display Reviews --- */}
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-semibold">User Reviews</h3>
              {Array.isArray(app.reviews) && app.reviews.length > 0 ? (
                app.reviews.map((review, index) => (
                  <div key={index} className="mt-2">
                    <p className="font-medium">Name : {review.user}</p>
                    <p className="text-sm text-yellow-500">Rating: {review.rating} / 5</p>
                    <p className="text-gray-600">comment : {review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews available.</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppDetails;
