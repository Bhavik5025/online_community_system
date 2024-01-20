import React from "react";
import axios from 'axios';

const Child = ({ community, removeByName }) => {
    const { community_name, owner_email, image } = community;
    const owner = owner_email ;
    const name = community_name;

    const cancelJoinRequest = async () => {
      try {
        const studentEmail = 'mahendrafenil32@gmail.com';
  
        await axios.delete(`http://localhost:8000/rejectJoinRequest/${name}`, { student_email: studentEmail });
  
        const CommunityIdToRemove = community.community_name;
        await axios.patch(`http://localhost:8000/cancelRequest/${studentEmail}`, { communityIdToRemove : CommunityIdToRemove });
  
        removeByName(CommunityIdToRemove);
      } catch (error) {
        console.error('Error sending join request:', error);
        alert('Failed to send join request. Please try again.');
      }
    };

  return (
    <div className="relative group overflow-hidden bg-gradient-to-br from-purple-700 to-pink-500 p-4 mb-4 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 w-4/5 mx-auto">
      <div className="flex items-center space-x-4">
        <div className="overflow-hidden rounded-full w-16 h-16 group-hover:rotate-6">
          <img
            src="https://media.istockphoto.com/id/1339268212/vector/togetherness-diversity-symbol.jpg?s=612x612&w=0&k=20&c=cO4gaFriYBzD3KAWlaTWhGE5jDMD-G2ap-2vg71URqw="
            alt={name}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300 rounded-full border-4 border-white"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-gray-300">Owner: {owner}</p>
        </div>
      </div>
      <button className="absolute bottom-4 right-4 px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300" onClick = {cancelJoinRequest}>
        Cancel Request
      </button>
    </div>
  );
};

export default Child;