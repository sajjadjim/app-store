import React, { use, useState } from 'react'
import Footer from '../Components/Footer/Footer'
import { AuthContext_File } from '../Provider/AuthProvider'
import { CiStar } from "react-icons/ci";
import Navbar from '../Components/Navbar/Navbar';
import { updateProfile } from 'firebase/auth';
import { FaUserCircle } from "react-icons/fa";
function UserProfile() {
  const getRandomXP = () => Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
  const { user } = use(AuthContext_File);

  const [newName, setNewName] = useState('');
  const [message, setMessage] = useState('');
  const [showUpdate, setShowUpdate] = useState(false);

  const handleUpdateProfile = async () => {
    if (!newName.trim()) {
      setMessage("Name cannot be empty.");
      return;
    }
    try {
      await updateProfile(user, { displayName: newName });
      setMessage("Profile updated successfully!");
      setShowUpdate(false);
    } catch (error) {
      console.error(error);
      setMessage("Error updating profile.");
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="max-w-md md:my-10 w-full mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-md">
         {/* Picture user */}
         <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center my-5 justify-center">
            <FaUserCircle className='md:h-20 w-auto' />
          </div>
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-gray-800 my-1">User UID: {user?.uid}</p>
              <h2 className="text-2xl font-semibold text-gray-800 my-1">
                Name: {user?.displayName || 'App Users'}
              </h2>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          {/* Profile Update UI */}
          <div className="mt-6">
            {!showUpdate ? (
              <button
                onClick={() => setShowUpdate(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
              >
                Update Profile
              </button>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Enter new name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full border p-2 rounded"
                />
                <button
                  onClick={handleUpdateProfile}
                  className="bg-green-600 text-white px-4 py-2 rounded w-full"
                >
                  Save Name
                </button>
              </div>
            )}
            {message && (
              <p className="text-center text-sm mt-2 text-green-600">{message}</p>
            )}
          </div>

          {/* XP Section */}
          <div className="mt-6 flex items-center justify-center sm:justify-start space-x-2">
            <CiStar className="text-yellow-500 w-5 h-5" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">
              XP: {getRandomXP()}
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserProfile;
