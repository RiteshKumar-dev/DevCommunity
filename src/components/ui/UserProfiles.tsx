import UserProfile from './UserProfile';

const UserProfiles: React.FC = () => {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image: '/user1.jpg',
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image: '/user2.jpg',
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image: '/user3.jpg',
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image: '/user4.jpg',
    },
    {
      id: 5,
      name: 'Tyler Durden',
      designation: 'Soap Developer',
      image: '/user5.avif',
    },
    { id: 6, name: 'Dora', designation: 'The Explorer', image: '/pers.jpg' },
  ];

  return (
    <div className="relative flex items-center mb-6">
      {users.map((user, index) => (
        <div
          key={user.id}
          className="relative transform transition-transform duration-300 ease-in-out"
          style={{
            left: `${index * 8}px`, // Adjust spacing between profiles
            zIndex: users.length - index, // Higher zIndex for overlapping effect
          }}
        >
          <div className="w-8 h-8">
            <UserProfile {...user} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfiles;
