import React, { useState } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

export default function App() {
  const [friendsList, setFriendsList] = useState(friends);
  const removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const remainingFriends = friendsList.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    setFriendsList(remainingFriends);
  };

    return (
      <Wrapper>
        <Title>Friends List</Title>
        {friendsList.map(friend => (
          <FriendCard
            removeFriend={removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
};
